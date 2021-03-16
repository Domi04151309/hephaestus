import PageTabBar from '../../components/page-tab-bar.js'

//TODO: Dynamically generate content

export default {
  name: 'favorites',
  data() {
    return {
      searchString: '',
      generalSuggestions: [
        { title: 'Shop 1', summary: 'A small summary text', logo: 'storefront' },
        { title: 'Shop 2', summary: 'A small summary text', logo: 'storefront' },
        { title: 'Shop 3', summary: 'A small summary text', logo: 'storefront' }
      ]
    }
  },
  template:
  `<page-tab-bar>
    <h2 class="mt-16 mx-8 secondary-title">Favorites</h2>
    <p class="mt-0 mb-48 mx-8">Save businesses you like for later!</p>
    <input v-model="searchString" class="card mb-16" type="text" placeholder="Search" autocomplete="off">
    <router-link v-for="item in generalSuggestions" :key="item.title" to="" class="card mb-16-p-16">
      <div class="flex center">
        <div class="material-icons-round big-c-icon">{{ item.logo }}</div>
        <div>
          <h2 class="m-0">{{ item.title }}</h2>
          <p>{{ item.summary }}</p>
        </div>
      </div>
    </router-link>
  </page-tab-bar>`,
  components: {
      PageTabBar
  }
}
