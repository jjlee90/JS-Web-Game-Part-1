function tile(source, left, bottom, width, height) {
    for (let h = 0; h < height; h++) {
        for (let w = 0; w < width; w++) {

            let background = newImage(source, left + w * 100, bottom + h * 100)
            background.style.zIndex = -1
        }
    }
}
// function that will create an image and append it to the body based on the left and bottom px.
function newImage(source, left, bottom) {
    let object = document.createElement('img')
    object.src = source
    object.style.position = 'fixed'
    object.style.left = left + 'px'
    object.style.bottom = bottom + 'px'
    document.body.append(object)
    return object
}

// function to create new item. Calls back newImage() and added listener to remove item
function newItem(source, left, bottom) {

    let item = newImage(source, left, bottom)

    item.addEventListener('dblclick', function() {
        item.remove()
    })
}

let horizon = window.innerHeight / 1.75
let heightOfSky = window.innerHeight - horizon
let heightOfGrass = horizon

newImage("assets/green-character.gif", "100", "100");
newImage("assets/pine-tree.png", "450", 200);
newImage("assets/tree.png", 200, 300)
newImage("assets/pillar.png", 350, 100)
newImage("assets/crate.png", 150, 200)
newImage("assets/well.png", 500, 425)

newItem("assets/sword.png", 500, 405)
newItem("assets/sheild.png", 165, 185)
newItem("assets/staff.png", 600, 100)

tile('assets/sky.png', 0, horizon, window.innerWidth / 100, heightOfSky / 100)
tile('assets/grass.png', 0, 0, window.innerWidth / 100, heightOfGrass / 100)