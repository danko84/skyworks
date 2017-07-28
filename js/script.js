// JavaScript Document
window.onload = function(){
	console.log("Junior developer test.");

	// declare your variables here.
	var background;
	var sky;
	var ms;
	var samsung;
	var gradient_text;
	var stamp;
	var ellipse;
	var button;
	var buttonblue;


	// store a reference to the canvas which we will draw on.
	var stage = new createjs.Stage("stage");

	// register the stage to handle mouse events.
	stage.enableMouseOver(10);

	// register the Ticker to listen for the tick event.
	createjs.Ticker.addEventListener("tick", handleTick, false);

	// redraw the canvas - like Event.ENTER_FRAME in Adobe Flash.
	function handleTick(event) {
		stage.update();
	}

	// create a preloader to load the images.
	var loader = new createjs.LoadQueue(false);

	// when all images are loaded call the handleAllImageLoaded function.
	loader.on('complete', handleAllImagesLoaded, this);

	// provide a manifest of files and ids to be loaded.
	loader.loadManifest([
		{id:"background", src:"images/background.png"},
		{id:"ms", "src": "images/ms_shadow.png"},
		{id:"sky", src: "images/sky_large.png"},
		{id:"gradient_text", src: "images/gradient_text.png"},
		{id:"samsung", src: "images/samsung_shadow.png"},
		{id:"stamp", src: "images/stamp.png"},
		{id:"button", src: "images/button.png"},
		{id:"button", src: "images/button.png"},
		{id:"ellipse", src: "images/ellipse.png"}

	]);

	function handleAllImagesLoaded() {
		console.log("All the images have loaded.");
		drawTheBannerBackground();
	}

	function drawTheBannerBackground() {
		console.log("draw and animate the background.");

		// provide the loader result for the item with id == 'background'
		// as a bitmap which will be stored in our background variable.
		background = new createjs.Bitmap( loader.getResult( "background" ) );

		// set the background bitmap alpha to zero.
		background.alpha = 0;

		// add background to the display list.
		stage.addChild( background );

		// animate the background bitmap alpha value to 1 over the duration of 1000 milliseconds.
		createjs.Tween.get( background ).to( {alpha:1}, 1000 );

		// after the background is drawn on the canvas draw and animate the content for frame 1.
		setTimeout(frame1, 100);
	}

	function frame1() {
		console.log("draw and animate frame one.");

		loadImages();

		// refer to the creative brief, frame 1 for guidance.
		function loadImages() {
		ms = new createjs.Bitmap( loader.getResult( "ms" ) );
		ms.alpha = 1;
		createjs.Tween.get( ms ).wait(3999).to( {alpha:0}, 1 );
		ms.x = 170;
		ms.y = 107;
		stage.addChild( ms );

		samsung = new createjs.Bitmap( loader.getResult( "samsung" ) );
		samsung.alpha = 1;
		createjs.Tween.get( samsung ).wait(3999).to( {alpha:0}, 1 );
		samsung.x = 50;
		samsung.y = 100;
		stage.addChild( samsung );

		gradient_text = new createjs.Bitmap( loader.getResult( "gradient_text" ) );
		gradient_text.alpha = 0;
		createjs.Tween.get( gradient_text ).to( {alpha:1}, 2000 ).wait(1999).to( {alpha:0}, 1 );
		gradient_text.x = 50;
		gradient_text.y = 15;
		stage.addChild( gradient_text );

		var text1 = new createjs.Text("When you switch to 12 months", "12px SkyText-Bold", "#284698");
		text1.x = 70;
		text1.y = 55;
		text1.textBaseline = "alphabetic";
		text1.alpha = 0;
		createjs.Tween.get( text1 ).wait(1000).to( {alpha:1}, 2000 ).wait(999).to( {alpha:0}, 1 );
		stage.addChild( text1 );

		var text2 = new createjs.Text("free Sky Broadband Unlimited", "12px SkyText-Bold", "#284698");
		text2.x = 72;
		text2.y = 70;
		text2.textBaseline = "alphabetic";
		text2.alpha = 0;
		createjs.Tween.get( text2 ).wait(1000).to( {alpha:1}, 2000 ).wait(999).to( {alpha:0}, 1 );
		stage.addChild( text2 );

		sky = new createjs.Bitmap( loader.getResult( "sky" ) );
		sky.x = 10;
		sky.y = 200;
		stage.addChild( sky );

	}

		// after a timeout and the animations have completed, draw frame 2.
		setTimeout(frame2, 3000);
	}

	function frame2() {
		console.log("draw and animate frame two.");

		loadImages2();

		// refer to the creative brief, frame 2 for guidance.

		function loadImages2() {

			var text3 = new createjs.Text("When you join Sky with", "24px SkyText-Regular", "#7D3A8E");
			text3.x = 35;
			text3.y = 35;
			text3.textBaseline = "alphabetic";
			text3.alpha = 0;
			createjs.Tween.get( text3 ).wait(1000).to( {alpha:1}, 1000 ).wait(1699).to( {alpha:0}, 1 );
			stage.addChild( text3 );

			var text4 = new createjs.Text("Sky Line Rental at £16.40pm applies", "11px SkyText-Regular", "#4A4A49");
			text4.x = 115;
			text4.y = 225;
			text4.textBaseline = "alphabetic";
			text4.alpha = 0;
			createjs.Tween.get( text4 ).wait(800).to( {alpha:1}, 1000 ).wait(1899).to( {alpha:0}, 1 );
			stage.addChild( text4 );

			stamp = new createjs.Bitmap( loader.getResult( "stamp" ) );
			stamp.x = -300;
			stamp.y = 60;
			createjs.Tween.get( stamp, { loop: false } ).wait(1000).to( {y:-300, x:60}, 0, createjs.Ease.get(-12) ).to( { y: 50, x: 60 }, 400, createjs.Ease.get(-11) )
			.to( { y: 60, x: 60 }, 100, createjs.Ease.get(-10) ).to( { y: 50, x: 60 }, 100, createjs.Ease.get(-9) ).to( { y: 58, x: 60 }, 100, createjs.Ease.get(-8) )
			.to( { y: 50, x: 60 }, 100, createjs.Ease.get(-7) ).to( { y: 56, x: 60 }, 100, createjs.Ease.get(-6) ).to( { y: 50, x: 60 }, 100, createjs.Ease.get(-4) )
			.to( { y: 54, x: 60 }, 100, createjs.Ease.get(-3) ).to( { y: 50, x: 60 }, 100, createjs.Ease.get(-2) ).to( { y: 52, x: 60 }, 100, createjs.Ease.get(-1) )
			.to( { y: 50, x: 60 }, 100, createjs.Ease.get(-0) ).wait(1299).to( {alpha:0}, 1 );
			stage.addChild( stamp );

		}
		// after a timeout and the animations have completed, draw frame 3.
		setTimeout(frame3, 3000);
	}

	function frame3() {
		console.log("draw and animate frame three.");

		loadImages3();

		// refer to the creative brief, frame 3 for guidance.

		function loadImages3() {

			button = new createjs.Bitmap( loader.getResult( "button" ) );
			button.alpha = 0;
			createjs.Tween.get( button ).wait(800).to( {alpha:1}, 1);
			button.x = 140;
			button.y = 198;
			stage.addChild( button );

			buttonblue = new createjs.Bitmap( loader.getResult( "buttonblue" ) );
			buttonblue.alpha = 0;
			createjs.Tween.get( buttonblue ).wait(800).to( {alpha:1}, 100).to( {alpha:0}, 300 );
			buttonblue.x = 140;
			buttonblue.y = 198;
			stage.addChild( buttonblue );

			var text13 = new createjs.Text("Find Out More", "16px SkyText-Bold", "#FFFFFF");
			text13.x = 158;
			text13.y = 220;
			text13.textBaseline = "alphabetic";
			text13.alpha = 0;
			createjs.Tween.get( text13 ).wait(800).to( {alpha:1}, 1200 );
			stage.addChild( text13 );

			var text5 = new createjs.Text("1 year free unlimited music with", "20px SkyTextMedium-Regular", "#7D3A8E");
			text5.x = 15;
			text5.y = 45;
			text5.textBaseline = "alphabetic";
			text5.alpha = 0;
			createjs.Tween.get( text5 ).wait(1300).to( {alpha:1}, 1200 );
			stage.addChild( text5 );

			var text6 = new createjs.Text("Deezer", "20px SkyTextMedium-Regular", "#7D3A8E");
			text6.x = 27;
			text6.y = 70;
			text6.textBaseline = "alphabetic";
			text6.alpha = 0;
			createjs.Tween.get( text6 ).wait(1300).to( {alpha:1}, 1200 );
			stage.addChild( text6 );

			var text7 = new createjs.Text("or", "20px SkyText-Regular", "#7D3A8E");
			text7.x = 90;
			text7.y = 70;
			text7.textBaseline = "alphabetic";
			text7.alpha = 0;
			createjs.Tween.get( text7 ).wait(1300).to( {alpha:1}, 1200 );
			stage.addChild( text7 );

			var text8 = new createjs.Text("£100 M&S Voucher", "20px SkyTextMedium-Regular", "#7D3A8E");
			text8.x = 111;
			text8.y = 70;
			text8.textBaseline = "alphabetic";
			text8.alpha = 0;
			createjs.Tween.get( text8 ).wait(1300).to( {alpha:1}, 1200 );
			stage.addChild( text8 );

			var text9 = new createjs.Text("when you join online with 12 months", "14px SkyTextMedium-Regular", "#284698");
			text9.x = 40;
			text9.y = 95;
			text9.textBaseline = "alphabetic";
			text9.alpha = 0;
			createjs.Tween.get( text9 ).wait(1600).to( {alpha:1}, 1200 );
			stage.addChild( text9 );

			var text10 = new createjs.Text("free Sky Broadband Unlimited", "14px SkyTextMedium-Regular", "#284698");
			text10.x = 59;
			text10.y = 112;
			text10.textBaseline = "alphabetic";
			text10.alpha = 0;
			createjs.Tween.get( text10 ).wait(1600).to( {alpha:1}, 1200 );
			stage.addChild( text10 );

			var text11 = new createjs.Text("Limited time offer", "19px SkyText-Regular", "#000000");
			text11.x = 77;
			text11.y = 150;
			text11.textBaseline = "alphabetic";
			text11.alpha = 0;
			createjs.Tween.get( text11 ).wait(2000).to( {alpha:1}, 1200 );
			stage.addChild( text11 );

			var text12 = new createjs.Text("Sky Line Rental at £16.40pm applies", "10px SkyText-Regular", "#AFAFAF");
			text12.x = 74;
			text12.y = 190;
			text12.textBaseline = "alphabetic";
			text12.alpha = 0;
			createjs.Tween.get( text12 ).wait(2300).to( {alpha:1}, 1200 );
			stage.addChild( text12 );

			ellipse = new createjs.Bitmap( loader.getResult( "ellipse" ) );
			ellipse.alpha = 0;
			createjs.Tween.get( ellipse ).wait(2500).to( {alpha:0.5}, 100).to( {alpha:0.2}, 300 );
			ellipse.x = 138;
			ellipse.y = 195;
			stage.addChild( ellipse );

			var shape = new createjs.Shape().set({x:105,y:200});
			 shape.graphics.beginFill("#ffffff").drawCircle(50,15,5);

			 var blurFilter = new createjs.BlurFilter(2, 40, 5);
			 shape.filters = [blurFilter];
			 var bounds = blurFilter.getBounds();

			 shape.cache(-50+bounds.x, -50+bounds.y, 100+bounds.width, 100+bounds.height);

			shape.alpha = 0;
			createjs.Tween.get( shape ).wait(3000).to( {alpha: 1}, 1 ).to( {y:200, x:105 }, 100, createjs.Ease.get(-2) )
			.to( {y:200, x:220 }, 800, createjs.Ease.get(-1) ).to( {alpha: 0}, 1 );
			stage.addChild( shape );

		}

	}

};
