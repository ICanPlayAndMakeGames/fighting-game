const canv = document.querySelector("canvas")
const c = canv.getContext("2d")
const gravity = 0.2




canv.width = 1024
canv.height = 576


c.fillRect(0,0,canv.width,canv.height)

const BackGround = new makeSprite({
    pos:{
        x:0,
        y:0
    },
    imageSrc:'Assets/background.png',
    scale: 1,
    crop: 1
})

const Shop = new makeSprite({
    pos:{
        x:625,
        y:125
    },
    imageSrc:'Assets/Shop.png',
    scale: 2.75,
    crop: 6,
    frameSpeed: 12
})


const player = new makeplayer(playerSettings)

const enemy = new makeplayer(enemySettings)

player.draw()
enemy.draw()


Dotimer()




function animate(){
    window.requestAnimationFrame(animate)
   c.fillStyle = 'black'
   c.fillRect(0,0,canv.width,canv.height)
    BackGround.update()
    Shop.update()
    player.update()
    enemy.update()
     movement() 

    
    // detect attack

    if (
        rectangularCollision({rect1: player,rect2: enemy}) &&
        player.Attacking == true && player.frame === 4
       ){
        player.Attacking = false
        enemy.takeHit()
        
       }

    if(player.Attacking && player.frame === 4){
        player.Attacking = false
    }

       if (
        rectangularCollision({rect1: enemy,rect2: player}) &&
        enemy.Attacking == true && enemy.frame === 2
       ){
        enemy.Attacking = false
        player.takeHit()
       }

       if(enemy.Attacking && enemy.frame === 2){
        enemy.Attacking = false
    }
    

}
animate()



