
import 'material-design-icons-iconfont/dist/material-design-icons.css' 
import Vue from 'vue'
import Vuetify from 'vuetify'

Vue.use(Vuetify)

export default ctx => {
  const vuetify = new Vuetify({
    theme: {
      dark: false // dark or lightはここで指定するようになった
    },
    icons: {
      iconfont: 'mdi' // iconを指定しないとチェックボックス等が正常に表示されない
    }
  })

  ctx.app.vuetify = vuetify
  ctx.$vuetify = vuetify.framework
}