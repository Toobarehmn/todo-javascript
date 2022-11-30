function entertodo(){
    var input = document.getElementById('input');
    var list = document.getElementById('list');
    var list_item = document.createElement('li');
    list_item.innerHTML = input.value;
    list.appendChild(list_item);
    input.value=" ";
    if(list_item.innerHTML=='Tooba'){
        alert("You Enter My Name");
    }


}
function cl(){
    var a = document.getElementById('input');
    a.value =" ";
}