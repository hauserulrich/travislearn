function enterbgcolor()
{
//	this.innerHTML = 'Called';
	this.style.backgroundColor = "#808080";
};
function leavebgcolor()
{
//	this.innerHTML = 'Gone';
	this.style.backgroundColor = "#404040";
};
function clicked()
{
//	this.innerHTML = 'Gone';
	this.style.backgroundColor = "#ff0000";
};
function init()
{
	var lis=document.getElementsByTagName("li");

	for (var i=0;i<lis.length;i++)
	{
		lis[i].onmouseover = enterbgcolor;
		lis[i].onmouseout = leavebgcolor;
		lis[i].onclick = clicked;
	}
};
window.onload=init;
