

//--------------------------------------------------------variables--------------------------------------------------------------------------------

  //bases
  var base1,base2,base3,base4,base5,base6,base7,base8,base9,base10,base11;

  //wall
  var wall1,wall2;


  //player
  var player;


  //invisible grounds
  var inv1,inv2,inv3,inv4,inv5,inv6,inv7,inv8,inv9,inv10;

  //resender
  var rsd1,rsd2,rsd3,rsd4;


  //npc
  var npc1;

  //gamestate
  var Gamestate = 0;
  var i = 0;

  //plate...
  var end_plate,start_plate,win_plate;

  //void
  var VOID ;

  //win
  var win ;

  //double jump
  var jump=1;

  var run_d1,run_d2;



//---------------------------------------------------------preload--------------------------------------------------------------------------------


  function preload() {
    run_d1 = loadAnimation("run1.png","run2.png","run3.png","run4.png","run5.png","run6.png");
    run_d2 = loadAnimation("run-1.png","run-2.png","run-3.png","run-4.png","run-5.png","run-6.png");
    run_i = loadAnimation("idle.png");
    npc_i1 = loadImage("npc1.png");
    npc_i2 = loadImage("npc2.png");
    bmg = loadImage("background.jpg");

  }



  function setup() {
    createCanvas(1366,657);
    

  //----void-----
  VOID=createSprite(600, 700, 1500, 80);
  VOID.visible = false;
  //----------------------player-----------------------
    player=createSprite(300, 500, 50, 50); 
    player.shapeColor='blue';
player.scale = 0.2;


  //-----------------------npc----------------------------

    npc1=createSprite(1950, 440, 50, 50); 
    npc1.shapeColor='red';
    npc1.addImage(npc_i1);
    npc1.scale = 0.2;
    npc2=createSprite(5500, 520, 50, 50); 
    npc2.shapeColor='red';
    npc2.addImage(npc_i1);
    npc2.scale = 0.2;








  // ------------------base----------------------------

    base1=createSprite(500, 630, 1500, 80);
    base1.shapeColor="#b04614";

    base2=createSprite(600, 600, 200, 400); 
    base2.shapeColor="#b04614";

    base3=createSprite(1100, 300, 400, 50);
    base3.shapeColor="#b04614";
    base4=createSprite(1750, 500, 300, 400);
    base4.shapeColor="#b04614";
    base5=createSprite(2400, 600, 1000, 200);
    base5.shapeColor="#b04614";

    base6=createSprite(2800, 500, 300, 400);
    base6.shapeColor="#b04614";

    base7=createSprite(3300, 300, 100, 50);
    base7.shapeColor='grey';

    base8=createSprite(3700, 300, 100, 50);
    base8.shapeColor='grey';

    base9=createSprite(4100, 300, 100, 50);
    base9.shapeColor='grey';

    base10=createSprite(5000, 650, 1000, 150);
    base10.shapeColor="#b04614";
    
    base11=createSprite(5700, 650, 200, 500);
    base11.shapeColor="#b04614";
    
    base12=createSprite(6300, 650, 400, 600);
    base12.shapeColor="#b04614";
    
    base13=createSprite(7200, 650, 900, 200);
    base13.shapeColor="#b04614";
    
    base14=createSprite(9000, 650, 1500, 150);
    base14.shapeColor="#b04614";
    



    
    
    
    
    
    //------------------------walls-----------------------------------
    
    wall1=createSprite(-100, 400, 400, 500); 
    wall1.shapeColor="#b04614";
    wall2=createSprite(1250, 475, 100, 400);
    wall2.shapeColor="#b04614";
    wall3=createSprite(3300, 475, 50, 400);
    wall3.shapeColor='grey';
    wall4=createSprite(3700, 475, 50, 400);
    wall4.shapeColor='grey';
    wall5=createSprite(4100, 475, 50, 400);
    wall5.shapeColor='grey';






  
  
    //---------------------inv blocks-----------------------------------------
    inv1=createSprite(500, 590, 1500, 10);
    inv1.visible = false;
    inv2=createSprite(600, 400, 200, 10);
    inv2.visible = false;
    inv3=createSprite(1100, 275, 400, 10);
    inv3.visible = false;
    inv4=createSprite(1750, 300, 300, 10);
    inv4.visible = false;
    inv5=createSprite(2400, 500, 1000, 10);
    inv5.visible = false;
    inv6=createSprite(2800, 300, 300, 10);
    inv6.visible = false;
    inv7=createSprite(3300, 275, 100, 10);
    inv7.visible = false;
    inv8=createSprite(3700, 275, 100, 10);
    inv8.visible = false;
    inv9=createSprite(4100, 275, 100, 10);
    inv9.visible = false;
    inv10=createSprite(5000, 575, 900, 10);
    inv10.visible = false;
    inv11=createSprite(5700, 400, 200, 10);
    inv11.visible = false;
    inv12=createSprite(6300, 350, 400, 10);
    inv12.visible = false;
    inv13=createSprite(7200, 550, 900, 10);
    inv13.visible = false;
    inv14=createSprite(8600, 575, 1500, 10);
    inv14.visible = false;




    //--------------------resender--------------------------
    rsd1=createSprite(1950, 400, 50, 1000);
    rsd1.visible = false;
    rsd2=createSprite(2600, 400, 50, 1000);
    rsd2.visible = false;

    rsd3=createSprite(4600, 400, 50, 1000);
    rsd3.visible = false;
    rsd4=createSprite(5500, 400, 50, 1000);
    rsd4.visible = false;

    //win----
    win=createSprite(8600, 575, 100, 900);
    win.visible = false;


  // display start/end----
  end_plate = createSprite(600,300,1600,800);
  end_plate.shapeColor='black';

  start_plate = createSprite(650,450,300,100);
  start_plate.shapeColor='blue';

  win_plate = createSprite(600,300,1600,800);
  win_plate.shapeColor='black';
 // win_plate.visible = false;

  }






  function draw() {
    background(bmg);  
    drawSprites();
    
 //-----------------------------------------------------------MENU----------------------------------------------------------------------------------
 
 

 if(Gamestate == 0 ){
  
  Welcomepage();
  
   end_plate.visible = true;
   start_plate.visible = true;
   win_plate.visible = false;


  

  
   npc1.velocityX=0;
   npc2.velocityX=0;
   player.velocityY=0;
   player.velocityX=0;

 

 Poisition();


   if(keyWentDown("space")){
     Gamestate = 1;
   }
 }








//---------------------------------------------------------start----------------------------------------------------------------------------------------------//

//-------------------------------------gamestate 1 --------------------------------------------------------


  if(Gamestate === 1){
    fill("red")
    text("press 'esc' to return in menu",10,20)

    if(keyDown("esc")){
      Gamestate = 0;
    }


  // end/start plate debug.......
  end_plate.visible = false;
  start_plate.visible = false;
  win_plate.visible = false;



 //-------------------------------------collide---------------------------------------------------------------------------------


    //base
  player.collide(base1);
  player.collide(base2);
  player.collide(base3);
  player.collide(base4);
  player.collide(base5);
  player.collide(base6);
  player.collide(base7);
  player.collide(base8);
  player.collide(base9);
  player.collide(base10);
  player.collide(base11);
  player.collide(base12);
  player.collide(base13);
  player.collide(base14);




  //wall
  player.collide(wall1);
  player.collide(wall2);
  player.collide(wall3);
  player.collide(wall4);
  player.collide(wall5);
 // player.collide(wall4);











  //--------------------------------------------gravity--------------------------------------------------------
    

  player.velocityY =  player.velocityY + 1.5;
  




  //---------------------------------------------npc movement--------------------------------------------------

  //npc1--
  if(npc1.isTouching(rsd1)){
    npc1.velocityX = 5;
    npc1.addImage(npc_i1);
  }
  if(npc1.isTouching(rsd2)){
    npc1.velocityX = -5;
    npc1.addImage(npc_i2);
  }

  //--npc2--
  if(npc2.isTouching(rsd3)){
    npc2.velocityX = 5;
    npc2.addImage(npc_i1);
  }
  if(npc2.isTouching(rsd4)){
    npc2.velocityX = -5;
    npc2.addImage(npc_i2);

  }



  //-----------------------------------------------controlls-------------------------------------------------



  //--------------------------move forword---------------------------------
  if(keyDown("d")){
 
    i=1 

    if(player.x >= 301){

      
        
      //--base--
        base1.x=base1.x-10;
        base2.x=base2.x-10;
        base3.x=base3.x-10;
        base4.x=base4.x-10;
        base5.x=base5.x-10;
        base6.x=base6.x-10;
        base7.x=base7.x-10;
        base8.x=base8.x-10;
        base9.x=base9.x-10;
        base10.x=base10.x-10;
        base11.x = base11.x-10;
        base12.x = base12.x-10;
        base13.x = base13.x-10;
        base14.x = base14.x-10;


        //--walls--
        wall1.x=wall1.x-10;
        wall2.x=wall2.x-10;
        wall3.x=wall3.x-10;
        wall4.x=wall4.x-10;
        wall5.x=wall5.x-10;



        //--inv--
        inv1.x = inv1.x-10;
        inv2.x = inv2.x-10;
        inv3.x = inv3.x-10;
        inv4.x = inv4.x-10;
        inv5.x = inv5.x-10;
        inv6.x = inv6.x-10;
        inv7.x = inv7.x-10;
        inv8.x = inv8.x-10;
        inv9.x = inv9.x-10;
        inv10.x = inv10.x-10;
        inv11.x = inv11.x-10;
        inv12.x = inv12.x-10;
        inv13.x = inv13.x-10;
        inv14.x = inv14.x-10;
       


       //win
       win.x = win.x-10;





        //--rsd--
        rsd1.x = rsd1.x-10;
        rsd2.x = rsd2.x-10;


        rsd3.x = rsd3.x-10;
        rsd4.x = rsd4.x-10;


        //--npc--
        npc1.x = npc1.x-10;
        npc2.x = npc2.x-10;


    }else{

        player.x=player.x+1;
        

    }
  }else  if(keyDown("a")){
    if(player.x <= 299){
           i=1
      //--base--
        
        base1.x=base1.x+10;
        base2.x=base2.x+10;
        base3.x=base3.x+10;
        base4.x=base4.x+10;
        base5.x=base5.x+10;
        base6.x=base6.x+10;
        base7.x=base7.x+10;
        base8.x=base8.x+10;
        base9.x=base9.x+10;
        base10.x=base10.x+10;
        base11.x=base11.x+10;
        base12.x=base12.x+10;
        base13.x=base13.x+10;
        base14.x = base14.x+10;



        //--walls--
        wall1.x=wall1.x+10;
        wall2.x=wall2.x+10;
        wall3.x=wall3.x+10;
        wall4.x=wall4.x+10;
        wall5.x=wall5.x+10;

        
        //--inv--
        inv1.x = inv1.x+10;
        inv2.x = inv2.x+10;
        inv3.x = inv3.x+10;
        inv4.x = inv4.x+10;
        inv5.x = inv5.x+10;
        inv6.x = inv6.x+10;
        inv7.x = inv7.x+10;
        inv8.x = inv8.x+10;
        inv9.x = inv9.x+10;
        inv10.x = inv10.x+10;
        inv11.x = inv11.x+10;
        inv12.x = inv12.x+10;
        inv13.x = inv13.x+10;
        inv14.x = inv14.x+10;



      //win---
        win.x = win.x+10;


        //--rsd--
        rsd1.x = rsd1.x+10;
        rsd2.x = rsd2.x+10;


        rsd3.x = rsd3.x+10;
        rsd4.x = rsd4.x+10;





      //--npc--
      npc1.x = npc1.x+10;
      npc2.x = npc2.x+10;


    }else{

        player.x=player.x-1;

  }
  }else{
    i = 0 ;
  }
     
   
    
  

 if(keyWentDown("d")){
  player.addAnimation("running", run_d1); 
 }else if(keyWentDown("a")){
    player.addAnimation("running", run_d2); 
   }else if( i==0){
  player.addAnimation("running", run_i);
 }

   


  //---------------------------move backword--------------------------------


 

 
  //----------jump---------------
  if(keyWentDown("SPACE")){

  if(player.isTouching(inv1) || player.isTouching(inv2) || player.isTouching(inv3) || player.isTouching(inv4) || player.isTouching(inv5) || player.isTouching(inv6)|| player.isTouching(inv7)|| player.isTouching(inv8)|| player.isTouching(inv9)|| player.isTouching(inv10)|| player.isTouching(inv11)|| player.isTouching(inv12)|| player.isTouching(inv13)|| player.isTouching(inv14)){
      
      player.velocityY=-25;

    }
  }



  //-------------------------------------------------game end----------------------------------------------------------------------------------------------
  if(player.collide(npc1)|| player.collide(VOID)||player.collide(npc2) ){
    Gamestate = 2
  }
  if(player.isTouching(win) ){
    Gamestate = 3
  }


  }




  //-----------------------------------------------------restart------------------------------------------------------------------------------------------

  if(Gamestate == 2){

  //endplate display.......
  end_plate.visible = true;
  start_plate.visible = false;
  win_plate.visible = false;



  

    fill("red")
    textSize(100);
    text("YOU DIED❗",390,250);


    fill("grey")
    textSize(100);
    text("↻",600,400);

    fill("green")
    textSize(25);
    text("(Press 'SPACE' to replay)",490,450);

    npc1.velocityX=0;
    player.velocityY=0;
    player.velocityX=0;

  if(keyWentDown("space")){

 Poisition();






  //game state
  Gamestate=1; 

  }




  }

  if(Gamestate == 3){

    //endplate display.......
    end_plate.visible = true;
    start_plate.visible = false;
    win_plate.visible = true;

  
  
    
  
      fill("yellow")
      textSize(100);
      text("YOU WIN",390,250);

      fill("blue")
      textSize(20);
      text("more coming soon!",650,320);

      fill("grey")
      textSize(100);
      text("↻",600,400);
  
      fill("green")
      textSize(25);
      text("(Press 'SPACE' to replay)",490,450);
  
      npc1.velocityX=0;
      player.velocityY=0;
      player.velocityX=0;
  
    if(keyWentDown("space")){
  
   Poisition();
  
  
  
  
  
  
    //game state
    Gamestate=0; 
  
    }
  
  
  
  
    }




  //----------------------------------------------------------------END---------------------------------------------------------------------------//



  }







  function Poisition(){
    

//base-------and------inv----
 base1.x=inv1.x=500;
 base2.x=inv2.x=600;
 base3.x=inv3.x=1100;
 base4.x=inv4.x=1750;
 base5.x=inv5.x=2400;
 base6.x=inv6.x=2800;
 base7.x=inv7.x=3300;
 base8.x=inv8.x=3700;
 base9.x=inv9.x=4100;
 base10.x=inv10.x=5000;
 base11.x=inv11.x=5700;
 base12.x=inv12.x=6300;
 base13.x=inv13.x=7200;
 base14.x=inv14.x=8600;





 



 //player------
 player.x=300;
 player.y=500;

 //npc-------
 npc1.x=1950;
 npc2.x=5500;

 //rsd------
 rsd1.x=1950;
 rsd2.x=2600;


 rsd3.x=4600;
 rsd4.x=5500;


 //walls----
 wall1.x=-100;
 wall2.x=1250;
 wall3.x=3300;
 wall4.x=3700;
 wall5.x=4100;

 //win--
 win.x=8600;

  }



  function Welcomepage(){
    textSize(50);
    text("WELCOME",530,100);
    textSize(40);
    
    text("to",640,150);
    fill("gold");
   
    textSize(100);
    text("BLO⚒MAN G",310,250);
   
    textSize(80);
    text("📀",903,245);
   
    fill("grey");
    textSize(20);
    text("Made By",940,300);
    textSize(30);
   
    fill("red")
    text("SJ",1030,300);
   
    textSize(300);
    text("🔲",-70,620);
   
    fill("white");
    textSize(30);
    text("🕹CONTROLS🕹",25,400);
   
    fill("black");
    textSize(25);
    text("'D' = '➡'",40,450);
    text("'A' = '⬅'",40,500);
    text("'SPACE' = '⬆'",40,550);
    text("'ESC' = '↩'",40,600);
 
 
   
    fill("white");
    textSize(70);
    text("▶",620,470);
    textSize(15);
    text("( press 'SPACE' )",590,490);
 
  }