;(function() {
  const colors = [
    {
      hexValue: '#E9E3CB'
    },
    {
      hexValue: '#000000'
    },
    {
      hexValue: '#494949'
    },
    {
      hexValue: '#AFAFAF'
    },
    {
      hexValue: '#C9C9C9'
    },
    {
      hexValue: '#FFFFFF'
    },
    {
      hexValue: '#6587C7'
    },
    {
      hexValue: '#91B0E6'
    },
    {
      hexValue: '#1A203A'
    },
    {
      hexValue: '#243560'
    },
  ]

  /*
   * This function will return the element used to showcase the colors available for customization
   * @param color An object
   * @return node In this case the node is a span element
   */
  const colorItem = (color) => {
    const node = document.createElement('span')
    const text = document.createTextNode('')

    node.appendChild(text)
    node.style.backgroundColor = color.hexValue
    
    return node
  }

  
})()