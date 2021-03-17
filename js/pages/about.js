import Page from '../components/page.js'

export default {
  name: 'about',
  data() {
    return {
      title: 'Über die App',
      version: 'unbekannt'
    }
  },
  template:
  `<page :title="title" parent="/account" class="text-center">
    <img src="./images/about/logo.svg" alt="Icon">
    <h2>Hephaestus</h2>
    <p>{{ version }}</p>
    <p>
      Ein simples Projekt<br>
    </p>
    <p>Copyright 2021<br>Domi04151309 & Nils Döhring</p>
  </page>`,
  components: {
      Page
  },
  methods: {
    async getVersion() {
      this.version = (await window.caches.keys())[0]
    }
  },
  created() {
    this.getVersion()
  }
}
