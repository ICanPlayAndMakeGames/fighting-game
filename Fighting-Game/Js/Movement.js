const keysP = {
    a:{
        pressed: false,
        velocity: -2.5,
        direction: 'right'
    },
    d:{
        pressed:false,
        velocity: 2.5,
        direction: 'right'
    },
}

const KeysE = {
    ArrowRight:{
        pressed:false,
        velocity: 2.5,
        direction: 'left'
    },
    ArrowLeft:{
        pressed:false,
        velocity: -2.5,
        direction: 'left'
    }
}

function movement(){

    player.vel.x = 0
    enemy.vel.x = 0


    if (keysP.a.pressed === false && keysP.d.pressed === false){
        player.switchSprite('idle')
    }

    if (KeysE.ArrowRight.pressed === false && KeysE.ArrowLeft.pressed === false){
        enemy.switchSprite('idle')
    }


for (const key in keysP){
    if(keysP[key].pressed && player.lastkey === String(key)){
        player.vel.x = keysP[key].velocity
        player.direction = keysP[key].direction
        player.switchSprite('run')
        }
        }

for (const key in KeysE){
    if(KeysE[key].pressed && enemy.lastkey === String(key)){
        enemy.vel.x = KeysE[key].velocity
        enemy.direction = KeysE[key].direction
        enemy.switchSprite('run')
        }
        }
    
    if(player.vel.y < 0){
        player.switchSprite('jump')
     }else if(player.vel.y > 0){
        player.switchSprite('fall')
        }

    if(enemy.vel.y < 0){
        enemy.switchSprite('jump')
        }else if(enemy.vel.y > 0){
            enemy.switchSprite('fall')
        }
    

}