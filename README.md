#Knockout Magic Textarea

> A simple knockout binding for textareas which automagically adjust their height based on content.

##Install with [Bower](http://bower.io/)

```
bower install knockout-magic-textarea
```

Then add `knockout.magic.textarea.js` to your project.

##How to Use

Include the script on your page (either via a normal script tag or via an AMD loader). Then bind it to an element:

```html
<textarea data-bind="magicTextarea: true"></textarea>
```