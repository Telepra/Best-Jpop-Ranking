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
  return `<h1 class="svelte-igws5l" data-svelte-h="svelte-1v88s7s">Queen Bee</h1> <div class="container svelte-igws5l" style="position:relative; left: 80px;" data-svelte-h="svelte-1nozp2j"><iframe width="560" height="315" src="https://www.youtube.com/embed/KhzP7Qv0YlQ" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen class="svelte-igws5l"></iframe> <div class="text svelte-igws5l"><p class="svelte-igws5l">Queen Bee, a standout Japanese rock band, has made their mark with a distinctive blend of rock, pop, and funk influences that energizes their music and captivates audiences. Their hit tracks &quot;Mephisto&quot; and &quot;Fire&quot; have been standout successes, showcasing their ability to seamlessly merge catchy melodies with intense arrangements in &quot;Mephisto,&quot; and delivering infectious rhythm and spirited vocals in &quot;Fire.&quot; These songs not only highlight their musical range but also their skill in crafting emotionally resonant compositions. Queen Bee&#39;s live performances are equally captivating, driven by their dynamic stage presence and genuine connection with the audience. With a growing fanbase, Queen Bee&#39;s reputation continues to expand, solidifying their status as a prominent force in the Japanese rock scene.</p></div> </div>`;
});
export {
  Page as default
};
