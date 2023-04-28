---
title: First Post
description: Web Server in C++
date: '2023-4-28'
categories:
    - C++
    - webserver
published: true
---

## Build a web Server in C++

#### Creating a web server in C++ involves several steps. Here is a simple example to get you started:

1. Include the necessary header files:

```cpp
#include <iostream>
#include <fstream>
#include <sstream>
#include <string>
#include <cstring>
#include <cstdlib>
#include <cstdio>
#include <unistd.h>
#include <sys/socket.h>
#include <netinet/in.h>
#include <arpa/inet.h>
```

2. Create a function to handle incoming requests

```cpp
void handle_request(int client_socket) {
    // Read the request message from the client
    char buffer[1024] = {0};
    read(client_socket, buffer, 1024);
    
    // Parse the request message to get the requested file name
    std::istringstream iss(buffer);
    std::string request_type, file_name;
    iss >> request_type >> file_name;

    // Open the requested file
    std::ifstream file(file_name.c_str());

    // If the file is not found, return a 404 error
    if (!file.good()) {
        std::string response = "HTTP/1.1 404 Not Found\r\n\r\n";
        write(client_socket, response.c_str(), response.length());
        return;
    }

    // If the file is found, return its contents
    std::stringstream file_contents;
    file_contents << file.rdbuf();
    std::string response = "HTTP/1.1 200 OK\r\n\r\n" + file_contents.str();
    write(client_socket, response.c_str(), response.length());
}

```

3. Create the main function to listen for incoming connections:

```cpp
int main() {
    // Create a socket for the server
    int server_socket = socket(AF_INET, SOCK_STREAM, 0);

    // Bind the socket to a port
    struct sockaddr_in server_address;
    server_address.sin_family = AF_INET;
    server_address.sin_addr.s_addr = INADDR_ANY;
    server_address.sin_port = htons(8080);
    bind(server_socket, (struct sockaddr *)&server_address, sizeof(server_address));

    // Listen for incoming connections
    listen(server_socket, 5);

    // Accept incoming connections and handle them
    while (true) {
        struct sockaddr_in client_address;
        socklen_t client_address_len = sizeof(client_address);
        int client_socket = accept(server_socket, (struct sockaddr *)&client_address, &client_address_len);
        handle_request(client_socket);
        close(client_socket);
    }

    // Close the server socket
    close(server_socket);

    return 0;
}

```
