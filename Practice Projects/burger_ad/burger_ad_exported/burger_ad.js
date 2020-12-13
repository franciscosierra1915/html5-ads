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



(lib.Bitmap18 = function() {
	this.initialize(img.Bitmap18);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,1911,1499);


(lib.Bitmap19 = function() {
	this.initialize(img.Bitmap19);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,1171,901);


(lib.FlashAICBAssets = function() {
	this.initialize(img.FlashAICBAssets);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,72,73);


(lib.FlashAICBAssets_1 = function() {
	this.initialize(img.FlashAICBAssets_1);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,255,260);


(lib.FlashAICBAssets_2 = function() {
	this.initialize(img.FlashAICBAssets_2);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,191,193);


(lib.FlashAICBAssets_3 = function() {
	this.initialize(img.FlashAICBAssets_3);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,47,93);


(lib.FlashAICBAssets_4 = function() {
	this.initialize(img.FlashAICBAssets_4);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,135,126);


(lib.FlashAICBAssets_5 = function() {
	this.initialize(img.FlashAICBAssets_5);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,86,71);


(lib.FlashAICBAssets_6 = function() {
	this.initialize(img.FlashAICBAssets_6);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,105,92);


(lib.FlashAICBAssets_7 = function() {
	this.initialize(img.FlashAICBAssets_7);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,96,96);


(lib.FlashAICBAssets_8 = function() {
	this.initialize(img.FlashAICBAssets_8);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,91,84);


(lib.FlashAICBAssets_9 = function() {
	this.initialize(img.FlashAICBAssets_9);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,134,252);


(lib.FlashAICBAssets_10 = function() {
	this.initialize(img.FlashAICBAssets_10);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,63,67);


(lib.FlashAICBAssets_11 = function() {
	this.initialize(img.FlashAICBAssets_11);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,89,42);


(lib.FlashAICBAssets_12 = function() {
	this.initialize(img.FlashAICBAssets_12);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,106,94);// helper functions:

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


(lib.Tween1 = function(mode,startPosition,loop,reversed) {
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
	this.instance = new lib.Bitmap19();
	this.instance.setTransform(-44.55,-37.55,0.0761,0.0834);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-44.5,-37.5,89.1,75.1);


(lib.tomate = function(mode,startPosition,loop,reversed) {
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
	this.instance = new lib.FlashAICBAssets_4();

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.tomate, new cjs.Rectangle(0,0,135,126), null);


(lib.potato = function(mode,startPosition,loop,reversed) {
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
	this.instance = new lib.FlashAICBAssets_5();

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.potato, new cjs.Rectangle(0,0,86,71), null);


(lib.pepper = function(mode,startPosition,loop,reversed) {
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
	this.instance = new lib.FlashAICBAssets_8();

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.pepper, new cjs.Rectangle(0,0,91,84), null);


(lib.orange_ball_small = function(mode,startPosition,loop,reversed) {
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
	this.instance = new lib.FlashAICBAssets();
	this.instance.setTransform(0,0,0.9488,0.9637);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.orange_ball_small, new cjs.Rectangle(0,0,68.3,70.4), null);


(lib.orange_ball_big = function(mode,startPosition,loop,reversed) {
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
	this.instance = new lib.FlashAICBAssets_2();

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.orange_ball_big, new cjs.Rectangle(0,0,191,193), null);


(lib.onion = function(mode,startPosition,loop,reversed) {
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
	this.instance = new lib.FlashAICBAssets_12();

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.onion, new cjs.Rectangle(0,0,106,94), null);


(lib.leave_3 = function(mode,startPosition,loop,reversed) {
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
	this.instance = new lib.FlashAICBAssets_11();

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.leave_3, new cjs.Rectangle(0,0,89,42), null);


(lib.leave_2 = function(mode,startPosition,loop,reversed) {
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
	this.instance = new lib.FlashAICBAssets_7();

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.leave_2, new cjs.Rectangle(0,0,96,96), null);


(lib.leave_1 = function(mode,startPosition,loop,reversed) {
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
	this.instance = new lib.FlashAICBAssets_3();

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.leave_1, new cjs.Rectangle(0,0,47,93), null);


(lib.horse_shoe = function(mode,startPosition,loop,reversed) {
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
	this.instance = new lib.FlashAICBAssets_6();

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.horse_shoe, new cjs.Rectangle(0,0,105,92), null);


(lib.grey_ball = function(mode,startPosition,loop,reversed) {
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
	this.instance = new lib.FlashAICBAssets_1();
	this.instance.setTransform(0,0,0.6678,0.6077);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.grey_ball, new cjs.Rectangle(0,0,170.3,158), null);


(lib.discount = function(mode,startPosition,loop,reversed) {
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
	this.shape.graphics.f("#FFFFFF").s().p("AgTBPIAAhpIgJAAIAAgUIAJAAQAAgNAAgEQACgFADgDQADgEAHgCQAEgBAOAAIAOAAIAAAUQgMAAgCABQgDABAAAFIAAAFIARAAIAAAUIgJAAIAABpg");
	this.shape.setTransform(38.85,33.7);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFFFFF").s().p("AgUBPIAAhpIgHAAIAAgUIAHAAQAAgNACgEQAAgFAEgDQADgEAGgCQAGgBANAAIAPAAIAAAUQgNAAgCABQgCABgBAFIAAAFIASAAIAAAUIgKAAIAABpg");
	this.shape_1.setTransform(28.1,33.7);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#FFFFFF").s().p("AgVBAQgJgDgFgFQgFgGgCgIQgCgJAAgQIAAggQAAgTAEgKQADgKALgGQAKgGAQAAQAMAAAJAEQAKAEAFAGQAFAGACAHQACAHAAAOIAAAeQAAASgCAIQgBAIgGAHQgGAHgJAEQgJADgMAAQgMAAgJgDgAgEgpQgBADAAAKIAAA5QAAAKABACQABADADAAQADAAACgCQABgDAAgIIAAg7QAAgKgBgDQgCgCgDAAQgDAAgBACg");
	this.shape_2.setTransform(15.125,35.125);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#FFFFFF").s().p("AglBSIA9ijIAOAAIg8CjgAATBNQgHgEgCgFQgCgFAAgLIAAgcQAAgMACgFQACgGAHgCQAHgEAKAAQALAAAHAEQAHADADAFQACAGAAALIAAAbQAAALgCAGQgCAFgHAEQgGAEgLgBQgNABgGgEgAAhAJIAAAIIAAAoIAAAJQAAAAABAAQAAAAAAAAQABAAAAAAQABABABAAQAAAAABgBQAAAAABAAQAAAAABAAQAAgBAAAAIABgHIAAgpIgBgIQAAAAAAAAQAAAAgBgBQAAAAgBAAQgBAAAAAAQgBAAAAAAQgBAAAAAAQgBABAAAAQgBAAAAAAgAg2AAQgGgCgCgGQgDgFAAgJIAAgdQAAgMADgFQACgGAHgDQAHgEAKAAQALAAAHAEQAHADACAGQACAGAAALIAAAbQAAAKgBAGQgDAFgGADQgHAEgLAAQgMAAgHgEgAgnhBIgBAHIAAAoIABAIQAAAAAAABQABAAAAAAQABAAAAAAQABAAAAAAQABAAABAAQAAAAABAAQAAAAAAAAQABgBAAAAIAAgIIAAgoIAAgIQAAAAgBgBQAAAAAAAAQgBAAAAAAQgBAAgBAAQAAAAgBAAQAAAAgBAAQAAAAgBABQAAAAAAABg");
	this.shape_3.setTransform(41.525,14.3);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#FFFFFF").s().p("AgUBPQgJgEgGgHQgGgHgCgHQgDgIABgQIAAg2QAAgXADgKQAEgLAMgHQALgGAPAAQANAAAJAFQALAEAFAHQAFAGACAIQACAIgBATIAAAzQAAASgBAIQgDAIgGAHQgFAIgKADQgIADgLAAQgNAAgJgDgAgFg2QgBAEAAAMIAABNQAAANABADQABACAEABQAFAAABgEQABgDAAgLIAAhOQAAgMgBgEQgBgDgFAAQgDAAgCADg");
	this.shape_4.setTransform(24.25,14.3);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#FFFFFF").s().p("AgZBLQgMgFgEgKQgFgLAAgWIAAgJIAnAAIAAAKIABAWQABAGAGAAQAAAAABAAQABAAAAAAQABgBAAAAQABAAAAgBQABAAAAgBQAAAAABAAQAAgBAAAAQAAgBAAAAIABgTIAAggQAAgIgCgDQgCgDgEAAQAAAAgBAAQAAAAgBAAQAAABgBAAQAAAAgBABIgCAEIgBAIIgnAAIAChQIBTAAIAAAaIgwAAIAAAbQAJgLAOAAQAQAAAJAJQAIAJAAAZIAAAWQAAASgBAHQgCAIgFAHQgGAGgJAEQgJADgOABQgOAAgMgGg");
	this.shape_5.setTransform(8.575,14.45);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.discount, new cjs.Rectangle(1.2,0,54.4,47.8), null);


(lib.cutting_board = function(mode,startPosition,loop,reversed) {
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
	this.instance = new lib.FlashAICBAssets_9();

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.cutting_board, new cjs.Rectangle(0,0,134,252), null);


(lib.burger = function(mode,startPosition,loop,reversed) {
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
	this.instance = new lib.Bitmap18();
	this.instance.setTransform(0,0,0.0685,0.0694);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.burger, new cjs.Rectangle(0,0,131,104), null);


(lib.bow_tie = function(mode,startPosition,loop,reversed) {
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
	this.instance = new lib.FlashAICBAssets_10();

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.bow_tie, new cjs.Rectangle(0,0,63,67), null);


(lib.button = function(mode,startPosition,loop,reversed) {
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
	this.shape.graphics.f("#FFFFFF").s().p("AANBXQgIgogFgyIgMBaIg5AAIgUitIAsAAIAFA9IAFA5QACgsAKhKIAuAAIAFA6IAFBBQAEg/AJg8IAsAAIgVCtg");
	this.shape.setTransform(137.175,29.1);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFFFFF").s().p("AgYBWQgLgEgHgJQgHgKgBgKQgBgLgBgbIAAgdQABgaABgLQABgLAHgJQAGgJAMgFQALgEANAAQAOgBALAFQAMAEAGAKQAHAJABALQACALAAAaIAAAdQAAAagCALQgBALgGAJQgHAJgLAFQgLAEgPABQgNgBgLgEgAgEg6QgCAEAAANIAABQQAAAPABADQACAEADAAQAFAAABgEQABgEAAgQIAAhOQAAgMgBgEQgCgDgDAAQgDAAgCACg");
	this.shape_1.setTransform(118.2,29.1);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#FFFFFF").s().p("AALBXIgXhPIAABPIgmAAIAAitIAmAAIAZBPIAAhPIAlAAIAACtg");
	this.shape_2.setTransform(102.25,29.1);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#FFFFFF").s().p("AAJBXIAAg6QAAgOgCgDQgDgEgJABIAABOIgtAAIAAitIAhAAQAeAAAMACQALADAIAKQAGALAAAVQAAAVgEAHQgFAHgPABQANADAFAFQAEAFABAGQABAEAAAVIAAAugAgFgRQAIAAACgCQAEgDAAgLIAAgJQAAgJgEgCQgCgDgIAAg");
	this.shape_3.setTransform(78.6,29.1);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#FFFFFF").s().p("AgmBXIAAitIBKAAIAAAjIgeAAIAAAhIAcAAIAAAgIgcAAIAAAmIAhAAIAAAjg");
	this.shape_4.setTransform(64.375,29.1);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#FFFFFF").s().p("Ag0BXIAAitIAjAAQAfAAAMADQALADAGAHQAHAHABAIQABAJABAYIAAA9QgBAWgCAIQgCAJgFAEQgGAEgIACQgIACgQAAgAgHA5QAKAAACgDQACgFAAgRIAAhCIAAgQQgBgDgDgBQgDgCgHAAg");
	this.shape_5.setTransform(49.55,29.1);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#FFFFFF").s().p("AAIBXIAAg6QAAgOgBgDQgDgEgIABIAABOIgtAAIAAitIAfAAQAgAAALACQALADAHAKQAIALAAAVQAAAVgGAHQgFAHgPABQAOADAEAFQAFAFACAGQABAEAAAVIAAAugAgEgRQAGAAAEgCQACgDAAgLIAAgJQAAgJgCgCQgEgDgGAAg");
	this.shape_6.setTransform(33.55,29.1);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#FFFFFF").s().p("AgYBWQgLgEgHgJQgHgKgBgKQgBgLgBgbIAAgdQABgaABgLQABgLAHgJQAGgJALgFQALgEAOAAQAOgBALAFQAMAEAGAKQAHAJABALQABALABAaIAAAdQgBAagBALQgBALgGAJQgHAJgLAFQgLAEgPABQgNgBgLgEgAgEg6QgCAEAAANIAABQQAAAPABADQABAEAEAAQAEAAACgEQABgEAAgQIAAhOQAAgMgBgEQgCgDgEAAQgCAAgCACg");
	this.shape_7.setTransform(17.6,29.1);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#FAAB07").s().p("An9EiQh9AAhYhVQgSgSgPgSIgKgOIAAgEIgLgTQggg7AAhJIAAAAQAAhIAgg8IALgSIAAgEIAKgOQAPgTASgRQAagaAegRQANgJAPgGIACAAIAGgDQAlgPApgGQAWgDAYAAIP3AAQAYAAAWADQAqAGAlAPIAFADIgCAAQAOAGAOAJQAdARAaAaQBIBFAOBdQADAUAAAWIAAAAQAAAWgDAWQgOBchIBFQhYBVh9AAg");
	this.shape_8.setTransform(80.875,29);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#FAC87C").s().p("An9EiQh9AAhYhVQgSgSgPgSIgKgOIAAgEIgLgTQggg7AAhJIAAAAQAAhIAgg8IALgSIAAgEIAKgOQAPgTASgRQAagaAegRQANgJAPgGIACAAIAGgDQAlgPApgGQAWgDAYAAIP3AAQAYAAAWADQAqAGAlAPIAFADIgCAAQAOAGAOAJQAdARAaAaQBIBFAOBdQADAUAAAWIAAAAQAAAWgDAWQgOBchIBFQhYBVh9AAg");
	this.shape_9.setTransform(80.875,29);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#EA7C00").s().p("An9EiQh9AAhYhVQgSgSgPgSIgKgOIAAgEIgLgTQggg7AAhJIAAAAQAAhIAgg8IALgSIAAgEIAKgOQAPgTASgRQAagaAegRQANgJAPgGIACAAIAGgDQAlgPApgGQAWgDAYAAIP3AAQAYAAAWADQAqAGAlAPIAFADIgCAAQAOAGAOAJQAdARAaAaQBIBFAOBdQADAUAAAWIAAAAQAAAWgDAWQgOBchIBFQhYBVh9AAg");
	this.shape_10.setTransform(80.875,29);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#FFFF00").s().p("ApHFOQiKAAhihiQhihhAAiLIAAAAQAAiKBihiQBihhCKAAISPAAQCKAABhBhQBiBiABCKIAAAAQgBCLhiBhQhhBiiKAAg");
	this.shape_11.setTransform(81.65,29.875);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#EA7C00").s().p("AoOAAIATAAIP3AAIATAAg");
	this.shape_12.setTransform(80.975,0.025);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).to({state:[{t:this.shape_9},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]},1).to({state:[{t:this.shape_10},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]},1).to({state:[{t:this.shape_12},{t:this.shape_11},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]},1).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-10.1,-3.5,183.5,66.8);


// stage content:
(lib.burger_ad = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = false; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	this.actionFrames = [39];
	// timeline functions:
	this.frame_39 = function() {
		/* Click to Go to Web Page
		Clicking on the specified symbol instance loads the URL in a new browser window.
		
		Instructions:
		1. Replace http://www.adobe.com with the desired URL address.
		   Keep the quotation marks ("").
		*/
		
		this.button_1.addEventListener("click", fl_ClickToGoToWebPage);
		
		function fl_ClickToGoToWebPage() {
			window.open("https://www.haymerchant.com/", "_blank");
		}
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).wait(39).call(this.frame_39).wait(41));

	// button_2
	this.button_1 = new lib.button();
	this.button_1.name = "button_1";
	this.button_1.setTransform(240.05,203,1,1,0,0,0,80.9,29);
	this.button_1.alpha = 0;
	this.button_1._off = true;
	new cjs.ButtonHelper(this.button_1, 0, 1, 2, false, new lib.button(), 3);

	this.timeline.addTween(cjs.Tween.get(this.button_1).wait(39).to({_off:false},0).to({alpha:1},10).wait(31));

	// discount
	this.instance = new lib.discount();
	this.instance.setTransform(174.7,65.85,1,1,0,0,0,27.2,23.9);
	this.instance.alpha = 0;
	this.instance._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(39).to({_off:false},0).to({alpha:1},10).wait(31));

	// logo
	this.instance_1 = new lib.Tween1("synched",0);
	this.instance_1.setTransform(287.55,44.55);
	this.instance_1.alpha = 0;
	this.instance_1._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(39).to({_off:false},0).to({alpha:1},20).wait(21));

	// burger
	this.instance_2 = new lib.burger();
	this.instance_2.setTransform(96.5,126,1,1,0,0,0,65.5,52);
	this.instance_2.alpha = 0;
	this.instance_2._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(39).to({_off:false},0).wait(1).to({alpha:0.0567},0).wait(1).to({alpha:0.1217},0).wait(1).to({alpha:0.1953},0).wait(1).to({alpha:0.2781},0).wait(1).to({alpha:0.3706},0).wait(1).to({alpha:0.4734},0).wait(1).to({alpha:0.5871},0).wait(1).to({alpha:0.7123},0).wait(1).to({alpha:0.8497},0).wait(1).to({alpha:1},0).wait(31));

	// orange_ball_small
	this.instance_3 = new lib.orange_ball_small();
	this.instance_3.setTransform(172.1,64.1,1,1,0,0,0,34.1,35.1);
	this.instance_3.alpha = 0;

	this.timeline.addTween(cjs.Tween.get(this.instance_3).wait(39).to({alpha:1},10).wait(31));

	// grey_ball
	this.instance_4 = new lib.grey_ball();
	this.instance_4.setTransform(96.2,126,1,1,0,0,0,85.2,79);
	this.instance_4.alpha = 0;

	this.timeline.addTween(cjs.Tween.get(this.instance_4).wait(39).to({alpha:1},10).wait(31));

	// orange_ball_big
	this.instance_5 = new lib.orange_ball_big();
	this.instance_5.setTransform(338.5,-131.5,1,1,0,0,0,95.5,96.5);

	this.timeline.addTween(cjs.Tween.get(this.instance_5).to({x:301.8,y:9},39,cjs.Ease.quadIn).wait(41));

	// leave_1
	this.instance_6 = new lib.leave_1();
	this.instance_6.setTransform(150.5,364.5,1,1,0,0,0,23.5,46.5);

	this.timeline.addTween(cjs.Tween.get(this.instance_6).to({x:157.8,y:263.5},39,cjs.Ease.quadIn).wait(41));

	// tomate
	this.instance_7 = new lib.tomate();
	this.instance_7.setTransform(32.5,-98,1,1,0,0,0,67.5,63);

	this.timeline.addTween(cjs.Tween.get(this.instance_7).to({regX:67.6,regY:62.9,scaleX:0.5555,scaleY:0.5555,x:111.95,y:-6.05},39,cjs.Ease.quadIn).wait(41));

	// potato
	this.instance_8 = new lib.potato();
	this.instance_8.setTransform(170,-91.5,1,1,0,0,0,43,35.5);

	this.timeline.addTween(cjs.Tween.get(this.instance_8).to({x:330.4,y:264.4},39,cjs.Ease.quadIn).wait(41));

	// horse_shoe
	this.instance_9 = new lib.horse_shoe();
	this.instance_9.setTransform(246.45,364,1,1,0,0,0,52.5,46);

	this.timeline.addTween(cjs.Tween.get(this.instance_9).to({x:242.2,y:298.5},39,cjs.Ease.quadIn).wait(41));

	// leave_2
	this.instance_10 = new lib.leave_2();
	this.instance_10.setTransform(48,-57.95,1,1,0,0,0,48,48);

	this.timeline.addTween(cjs.Tween.get(this.instance_10).to({x:88.8,y:270},39,cjs.Ease.quadIn).wait(41));

	// pepper
	this.instance_11 = new lib.pepper();
	this.instance_11.setTransform(412.45,238,1,1,0,0,0,45.5,42);

	this.timeline.addTween(cjs.Tween.get(this.instance_11).to({x:347.4,y:157.85},39,cjs.Ease.quadIn).wait(41));

	// cutting_board
	this.instance_12 = new lib.cutting_board();
	this.instance_12.setTransform(567,99,1,1,0,0,0,67,126);

	this.timeline.addTween(cjs.Tween.get(this.instance_12).to({scaleX:0.388,scaleY:0.3174,rotation:45,x:27.75,y:27.4},39,cjs.Ease.quadIn).wait(41));

	// bow_tie
	this.instance_13 = new lib.bow_tie();
	this.instance_13.setTransform(-81.5,258.5,1,1,0,0,0,31.5,33.5);

	this.timeline.addTween(cjs.Tween.get(this.instance_13).to({regX:31.7,regY:33.6,scaleX:0.83,scaleY:1.05,rotation:-100.9995,x:37.2,y:228.1},39,cjs.Ease.quadIn).wait(41));

	// leave_3
	this.instance_14 = new lib.leave_3();
	this.instance_14.setTransform(397.5,-14,1,1,0,0,0,44.5,21);

	this.timeline.addTween(cjs.Tween.get(this.instance_14).to({x:-3.7,y:207.9},39,cjs.Ease.quadIn).wait(41));

	// onion
	this.instance_15 = new lib.onion();
	this.instance_15.setTransform(381,349,1,1,0,0,0,53,47);

	this.timeline.addTween(cjs.Tween.get(this.instance_15).to({regX:53.1,regY:47.1,rotation:14.9983,x:241.25,y:118.95},39,cjs.Ease.quadIn).wait(41));

	this._renderFirstFrame();

}).prototype = p = new lib.AnMovieClip();
p.nominalBounds = new cjs.Rectangle(55,-88,579,499);
// library properties:
lib.properties = {
	id: '26B5720C1CD0457DB86FF59D52FB4698',
	width: 336,
	height: 280,
	fps: 30,
	color: "#000000",
	opacity: 1.00,
	manifest: [
		{src:"images/Bitmap18.png", id:"Bitmap18"},
		{src:"images/Bitmap19.png", id:"Bitmap19"},
		{src:"images/FlashAICBAssets.png", id:"FlashAICBAssets"},
		{src:"images/FlashAICBAssets_1.png", id:"FlashAICBAssets_1"},
		{src:"images/FlashAICBAssets_2.png", id:"FlashAICBAssets_2"},
		{src:"images/FlashAICBAssets_3.png", id:"FlashAICBAssets_3"},
		{src:"images/FlashAICBAssets_4.png", id:"FlashAICBAssets_4"},
		{src:"images/FlashAICBAssets_5.png", id:"FlashAICBAssets_5"},
		{src:"images/FlashAICBAssets_6.png", id:"FlashAICBAssets_6"},
		{src:"images/FlashAICBAssets_7.png", id:"FlashAICBAssets_7"},
		{src:"images/FlashAICBAssets_8.png", id:"FlashAICBAssets_8"},
		{src:"images/FlashAICBAssets_9.png", id:"FlashAICBAssets_9"},
		{src:"images/FlashAICBAssets_10.png", id:"FlashAICBAssets_10"},
		{src:"images/FlashAICBAssets_11.png", id:"FlashAICBAssets_11"},
		{src:"images/FlashAICBAssets_12.png", id:"FlashAICBAssets_12"}
	],
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
an.compositions['26B5720C1CD0457DB86FF59D52FB4698'] = {
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