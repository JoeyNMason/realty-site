const panels = document.querySelectorAll('.panel');

panels.forEach((panel) => {
    panel.addEventListener('click', () => {
        removeActiveClasses()
        panel.classList.add('active');
    });
});

function removeActiveClasses(){
    panels.forEach((panel) => {
        panel.classList.remove('active')
    })
}

var prevScrollpos = window.scrollX;
window.onscroll = function() {
    var currentScrollPos = window.scrollY;
    if(prevScrollpos > currentScrollPos) {
        document.getElementById("navbar").style.top = "0";
    } else {
        document.getElementById("navbar").style.top = "-50px";
    }
    prevScrollpos = currentScrollPos;
}