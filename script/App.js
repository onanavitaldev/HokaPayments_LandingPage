window.onscroll = function() {
    scrollFunction()
};

function scrollFunction() {
    if (document.body.scrollTop > 680 || document.documentElement.scrollTop > 680) {
        document.getElementById("scroll").style.display = "block";
    } else {
        document.getElementById("scroll").style.display = "none";
    }
}

function onTop() {
    document.body.scrollTop = 0;
    document.documentElement.scrollTop = 0;
}

/* Hide or delete load space */
setTimeout(() => {
    document.querySelector('.load').style.display = "none";
}, 2000);