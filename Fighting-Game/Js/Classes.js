
//player img

class makeSprite {
    constructor({pos,imageSrc,scale = 1,crop = 1,offset = {x:0,y:0},frameSpeed = 5}) {
        this.pos = pos
        this.height = 50
        this.width = 150
        this.image = new Image()
        this.image.src = imageSrc
        this.imgScale = scale
        this.imgCrop = crop
        this.frame = 0
        this.frameCount = 0
        this.frameWait = frameSpeed
        this.offset = offset
        this.finishedAttack = true
    }
    draw() {
        c.drawImage(
            this.image,
            (this.frame) * (this.image.width/this.imgCrop),
            0,
            this.image.width / this.imgCrop,
            this.image.height,
            this.pos.x - this.offset.x,
            this.pos.y - this.offset.y,
            (this.image.width / this.imgCrop) * this.imgScale,
            this.image.height * this.imgScale
            )
    }

    animateFrames(){
        this.frameCount++

        if (this.frameCount % this.frameWait === 0){

        if (this.frame < this.imgCrop - 1){
            this.frame++
        }else {
            this.frame = 0
        }
        } 
    }
    


    update() {
        this.draw()
        this.animateFrames()
       
    }
}

//player

class makeplayer extends makeSprite {
    constructor({pos,vel,color,PType,bar,imageSrc,scale = 1,crop = 1,offset = {x:0,y:0},sprites,hitbox = { offset:{}, width: undefined, height: undefined},damage,direction}) {
        super({
            pos,
            imageSrc,
            scale,
            crop,
            offset
        })

        this.lastkey
        this.direction = direction
        this.damage = damage
        this.frame = 0
        this.frameCount = 0
        this.frameWait = 12
        this.sprites = sprites
        this.vel = vel
        this.pos = pos
        this.PType = PType
        this.color = color
        this.CanJump = true
        this.height = 150
        this.width = 50
        this.Attacking
        this.HpBar = bar
        this.hp = 100
        this.dead = false
        this.hitbox = {
            pos:{
                x: this.pos.x,
                y: this.pos.y
            },  
            width: hitbox.width,
            height: hitbox.height,
            offset: hitbox.offset
        }

        for (const sprite in this.sprites){
            sprites[sprite].imageL = new Image()
            sprites[sprite].imageR = new Image()
            sprites[sprite].imageL.src = sprites[sprite].imageLSrc
            sprites[sprite].imageR.src = sprites[sprite].imageRSrc
        }

    }

    update() {
        
        this.draw()

       if(!this.dead) this.animateFrames()

        this.hitbox.pos.x = this.pos.x + this.hitbox.offset.x
        this.hitbox.pos.y = this.pos.y + this.hitbox.offset.y
        // draw hitbox
        //c.fillRect(this.hitbox.pos.x,this.hitbox.pos.y,this.hitbox.width,this.hitbox.height)

        this.pos.x += this.vel.x
        this.pos.y += this.vel.y
        if (this.pos.x + this.width + this.vel.x >= canv.width) {
            this.vel.x = 0
            this.pos.x = canv.width - this.width
            this.draw()
        
        }
        else if(this.pos.x + this.vel.x < 0) {
            this.vel.x = 0
            this.pos.x = 0
            this.draw()
        }
        if (this.pos.y + this.height + this.vel.y >= canv.height - 70){
            this.vel.y = 0
            this.pos.y = 356.2
        }else this.vel.y +=gravity 

        

    }
       

    attack() {
        if(this.finishedAttack){
            this.finishedAttack = false
        this.switchSprite('attack1')
        this.Attacking = true
        } 
    }

    takeHit(){
    
        this.hp -= this.damage
        gsap.to(this.HpBar,{
            width: this.hp + '%'
        })
        if (this.hp <= 0){
            this.switchSprite('death')
            document.querySelector('#DisplayTextB').innerHTML = GetWinner({player,enemy,timerId})
           
        }else this.switchSprite('takeHit')
    }

