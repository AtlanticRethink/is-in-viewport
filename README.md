# isInViewport.js explained  

* Load jQuery library first:  
`<script src="https://code.jquery.com/jquery-3.1.0.js"></script>`  

* Place the following functions at the bottom of the `<body>`:  
`var isElementInViewport = function(el) {...};`  
`var elementInViewRunThisAction = function() {...};`  
`$(window).scroll(elementInViewRunThisAction);`  

* Define the DOM element you would like to track, e.g.:  
`var containerObject = document.getElementById("containerObject");`  

* In the `elementInViewRunThisAction` function, place the DOM element variable you defined above within the parentheses here and delete the `/* YOUR DOM ELEMENT HERE */` comment: 
  * `isElementInViewport(/* YOUR DOM ELEMENT HERE */)` becomes:  
  * `isElementInViewport(containerObject)`  

* Define the actions you'd like to trigger once the DOM element you defined is in view, i.e. in the if block b/n lines 23 and 31  

