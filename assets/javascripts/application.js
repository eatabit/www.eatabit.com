(function() {

  if (document.getElementsByClassName("home").length > 0){

    $(".jumbotron").append('<div id="customer" class="bubble"></div>');
    $(".jumbotron").append('<div id="restaurant" class="bubble bubble--alt"></div>');

    var messages = ["I'm hungry!",
                    "Welcome back to Bill's Pizza, Greg! Would you like \"pickup\" or \"delivery\" service? Currently, pickup orders take 15 minutes and delivery takes 30 minutes.",
                    "Delivery",
                    "Do you want your order delivered to: 123 Fake St? Reply with \"ok\" or a new address.",
                    "OK",
                    "Ok. What would you like to order?",
                    "One large pizza: half veggie, half pepperoni",
                    "Your order: - One large pizza: half veggie, half pepperoni. Anything else? If not, text \"Done\"",
                    "I'm done",
                    "Ok, that's all the information we need! A confirmation is coming in a few minutes. Call us if you need to cancel.",
                    "Sweet! Thanks!"];

    $.each(messages, function(i, element) {
      if(i % 2 == 0) {
        setTimeout(function() { $("#customer").text(messages[i]).animate({ opacity: 1 }, 600); }, 3500 * i);
      }
      else {
        setTimeout(function() { $("#restaurant").text(messages[i]).animate({ opacity: 1 }, 600); }, 3500 * i);
      }
    });
  };

  $( ".navbar-text button, .navbar-text a" ).tooltip();

}).call(this);
