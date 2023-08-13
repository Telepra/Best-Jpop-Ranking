

export const index = 5;
let component_cache;
export const component = async () => component_cache ??= (await import('../entries/pages/Fujii/_page.svelte.js')).default;
export const imports = ["_app/immutable/nodes/5.239a4cb6.js","_app/immutable/chunks/scheduler.e108d1fd.js","_app/immutable/chunks/index.0719bd3d.js"];
export const stylesheets = ["_app/immutable/assets/3.2896ad28.css"];
export const fonts = [];
