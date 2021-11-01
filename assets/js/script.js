const $input1 = $("#quantity-1");
const priceItem1 = 54.99;
let itemTotal1 = priceItem1
let inputValue = "";

$input1.val(1);

const discountPriceFunc = e => {
    itemTotal1 = e
    return $("#discount-price-1").text(e)
}

$(".btn-counter").click( function() {
    let $discountPrice1 = $("#discount-price-1").text();
    let $total = $("#total").text();


    if ($(this).hasClass('increment-1')) {
        inputValue = parseInt($input1.val()) + 1;
        $input1.val(inputValue);

        const priceIncrement = parseFloat(priceItem1) * inputValue;
        discountPriceFunc(priceIncrement.toFixed(2));
        console.log(itemTotal1)

    } else if ($(this).hasClass('decrement-1') && $input1.val() >= 1) {
        inputValue = parseInt($input1.val()) - 1;
        $input1.val(inputValue)

        const price = parseFloat(itemTotal1) - priceItem1;
        discountPriceFunc(price.toFixed(2));
        if ($input1.val() == 0) {
            $input1.val(1);
            itemTotal1 = "54.99"
            $("#discount-price-1").text(54.99)
        };
        console.log(itemTotal1);
    }


})

$("#quantity-1").bind('keyup mouseup', function () {
    if ($(this).val() < 1) {
        $(this).val(1);
    }

     const priceIncrement = parseFloat(priceItem1) * $(this).val();
     discountPriceFunc(priceIncrement.toFixed(2));
    console.log($(this).val());
});