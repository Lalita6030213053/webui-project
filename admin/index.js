
$(function () {
    $('#mainform').submit(function (event) {
        var form = $('#mainform')[0];
        if (form.checkValidity() === false) {
            event.preventDefault();
            console.log('DD');
        }
        $(this).addClass('was-validated');
    });
});


function Login() {

    var email = document.getElementById("email").value;
    var password = document.getElementById("password").value;

    if (email == "admin@nw.com" && password == "12345**") {
        console.log(true);
        alert("Login successfully");
        return true;
    } else {
        console.log(false);
        alert("Something Wrong!!")
        return false;
    }

}

$(function () {

    $.get("products.json", function (data) {
        var i = 0;
        for (i = 0; i <= data.length; i++) {
            var total = 0;
            total += i;
        }
        $("#getproducts").append(total);

    });

    $.get("customers.json", function (data) {
        var i = 0;
        for (i = 0; i <= data.length; i++) {
            var total = 0;
            total += i;
        }
        $("#getcustomers").append(total);

    });

    $.get("suppliers.json", function (data) {
        var i = 0;
        for (i = 0; i <= data.length; i++) {
            var total = 0;
            total += i;
        }
        $("#getsupplys").append(total);

    });

    $.get("orders.json", function (data) {
        var i = 0;
        for (i = 0; i <= data.length; i++) {
            var total = 0;
            total += i;
        }
        $("#getorders").append(total);

    });
});