import Vue from 'vue';
import Vuetify from 'vuetify';
import 'vuetify/dist/vuetify.min.css';
import ja from 'vuetify/lib/locale/ja';

Vue.use(Vuetify);

export default new Vuetify({
    lang: {
      locales: { ja },
      current: 'ja',
    },
});
