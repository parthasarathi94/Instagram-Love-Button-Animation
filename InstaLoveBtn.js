var con = document.querySelector("#container")
var love = document.querySelector("#mid")
var like = document.querySelector("#below")
var check = 0

con.addEventListener("dblclick", function () {
    if (check == 0) {
        love.style.transform = "translate(-50%, -50%) scale(1.5)"
        love.style.opacity = 0.8
        setTimeout(function () {
            love.style.opacity = 0
        }, 1000);
        setTimeout(function () {
            love.style.transform = "translate(-50%, -50%) scale(0)"
        }, 1000);
        like.style.color = "red"
        check = 1
    }
    else {
        love.style.transform = "translate(-50%, -50%) scale(1.5)"
        love.style.opacity = 0.8
        setTimeout(function () {
            love.style.opacity = 0
        }, 1000);
        setTimeout(function () {
            love.style.transform = "translate(-50%, -50%) scale(0)"
        }, 1000);
        like.style.color = "white"
        check = 0
    }
})
