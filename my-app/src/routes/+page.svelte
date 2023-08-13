<script>
    import Uru from "$lib/images/Uru.webp";
    import Lisa from "$lib/images/Lisa.jpg";
    import Aimer from "$lib/images/Aimer.jpg";
    import Ado from "$lib/images/Ado.jpg";
    import Fuji from "$lib/images/Fuji.jpg";
    import Queen from "$lib/images/Queen-Bee.jpg";
    import Kenshi from "$lib/images/Kenshi.jpg";
    import Yoasobi from "$lib/images/Yoasobi.jpg";
    import Myth from "$lib/images/Myth.webp";
</script>
<div class="title">
    <h1 class=bigTitle>Best Jpop Groups in the Business</h1>
    <p>and you can't tell me otherwise</p>
</div>
<ol class="ranking-row">
    <div>
        <a href="/Uru">
            <li id="Uru">Uru</li>
            <img alt="The singer Uru" src={Uru}/>
        </a>
    </div>
    <div>    
        <a href="/LISA">        
            <li id="Lisa">Lisa</li>
            <img alt="The singer Lisa" src={Lisa}/>
        </a>
    </div>
    <div>
        <a href="/Aimer">        
            <li id="Aimer">Aimer</li>
            <img alt="The singer Aimer" src={Aimer}/>
        </a>
    </div>
</ol>
<ol class="ranking-row">    
    <div>
        <a href="/Ado">        
            <li value="4" id="Ado">Ado</li>
            <img alt="The singer Ado" src={Ado}/>
        </a>
    </div>
    <div>
        <a href="/Fujii">        
            <li id="Fuji">Fuji Kaze</li>
            <img alt="The singer Fuji Kaze" src={Fuji}/>
        </a>
    </div>
    <div>
        <a href="/Queen">        
            <li id="Queen">Queen Bee</li>
            <img alt="The Jpop group Queen Bee" src={Queen}/>
        </a>
    </div>
    
</ol>
<ol class="ranking-row">
    <div>
        <a href="/Kenshi">        
            <li value="7" id="Kenshi">Kenshi Yonezu</li>
            <img alt="The singer Kenshi Yonezu" src={Kenshi}/>
        </a>
    </div>
    <div>
        <a href="/Yoasobi">        
            <li id="Yoasobi">Yoasobi</li>
            <img alt="The Jpop group Yoasobi" src={Yoasobi}/>
        </a>
    </div>
     <div>
        <a href="/Myth">        
            <li id="Myth">Myth and Roid</li>
            <img alt="The Jpop group Myth and Roid" src={Myth}/>
        </a>
     </div>
    
</ol>
<style>
    .title{
        text-align: center;
        margin-top: 30px;
    }
    .ranking-row{
        display: flex;
        justify-content: space-around;
        margin-bottom: 100px;
        margin-top: 80px
    }
    * {
        font-family: 'Roboto Condensed', sans-serif;
        color: white
    }
    :global(body){
        background-image: url("bg.jpg");
        background-size: cover;
    }
</style>