![GeneralAssemb.ly](../../img/icons/FEWD_Logo.png)

#FEWD - Box Model & More CSS

---


##Agenda

*	Review
*	Box Model
*	The DOM Tree
*	Nested Selectors
*	If Time: Relxar - How To Start	

---

##Review

What We've Learned So Far: Content vs. Presentation

--

###HTML Markup is Descriptive

*	HTML describes and classifies the pieces of
content on your page with HTML elements.
*	HTML is semantic - it gives meaning to your content.
*	The visual appearance of raw HTML is irrelevant. HTML's purpose is NOT presentation.

--

###CSS is for Presentation

*	CSS allows you to control the visual design of a page.
*	`<em>` tags don't necessarily need to be communicated with italics.
*	Web Design Commandment #1: Thou shalt always use an external stylesheet.

--
###What can we control with CSS?

font-weight  |  font-style      |  line-height 

color        |  letter-spacing  |  text-transform

text-align   |  text-indent     |  text-decoration

word-spacing |  vertical-align  |  white-space

---

##Widths

We can handle these with:

* Pixels
*	Percents
*	Ems


We will get into more details on these in a later class.
---
##Be Careful What You Google...

* W3Schools - DO NOT USE THIS
* [CSS Tricks](https://css-tricks.com/)
* [MDN](https://developer.mozilla.org/en-US/)
* [StackOverflow](http://stackoverflow.com/)
* [caniuse](http://caniuse.com/)
* [A list apart](http://alistapart.com/)
---

##Homework Review

---

##Box Model

Every element on the page is a box. 

--
##Two Kinds of Boxes
###Block Elements - They're Greedy

They will take up the entire width of their containers. 
They want the entire line to themselves.

*	`<header>`
*	`<h1>`
*	`<p>`
*	`<ul>`

--

##Two Kinds of Boxes
###Inline Elements - They're Clingy

They will sidle up to neighboring elements in a horizontal line. 
They want to share lines with others.

*	`<strong>`
*	`<em>`
*	`<image/>`
*	`<span>`
---

##Box Model

![](http://www.mandalatv.net/itp/drivebys/css/lib/img/box_model.gif)

---

##Box Model

Width = (content) width + padding-left + padding-right + border-left + border-right

Height = (content) height + padding-top + padding-bottom + border-top + border-bottom

--

##Box Model

```
article{
  border: 5px solid #000;
  height: 500px;
  margin: 20px;
  padding: 20px;
  width: 500px;
}

```
--

## What About Margin?

Margin will impact your layout but it is not calculated in the overall width and height. 

---

##That's a lot of Math!

Enter box sizing...

--
##Box Sizing

width = actual visible/rendered width of box

height = actual visible/rendered height of box

```
html {
  box-sizing: border-box;
}
*, *:before, *:after {
  box-sizing: inherit;
}
```

---

![GeneralAssemb.ly](../../img/icons/code_along.png)
##Tags & Boxes

---

###But in order to use it well..
We need to understand the DOM tree

__What?! That sounds boring__

--
##An HTML Document is Like a Family Tree
*	Ancestors, descendants, parents, children, and siblings.
*	It all starts with the `<body>`. All other elements are descendants of the `<body>` element.
---

![GeneralAssemb.ly](../../img/icons/exercise_icon_md.png)
##Draw Me a DOM
Draw the DOM for the About Me page.

---
##Nested Selectors

Styling just the stuff we want to
--

##Nested Selectors

```
<p>
  <span>red</span>
  <div>green
    <span>blue</span>
  </div>
</p>
```

We need to target each of these to make them the right color
--
##Nested Selectors

```
<p>
  <span>red</span>
  <div>green
    <span>blue</span>
  </div>
</p>

p { color: white; }

```

<span style="color:white;">red <br>green blue</span>
--
##Nested Selectors

```
<p>
  <span>red</span>
  <div>green
    <span>blue</span>
  </div>
</p>

p { color: white; }
p span { color: red; }

```

<span style="color:white;"><span style="color:red;">red</span> <br>green <span style="color:red;">blue</span></span>
--
##Nested Selectors

```
<p>
  <span>red</span>
  <div>green
    <span>blue</span>
  </div>
</p>

p span { color: red; }
p div { color: green; }

```

<span style="color:white;"><span style="color:red;">red</span> <br><span style="color:green;">green</span> <span style="color:red;">blue</span></span>
--
##Nested Selectors

```
<p>
  <span>red</span>
  <div>green
    <span>blue</span>
  </div>
</p>

p span { color: red; }
p div { color: green; }
p div span { color:blue; }

```

<span style="color:white;"><span style="color:red;">red</span> <br><span style="color:green;">green</span> <span style="color:blue;">blue</span></span>

---
##Pseudo Selectors

```a:hover { color:#78b9e6; }```

Hover over <a>this</a> link

--

##Pseudo Selectors

```div:first-letter { font-size:200%; }```

<style>
  #large-letter:first-letter { font-size:200%; }
</style>

<div id="large-letter">First letter is large!</div>

---

![GeneralAssemb.ly](../../img/icons/code_along.png)
##Nested Selectors

---


![GeneralAssemb.ly](../../img/icons/exercise_icon_md.png)
##Relaxr Landing Page

---
##Homework

* [Play this selector game](http://flukeout.github.io/)
* Review the [Relaxr homework assignment for this week](https://github.com/ga-students/FEWD-DC-17/tree/master/Week_02_Styling/Assignment). Come to next class prepared to walk through it.

--

##Exit Survey - CSS Box Model
Goodnight!
