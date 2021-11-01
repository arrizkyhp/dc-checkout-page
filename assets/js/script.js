const $input1 = $("#quantity-1");
const $input2 = $("#quantity-2");
const priceItem1 = 54.99;
const priceItem2 = 74.99;
const shipping = 19;
let itemTotal1 = priceItem1
let itemTotal2 = priceItem2
let totalPayment = 149.98;
let inputValue = "";
let $total = $("#total").text();

$input1.val(1);

const discountPriceFunc1 = e => {
    itemTotal1 = e
    $("#discount-price-1").text(e)
    totalPayment = parseFloat(itemTotal1) + parseFloat(itemTotal2) + shipping;
    $("#total").text(totalPayment.toFixed(2));
}

const discountPriceFunc2 = e => {
    itemTotal2 = e
    $("#discount-price-2").text(e)
     totalPayment = parseFloat(itemTotal1) + parseFloat(itemTotal2) + shipping;
     $("#total").text(totalPayment.toFixed(2));
}

$(".btn-counter").click( function() {
    if ($(this).hasClass('increment-1')) {
        inputValue = parseInt($input1.val()) + 1;
        $input1.val(inputValue);

        const priceIncrement = parseFloat(priceItem1) * inputValue;
        discountPriceFunc1(priceIncrement.toFixed(2));


    } else if ($(this).hasClass('decrement-1') && $input1.val() >= 1) {
        inputValue = parseInt($input1.val()) - 1;
        $input1.val(inputValue)

        let price = parseFloat(itemTotal1) - priceItem1;
          if (price == 0) {
            price = priceItem1;
          }
        discountPriceFunc1(price.toFixed(2));
        if ($input1.val() == 0) {
            $input1.val(1);
            itemTotal1 = priceItem1;
            $("#discount-price-1").text(priceItem1);
        };
    }

     if ($(this).hasClass("increment-2")) {
       inputValue = parseInt($input2.val()) + 1;
       $input2.val(inputValue);

        const priceIncrement = parseFloat(priceItem2) * inputValue;
        discountPriceFunc2(priceIncrement.toFixed(2));


     } else if ($(this).hasClass("decrement-2") && $input2.val() >= 1) {
       inputValue = parseInt($input2.val()) - 1;
       $input2.val(inputValue);

       let price = parseFloat(itemTotal2) - priceItem2;
      if (price == 0) {
        price = priceItem2
      }
       discountPriceFunc2(price.toFixed(2));


       if ($input2.val() == 0) {
         $input2.val(1);
         itemTotal2 = priceItem2;
         $("#discount-price-2").text(priceItem2);
       }
     }


})

$("#quantity-1").bind('keyup mouseup', function () {
    if ($(this).val() < 1) {
        $(this).val(1);
    }

     const priceIncrement = parseFloat(priceItem1) * $(this).val();
     discountPriceFunc1(priceIncrement.toFixed(2));
});

$("#quantity-2").bind("keyup mouseup", function () {
  if ($(this).val() < 1) {
    $(this).val(1);
  }

  const priceIncrement = parseFloat(priceItem2) * $(this).val();
  discountPriceFunc2(priceIncrement.toFixed(2));
});

function validateForm() {

  alert("Success!!!")
}