import Page from '../components/page-large-app-bar.js'

//TODO: Add content

export default {
  name: 'category',
  data() {
    return {
      title: 'Kategorie',
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
  `<page :title="title" parent="/categories" class="details">
  <input v-model="searchString" class="card mb-16" type="text" placeholder="Suchen" autocomplete="off">
  <div class="mb-16">
    <input type="radio" id="locationA" value="a" v-model="sorting">
    <label class="mr-8" for="locationA">Gemeinde A</label>
    <input type="radio" id="locationB" value="b" v-model="sorting">
    <label for="locationB">Gemeinde B</label>
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
