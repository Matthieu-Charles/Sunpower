window.onscroll = function() {scrollFunction()};
function scrollFunction() {
if (document.body.scrollTop > 100 || document.documentElement.scrollTop > 100) 
{
document.getElementById("haut").style.display = "block";
} 
else 
{
document.getElementById("haut").style.display = "none";
}
}

function retourHaut() {
document.body.scrollTop = 0;
document.documentElement.scrollTop = 0;
} 