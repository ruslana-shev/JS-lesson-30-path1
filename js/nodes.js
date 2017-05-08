console.clear();
var SuperConstructor = (function () {

	function SuperConstructor(node) {
		this._node = node;
	}
	SuperConstructor.prototype.getInfoNode = function () {
		return {
			type: this._node.nodeType,
			name: this._node.nodeName,
			children: this._node.children.length ? this._node.children.length : 0,
			parent: this._node.parentElement
		};
	}
	SuperConstructor.prototype.attr = function (name, value) {
			
		if (this._node.hasAttribute(name)){
			if (value === undefined){
				console.log(this._node.getAttribute(name));
			} else {
				this._node.setAttribute(name, value);
			}
		} else {
			console.log("атрибут не введен");
		}
	}

	SuperConstructor.prototype.text = function (value){
		if(value == undefined){
			console.log(this._node.textContent);
		} else {
			this._node.textContent = value;
		}
	}

	SuperConstructor.prototype.append = function(html) {
	  	this._node.insertAdjacentHTML('beforeend', html);
	  	return this;
	};

	SuperConstructor.prototype.prepend = function(html) {
		this._node.insertAdjacentHTML('afterbegin', html);
		return this;
	}

	SuperConstructor.prototype.before = function(html) {
		this._node.insertAdjacentHTML('beforebegin', html);
		return this;
	}

	SuperConstructor.prototype.after = function(html) {
		this._node.insertAdjacentHTML('afterend', html);
		return this;
	}

	SuperConstructor.prototype.html = function(value) {
		if (value === undefined) {
		    return this._node.innerHTML;
		} else {
		    this._node.innerHTML = value;
		}
	}

	SuperConstructor.prototype.getElement = function() {
		return this._node;
	}
	SuperConstructor.prototype.event = function (eventName, callback){

		if (callback === undefined){
			var event = new Event(eventName, {bubbles: true});
			this._node.dispatchEvent(event);
			return;
		} else {
			var event = new Event(eventName, {bubbles: true});
			this._node.addEventListener(eventName, callback);
		}
	}
	
	return SuperConstructor;
})();
