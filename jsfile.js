let menu = document.getElementsByClassName("menubar")[0];
let navlist = document.getElementsByClassName("navlist")[0];
let rightnav = document.getElementsByClassName("rightnav")[0];

menu.addEventListener("click", menudisplay);
function menudisplay() {
    if (navlist.style.display === 'none' || navlist.style.display === '') {
        navlist.style.display = 'flex'; // Show the navlist
        rightnav.style.display = 'flex'; // Show the rightnav
    } else {
        navlist.style.display = 'none'; // Hide the navlist
        rightnav.style.display = 'none'; // Hide the rightnav
    }

}
