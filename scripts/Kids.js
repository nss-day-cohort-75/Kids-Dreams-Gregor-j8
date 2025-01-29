import { getChildren } from "./database.js"

const children = getChildren()

document.addEventListener(
    "click", 
    (clickEvt) => {
      const itemsClicked = clickEvt.target  
      const cildName = itemsClicked.dataset.name  
      const childWish = itemsClicked.dataset.wish  
      if (itemsClicked.dataset.type === 'child') {
            window.alert(`${cildName}'s wish is ${childWish}`)
      }
    }
)

export const Kids = () => {
    let html = "<ol>"

    for (const child of children) {
        html += `<li data-id="${child.id}" data-name="${child.name}" data-type="child" data-wish="${child.wish}">${child.name}</li>`
    }

    html += "</ol>"
    return html
}