    leftImg(sprite){
        if (this.image === this.sprites.death.imageL){
            if(this.frame === this.sprites.death.crop - 1)
                this.dead = true
        return}
    
        if (this.image === this.sprites.attack1.imageL){
          if(this.frame < this.sprites.attack1.crop - 1){
            return
          }  
        }else this.finishedAttack = true
    
        if (this.image === this.sprites.takeHit.imageL && this.frame < this.sprites.takeHit.crop - 1) return
    
        switch (sprite){
         case'idle':
         if(this.image !== this.sprites.idle.imageL){
         this.image = this.sprites.idle.imageL
         this.imgCrop = this.sprites.idle.crop
         this.frameWait = this.sprites.idle.frameSpeed
         this.frame = 0
         
         }
            break
        case'run':
        if(this.image !== this.sprites.run.imageL){
            this.image = this.sprites.run.imageL
            this.imgCrop = this.sprites.run.crop
            this.frameWait = this.sprites.run.frameSpeed
            this.frame = 0
            }
            break
        case'jump':
        if(this.image !== this.sprites.jump.imageL){
            this.image = this.sprites.jump.imageL
            this.imgCrop = this.sprites.jump.crop
            this.frameWait = this.sprites.jump.frameSpeed
            this.frame = 0
            }
            break
        case'fall':
        if(this.image !== this.sprites.fall.imageL){
            this.image = this.sprites.fall.imageL
            this.imgCrop = this.sprites.fall.crop
            this.frameWait = this.sprites.fall.frameSpeed
            this.frame = 0
            }
            break
        case'attack1':
        if(this.image !== this.sprites.attack1.imageL){
            this.image = this.sprites.attack1.imageL
            this.imgCrop = this.sprites.attack1.crop
            this.frameWait = this.sprites.attack1.frameSpeed
            this.frame = 0
            }
            break
        case'takeHit':
        if(this.image !== this.sprites.takeHit.imageL){
            this.image = this.sprites.takeHit.imageL
            this.imgCrop = this.sprites.takeHit.crop
            this.frameWait = this.sprites.takeHit.frameSpeed
            this.frame = 0
            }
            break
        case'death':
        if(this.image !== this.sprites.death.imageL){
            this.image = this.sprites.death.imageL
            this.imgCrop = this.sprites.death.crop
            this.frameWait = this.sprites.death.frameSpeed
            this.frame = 0
            }
            break
    
        }
    }

    rightImg(sprite){
        if (this.image === this.sprites.death.imageR){
            if(this.frame === this.sprites.death.crop - 1)
                this.dead = true
        return}
    
        if (this.image === this.sprites.attack1.imageR){
          if(this.frame < this.sprites.attack1.crop - 1){
            return
          }  
        }else this.finishedAttack = true
    
        if (this.image === this.sprites.takeHit.imageR && this.frame < this.sprites.takeHit.crop - 1) return
    
        switch (sprite){
         case'idle':
         if(this.image !== this.sprites.idle.imageR){
         this.image = this.sprites.idle.imageR
         this.imgCrop = this.sprites.idle.crop
         this.frameWait = this.sprites.idle.frameSpeed
         this.frame = 0
         
         }
            break
        case'run':
        if(this.image !== this.sprites.run.imageR){
            this.image = this.sprites.run.imageR
            this.imgCrop = this.sprites.run.crop
            this.frameWait = this.sprites.run.frameSpeed
            this.frame = 0
            }
            break
        case'jump':
        if(this.image !== this.sprites.jump.imageR){
            this.image = this.sprites.jump.imageR
            this.imgCrop = this.sprites.jump.crop
            this.frameWait = this.sprites.jump.frameSpeed
            this.frame = 0
            }
            break
        case'fall':
        if(this.image !== this.sprites.fall.imageR){
            this.image = this.sprites.fall.imageR
            this.imgCrop = this.sprites.fall.crop
            this.frameWait = this.sprites.fall.frameSpeed
            this.frame = 0
            }
            break
        case'attack1':
        if(this.image !== this.sprites.attack1.imageR){
            this.image = this.sprites.attack1.imageR
            this.imgCrop = this.sprites.attack1.crop
            this.frameWait = this.sprites.attack1.frameSpeed
            this.frame = 0
            }
            break
        case'takeHit':
        if(this.image !== this.sprites.takeHit.imageR){
            this.image = this.sprites.takeHit.imageR
            this.imgCrop = this.sprites.takeHit.crop
            this.frameWait = this.sprites.takeHit.frameSpeed
            this.frame = 0
            }
            break
        case'death':
        if(this.image !== this.sprites.death.imageR){
            this.image = this.sprites.death.imageR
            this.imgCrop = this.sprites.death.crop
            this.frameWait = this.sprites.death.frameSpeed
            this.frame = 0
            }
            break
    
        }
    }

    switchSprite(sprite){
        if (this.direction === 'right'){
            console.log('right')
           this.rightImg(sprite)
        }else if(this.direction === 'left'){
            this.leftImg(sprite)
        }


    }
}