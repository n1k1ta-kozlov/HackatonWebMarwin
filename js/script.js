const selectionListEls = document.querySelectorAll('.list-selection li')

let isActive = false

selectionListEls.forEach((item) => {
    item.addEventListener('click', function () {
        isActive = !isActive
      
        if (isActive) {
            item.classList.add('color-elevent-list')
        } else {
            item.classList.remove('color-elevent-list')
        }
      })
})

