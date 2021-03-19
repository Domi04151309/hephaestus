(function fun() {
  var fullList = document.querySelector('.list').children
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
          email: element.querySelector('.email > a')?.innerHTML,
          website: element.querySelector('.contact > a')?.innerHTML
        })
      }
    }
  }
  console.log(JSON.stringify(output))
  return output
})()
