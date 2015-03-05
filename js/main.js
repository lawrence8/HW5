window.onload = function() {
    
    
   


var game = new Phaser.Game(800, 600, Phaser.AUTO, '', { preload: preload, create: create, update: update });

function preload() {

    game.load.image('sky', 'assets/pics/sky.png');
    game.load.image('ground', 'assets/pics/platform.png');
    game.load.image('star', 'assets/pics/b.png');
    game.load.spritesheet('dude', 'assets/pics/index.png');
	game.load.audio('a', 'assets/5.mp3');

}

var player;
var platforms;
var cursors;

var stars;
var score = 0;
var scoreText;
var a;
function create() {


    game.physics.startSystem(Phaser.Physics.ARCADE);

   
    game.add.sprite(0, 0, 'sky');

   
    platforms = game.add.group();

  
    platforms.enableBody = true;

    
    var ground = platforms.create(0, game.world.height - 64, 'ground');

    
    ground.scale.setTo(2, 2);

    
    ground.body.immovable = true;

  
    var ledge = platforms.create(400, 400, 'ground');
	
    ledge.body.immovable = true;
	ledge.scale.setTo(0.5, 0.5);

    ledge = platforms.create(0, 400, 'ground');
    ledge.body.immovable = true;
	ledge.scale.setTo(0.5, 0.5);
	
	ledge = platforms.create(100, 300, 'ground');
    ledge.body.immovable = true;
	ledge.scale.setTo(1, 0.5);
	
	ledge = platforms.create(650, 300, 'ground');
    ledge.body.immovable = true;
	ledge.scale.setTo(0.5, 0.5);
	
	ledge = platforms.create(500, 200, 'ground');
    ledge.body.immovable = true;
	ledge.scale.setTo(0.5, 1);
	
	ledge = platforms.create(200, 200, 'ground');
    ledge.body.immovable = true;
	ledge.scale.setTo(1, 1);
	
	ledge = platforms.create(-100, 200, 'ground');
    ledge.body.immovable = true;
	ledge.scale.setTo(0.5, 0.5);
	

   
    player = game.add.sprite(32, game.world.height - 150, 'dude');
	player.scale.setTo(0.2, 0.2);

   
    game.physics.arcade.enable(player);

    player.body.bounce.y = 0.2;
    player.body.gravity.y = 300;
    player.body.collideWorldBounds = true;

    
 

    
    stars = game.add.group();

    stars.enableBody = true;

 
    
		
		
   
   var rand = game.rnd.realInRange(100, 500);
        
        var star = stars.create(rand, rand, 'star');
		star.scale.setTo(0.2, 0.2);

        

       
        star.body.gravity.y = 300;

       
        star.body.bounce.y = 0.7 + Math.random() * 0.2;
    
   
   

    

    
    scoreText = game.add.text(16, 16, 'Collect the documents    Score: 0', { fontSize: '32px', fill: '#000' });

    cursors = game.input.keyboard.createCursorKeys();
	
	a = game.add.audio('a');
	a.volume=0.08;
	 a.allowMultiple = true;
    
}

function update() {
   

    game.physics.arcade.collide(player, platforms);
    game.physics.arcade.collide(stars, platforms);

    
    game.physics.arcade.overlap(player, stars, collectStar,collectStar2);

    
    player.body.velocity.x = 0;
	if(score>90){
		scoreText.text = 'GOOD JOB, YOU CAN GET HIRED NOW' ;
		}
	
	
	
	
	

    if (cursors.left.isDown)
    {
        
        player.body.velocity.x = -150;

        
    }
    else if (cursors.right.isDown)
    {
        
        player.body.velocity.x = 150;

        
    }
    else
    {
        
        player.animations.stop();

        
    }
    
   
    if (cursors.up.isDown && player.body.touching.down)
    {
        player.body.velocity.y = -350;
    }

}

function collectStar (player, star) {
   
   a.play();
  
    star.kill();

    score += 10;
    scoreText.text = 'Collect the documents     Score: ' + score;

}


function collectStar2 (player, star) {
   
    if (score < 90){
	 stars = game.add.group();

    
    stars.enableBody = true;
   
   var rand = game.rnd.realInRange(100, 500);
       
        var star = stars.create(rand, rand, 'star');
		star.scale.setTo(0.2, 0.2);

        

        
        star.body.gravity.y = 300;

        star.body.bounce.y = 0.7 + Math.random() * 0.2;
    
   
   }
  
   
   }

};