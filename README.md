# Angular OnLoad

## Description

AngularJS directive for adding a callback function on element load event. When element with the directive is loaded (catches 'load' event), the passed callback function will be called.

## Installation

```
npm install --save vi-angular-on-load
```

or

```
bower install vi-angular-on-load
```

Register the module into your main app module

```javascript
angular.module('myApp', ['vivify-ideas.angular-on-load']);
```

## Usage

In the template, use the `vi-on-load` directive:

### HTML

```html
<iframe src="http://www.example.com" vi-on-load="callBackFunctionReference"></iframe>
```

---

LICENCE MIT
