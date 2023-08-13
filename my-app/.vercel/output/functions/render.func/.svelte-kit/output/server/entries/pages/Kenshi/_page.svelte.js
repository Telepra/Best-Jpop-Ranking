import { c as create_ssr_component } from "../../../chunks/ssr.js";
const _page_svelte_svelte_type_style_lang = "";
const css = {
  code: `h1.svelte-igws5l{text-align:center;margin-top:2%\r
    }.container.svelte-igws5l{width:100%;margin-left:50px;margin-top:5%\r
    }iframe.svelte-igws5l{width:35%;float:left}.text.svelte-igws5l{width:60%;float:right\r
    }p.svelte-igws5l{max-width:70%}.svelte-igws5l{font-family:'Roboto Condensed', sans-serif;color:white\r
    }:root{background-image:url("../bg.jpg");background-size:cover}`,
  map: null
};
const Page = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  $$result.css.add(css);
  return `<h1 class="svelte-igws5l" data-svelte-h="svelte-d3q79q">Kenshi Yonezu</h1> <div class="container svelte-igws5l" style="position:relative; left: 80px;" data-svelte-h="svelte-1woezef"><iframe width="560" height="315" src="https://www.youtube.com/embed/SX_ViT4Ra7k" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen class="svelte-igws5l"></iframe> <div class="text svelte-igws5l"><p class="svelte-igws5l">Kenshi Yonezu, a prominent figure in the Japanese music scene, has made a significant impact with his versatile sound and captivating performances. His hit tracks, &quot;Lemon&quot; and &quot;Kick Back,&quot; stand as testament to his musical prowess. &quot;Lemon&quot; showcases Yonezu&#39;s ability to craft emotionally resonant ballads, with heartfelt lyrics and a poignant melody that struck a chord with listeners. &quot;Kick Back,&quot; on the other hand, demonstrates his versatility with a more upbeat and energetic style, blending his signature sound with contemporary elements. Both songs highlight Yonezu&#39;s songwriting prowess and his knack for creating music that resonates deeply with audiences. With an ever-growing fanbase, Kenshi Yonezu&#39;s influence continues to expand, solidifying his position as a celebrated and innovative force in Japanese music.</p></div> </div>`;
});
export {
  Page as default
};
