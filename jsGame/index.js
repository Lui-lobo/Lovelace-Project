/* Setup inicial, criando o canvas e inserindo sua altura, largura  */
const canvas = document.querySelector('canvas')
const c = canvas.getContext('2d')

canvas.width = 64 * 16
canvas.height = 64 * 9



// Criando o player

const player = new Player()


//let bottom = y + 100
function animate() {
    window.requestAnimationFrame(animate)
    c.fillStyle = 'white'
    c.fillRect(0, 0, canvas.width, canvas.height)

    player.draw()   
    player.update()
}

animate()

window.addEventListener('keydown', (event) => {
    switch(event.key) {
        case 'w': 
            player.velocity.y = -10

            break
    }
})