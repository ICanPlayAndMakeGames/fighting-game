
// enemy settings
let enemySettings = {

    pos:{ // position
        x:400,
        y:100
        },
        vel: { //direction
        x:0,
        y:0    
        },
        color:'blue',//color
        PType:'enemy',//type
        bar: document.querySelector('#enemyHp'),//hp bar
        imageSrc: 'Assets/JeffLeft/Idle.png',//idle img
        crop: 4,//animation
        scale: 2.5,//size of img
        offset: {//img offset
            x: 215,
            y: 193
        },
        sprites: {//animation types
            idle:{ //Name
                imageLSrc: 'Assets/JeffLeft/Idle.png',
                imageRSrc: 'Assets/JeffRight/Idle.png',//Source
                crop: 4,//crop
                frameSpeed: 12 //animation speed
            },
            run:{
                imageLSrc:'Assets/JeffLeft/Run.png',
                imageRSrc:'Assets/JeffRight/Run.png',
                crop: 8,
                frameSpeed: 14
            },
            jump:{
                imageLSrc: 'Assets/JeffLeft/Jump.png',
                imageRSrc: 'Assets/JeffRight/Jump.png',
                crop: 2,
                frameSpeed: 5
            },
            fall:{
                imageLSrc: 'Assets/JeffLeft/Fall.png',
                imageRSrc: 'Assets/JeffRight/Fall.png',
                crop: 2,
                frameSpeed: 5
            },
            attack1:{
                imageLSrc: 'Assets/JeffLeft/Attack1.png',
                imageRSrc: 'Assets/JeffRight/Attack1.png',
                crop: 4,
                frameSpeed: 5
            },
            takeHit:{
                imageLSrc: 'Assets/JeffLeft/Take Hit.png',
                imageRSrc: 'Assets/JeffRight/Take Hit.png',
                crop: 3,
                frameSpeed: 5
            },
            death:{
                imageLSrc: 'Assets/JeffLeft/Death.png',
                imageRSrc: 'Assets/JeffRight/Death.png',
                crop: 7,
                frameSpeed: 9
            }
        },
        hitbox:{
            offset:{
                x:-170,
                y:50
            },
            width:170,
            height:50
        },
        damage: 5,
        direction: 'left'

}


let playerSettings = {
    pos:{
        x:1,
        y:100
        },
        vel: {
        x:0,
        y:0    
        },
        color:'red',
        PType:'player',
        bar: document.querySelector('#playerHp'),
        imageSrc: 'Assets/BobRight/Idle.png',
        crop: 8,
        scale: 2.5,
        offset: {
            x: 215,
            y: 180
        },
        sprites: {
            idle:{
                imageLSrc: 'Assets/BobLeft/Idle.png',
                imageRSrc: 'Assets/BobRight/Idle.png',
                crop: 8,
                frameSpeed: 10
            },
            run:{
                imageLSrc:'Assets/BobLeft/Run.png',
                imageRSrc:'Assets/BobRight/Run.png',
                crop: 8,
                frameSpeed: 5
            },
            jump:{
                imageLSrc: 'Assets/BobLeft/Jump.png',
                imageRSrc: 'Assets/BobRight/Jump.png',
                crop: 2,
                frameSpeed: 5
            },
            fall:{
                imageLSrc: 'Assets/BobLeft/Fall.png',
                imageRSrc: 'Assets/BobRight/Fall.png',
                crop: 2,
                frameSpeed: 5
            },
            attack1:{
                imageLSrc: 'Assets/BobLeft/Attack1.png',
                imageRSrc: 'Assets/BobRight/Attack1.png',
                crop: 6,
                frameSpeed: 5
            },
            takeHit:{
                imageLSrc: 'Assets/BobLeft/Take Hit.png',
                imageRSrc: 'Assets/BobRight/Take Hit.png',
                crop: 4,
                frameSpeed: 5
            },
            death:{
                imageLSrc: 'Assets/BobLeft/Death.png',
                imageRSrc: 'Assets/BobRight/Death.png',
                crop: 6,
                frameSpeed: 8
            }
        },
        hitbox:{
            offset:{
                x:100,
                y:50
            },
            width:160,
            height:50
        },
        damage: 2,
        direction: 'right'

}
