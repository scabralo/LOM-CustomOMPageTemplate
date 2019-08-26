;window.onload = () => {
  let customOM = {
    type: '',
    star: '',
    hat: '',
    face: '',
    body: '',
    dot: ''
  }
  const sections = [
    {
      id: 'star',
      sectionTitle: 'Star',
      sectionSelector: '',
      isVisible: false,
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
  const omTypes = [
    {
      id: 'plain-om',
      title: 'Plain',
      image: ''
    },
    {
      id: 'starholder-om',
      title: 'Starholder',
      image: ''
    },
  ]
  const HIDDEN_CLASS = 'custom-om__hidden'
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

  /*
   * This function creates a customizations section of the page
   * @param section An object containing all the properties for the section we're creating
   * @param colors An array with all the colors available
   * @return node In this case the node is a customizations section
   */
  const customizationSection = (section, colors) => {
    // console.log('Section: ',section)
    const node = document.createElement('div')
    node.className = 'custom-om__customizations-section'

    !section.isVisible && node.classList.add(HIDDEN_CLASS) 

    const heading = document.createElement('h3')
    const text = document.createTextNode(section.sectionTitle)
    heading.appendChild(text)
    node.appendChild(heading)

    const colorsWrapper = document.createElement('div')
    colorsWrapper.className = 'custom-om__custom-category'

    colors.map((color) => {
      colorsWrapper.appendChild(colorItem(color, section.id))
    })

    node.appendChild(colorsWrapper)

    return node
  }

  /*
   * This function creates all the customizations sections of the page
   * @param sections An array containing all the sections we're creating and their properties
   * @param colors An array with all the colors available
   * @return node In this case the node is a customizations section
   */
  const customizationsSections = (sections, colors) => {
    const customizationsContainer = document.getElementById('custom-om__customizations-container')
    const fragment = document.createDocumentFragment()

    sections.map((section) => {
      fragment.appendChild(customizationSection(section, colors))
    })

    customizationsContainer.appendChild(fragment)
  }

  /*
   * This function returns an OM Type element 
   * @param type An object containing all the properties for the type element we're creating
   * @return node In this case the node is a span element
   */
  const typeItem = type => {
    const node = document.createElement('span')
    node.id = type.id
    node.className = custom-om__om-type-item'

    const heading = document.createElement('h3')
    const text = document.createTextNode(type.title)
    heading.appendChild(text)
    node.appendChild(heading)

    // Needs an image in the near future

    return node
  }

  /*
   * This function populates the OM TYpe section of the page
   * @param types An object containing all the properties for the types we're creating
   * @return node In this case the node is the OM Type section
   */
  const omTypesSection = (types) => {
    const omTypesWrapper = document.getElementById('custom-om__om-type-wrapper')
    const fragment = document.createDocumentFragment()

    types.map((type) => {
      fragment.appendChild(typeItem(type))
    })

    omTypesWrapper.appendChild(fragment)
  }

  /*
   * This function sets the onClick event listeners for the project
   */
  const setOnClickEvents = () => {
    const omTypeWrapper = document.getElementById('custom-om__om-type-wrapper')
    omTypeWrapper.addEventListener('click', (event) => {
      console.log('Event Target: ', event.target)
    })
    customizationsOnClick()
  }

  const customizationsOnClick = () => {
    const customizationsContainer = document.getElementById('custom-om__customizations-container')
    customizationsContainer.addEventListener('click', (event) => {

      const bodyPart = event.target.getAttribute('data-body-part')
      const colorValue = event.target.getAttribute('data-color-value')
      const omObj = {}
      omObj[bodyPart] = colorValue
      
      customOM = setNewCustomOM(omObj)

    })
  }

  /*
   * This function returns the new state of CustomOM
   * @param omObj An object containing the properties we want to update on the global customOM
   * @return newOM Return the new state of customOM
   */
  const setNewCustomOM = (omObj) => {
    const newOM = Object.assign({}, customOM, omObj)
    console.log('Custom OM: ', newOM)
    return newOM
  }

  /* App */
  
  customizationsSections(sections, colors)
  omTypesSection(omTypes)
  setOnClickEvents()

}