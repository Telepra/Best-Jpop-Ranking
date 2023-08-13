

export const index = 8;
let component_cache;
export const component = async () => component_cache ??= (await import('../entries/pages/Myth/_page.svelte.js')).default;
export const imports = ["_app/immutable/nodes/8.066b6af0.js","_app/immutable/chunks/scheduler.e108d1fd.js","_app/immutable/chunks/index.0719bd3d.js"];
export const stylesheets = ["_app/immutable/assets/3.2896ad28.css"];
export const fonts = [];
