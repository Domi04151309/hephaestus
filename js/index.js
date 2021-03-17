/*global Vue, VueRouter*/

const Explore = () => import('./pages/main/explore.js')
const Favorites = () => import('./pages/main/favorites.js')
const Account = () => import('./pages/main/account.js')

const Search = () => import('./pages/search.js')
const ShopDetails = () => import('./pages/shop-details.js')

const Preferences = () => import('./pages/preferences.js')
const Data = () => import('./pages/data.js')
const Help = () => import('./pages/help.js')
const About = () => import('./pages/about.js')

Vue.config.devtools = location.hostname === 'localhost' || location.hostname === '127.0.0.1'

const routes = [
  { path: '*', redirect: '/explore' },
  { path: '/explore', component: Explore },
  { path: '/favorites', component: Favorites },
  { path: '/search', component: Search },
  { path: '/shop', component: ShopDetails },
  { path: '/account', component: Account },
  { path: '/account/preferences', component: Preferences },
  { path: '/account/data', component: Data },
  { path: '/account/help', component: Help },
  { path: '/account/about', component: About }
]

var modal
const router = new VueRouter({ routes })

window.backButtonPress = false
window.addEventListener('popstate', () => {
  window.backButtonPress = true
})

router.beforeEach((to, from, next) => {
  modal = document.querySelector('.modal-container')
  if (modal != null) {
    modal.parentNode.removeChild(modal)
    next(false)
  }
  else if (window.backButtonPress) {
    window.backButtonPress = false
    if (
      from.path == '/explore'
      || from.path == '/favorites'
      || from.path == '/account'
    ) next(false)
    else if (
      from.path.includes('explore')
      || from.path.includes('favorites')
      || from.path.includes('account')
    ) next(from.path.substring(0, from.path.lastIndexOf('/')))
    else next()
  }
  else next()
})

new Vue({
  router,
  el: '#app',
  mounted() {
    const loadingScreen = document.getElementById('loading_screen')
    var headers, i

    loadingScreen.parentNode.removeChild(loadingScreen)

    var darkTheme = null
    switch (localStorage.getItem('theme') || 'auto') {
      case 'auto':
        darkTheme = window.matchMedia('(prefers-color-scheme: dark)').matches
        break
      case 'light':
        darkTheme = false
        break
      case 'dark':
        darkTheme = true
        break
    }
    document.documentElement.classList.toggle('dark-theme', darkTheme)

    document.addEventListener('scroll', () => {
      headers = document.getElementsByTagName('HEADER')
      for (i = 0; i < headers.length; i++) {
        headers[i].classList.toggle('header-shadow', window.pageYOffset > 0)
      }
    })
  }
})
