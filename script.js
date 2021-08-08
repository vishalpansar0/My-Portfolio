// document.getElementById("body").style.backgroundColor = "";
document.documentElement.style.setProperty('--main-color', 'green');
function myfun(x){
    document.documentElement.style.setProperty('--main-color', x);
}