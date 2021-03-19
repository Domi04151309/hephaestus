import Au from '../data/au.js'
import Bietigheim from '../data/bietigheim.js'
import Durmersheim from '../data/durmersheim.js'
import ElchesheimIllingen from '../data/elchesheim-illingen.js'

export default {
  combinedData() {
    return Au.concat(Bietigheim.concat(Durmersheim.concat(ElchesheimIllingen)))
  }
}
