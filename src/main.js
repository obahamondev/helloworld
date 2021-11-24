import { createApp } from "vue";
import App from "./App.vue";
import router from "@/router/index.js";
import VueCarousel from "vue-carousel";
import Authenticator from "@aws-amplify/ui-vue/dist/components/authentication/Authenticator";
import "@aws-amplify/ui-vue/styles.css";

//createApp(App).use(router).mount("#app");
//App.use(VueCarousel);

const app = createApp(App);
app.use(router);
app.use(VueCarousel);
app.use(Authenticator);
app.mount("#app");
