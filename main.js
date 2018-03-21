var game = new Phaser.Game(400, 500);

var mainState = {
	preload: function(){
		game.load.image('bird', 'bird.png');

			//wrzucanie plikow z obrazkami i audio


	},

	create: function(){
		game.stage.backgroundColor = "blue"; //kolor tla
		game.physics.startSystem(Phaser.Physics.ARCADE);
			//ustawianie na miejscu obiektow ktore maja byc po starcie

			this.bird = game.add.sprite(100, 300, 'bird');

			game.physics.arcade.enable(this.bird);

			this.bird.body.gravity.y = 1000;

			
	},

	upload: function(){
			//co ma sie zmieniac w czsie


	},


};

game.state.add('main', mainState);
game.state.start('main');