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

		this.filters = {
			set : null,
			get : null
		};

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
		 * @return HashChange
		 */
		this.config = function(option){
			$.extend(this.option, option);
			return this;
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
		 * @return HashChange
		 */
		this.trigger = function(){
			this.window.trigger("hashchange");
			return this;
		};

		/**
		 * Stop the watching (only for legacy)
		 * @return HashChange
		 */
		this.stop = function(){
			if(this.timer){
				clearTimeout(this.timer);
			}
			return this;
		};

		/**
		 * Set filter for get()/set();
		 * @return HashChange
		 */
		this.filter = function(name, callback){
			if(this.filters.hasOwnProperty(name)){
				this.filters[name] = callback;
			}
			return this;
		};

		/**
		 * Get hash
		 * @return String
		 */
		this.get = function(){
			if($.isFunction(this.filters.get)){
				return this.filters.get(location.hash);
			}
			return location.hash;
		};

		/**
		 * Set hash
		 * @param String hash
		 * @return HashChange
		 */
		this.set = function(hash){
			if($.isFunction(this.filters.set)){
				hash = this.filters.set(hash);
			}
			location.hash = hash;
			return this;
		};

		this.init.apply(this, arguments);
	};

	$.hashChange = new HashChange();

}(jQuery));