

export const index = 4;
let component_cache;
export const component = async () => component_cache ??= (await import('../entries/pages/Aimer/_page.svelte.js')).default;
export const imports = ["_app/immutable/nodes/4.dd5d594d.js","_app/immutable/chunks/scheduler.e108d1fd.js","_app/immutable/chunks/index.0719bd3d.js"];
export const stylesheets = ["_app/immutable/assets/3.2896ad28.css"];
export const fonts = [];
