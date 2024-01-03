let istatus = document.querySelector("h5");
let btn = document.querySelector("#add");
let check = 0;


btn.addEventListener("click", function () {
    if (check == 0) {
        istatus.innerHTML = "Friends"
        istatus.style.color = "green"
        btn.innerHTML = "Remove Friend"
        btn.style.background = "red"
        check = 1
    }
    else{
        istatus.innerHTML = "Stranger"
        istatus.style.color = "red"
        btn.innerHTML = "Add Friend"
        btn.style.background = "cadetblue"
        check = 0
    }

})
