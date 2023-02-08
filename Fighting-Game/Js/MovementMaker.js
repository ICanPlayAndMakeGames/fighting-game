window.addEventListener('keydown',(event) => {
    if (!player.dead){
   switch (event.key) {
        case 'd':
           keysP.d.pressed = true
           player.lastkey = 'd'
            break
        case 'a':
            keysP.a.pressed = true
            player.lastkey = 'a'
            break
        case 'w':
            if (player.CanJump == true){
            player.vel.y = -7
            } 
             break
        case ' ':
            player.attack()
            break
            
        }  
        }
        if(!enemy.dead){ 
    switch(event.key){

        case 'ArrowRight':
            KeysE.ArrowRight.pressed = true
            enemy.lastkey = 'ArrowRight'
            break
        case 'ArrowLeft':
            KeysE.ArrowLeft.pressed = true
            enemy.lastkey = 'ArrowLeft'
            break
        case 'ArrowUp':
            if (enemy.CanJump == true){
            enemy.vel.y = -7
            }
            break
        case 'ArrowDown':
            enemy.attack()
            break

    }
    }
   // console.log(event)
} )



window.addEventListener('keyup',(event) => {
    switch (event.key) {
        case 'd':
            keysP.d.pressed = false  
            break
        case 'a':
            keysP.a.pressed = false
            break
        case 'ArrowRight':
            KeysE.ArrowRight.pressed = false
            break
        case 'ArrowLeft':
          KeysE.ArrowLeft.pressed = false
            break    
    }
     //console.log(event)
 } )