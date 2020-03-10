;(function(){

			// Menu settings
			$('#menuToggle, .menu-close').on('click', function(){
				$('#menuToggle').toggleClass('active');
				$('body').toggleClass('body-push-toleft');
				$('#theMenu').toggleClass('menu-open');
			});



    // set the date we're counting down to
    var target_date = new Date('May, 24, 2018').getTime();

    // variables for time units
    var days, hours, minutes, seconds;

    // get tag element
    var countdown = document.getElementById('countdown');

    // update the tag with id "countdown" every 1 second
    setInterval(function () {

        // find the amount of "seconds" between now and target
        var current_date = new Date().getTime();
        var seconds_left = (target_date - current_date) / 1000;

        // do some time calculations
        days = parseInt(seconds_left / 86400);
        seconds_left = seconds_left % 86400;

        hours = parseInt(seconds_left / 3600);
        seconds_left = seconds_left % 3600;

        minutes = parseInt(seconds_left / 60);
        seconds = parseInt(seconds_left % 60);

        function makeMeTwoDigits(n){
            return (n < 10 ? "0" : "") + n;
        }

        // format countdown string + set tag value
        countdown.innerHTML =
        '<div class="col-sm-4 col-sm-offset-4 col-xs-8 col-xs-offset-2"><div class="col-sm-3 col-xs-3"> ' + makeMeTwoDigits(days) +
        '<br>dd</div><div class="col-sm-3 col-xs-3"> ' + makeMeTwoDigits(hours) +
        '<br>hh</div><div class="col-sm-3 col-xs-3"> ' + makeMeTwoDigits(minutes) +
        '<br>mm</div><div class="col-sm-3 col-xs-3">  ' + makeMeTwoDigits(seconds) +
        '<br>ss</div></div> ';

    }, 1000);

})(jQuery)

  function confirmEmail()
  {
  alert("Tvůj e-mail úspěšně přidán. Nyní budeš informován o všech novinkách o Dnu Trifidů."); // this is the message in ""
  }
