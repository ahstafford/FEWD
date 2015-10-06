![GeneralAssemb.ly](../../img/icons/FEWD_Logo.png)

#FEWD - Layout

---

##Agenda

*	Homework Review
*	Divs, Classes and IDs
*	Reset Stylesheets
*	Review HTML5 Structural Elements
*	Floats and Clears
*	Layout Challenge

---

##Homework Review

---

##Div

What is a Div?

--
##Span

What is a Span?

---


##class & id

With classes and ids we can target specific elements on a page, so we can manipulate it uniquely.

---

## Three Types of Selectors

![](../../img/unit_1/types-of-selectors.png)

--

##class & id

![](../../img/unit_1/tags_attributes.png)

--

##class & id

####IDs are unique

####Classes are not unique

--

##class & id

How to __select__ classes and ids in CSS

```
.className
```

```
#idName
``` 
--

##How do you name classes & ids?

They should be descriptive and speak to the content and purpose.

```
.errorMessage
```
vs.

```
.red
``` 
--

##class & id

When should you use them?

---

##Specificity

CSS reads top-down and by specificity.

ID (more specific) > Class > Element (less specific)

--

##It's All Relative

*	CSS selectors can be "chained" together to form
more complex selections.
*	You're probably familiar with this syntax:
`li a {color: blue;}`
*	The space between the selectors means descendant. In this case, "select every link inside every list item, and make it blue."
*	If there is only one selector specified, it's relative to the whole HTML document.

---


![GeneralAssemb.ly](../../img/icons/code_along.png)
##class & id

---

##CSS Resets

--

##CSS Resets

###Why do we need them?

* Browsers don't all use the same default styles (I'm looking at you, Internet Explorer)
* Resets give us a consistent starting point

--

##CSS Resets

Which one should I use?

* Any of the ones at http://www.cssreset.com/
* I prefer http://necolas.github.io/normalize.css/

---

##HTML5 Structural Elements

Adding structure to HTML elements that are related to content layout.

*	header
*	aside
*	footer

---

##Floats

Float is a CSS positioning property, used to layout a web page. 

![](http://css-tricks.com/wp-content/csstricks-uploads/web-layout.png)

Note:
Image from Chris Coyier's CSS-Tricks

--

##Floats (Benefits/Uses)

* Make line-wrapping content very easy.
* Easily align left and right sides of the columns to the container.
* Ability to reverse the order of the floated items with float: right or float: left.
* Fully supported in all browsers.

--

##Floats (Disadvantages)

* Floated elements don't honor relative height. ([Zero-Height Container Problem](http://complexspiral.com/publications/containing-floats/))
* Requires clearfix CSS to maintain content flow.
* A considerable amount of CSS is required just to adjust alignments.

--

##Clearfix

Allows elements to clear themselves

```
.clearfix:after {
  content: "";
  display: table;
  clear: both;
}
```

--

##Clear - As a Class

Less agressive than clearfix, but might not always work.

```
.clear {
  overflow: auto;
}
```
---

![GeneralAssemb.ly](../../img/icons/code_along.png)
##Floating Sections

---

![GeneralAssemb.ly](../../img/icons/exercise_icon_md.png)
##Layout Challenge

---

##Homework

* Build the [Relaxr homework assignment](https://github.com/ga-students/FEWD-DC-17/tree/master/Week_02_Styling/Assignment). 

--

##Exit Survey - CSS Layout
Goodnight!

