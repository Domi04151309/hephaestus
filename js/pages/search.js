import Page from '../components/page.js'

import DataHelper from '../helpers/data.js'

//TODO: Add content

export default {
  name: 'search',
  data() {
    return {
      title: 'Suche',
      searchString: '',
      sorting: '',
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
      <input type="radio" id="categoryA" value="" v-model="sorting">
      <label class="mt-8 mr-8" for="categoryA">Alle</label>
      <input type="radio" id="categoryB" value="au" v-model="sorting">
      <label class="mt-8 mr-8" for="categoryB">Au</label>
      <input type="radio" id="categoryC" value="bietigheim" v-model="sorting">
      <label class="mt-8 mr-8" for="categoryC">Bietigheim</label>
      <input type="radio" id="categoryD" value="durmersheim" v-model="sorting">
      <label class="mt-8 mr-8" for="categoryD">Durmersheim</label>
      <input type="radio" id="categoryE" value="elchesheim" v-model="sorting">
      <label class="mt-8 mr-8" for="categoryE">Elchesheim-Illingen</label>
      <input type="radio" id="categoryF" value="muggensturm" v-model="sorting">
      <label class="mt-8 mr-8" for="categoryF">Muggensturm</label>
      <input type="radio" id="categoryG" value="steinmauern" v-model="sorting">
      <label class="mt-8 mr-8" for="categoryG">Steinmauern</label>
    </div>
    <div class="grid-1-3 gap-16">
      <router-link v-for="(item, i) in items" :key="i" to="/shop" class="card big">
        <img src="./images/placeholders/1.jpg" alt="Vorschau">
        <div class="card-content">
          <h2>{{ item.title }}</h2>
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
      this.items = this.filtered()
        .filter(a => a.city?.toUpperCase()?.includes(this.sorting.toUpperCase()))
        .sort((a, b) => a.title.localeCompare(b.title))
    }
  },
  created() {
    this.sort()
  }
}
