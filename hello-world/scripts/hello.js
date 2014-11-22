var myButton = document.getElementById("clickButton");
var myText = document.getElementById("helloText");

myButton.addEventListener('click', doSomething, false)

function resetTextContent()
{
	myText.textContent = "?";
}

function doSomething() {
	myText.textContent = "hello, world!";
	window.setTimeout(resetTextContent,30000);
}