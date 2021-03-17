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
      <li>
        <div class="material-icons-round big">phone</div>
        <div class="p">Anrufen</div>
      </li>
      <li>
        <div class="material-icons-round big">mail</div>
        <div class="p">E-Mail</div>
      </li>
      <li>
        <div class="material-icons-round big">navigation</div>
        <div class="p">Route</div>
      </li>
      <li>
        <div class="material-icons-round big">public</div>
        <div class="p">Website</div>
      </li>
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
