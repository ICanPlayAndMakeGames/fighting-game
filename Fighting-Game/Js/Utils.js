function rectangularCollision({rect1,rect2}){
    return(
        rect1.hitbox.pos.x + rect1.hitbox.width >= rect2.pos.x && 
        rect1.hitbox.pos.x <= rect2.pos.x + rect2.width && 
        rect1.hitbox.pos.y + rect1.hitbox.height >= rect2.pos.y && 
        rect1.hitbox.pos.y <= rect2.pos.y + rect2.height
    )
}

function Reset(){
    player.hp = 100
    enemy.hp = 100

    player.HpBar.style.width = player.hp + '%'
    enemy.HpBar.style.width = enemy.hp + '%'

    player.pos.x = 10
    enemy.pos.x = canv.width - 60
    clearTimeout(functiony)
    timer = 10

    Dotimer()

    timerLabel.innerHTML = timer
    document.querySelector('#DisplayTextB').style.display = 'none'
}

function GetWinner({player,enemy,timerId}){
    clearTimeout(timerId)
    document.querySelector('#DisplayTextB').style.display = 'flex'
    if (player.hp == enemy.hp){
         return 'Tie' 
    }else if(player.hp > enemy.hp){
        return 'Player 1 wins'
    }else if(enemy.hp > player.hp){
        return 'Player 2 wins'
    }
    setTimeout(Dotimer,1500)
}



let timerLabel = document.querySelector('#timer')
let timer = 360
let minutes = timer/60
let seconds = 0
let timerId

function Dotimer(){
    

    if (seconds > 0){
       timerId = setTimeout(Dotimer,1000)

        seconds -= 1
        
        timerLabel.innerHTML = minutes +':' + seconds
        if (seconds <10){
            timerLabel.innerHTML = minutes +':' + '0' + seconds
        }
    }else{
        minutes -= 1
        if (minutes < 0){
         document.querySelector('#DisplayTextB').innerHTML = GetWinner({player,enemy,timerId})
        }
        seconds = 60
        Dotimer()
    }
}
