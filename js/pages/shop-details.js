import Page from '../components/page-large-app-bar.js'

//TODO: Add content

export default {
  name: 'shop-details',
  data() {
    return {
      title: 'Details'
    }
  },
  template:
  `<page :title="title" parent="/explore" class="details">
    <ul class="actions">
      <li>Anrufen</li>
      <li>E-Mail</li>
      <li>Route</li>
      <li>Website</li>
    </ul>
    <div class="card mb-16-p-16">
      <h2>Beschreibung</h2>
      <p>
        dummy text dummy text dummy text dummy text
        dummy text dummy text dummy text dummy text
      </p>
    </div>
    <div class="card mb-16-p-16">
      <h2>Kontaktdaten</h2>
      <p>
        dummy text dummy text dummy text dummy text
        dummy text dummy text dummy text dummy text
      </p>
    </div>
    <div class="card mb-16-p-16">
      <h2>Öffnungszeiten</h2>
      <p>
        dummy text dummy text dummy text dummy text
        dummy text dummy text dummy text dummy text
      </p>
    </div>
  </page>`,
  components: {
      Page
  }
}
