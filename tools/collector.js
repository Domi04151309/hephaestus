import Extractors from './extractors.js'

const ORIGIN_PROXY = 'https://api.allorigins.win/raw?url='
const LIST = [
  { url: 'https://www.auamrhein.de/web/wirtschaft_firmenverzeichnis.html', extractor: data => Extractors.extractDur(data) },
  { url: 'https://www.bietigheim.de/web/wirtschaft_firmenliste.html', extractor: data => Extractors.extractDur(data) },
  { url: 'https://www.durmersheim.de/web/gewerbe_unternehmen.html', extractor: data => Extractors.extractDur(data) },
  { url: 'https://www.elchesheim-illingen.de/web/wirtschaft_firmenverzeichnis.html', extractor: data => Extractors.extractDur(data) },
  { url: 'https://www.malsch.de/pb/site/Malsch/node/21780/rqlist/index.html', extractor: data => Extractors.extractKom(data), skip: true },
  { url: 'https://www.oetigheim.de/pb/site/Oetigheim_2019/node/2580945/azlist/index.html?zm.sid=zmn1af5nu4k1', extractor: data => Extractors.extractKom(data), skip: true },
  { url: 'https://www.steinmauern.de/wirtschaft/gewerbeflaechen', extractor: data => Extractors.extractSte(data) },
  { url: 'https://www.muggensturm.de/de/gewerbe/firmenliste', extractor: data => Extractors.extractMug(data) }
]
const parser = new DOMParser()

let array = new Array()
let currentItem = []

async function run() {
  console.log('Starting')
  for (let item of LIST) {
    if (item.skip) {
      console.log('Skipping ' + item.url)
    } else {
      console.log('Requesting ' + item.url)
      await fetch(ORIGIN_PROXY + item.url)
        .then(response =>  response.text())
        .then(data => {
          currentItem = item.extractor(parser.parseFromString(data, 'text/html'))
        })
      console.log('Found ' + currentItem.length + ' new entries')
      array = array.concat(currentItem)
    }
  }
  console.log('Finished with ' + array.length + ' individual entries found')
  console.log(array)
  document.getElementById('result').innerHTML = 'export default ' + JSON.stringify(array)
}

run()
