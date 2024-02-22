// ==UserScript==
// @name         reasonable layout for youtube
// @namespace    http://tampermonkey.net/
// @version      2024-02-22
// @description  try to take over the world!
// @author       szymonszewcjr
// @match        https://www.youtube.com/watch?v=*
// @icon         https://www.google.com/s2/favicons?sz=64&domain=youtube.com
// @grant        GM_addStyle
// ==/UserScript==


//readme!
//i threw this together in 15 minutes,
//dont expect this to be reliable and always work.
//feel free to fork this and improve upon it.



(function() {
    'use strict';
    var styleEl = null;
    const cssString = `

[id="content"].style-scope.ytd-rich-item-renderer{
transform: translateX(-50px);
}
.style-scope.ytd-rich-grid-row {
flex-direction:column;
transform: translate(calc(50% - 3px), 10px);
}


#scroll-container.ytd-feed-filter-chip-bar-renderer{
transform: translateX(256px);
}
ytd-watch-grid[is-two-columns_] #secondary-inner.ytd-watch-grid{

width: calc(100% + 400px);
overflow-y:hidden;
}
style-scope ytd-rich-grid-renderer{
display:block !important;
}
[id="secondary-inner"]{
z-index:420;
}
[id="secondary"]{
width:100%;
margin-left: 2rem;
}

`

function fixThisShit(){




        if(document.querySelector(`[id="columns"]`).children[0].id === 'primary'){ //swap elements if not swapped already
            try{
                document.querySelector(`[id="secondary"]`).after(document.querySelector(`[id="primary"]`));
            }catch(e){
                //will throw errors before layout loads, ignore them.
            }


        }
        ensureStyle();
}

function ensureStyle(){
        if(!styleEl){
            styleEl = GM_addStyle(cssString);
        }
}






    setInterval(fixThisShit,80);




    // Your code here...
})();