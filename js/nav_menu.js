var Menu =
{
    init: function () {
        var clickbutton = document.getElementsByClassName("menunav");
        for (var i = 0; i < clickbutton.length; i++) {
            clickbutton[i].addEventListener("click", clickListener);
        }
        function clickListener(event) {
            var link = event.currentTarget;
            link.classList.toggle("toggleclass");
        }
    }
};


Menu.init();