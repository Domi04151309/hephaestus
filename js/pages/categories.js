import Page from '../components/page.js'

//TODO: Add content

export default {
  name: 'categories',
  data() {
    return {
      title: 'Kategorien',
      searchString: '',
      generalSuggestions: [
        { title: 'Dienstleistungen', logo: 'category' },
        { title: 'Einzelhandel', logo: 'category' },
        { title: 'Gastronomie und Hotels', logo: 'category' },
        { title: 'Gesundheit', logo: 'category' },
        { title: 'Handwerker', logo: 'category' },
        { title: 'Hersteller/Großhandel', logo: 'category' },
        { title: 'Industrie', logo: 'category' },
        { title: 'Kfz', logo: 'category' }
      ]
    }
  },
  template:
  `<page :title="title" parent="/explore">
    <input v-model="searchString" class="card mb-16" type="text" placeholder="Suchen" autocomplete="off">
    <router-link v-for="item in generalSuggestions" :key="item.title" to="/category" class="card mb-16-p-16">
      <div class="flex center">
        <div class="material-icons-round big-c-icon">{{ item.logo }}</div>
        <h2>{{ item.title }}</h2>
      </div>
    </router-link>
  </page>`,
  components: {
      Page
  }
}
