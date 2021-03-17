//TODO: Replace with generic modal

export default {
  name: 'modal-theme',
  template:
  `<div class="modal-container">
    <div class="modal-background" v-on:click="close()"></div>
    <div class="modal-content card">
      <h2>Thema ändern</h2>
      <p>Wechsle das Thema der App</p>
      <div class="flex space">
        <button v-on:click="setTheme('auto')" type="button">Auto</button>
        <button v-on:click="setTheme('light')" type="button">Hell</button>
        <button v-on:click="setTheme('dark')" type="button">Dunkel</button>
      </div>
      <div class="button-bar">
        <button v-on:click="close()" type="button">Ok</button>
      </div>
    </div>
  </div>`,
  methods: {
    setTheme(theme) {
      localStorage.setItem('theme', theme)
      var darkTheme = null
      switch (theme) {
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
    },
    close() {
      this.$el.parentNode.removeChild(this.$el)
    }
  }
}
