jQuery(function($) {
    $("#slider").owlCarousel({

        autoPlay: 3000, //Set AutoPlay to 3 seconds

        items : 1,
        itemsDesktop : [1199,3],
        itemsDesktopSmall : [979,3]

    });

    var $amount = $(".offer-amount"),
        $amountWrap = $(".offer-amount-wrap"),
        $offerSizing = $(".offer-sizings");

    // +1 and -1
    $amountWrap.on("click",".amount-left_img",function() {
        $amount.text($amount.text() - 1);
        calc();
    });

    $amountWrap.on("click",".amount-right_img",function() {
        $amount.text(parseInt($amount.text()) + 1);
        calc();
    });
    //

    $offerSizing.on("click", ".checkbox" ,function() {
        $(".checkbox-active").removeClass("checkbox-active");
        $(this).addClass("checkbox-active");
        calc();
    });


    function calc() {
        var priceOne = $(".checkbox-active").next("span > span.bold.size-price").prevObject[0].nextElementSibling.childNodes[1].nextSibling.innerText;
        var calc = priceOne * $amount.text();
        if( calc < 0) {
            $(".price-numb-wrap span").text(0);
        } else {
            $(".price-numb-wrap span").text(calc);
        }

    }


});