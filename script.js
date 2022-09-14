// Create Two Functions -> addChild and redWedding
const starks = document.querySelector('.starks')
const addChild = () => {
    // The addChild function creates new div & appends it to the starks div
    const divChild = document.createElement("div")
    starks.appendChild(divChild)
}

const redWedding = () => {
    // The redWedding function removes ALL stark children (loop)
    while (starks.firstChild){ //while its true
        starks.firstChild.remove()      
    }
    // starks.innerHTML= ""
}
// console.dir(starks)
// Attach functions to buttons
const addChildBtn = document.getElementById("add-child")
addChildBtn.addEventListener('click', addChild)

const redWeddingBtn = document.getElementById("red-wedding")
redWeddingBtn.addEventListener('click', redWedding)





