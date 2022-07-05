function add_new_item_list(){
    let l = document.createElement("li");
    let inp = document.getElementById("item");
    let item = inp.value;
    l.innerText = item;
    let ltd = document.getElementById("item_container");    
    item_container.appendChild(l);
}