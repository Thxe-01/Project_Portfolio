
function toggle_btn(x){
    x.classList.toggle("change");

    let menu_list = document.getElementById("menu");
    if (menu_list.className === 'select_menu'){
        menu_list.className += ' active';
    }
    else{
        menu_list.className = 'select_menu';
    }
}