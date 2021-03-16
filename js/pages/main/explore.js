import PageTabBar from '../../components/page-tab-bar.js'
import ListItemImage from '../../components/list-item-image.js'

//TODO: Dynamically generate content

export default {
  name: 'explore',
  data() {
    return {
      generalSuggestions: [
        { title: 'Town 1', img: './images/explore/1.jpg' },
        { title: 'Town 2', img: './images/explore/2.jpg' },
        { title: 'Town 3', img: './images/explore/3.jpg' }
      ]
    }
  },
  template:
  `<page-tab-bar>
    <h2 class="mt-16 mx-8 secondary-title">Explore</h2>
    <p class="mt-0 mb-48 mx-8">Find what you are looking for!</p>
    <router-link to="" class="card mb-16-p-16">
      <div class="flex center">
        <div class="material-icons-round big-c-icon">search</div>
        <div>
          <h2 class="m-0">Search</h2>
          <p>Search the complete list</p>
        </div>
      </div>
    </router-link>
    <router-link to="" class="card mb-16-p-16">
      <div class="flex center">
        <div class="material-icons-round big-c-icon">explore</div>
        <div>
          <h2 class="m-0">Categories</h2>
          <p>Browse different categories</p>
        </div>
      </div>
    </router-link>
    <h2 class="mx-8 mt-48 mb-24">Explore Towns</h2>
    <div class="grid-1-3 gap-16 mb-16">
      <list-item-image v-for="item in generalSuggestions" :key="item.title" :title="item.title" :image="item.img"></food-list-item-image>
    </div>
  </page-tab-bar>`,
  components: {
      PageTabBar,
      ListItemImage
  }
}
