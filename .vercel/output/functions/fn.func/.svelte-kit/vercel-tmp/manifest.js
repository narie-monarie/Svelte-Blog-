export const manifest = {
	appDir: "_app",
	appPath: "_app",
	assets: new Set(["favicon.png"]),
	mimeTypes: {".png":"image/png"},
	_: {
		client: {"start":"_app/immutable/entry/start.bcf3df83.js","app":"_app/immutable/entry/app.154267d3.js","imports":["_app/immutable/entry/start.bcf3df83.js","_app/immutable/chunks/index.bd770e55.js","_app/immutable/chunks/singletons.cfafade7.js","_app/immutable/chunks/index.633d3211.js","_app/immutable/chunks/control.e7f5239e.js","_app/immutable/entry/app.154267d3.js","_app/immutable/chunks/preload-helper.41c905a7.js","_app/immutable/chunks/index.bd770e55.js"],"stylesheets":[],"fonts":[]},
		nodes: [
			() => import('../output/server/nodes/0.js'),
			() => import('../output/server/nodes/1.js')
		],
		routes: [
			
		],
		matchers: async () => {
			
			return {  };
		}
	}
};
