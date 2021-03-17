import Page from '../components/page.js'

//TODO: Add content

export default {
  name: 'help',
  data() {
    return {
      title: 'Hilfe'
    }
  },
  template:
  `<page :title="title" parent="/account">
    <div class="card mb-16-p-16 intro text-center">
      <h2>Bald verfügbar...</h2>
    </div>
  </page>`,
  components: {
      Page
  }
}
