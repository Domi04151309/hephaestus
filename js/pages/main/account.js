import PageTabBar from '../../components/page-tab-bar.js'

export default {
  name: 'account',
  template:
  `<page-tab-bar>
    <div class="text-center mb-32">
      <span id="profile-icon" class="material-icons-round">account_circle</span>
    </div>
    <ul class="link-list card">
      <li><router-link to="/account/preferences"><span class="material-icons-round">settings</span>Preferences</router-link></li>
      <li><router-link to="/account/data"><span class="material-icons-round">data_usage</span>Raw Data</router-link></li>
      <li><router-link to="/account/help"><span class="material-icons-round">help</span>Help</router-link></li>
      <li><router-link to="/account/about"><span class="material-icons-round">info</span>About</router-link></li>
    </ul>
  </page-tab-bar>`,
  components: {
      PageTabBar
  }
}
