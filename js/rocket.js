var timer = null;
var countdownNumber = 10;


var changeState = function (state) {
    document.body.className = 'body-state' + state;
    clearInterval(timer);
    countdownNumber = 10;
    document.getElementById('countdown').innerHTML = countdownNumber;

    //countdown
    if (state == 2) {
        timer = setInterval(function () {
                       countdownNumber = countdownNumber - 1;
            document.getElementById('countdown').innerHTML = countdownNumber;

            if (countdownNumber == 5) {
              //  Blast Off!!  
            }; 
            
            if (countdownNumber == 3) {
              //  Let's Do This
            };
            
            
            if (countdownNumber <= 0) {
                changeState(3);
            }
        }, 500);
    } else if (state == 3) {
        var success = setTimeout(function () {
            var randomNumber = Math.round(Math.random() * 10);

            console.log('randomNumber:', randomNumber)

            //SUCcESS
            if (randomNumber > 3) {
                // do something
                changeState(4);
            } else {
                //do something else
                changeState(5); // Oh no!!
            }
        }, 2000)
    }
}
