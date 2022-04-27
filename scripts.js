window.onload = init;

        var count = 1;
        var timeoutID;


        /*function delayedAlert() {
            timeoutID = window.setTimeout(window.alert, 1500, "You pressed the fart button " + count + " times");

        }*/


        function init() {
            var farts = document.getElementsByTagName("button");
            for (i = 0; i < farts.length; i++) {
                farts[i].onclick = messageDisplay;

            }
        }

        function messageDisplay(eventObj) {
            var totals = document.getElementById("totals");
            var fart = eventObj.target;
            var fart = fart.id + ".mp3";
            var fartSound = new Audio(fart);
            fartSound.play();
            //delayedAlert();
            totals.innerHTML = "Total farts = " + count + ".";
            count = count + 1;
        }
