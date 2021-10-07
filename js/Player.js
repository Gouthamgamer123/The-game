class Player {
  constructor() {
   
    this.name = null;
    this.index = null;
    //the address of the car in the array
    this.positionX = 0;
    this.positionY = 0;
  }
 //get the playerCount from database
    getCount()
    {
      var playerRef=database.ref("playerCount");
      playerRef.on("value",data=>
      {
        playerCount=data.val();
      })
    }

    //update the player Count from database to program

updateCount(count)
{
  database.ref("/").update({
    playerCount:count,
  })
}


display()
{

}



 }

