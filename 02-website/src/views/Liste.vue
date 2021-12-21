<template>
<article id="liste" class="is-active">
    <h2 class="major"><span class="stxt">Die</span> Liste</h2>
    <h3>der Throughhhste!</h3>
    <div style="position:relative"><span class="image main"><img src="images/pfu.gif" alt=""/></span></div>
    <ul class="js_random randomlist">
        <li v-for="user in state.users" :key="user[0]">{{user[0]}} - {{user[1]}}</li>
    </ul>
    <p style="font-size:.8em; color:#ccc;">Alle auf dieser Webseite geschilderten Handlungen und Personen
        sind
        frei erfunden. Etwaige Ähnlichkeiten
        mit tatsächlichen Begebenheiten, lebenden oder verstorbenen Personen wären rein zufällig und sind
        nicht
        beabsichtigt.</p>
    <router-link to="/">
        <div class="close js_openliste">Close</div></router-link>
</article>
</template>

<script>


import {reactive,computed} from "vue";
import _ from 'lodash';

export default {
    setup(){
        const state = reactive({
            users: computed(()=>{
                let users = [
                    ['SR','der PADAWAN'],
                    ['FF','der IMPERATOR'],
                    ['RB','der FEINSCHMECKER'],
                    ['TS','der NÖRGLER'],
                    ['CR','der ZEITREISENDE'],
                    ['TK','der FACHBERATER'],
                    ['JM','der FLIEGA'],
                    ['CB','der HUNGRIGE'],
                    ['CH','der HUNDEFLÜSTERER'],
                    ['AS','der SPANIER'],
                    ['AK','der MASSÖR'],
                    ['TÖ','der SCHWEIZER'],
                    ['SK','der BRAUMEISTER'],
                    ['CW','die TRENDSETTERIN'],
                    ['AG','der FLUCHENDE'],
                    ['SE','der GULPINATOR'],
                    ['CA','der ANACONDA'],
                    ['DM','der SURVIVOR'],
                    ['ACR','die MEISTERKÖCHIN'],
                    ['NB','die BUFFETFRÄSE'],
                    ['CO','der FASTENDE'],
                    ['SA','die BESTE'],
                ]
                return _.shuffle(users)
            })
        })
        
        return{state}
    }
}
</script>
