function menu_active(id){
    var x = document.getElementById(id);
    if(x.className.indexOf(' menu--active') == -1)
    {
        x.className +=' menu--active';
    }
    else{
        x.className = x.className.replace(' menu--active',"")
    }
}
