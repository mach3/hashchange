
# HashChange

jQuery plugin to observe hachchange event for legacy browser.

## Usage

Import the jquery.js and hashchange.js

```html
<script src="./js/jquery.js"></script>
<script src="./js/hashchange.js"></script>
```

This enable legacy browsers which doesn't support `hashchange` event, such as IE7-,
to trigger "hashchange" event on `window` object.

Use `on()` method to observe it.

```javascript
$(window).on("hashchange", function(){
	console.log("Changed to " + location.hash);
});
```

## HashChange instance

HashChange instance can be refered as `$.hashChange`.
Some method is available.

### config(option:Object)

Configure options (but only `interval`)

- interval : Integer (10) - Interval time to watch the change of hash, as milisecond

```javascript
$.hashChange.config({interval : 1});
```

### stop()

Quit watching the change of hash (but only for legacy browser)

```javascript
$.hashChange.stop();
```

### trigger()

Forcely fire hashchange event.

```javascript
$.hashChange.trigger();
```

### set(hash:String)

Set new hash

```javascript
$.hashChange.set("foo");
```

### get()

Get curent hash

```javascript
$.hashChange.get() // return current location.hash
```

### filter(name:String, callback:Function)

Set filter function for set() / get()

```javascript
$.hashChange.filter("set", function(hash){
	return "/" + hash;
});

$.hashChange.set("foo"); // => location.hash will be set as "/foo"
```


```javascript
$.hashChange.filter("get", function(hash){
	return hash.replace(/^#\//, "");
});

$.hashChange.set("/hoge");
$.hashChange.get(); // => "hoge"
```

---

## Author

mach3

- [Blog](http://blog.mach3.jp)
- [Website](http://www.mach3.jp)
- [Twitter](http://twitter.com/mach3ss)