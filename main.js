const textMotion = () => {
    const line = document.querySelectorAll('.c-text__line')
    
    line.forEach((_line) => {
    gsap.to(_line.querySelectorAll('.c-text__letter'), {
        y: 0,
        duration: 1,
        ease: 'power3',
        stagger: 0.08
        })
    })
}

const menuAction = () => {
    const headerName = document.querySelector('.list-header--name')
    const headerMenu = document.querySelectorAll('.list-header--menu li')
    
    headerMenu.forEach((_li) => {
        _li.addEventListener('click', (e) => {
        const textValue = _li.innerText
        
        headerName.innerText = textValue
        })
    })
}

const listMenuFunc = () => {
    const menuItems = document.querySelectorAll('.list-header--menu li')
    const listItems = document.querySelectorAll('.sec-list--item')
    menuItems.forEach((_li) => {
      _li.addEventListener('click', (e) => {
        listItems.forEach((_list) => {
          _list.style.display = 'block'
        })
        
        
        if(e.currentTarget == document.getElementById('all')) {
          listItems.forEach((_list) => {
            _list.style.display = 'block'
          })
        }
        if(e.currentTarget == document.getElementById('dfy')) {
          listItems.forEach((list) => {
            if(!(list.classList.contains('dfy'))) {
              list.style.display = 'none'
              if(list.classList.contains('empty')) {
                list.style.display = 'block'
              }
            }
          })
        }
        if(e.currentTarget == document.getElementById('space')) {
          listItems.forEach((list) => {
            if(!(list.classList.contains('space'))) {
              list.style.display = 'none'
              if(list.classList.contains('empty')) {
                list.style.display = 'block'
              }
            }
          })
        }
        if(e.currentTarget == document.getElementById('personal')) {
          listItems.forEach((list) => {
            if(!(list.classList.contains('personal'))) {
              list.style.display = 'none'
              if(list.classList.contains('empty')) {
                list.style.display = 'block'
              }
            }
          })
        }
      })
    })
  }

textMotion()
menuAction()
listMenuFunc()