(function($){
	
	/**
	 * HashChange
	 * @class Watching and trigger "hashchange" event when location.hash changed.
	 */
	var HashChange = function(option){

		var my = this;

		this.hash = null;
		this.window = $(window);
		this.timer = null;

		this.option = {
			interval : 10
		};

		this.init = function(option){
			this.config(option);
			// onhashchange disable, or IE7- on IE9 emulator
			if(window.onhashchange === undefined || navigator.userAgent.match(/MSIE\s[6-7]/)){
				this.run();
			}
		};

		/**
		 * Configure 
		 * @param Object option
		 */
		this.config = function(option){
			$.extend(this.option, option);
		};

		/**
		 * Watching the change of location.hash
		 */
		this.run = function(){
			if(my.hash !== location.hash){
				my.hash = location.hash;
				my.trigger();
			}
			my.timer = setTimeout(my.run, my.option.interval);
		};

		/**
		 * Forcely fire hashchange event
		 */
		this.trigger = function(){
			this.window.trigger("hashchange");
		};

		/**
		 * Stop the watching (only for legacy)
		 */
		this.stop = function(){
			if(this.timer){
				clearTimeout(this.timer);
			}
		};

		this.init.apply(this, arguments);
	};

	$.hashChange = new HashChange();

}(jQuery));