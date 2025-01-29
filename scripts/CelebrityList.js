import { getCelebrities } from "./database.js"

const celebrities = getCelebrities()

document.addEventListener(
    "click", 
    (clickEvent) => {
      const clickedItem = clickEvent.target  
      const celebitySport = clickedItem.dataset.sport
    const celebrityName = clickedItem.dataset.name
        if (clickedItem.dataset.type === 'celebrity') {
            window.alert(`${celebrityName} is a ${celebitySport} star`)
        }
        
    }
)

export const Celebrities = () => {
    let html = "<ol>"

    for (const star of celebrities) {
        html += `<li 
                    data-id="${star.id}" 
                    data-name="${star.name}"
                    data-type="celebrity"
                    data-sport="${star.sport}"
                    id="star--${star.id}">
                    ${star.name}
                </li>`
    }

    html += "</ol>"
    return html
}
