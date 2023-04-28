---
title: Building a Web Server in Golang
description: Web Server in Golang
date: '2023-4-28'
categories:
    - Golang
    - webserver
published: true
---

## Building a web server in Golang

```go
package main

import (
    "fmt"
    "log"
    "net/http"
)
```
Define a handler function to handle incoming requests:

```go
func handler(w http.ResponseWriter, r *http.Request) {
    // Get the requested URL path
    path := r.URL.Path

    // Write the response based on the requested path
    switch path {
    case "/":
        fmt.Fprintf(w, "Welcome to my website!")
    case "/about":
        fmt.Fprintf(w, "About me!")
    default:
        fmt.Fprintf(w, "404 Not Found")
    }
}

```

Create the main function to start the server:

```go
func main() {
    // Define the port to listen on
    port := ":8080"

    // Register the handler function
    http.HandleFunc("/", handler)

    // Start the server
    log.Printf("Server listening on port %s", port)
    log.Fatal(http.ListenAndServe(port, nil))
}

```
This example creates a simple web server that listens on port 8080 and returns a response based on the requested URL path. The http.HandleFunc() function registers the handler() function to handle all incoming requests.

To run the server, simply run the main() function. Once the server is running, you can access it by visiting http://localhost:8080 in your web browser.


