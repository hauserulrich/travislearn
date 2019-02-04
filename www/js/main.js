/**
 *  setting of background colour, when an element is entered by the mouse.
 */
 function enterbgcolor(){
	//	this.innerHTML = 'Called';
	this.style.backgroundColor = '#808080';
}

/**
 *  setting of background colour, when an element is left by the mouse.
 */
function leavebgcolor()
{
	//	this.innerHTML = 'Gone';
	this.style.backgroundColor = '#404040';
}

/**
 *  setting of background colour, when an element is clicked
 */
function clicked()
{
	//	this.innerHTML = 'Gone';
	this.style.backgroundColor = '#ff0000';
}
function contextclick()
{
	//	this.innerHTML = 'Gone';
	this.style.backgroundColor = '#ff0000';
}

/**
 *  initialisation of the page, should be called after loading is completed (onload)
 */
function init()
{
	const lis = document.getElementsByTagName('li');
	let i = 0;

	for (i = 0; i < lis.length; i++)
	{
		lis[i].onmouseover = enterbgcolor;
		lis[i].onmouseout = leavebgcolor;
		lis[i].onclick = clicked;
    lis[i].oncontextmenu = contextclick;
	}
}

/**
 *  calling the initialisation after page loading is completed
 */
 window.onload = init;
