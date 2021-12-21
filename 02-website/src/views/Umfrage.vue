<template>
    <div id="test" class="overlay js-umfrage"
         style="background-image:url(images/danke.gif); background-position:center center; background-repeat:no-repeat;"></div>
    <div id="test02" class="overlay js-umfrage-sr"
         @click="openSROverlay"
         :class="{'open':state.overlayOpened}"
         style="background-image:url(images/danke-sr.gif); background-position:center center; background-repeat:no-repeat;"></div>

  <article id="umfrage" class="is-active">
        <h2 class="major"><span class="stxt">Die</span> Umfrage</h2>
        <h3>der Throughste ist?</h3>
        <div style="position:relative"><img src="images/cat.gif"
                                            style="position:relative; width:110px; border:1px solid #fff; border-radius:100%; height:110px; background-color:#fff; float: right; margin-top: -120px; margin-bottom: 20px;"
                                            alt=""/></div>
        <div style="position:relative; overflow: hidden; width:100%;">
            <ul class="js_random_umfrage random_umfrage_list">
                <li><a @click="openSROverlay">FF</a></li>
                <li><a @click="openSROverlay">CR</a></li>
                <li><a @click="openSROverlay">TK</a></li>
                <li><a @click="openSROverlay">RB</a></li>
                <li><a @click="openSROverlay">CH</a></li>
                <li><a @click="openSROverlay">CB</a></li>
                <li><a @click="openSROverlay">AR</a></li>
                <li><a @click="openSROverlay">JM</a></li>
                <li><a @click="openSROverlay">TÖ</a></li>
                <li><a @click="openSROverlay">SR</a></li>
                <li><a @click="openSROverlay">CW</a></li>
                <li><a @click="openSROverlay">SE</a></li>
                <li><a @click="openSROverlay">TS</a></li>
                <li><a @click="openSROverlay">AS</a></li>
                <li><a @click="openSROverlay">SK</a></li>
                <li><a @click="openSROverlay">NB</a></li>
                <li><a @click="openSROverlay">DM</a></li>
                <li><a @click="openSROverlay">CA</a></li>
                <li><a @click="openSROverlay">CO</a></li>
                <li><a @click="openSROverlay">AG</a></li>
                <li><a @click="openSROverlay">SA</a></li>
                <li><a @click="openSROverlay">ACR</a></li>
            </ul>
        </div>
        <p style="font-size:.8em; color:#ccc; margin-top:30px">Alle auf dieser Webseite geschilderten Handlungen
            und
            Personen sind frei erfunden. Etwaige Ähnlichkeiten
            mit tatsächlichen Begebenheiten, lebenden oder verstorbenen Personen wären rein zufällig und sind
            nicht
            beabsichtigt.</p>
      <router-link to="/">
        <div class="close js_openumfrage">Close</div>
          </router-link>
    </article>
</template>
<script>
import {reactive} from 'vue'
export default{
    setup(){
        const state = reactive({
            overlayOpened:false
        })
        function openSROverlay(){
            state.overlayOpened = !state.overlayOpened

        }
        return {
            openSROverlay,
            state
        }
    }


}


</script>
