
var supportsTouch;

function onLoadHandler(){
	console.log('PAGE LOADED');
	if(Enabler.isInitialized()){
		enablerInitHandler();
	} else {
		Enabler.addEventListener(studio.events.StudioEvent.INIT, enablerInitHandler);
	}
}

function enablerInitHandler(){
	console.log('ENABLER INIT');
	if(Enabler.isPageLoaded()){
		pageLoadedHandler();
	} else {
		Enabler.addEventListener(studio.events.StudioEvent.PAGE_LOADED, pageLoadedHandler);
	}
}

//Function to run with any animations starting on load, or bringing in images etc
pageLoadedHandler = function(){
	//Assign All the elements to the element on the page
	supportsTouch = 'ontouchstart' in window;

	//-- Add expand and button events --//
	addListeners();


}

//Add Event Listeners
addListeners = function(){
	
    Enabler.addEventListener(studio.events.StudioEvent.EXPAND_START, fullscreenExpandStartHandler);
    Enabler.addEventListener(studio.events.StudioEvent.EXPAND_FINISH, fullscreenExpandFinishHandler);
    Enabler.addEventListener(studio.events.StudioEvent.COLLAPSE_START, fullscreenCollapseStartHandler);
    Enabler.addEventListener(studio.events.StudioEvent.COLLAPSE_FINISH, fullscreenCollapseFinishHandler);


}

fullscreenHandler = function(){
	Enabler.requestExpand();

	Enabler.counter("Full Screen count")
}

fullscreenExpandStartHandler = function(){
	Enabler.finishExpand();
}

fullscreenExpandFinishHandler = function(){
	Enabler.startTimer("Full Screen duration")
}

fullscreenCollapseStartHandler = function(){
	Enabler.finishCollapse();
}

fullscreenCollapseFinishHandler = function() {
	//-- Stop timer if there's any --//
	Enabler.stopTimer("Full Screen duration");
}

fullscreenExitHandler = function(){
	Enabler.requestCollapse();
	Enabler.exit('HTML5_Background_Clickthrough');

}

collapseExitHandler = function(){
	Enabler.exit('HTML5_Background_Clickthrough');
}

closeButtonHandler = function(){
	Enabler.reportManualClose();
	Enabler.requestCollapse();

}

window.addEventListener('load', onLoadHandler);


