var btns = document.querySelectorAll('button');
var totalprice =  document.getElementById('price');
for (const btn of btns){
    btn.addEventListener('click',function(){
        var a = btn.parentElement.children[2].children[0].innerHTML;
        var b = totalprice.children[1].innerHTML;
        totalprice.children[1].innerHTML = parseFloat(a)+ parseFloat(b)
    })
}