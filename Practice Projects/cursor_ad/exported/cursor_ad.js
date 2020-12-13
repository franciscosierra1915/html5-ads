(function (cjs, an) {

var p; // shortcut to reference prototypes
var lib={};var ss={};var img={};
lib.ssMetadata = [];


(lib.AnMovieClip = function(){
	this.actionFrames = [];
	this.ignorePause = false;
	this.gotoAndPlay = function(positionOrLabel){
		cjs.MovieClip.prototype.gotoAndPlay.call(this,positionOrLabel);
	}
	this.play = function(){
		cjs.MovieClip.prototype.play.call(this);
	}
	this.gotoAndStop = function(positionOrLabel){
		cjs.MovieClip.prototype.gotoAndStop.call(this,positionOrLabel);
	}
	this.stop = function(){
		cjs.MovieClip.prototype.stop.call(this);
	}
}).prototype = p = new cjs.MovieClip();
// symbols:
// helper functions:

function mc_symbol_clone() {
	var clone = this._cloneProps(new this.constructor(this.mode, this.startPosition, this.loop, this.reversed));
	clone.gotoAndStop(this.currentFrame);
	clone.paused = this.paused;
	clone.framerate = this.framerate;
	return clone;
}

function getMCSymbolPrototype(symbol, nominalBounds, frameBounds) {
	var prototype = cjs.extend(symbol, cjs.MovieClip);
	prototype.clone = mc_symbol_clone;
	prototype.nominalBounds = nominalBounds;
	prototype.frameBounds = frameBounds;
	return prototype;
	}


(lib.redButton = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#CB9867").s().p("AgmBTQgHgFgCgHQgCgHAAgQIAAhCQAAgQACgHQACgHAHgFQAIgFAKAAQAIAAAIADQAFACAFAGIAAgoIAsAAIAACtIgsAAIAAgLQgGAHgFADQgIADgHAAQgKAAgIgFgAgEgfQgBADAAAIIAABFQAAAJABACQABADADAAQAEAAABgDQACgDgBgMIAAhBQAAgIgBgCQgBgDgEAAQgDAAgBACg");
	this.shape.setTransform(46.35,15.625);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#CB9867").s().p("AgWBGQgLgEgFgHQgGgHgDgIQgCgJAAgQIAAgoQAAgTAFgLQAFgKAMgGQALgGAPAAQARAAAMAHQAMAHAFALQAFAMAAAVIAAASIg3AAIAAAeQAAAKABADQABADADAAQAFAAACgEQACgEAAgKIAAgTIApAAIAAAKQAAANgCAIQgCAHgGAIQgGAIgJAEQgKAEgOAAQgNAAgKgEgAgEgtQgBADAAAMIAAAKIALAAIAAgKQAAgLgBgDQgBgEgEAAQgDAAgBADg");
	this.shape_1.setTransform(35.125,17.075);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#CB9867").s().p("AgiBJIAAiOIArAAIgCATQAKgVASAAIAAAxQgMAAgGAEQgGADgBAGQgBAGAAATIAAA5g");
	this.shape_2.setTransform(25.875,16.95);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#FF0001").s().p("AjbCWQg9AAgtgsQgrgsAAg+IAAAAQAAg9ArgsQAtgsA9AAIG3AAQA9AAAsAsQAsAsAAA9IAAAAQAAA+gsAsQgsAsg9AAg");
	this.shape_3.setTransform(36.9,15.425);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,73.8,30.9);


(lib.redBall = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FF0000").s().p("AjTCxQhXhKgBhnQABhmBXhKQBYhJB7AAQB8AABYBJQBXBKABBmQgBBnhXBKQhYBJh8AAQh7AAhYhJg");
	this.shape.setTransform(29.95,25);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.redBall, new cjs.Rectangle(0,0,59.9,50), null);


(lib.noButton = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#CB9867").s().p("AgWBGQgLgEgFgHQgGgHgDgIQgCgJAAgQIAAgoQAAgTAFgLQAFgKAMgGQALgGAPAAQARAAAMAHQAMAHAFALQAFAMAAAVIAAASIg3AAIAAAeQAAAKABADQABADADAAQAFAAACgEQACgEAAgKIAAgTIApAAIAAAKQAAANgCAIQgCAHgGAIQgGAIgJAEQgKAEgOAAQgNAAgKgEgAgEgtQgBADAAAMIAAAKIALAAIAAgKQAAgLgBgDQgBgEgEAAQgDAAgBADg");
	this.shape.setTransform(52.525,17.075);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#CB9867").s().p("AAHBJIAAhiQAAgPgBgDQgBgDgFAAQgDAAgBADQgCAEAAAQIAABgIgrAAIAAiOIAsAAIgBANQAFgIAGgEQAHgDAJAAQALAAAHAEQAHAGACAIQACAIAAATIAABjg");
	this.shape_1.setTransform(41.175,16.95);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#CB9867").s().p("AgXBHQgKgEgFgGQgGgGgCgJQgDgJAAgTIAAgjQAAgUAEgLQAFgLALgHQALgHASAAQANAAALAFQAKAEAGAHQAFAHADAHQACAIAAAPIAAAiQAAATgCAJQgCAJgHAIQgGAHgKAEQgKAEgNAAQgNAAgKgDgAgEgtQgBADAAALIAAA/IABAOQABADADAAQAEAAABgDIABgMIAAhBQAAgLgBgDQgBgDgEAAQgDAAgBADg");
	this.shape_2.setTransform(29.825,17.075);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#CB9867").s().p("AAHBJIAAhiQAAgPgBgDQgBgDgFAAQgDAAgBADQgCAEAAAQIAABgIgrAAIAAiOIAsAAIgBANQAFgIAGgEQAHgDAJAAQALAAAHAEQAHAGACAIQACAIAAATIAABjg");
	this.shape_3.setTransform(18.475,16.95);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#000000").s().p("AjOCTQg9AAgrgrQgrgrAAg9QAAg8ArgrQArgrA9AAIGdAAQA9AAArArQArArAAA8QAAA9grArQgrArg9AAg");
	this.shape_4.setTransform(35.4,15.4);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,70.8,30.9);


(lib.blueButton = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#CB9867").s().p("AgWBGQgLgEgFgHQgGgHgDgIQgCgJAAgQIAAgoQAAgTAFgLQAFgKAMgGQALgGAPAAQARAAAMAHQAMAHAFALQAFAMAAAVIAAASIg3AAIAAAeQAAAKABADQABADADAAQAFAAACgEQACgEAAgKIAAgTIApAAIAAAKQAAANgCAIQgCAHgGAIQgGAIgJAEQgKAEgOAAQgNAAgKgEgAgEgtQgBADAAAMIAAAKIALAAIAAgKQAAgLgBgDQgBgEgEAAQgDAAgBADg");
	this.shape.setTransform(49.525,17.075);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#CB9867").s().p("AgjBFQgGgDgEgGQgDgGAAgGIgBgZIAAheIAsAAIAABfQAAARABADQABADADABQAFgBABgDIAAgVIAAheIAsAAIAACNIgsAAIAAgMQgEAIgFADQgHAEgJAAQgKAAgGgEg");
	this.shape_1.setTransform(38.15,17.2);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#CB9867").s().p("AgWBXIAAitIAsAAIAACtg");
	this.shape_2.setTransform(29.45,15.5);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#CB9867").s().p("AAGBVQgGgDgFgHIgDALIgpAAIAAitIAsAAIAAApQAFgGAFgDQAHgDAIAAQAJAAAHACQAGADAEAFQADAFAAAFIABAVIAAA/QAAAQgCAHQgCAIgHAGQgJAFgKAAQgIAAgGgDgAgEgeQgCADABAMIAAA8QgBAMACADQABADAEAAQADAAABgDQACgEAAgMIAAg7QAAgLgCgEQgBgDgEAAQgDAAgBADg");
	this.shape_3.setTransform(20.8,15.625);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#0000FF").s().p("AjVCJQg5AAgogoQgogoAAg5IAAAAQAAg4AogoQAogoA5AAIGrAAQA4AAAoAoQAoAoABA4IAAAAQgBA5goAoQgoAog4AAg");
	this.shape_4.setTransform(35.05,15.425);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,70.1,30.9);


(lib.blueBall = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#0000FF").s().p("AjNCqQhVhGAAhkQAAhjBVhGQBWhGB3AAQB4AABWBGQBVBGAABjQAABkhVBGQhWBGh4AAQh3AAhWhGg");
	this.shape.setTransform(29.1,24);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.blueBall, new cjs.Rectangle(0,0,58.2,48), null);


// stage content:
(lib.cursor_ad = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	this.actionFrames = [0];
	this.isSingleFrame = false;
	// timeline functions:
	this.frame_0 = function() {
		if(this.isSingleFrame) {
			return;
		}
		if(this.totalFrames == 1) {
			this.isSingleFrame = true;
		}
		this.blueButton.addEventListener("click", cursorBlue.bind(this));
		
		function cursorBlue() {
			this.addEventListener("tick", customMouseBlue.bind(this));
		}
		
		function customMouseBlue() {
		    this.blueBall.visible = true;
			this.redBall.visible = false;
			this.blueBall.x = stage.mouseX;
			this.blueBall.y = stage.mouseY;
		    //stage.canvas.style.cursor = "none";
		}
		
		this.redButton.addEventListener("click", cursorRed.bind(this));
		
		function cursorRed() {
			this.addEventListener("tick", customMouseRed.bind(this));
		}
		
		function customMouseRed() {
			this.redBall.visible = true;
		    this.blueBall.visible = false;
			this.redBall.x = stage.mouseX;
			this.redBall.y = stage.mouseY;
		    //stage.canvas.style.cursor = "none";
		}
		
		this.noButton.addEventListener("click", cursorNone.bind(this));
		
		function cursorNone() {
			this.addEventListener("tick", customMouseRed.bind(this));
			this.addEventListener("tick", customMouseBlue.bind(this));
			//stage.removeChild(redBall);
			//stage.canvas.style.cursor = "default";
			this.redBall.visible = false;
		    this.blueBall.visible = false;
			console.log("just cliked none");
		}
		
		/* Click to Hide an Object
		Clicking on the specified symbol instance hides it.
		
		Instructions:
		1. Use this code for objects that are currently visible.
		*/
		/*
		this.noButton.addEventListener("click", fl_ClickToHide.bind(this));
		
		function fl_ClickToHide()
		{
			this.noButton.visible = false;
		}
		*/
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(1));

	// noButton
	this.noButton = new lib.noButton();
	this.noButton.name = "noButton";
	this.noButton.setTransform(47.45,55.3,1,1,0,0,0,35.4,15.4);

	this.timeline.addTween(cjs.Tween.get(this.noButton).wait(1));

	// redButton
	this.redButton = new lib.redButton();
	this.redButton.name = "redButton";
	this.redButton.setTransform(130.35,19,1,1,0,0,0,36.9,15.4);

	this.timeline.addTween(cjs.Tween.get(this.redButton).wait(1));

	// blueButton
	this.blueButton = new lib.blueButton();
	this.blueButton.name = "blueButton";
	this.blueButton.setTransform(47.85,19,1,1,0,0,0,35.1,15.4);

	this.timeline.addTween(cjs.Tween.get(this.blueButton).wait(1));

	// redBall
	this.redBall = new lib.redBall();
	this.redBall.name = "redBall";
	this.redBall.setTransform(117.2,213.2,1,1,0,0,0,29.9,25);

	this.timeline.addTween(cjs.Tween.get(this.redBall).wait(1));

	// blueBall
	this.blueBall = new lib.blueBall();
	this.blueBall.name = "blueBall";
	this.blueBall.setTransform(44.3,214.2,1,1,0,0,0,29.1,24);

	this.timeline.addTween(cjs.Tween.get(this.blueBall).wait(1));

	this._renderFirstFrame();

}).prototype = p = new lib.AnMovieClip();
p.nominalBounds = new cjs.Rectangle(137.1,128.6,30.200000000000017,109.6);
// library properties:
lib.properties = {
	id: '27A78FCE7A7D42439375BA57BFA5404A',
	width: 250,
	height: 250,
	fps: 24,
	color: "#CC9966",
	opacity: 1.00,
	manifest: [],
	preloads: []
};



// bootstrap callback support:

(lib.Stage = function(canvas) {
	createjs.Stage.call(this, canvas);
}).prototype = p = new createjs.Stage();

p.setAutoPlay = function(autoPlay) {
	this.tickEnabled = autoPlay;
}
p.play = function() { this.tickEnabled = true; this.getChildAt(0).gotoAndPlay(this.getTimelinePosition()) }
p.stop = function(ms) { if(ms) this.seek(ms); this.tickEnabled = false; }
p.seek = function(ms) { this.tickEnabled = true; this.getChildAt(0).gotoAndStop(lib.properties.fps * ms / 1000); }
p.getDuration = function() { return this.getChildAt(0).totalFrames / lib.properties.fps * 1000; }

p.getTimelinePosition = function() { return this.getChildAt(0).currentFrame / lib.properties.fps * 1000; }

an.bootcompsLoaded = an.bootcompsLoaded || [];
if(!an.bootstrapListeners) {
	an.bootstrapListeners=[];
}

an.bootstrapCallback=function(fnCallback) {
	an.bootstrapListeners.push(fnCallback);
	if(an.bootcompsLoaded.length > 0) {
		for(var i=0; i<an.bootcompsLoaded.length; ++i) {
			fnCallback(an.bootcompsLoaded[i]);
		}
	}
};

an.compositions = an.compositions || {};
an.compositions['27A78FCE7A7D42439375BA57BFA5404A'] = {
	getStage: function() { return exportRoot.stage; },
	getLibrary: function() { return lib; },
	getSpriteSheet: function() { return ss; },
	getImages: function() { return img; }
};

an.compositionLoaded = function(id) {
	an.bootcompsLoaded.push(id);
	for(var j=0; j<an.bootstrapListeners.length; j++) {
		an.bootstrapListeners[j](id);
	}
}

an.getComposition = function(id) {
	return an.compositions[id];
}


an.makeResponsive = function(isResp, respDim, isScale, scaleType, domContainers) {		
	var lastW, lastH, lastS=1;		
	window.addEventListener('resize', resizeCanvas);		
	resizeCanvas();		
	function resizeCanvas() {			
		var w = lib.properties.width, h = lib.properties.height;			
		var iw = window.innerWidth, ih=window.innerHeight;			
		var pRatio = window.devicePixelRatio || 1, xRatio=iw/w, yRatio=ih/h, sRatio=1;			
		if(isResp) {                
			if((respDim=='width'&&lastW==iw) || (respDim=='height'&&lastH==ih)) {                    
				sRatio = lastS;                
			}				
			else if(!isScale) {					
				if(iw<w || ih<h)						
					sRatio = Math.min(xRatio, yRatio);				
			}				
			else if(scaleType==1) {					
				sRatio = Math.min(xRatio, yRatio);				
			}				
			else if(scaleType==2) {					
				sRatio = Math.max(xRatio, yRatio);				
			}			
		}
		domContainers[0].width = w * pRatio * sRatio;			
		domContainers[0].height = h * pRatio * sRatio;
		domContainers.forEach(function(container) {				
			container.style.width = w * sRatio + 'px';				
			container.style.height = h * sRatio + 'px';			
		});
		stage.scaleX = pRatio*sRatio;			
		stage.scaleY = pRatio*sRatio;
		lastW = iw; lastH = ih; lastS = sRatio;            
		stage.tickOnUpdate = false;            
		stage.update();            
		stage.tickOnUpdate = true;		
	}
}
an.handleSoundStreamOnTick = function(event) {
	if(!event.paused){
		var stageChild = stage.getChildAt(0);
		if(!stageChild.paused || stageChild.ignorePause){
			stageChild.syncStreamSounds();
		}
	}
}


})(createjs = createjs||{}, AdobeAn = AdobeAn||{});
var createjs, AdobeAn;