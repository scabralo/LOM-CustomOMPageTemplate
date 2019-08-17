;jQuery(document).ready(function() {
  const sections = [
    {
      id: 'star',
      sectionTitle: 'Star',
      sectionSelector: '',
      isVisible: true,
      sectionClasses: []
    },
    {
      id: 'hat',
      sectionTitle: 'Hat',
      sectionSelector: '',
      isVisible: true,
      sectionClasses: []
    },
    {
      id: 'face',
      sectionTitle: 'Face',
      sectionSelector: '',
      isVisible: true,
      sectionClasses: []
    },
    {
      id: 'body',
      sectionTitle: 'Body',
      sectionSelector: '',
      isVisible: true,
      sectionClasses: []
    },
    {
      id: 'dot',
      sectionTitle: 'Dot',
      sectionSelector: '',
      isVisible: true,
      sectionClasses: []
    },
  ]
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
   * This function will return the color options for available for customization
   * @param color An object containing all the properties for the color item we're creating
   * @param bodyPart It identifies to which body part this color could be applied to
   * @return node In this case the node is a span element
   */
  const colorItem = (color, bodyPart) => {
    // console.log('Color: ', color)
    const node = document.createElement('span')
    const text = document.createTextNode('')
    const colorValue = color.hexValue

    node.appendChild(text)
    node.setAttribute('data-color-value', colorValue)
    node.setAttribute('data-body-part', bodyPart)
    node.style.backgroundColor = colorValue
    
    return node
  }

  const customizationSection = (section, colors) => {
    // console.log('Section: ',section)
    const node = document.createElement('div')
    node.setAttribute('class', 'custom-om__customizations-section')

    const heading = document.createElement('h3')
    const text = document.createTextNode(section.sectionTitle)
    heading.appendChild(text)
    node.appendChild(heading)

    const colorsWrapper = document.createElement('div')
    colorsWrapper.setAttribute('class', 'custom-om__custom-category')

    colors.map((color) => {
      colorsWrapper.appendChild(colorItem(color, section.id))
    })

    node.appendChild(colorsWrapper)

    return node
  }

  const customizationsContainer = document.getElementById('custom-om__customizations-container')
  sections.map((section) => {
    customizationsContainer.appendChild(customizationSection(section, colors))
  })

})