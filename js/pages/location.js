import Page from '../components/page-large-app-bar.js'

//TODO: Add content

export default {
  name: 'location',
  data() {
    return {
      title: 'Gemeinde',
      searchString: '',
      sorting: 'a',
      generalSuggestions: [
        { title: 'Shop 1', summary: 'Eine kleine Zusammenfassung', logo: 'storefront' },
        { title: 'Shop 2', summary: 'Eine kleine Zusammenfassung', logo: 'storefront' },
        { title: 'Shop 3', summary: 'Eine kleine Zusammenfassung', logo: 'storefront' },
        { title: 'Shop 4', summary: 'Eine kleine Zusammenfassung', logo: 'storefront' }
      ]
    }
  },
  template:
  `<page :title="title" parent="/explore" class="details">
  <input v-model="searchString" class="card mb-16" type="text" placeholder="Suchen" autocomplete="off">
  <div class="mb-16">
    <input type="radio" id="categoryA" value="a" v-model="sorting">
    <label class="mr-8" for="categoryA">Kategorie A</label>
    <input type="radio" id="categoryB" value="b" v-model="sorting">
    <label for="categoryB">Kategorie B</label>
  </div>
  <router-link v-for="item in generalSuggestions" :key="item.title" to="/shop" class="card mb-16-p-16">
    <div class="flex center">
      <div class="material-icons-round big-c-icon">{{ item.logo }}</div>
      <div>
        <h2 class="m-0">{{ item.title }}</h2>
        <p>{{ item.summary }}</p>
      </div>
    </div>
  </router-link>
  </page>`,
  components: {
      Page
  }
}
