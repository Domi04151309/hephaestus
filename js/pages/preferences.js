/*global Vue*/

import Page from '../components/page.js'
import Modal from '../components/modal.js'
import ModalTheme from '../components/modal-theme.js'

export default {
  name: 'preferences',
  data() {
    return {
      title: 'Einstellungen'
    }
  },
  template:
  `<page :title="title" parent="/account">
    <ul class="link-list ignore-page-padding">
      <li v-on:click="changeTheme()"><span><span class="material-icons-round">palette</span>Thema ändern</span></li>
      <li v-on:click="deleteData()"><span><span class="material-icons-round">delete</span>Daten Löschen</span></li>
      <li v-on:click="clearCache()"><span><span class="material-icons-round">delete</span>Cache leeren</span></li>
    </ul>
  </page>`,
  components: {
      Page
  },
  methods: {
    changeTheme() {
      var ComponentClass = Vue.extend(ModalTheme)
      var instance = new ComponentClass()
      instance.$mount()
      this.$root.$el.appendChild(instance.$el)
    },
    deleteData() {
      var ComponentClass = Vue.extend(Modal)
      var instance = new ComponentClass({
        propsData: {
          title: 'Daten löschen',
          message: 'Bist du dir sicher, dass du alle Daten löschen möchtest? Dieser Schritt kann nicht rückgängig gemacht werden.',
          positiveText: 'Löschen',
          positiveFunction: () => {
            localStorage.clear()
            location.reload()
          }
        }
      })
      instance.$mount()
      this.$root.$el.appendChild(instance.$el)
    },
    clearCache() {
      var ComponentClass = Vue.extend(Modal)
      var instance = new ComponentClass({
        propsData: {
          title: 'Cache leeren',
          message: 'Bist du dir sicher, dass du den Cache leeren möchtest? Dieser Schritt kann nicht rückgängig gemacht werden.',
          positiveText: 'Leeren',
          positiveFunction: () => {
            caches.keys().then(names => {
              for (const name of names) caches.delete(name)
              location.reload()
            })
          }
        }
      })
      instance.$mount()
      this.$root.$el.appendChild(instance.$el)
    }
  }
}
