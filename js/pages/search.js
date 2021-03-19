import Page from '../components/page.js'

//import DataHelper from '../helpers/data.js'

//TODO: Add content

export default {
  name: 'search',
  data() {
    return {
      title: 'Suche',
      searchString: '',
      sorting: 'a',
      items: []
    }
  },
  watch: {
    searchString() { this.sort() },
    sorting() { this.sort() }
  },
  template:
  `<page :title="title" parent="/explore">
    <input v-model="searchString" class="card mb-16" type="text" placeholder="Suchen" autocomplete="off">
    <div class="mb-16">
      <input type="radio" id="categoryA" value="a" v-model="sorting">
      <label class="mr-8" for="categoryA">Kategorie A</label>
      <input type="radio" id="categoryB" value="b" v-model="sorting">
      <label for="categoryB">Kategorie B</label>
    </div>
    <div class="grid-1-2 gap-16">
      <router-link v-for="(item, i) in items" :key="i" to="/shop" class="card p-16 flex center">
        <div class="material-icons-round big-c-icon">storefront</div>
        <div>
          <h2 class="m-0">{{ item.title }}</h2>
          <p>{{ item.city }}</p>
        </div>
      </router-link>
    </div>
  </page>`,
  components: {
      Page
  },
  methods: {
    filtered() {
      let list = JSON.parse(JSON.stringify(DataHelper.combinedData()))
      return list.filter(a => a.title.toUpperCase().includes(this.searchString.toUpperCase()))
    },
    sort() {
      let list = this.filtered()
      //TODO: Categories
      list.sort((a, b) => a.title.localeCompare(b.title))
      this.items = list
    }
  },
  created() {
    this.sort()
  }
}
