<template>
    <div>
    <header id="header">
            <div class="logo"><a href="#" class="logodd" title="derDurchste.de"></a></div>
            <div class="content">
                <div class="inner">
                    <h1><span class="stxt">der</span> DURCHSTE</h1>
                    <p>Nur wer selbst Durch ist,<br/>
                        erkennt wer THROUGH ist.<br/>
                        &raquo;Boris Teskow&laquo;</p>
                    <ul class="actions">
                        <li>
                            <router-link to="/umfrage" class="button minwidth-btn js_openumfrage"><span class="stxt">Die</span> Umfrage</router-link>
                        </li>
                        <li><router-link to="/tschau" class="button minwidth-btn js_opentschau"><span class="stxt">Das</span>
                            TschöSEN</router-link>
                        </li>
                    </ul>
                    <router-link to="/merch" class="merch js_openmerch">Merch</router-link></div>
            </div>
            <nav>
                <ul>
                    <li> <router-link to="/blitz" class="js_openblitz" ><span class="stxt">Der</span> Blitz</router-link></li>
                    <li> <router-link to="/liste" class="js_openliste" ><span class="stxt">Die</span> Liste</router-link></li>
                    <li> <router-link to="/zahl" class="js_openzahl" ><span class="stxt">Das</span> Zählen</router-link></li>
                </ul>
            </nav>
        </header>

        <footer id="footer">
            <p class="copyright">&copy;<span class="stxt">der</span>Durchtse.<span class="stxt">de</span> | <span
                class="stxt">das</span>Original | <router-link to="/impressum" class="js_openimpressum"
                                                     style="border-bottom:none;">Impressum</router-link>
            </p>
        </footer>
        </div>
</template>

<script>
// @ is an alias to /src

export default {
    name: 'Home',
    components: {
    }
}
</script>
