// FILE: main.js

import { createApp } from "vue";
import { Quasar } from "quasar";
import quasarLang from "quasar/lang/es";
import router from "./router";
import { createPinia } from "pinia";
import "./styles/index.scss";

import { ROUTER_NAMES } from "@/utils/routerNames";

// Import icon libraries
import "@quasar/extras/roboto-font-latin-ext/roboto-font-latin-ext.css";
import "@quasar/extras/material-icons/material-icons.css";
import "@quasar/extras/material-icons-outlined/material-icons-outlined.css";
import "@quasar/extras/material-icons-round/material-icons-round.css";
import "@quasar/extras/material-icons-sharp/material-icons-sharp.css";
import "@quasar/extras/material-symbols-outlined/material-symbols-outlined.css";
import "@quasar/extras/material-symbols-rounded/material-symbols-rounded.css";
import "@quasar/extras/material-symbols-sharp/material-symbols-sharp.css";
import "@quasar/extras/mdi-v7/mdi-v7.css";
import "@quasar/extras/fontawesome-v5/fontawesome-v5.css";
import "@quasar/extras/fontawesome-v6/fontawesome-v6.css";
import "@quasar/extras/ionicons-v4/ionicons-v4.css";
import "@quasar/extras/eva-icons/eva-icons.css";
import "@quasar/extras/themify/themify.css";
import "@quasar/extras/line-awesome/line-awesome.css";
import "@quasar/extras/bootstrap-icons/bootstrap-icons.css";

// A few examples for animations from Animate.css:
import "@quasar/extras/animate/fadeIn.css";
import "@quasar/extras/animate/fadeOut.css";

// Import Quasar css
import "quasar/dist/quasar.css";

import App from "./App.vue";

const app = createApp(App);

app.use(router);
app.use(createPinia());

app.use(Quasar, {
  plugins: {}, // import Quasar plugins and add here
  lang: quasarLang,
  /*
  config: {
    brand: {
      // primary: '#e46262',
      // ... or all other brand colors
    },
    notify: {...}, // default set of options for Notify Quasar plugin
    loading: {...}, // default set of options for Loading Quasar plugin
    loadingBar: { ... }, // settings for LoadingBar Quasar plugin
    // ..and many more (check Installation card on each Quasar component/directive/plugin)
  }
  */
});

//Hace global ROUTES_NAMES con this.$ROUTER_NAMES para poder navegar entre vistas
app.config.globalProperties.$ROUTER_NAMES = ROUTER_NAMES;

// Assumes you have a <div id="app"></div> in your index.html
app.mount("#app");
