class Game{
    constructor(){
        
    }
    
    getstate(){

        var getstateRef=database.ref("gameState")  
        getstateRef.on("value",function(data){                   
          
            gameState=data.val()

        })
    }
    update(state){
        database.ref("/").update({      // '/' means referring to the main database 

            gameState:state
        })  


    }

   async start(){          //async=wait

        if(gameState===0){
            player=new Player()
            var playerCountRef=await database.ref("playerCount").once("value")

            if(playerCountRef.exists()){

                playerCount=playerCountRef.val()
                player.getCount()
            }

          
            form=new Form()
            form.display()
        }
        car1=createSprite(100,200)
        // car1.shapeColor="purple";
        car1.addImage(car1img)

        car2=createSprite(300,200)
        // car2.shapeColor="blue";
        car2.addImage(car2img)

        car3=createSprite(500,200)
        // car3.shapeColor="yellow"
        car3.addImage(car3img)

        car4=createSprite(700,200)
        car4.addImage(car4img)
        // car4.shapeColor="red"

        cars=[car1,car2,car3,car4] 
        



    }
play(){
     
form.hide()

Player.getPlayerinfo()
player.getEnd()


if(allplayers!=undefined){
    
    background(230,230,10)

    image(trackimg, 0, -displayHeight*4, displayWidth, displayHeight*5.1)     //give for spacing 
     var index = 0                   //index of the cars arrey
     var x = 170;
     var y ;
     
     for(var i in allplayers){
         index = index+1                 //add 1 to the index for every loop  

         x = x+200                     //spacing between the cars
         y = displayHeight - allplayers[i].distance
         cars[index-1].x = x
         cars[index-1].y = y
         
        if(index == player.index){
        stroke("red")
        fill("yellow")
        ellipse(x,y,60,60)
        cars[index-1].shapeColor =("green")
        camera.position.x = displayWidth/2
        camera.position.y = cars[index-1].y
      }

}
}
if(keyIsDown(UP_ARROW)&& player.index!==null){
player.distance+=10
console.log(player.distance)
player.update()
}
if(player.distance>3720){
    gameState=2;
    player.rank += 1
  Player.updateEnd(player.rank)    

}  
drawSprites()
}
end(){
    console.log("gameEnd")
    console.log(player.rank)
    
}
}
