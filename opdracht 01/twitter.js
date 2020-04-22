// $("input[type=text]#insertfield").val(140);


// $("submit").val(function (i, val) {
//     return value(140)
// });

// $("#insertfield").on("focus", function () {
//     $("#insertfield").val("");

//     $("#insertfield").on("keyup", function () {
//         var input = $("#insertfield").val();
//         var inputLengte = input.length;
//         console.log("de input is: " + input);
//         console.log("de lengte is: " + inputLengte);

//         $("#button");
//         if (inputLengte >= 140) {
//             alert("OK.");
//         } else {
//             alert("Het bericht bevat meer dan 140 tekens.");
//         }
//     });
// });

let counter = 0;
$("#insertfield").keyup(function () {
    counter = $(this).val().length;
    if (counter < 140) {
        $("#karakters").html(140 - counter + " characters remaining");
    } else $(this).val() = $(this).val().substring(0, 140);
});