

export const index = 10;
let component_cache;
export const component = async () => component_cache ??= (await import('../entries/pages/Uru/_page.svelte.js')).default;
export const imports = ["_app/immutable/nodes/10.f041c2aa.js","_app/immutable/chunks/scheduler.e108d1fd.js","_app/immutable/chunks/index.0719bd3d.js"];
export const stylesheets = ["_app/immutable/assets/10.96f4326c.css"];
export const fonts = [];
