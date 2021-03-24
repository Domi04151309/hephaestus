export default {
  extractDur(html) {
    var fullList = html.querySelector('.list').children
    var letterList = null
    var element = null
    var output = []
    for (var i = 0; i < fullList.length; i++) {
      letterList = fullList[i].children
      for (var j = 0; j < letterList.length; j++) {
        element = letterList[j]
        if (element.classList.contains('listrow')) {
          output.push({
            title: element.querySelector('.name')?.innerHTML,
            proprietor: element.querySelector('.proprietor')?.innerHTML,
            street: element.querySelector('.street')?.innerHTML,
            zip: element.querySelector('.zip')?.innerHTML,
            city: element.querySelector('.city')?.innerHTML,
            phone: element.querySelector('.phone')?.innerHTML,
            fax: element.querySelector('.fax')?.innerHTML,
            //email: element.querySelector('.email > a')?.innerHTML,
            website: element.querySelector('.contact > a')?.innerHTML
          })
        }
      }
    }
    return output
  },
  extractKom() {
    return []
  },
  extractSte(html) {
    var fullList = html.querySelector('.company-list').children
    var element = null
    var output = []
    for (var i = 0; i < fullList.length; i++) {
      element = fullList[i]
      output.push({
        title: element.querySelector('h2')?.innerHTML,
        city: 'Steinmauern'
      })
    }
    return output
  },
  extractMug(html) {
    var fullList = html.querySelector('.tx-kommpublishconnector-pi1').children
    var element = null
    var output = []
    for (var i = 0; i < fullList.length; i++) {
      element = fullList[i]
      output.push({
        title: element.querySelector('h4')?.innerHTML,
        city: 'Muggensturm'
      })
    }
    return output
  }
}
