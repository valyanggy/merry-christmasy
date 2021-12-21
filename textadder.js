const images = [
    "project-1.png", "project-2.png", "project-3.png", "project-4.png", "project-5.png", "project-6.png", "project-7.png", "project-8.png", "project-9.png", "project-10.png", "project-11.png"
]

let i = 0

function placeImage(x, y) {

    const nextImage = images[i]

    const img = document.createElement("img")
    img.setAttribute("src", nextImage)
    img.style.left = x + "px"
    img.style.top = y + "px"
        // img.style.transform = "translate(-50%, -50%) scale(0.5) rotate(" + (Math.random() * 10 - 10) + "deg)"

    document.body.appendChild(img)

    i = i + 1

    if (i >= images.length) {
        i = 0
    }
}



document.addEventListener("click", function(event) {
    event.preventDefault()
    placeImage(event.pageX, event.pageY)
})

document.addEventListener("touchend", function(event) {
    event.preventDefault()
    placeImage(event.pageX, event.pageY)
})