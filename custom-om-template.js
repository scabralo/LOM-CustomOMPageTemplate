;(function() {
  const colors = [
    {
      hexValue: '#E9E3CB',
      excludedFrom: [],
    },
    {
      hexValue: '#000000',
      excludedFrom: [],
    },
    {
      hexValue: '#494949',
      excludedFrom: [],
    },
    {
      hexValue: '#AFAFAF',
      excludedFrom: [],
    },
    {
      hexValue: '#C9C9C9',
      excludedFrom: [],
    },
    {
      hexValue: '#FFFFFF',
      excludedFrom: [],
    },
    {
      hexValue: '#6587C7',
      excludedFrom: [],
    },
    {
      hexValue: '#91B0E6',
      excludedFrom: [],
    },
    {
      hexValue: '#1A203A',
      excludedFrom: [],
    },
    {
      hexValue: '#243560',
      excludedFrom: [],
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