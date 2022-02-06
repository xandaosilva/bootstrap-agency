$(document).ready(function(){

    let containerA = document.getElementById("circleA");
    let containerB = document.getElementById("circleB");
    let containerC = document.getElementById("circleC");
    let containerD = document.getElementById("circleD");

    let circleA = new ProgressBar.Circle(containerA, {
        color: " #65DAF9",
        strokeWidth: 8,
        duration: 1400,
        from: { color: "#AAA" },
        to: { color: "#65DAF9" },

        step: function(state, circle){
            circle.path.setAttribute("stroke", state.color);
            let value = Math.round(circle.value() * 60);
            circle.setText(value);
        }
    });

    let circleB = new ProgressBar.Circle(containerB, {
        color: " #65DAF9",
        strokeWidth: 8,
        duration: 1600,
        from: { color: "#AAA" },
        to: { color: "#65DAF9" },

        step: function(state, circle){
            circle.path.setAttribute("stroke", state.color);
            let value = Math.round(circle.value() * 254);
            circle.setText(value);
        }
    });

    let circleC = new ProgressBar.Circle(containerC, {
        color: " #65DAF9",
        strokeWidth: 8,
        duration: 2000,
        from: { color: "#AAA" },
        to: { color: "#65DAF9" },

        step: function(state, circle){
            circle.path.setAttribute("stroke", state.color);
            let value = Math.round(circle.value() * 32);
            circle.setText(value);
        }
    });

    let circleD = new ProgressBar.Circle(containerD, {
        color: " #65DAF9",
        strokeWidth: 8,
        duration: 2200,
        from: { color: "#AAA" },
        to: { color: "#65DAF9" },

        step: function(state, circle){
            circle.path.setAttribute("stroke", state.color);
            let value = Math.round(circle.value() * 5243);
            circle.setText(value);
        }
    });

    /* Starts loader when user arrives at element */
    let dataAreaOffSet = $("#data-area").offset();
    let stop = 0;

    $(window).scroll(function(e){
        let scroll = $(window).scrollTop();

        if(scroll > (dataAreaOffSet.top - 500) && stop === 0){
            circleA.animate(1.0);
            circleB.animate(1.0);
            circleC.animate(1.0);
            circleD.animate(1.0);

            stop = 1;
        }
    });

    /* Parallax */
    setTimeout(function(){
        $("#data-area").parallax({imageSrc: "../assets/img/cidadeparallax.png"});
        $("#apply-area").parallax({imageSrc: "../assets/img/pattern.png"});
    }, 250);

});