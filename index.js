
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

$(function () {
    $.get("customers.json", function (data) {
        var Htable = '<tr><th>ID</th><th>Company Name</th><th>Contact Name</th><th>Contact Title</th></tr>';
        $('#cusTable').append(Htable);
        var i = 0
        for (i = 0; i < data.length; i++) {
            var j = i + 1;
            Rtable = '<tr><td>' + data[i].customerID + '</td><td><a href="custdetail.html" onclick="setCookies(' + i + ')">'
                + data[i].companyName + '</td><td>' + data[i].contactName + '</td><td>' + data[i].contactTitle + '</td></tr>';

            $('#cusTable').append(Rtable);
        }

    });
});

function setCookies(i) {
    document.cookie = i;
}

$(function () {
    $.get("customers.json", function (data) {
        var show = data;
        var showcust = show[document.cookie];

        var CardDetail = '<b>Customer ID : </b>' + showcust.customerID + '<br>' +
            '<b>Company : </b>' + showcust.companyName + '<br>' +
            '<b>Name : </b>' + showcust.contactName + '<br>' +
            '<b>Title : </b>' + showcust.contactTitle + '<br>' +
            '<b>Street : </b>' + showcust.address.street +
            '<br><b>City : </b>' + showcust.address.city +
            '<br><b>Region : </b>' + showcust.address.region +
            '<br><b>PostalCide </b>: ' + showcust.address.postalCode +
            '<br><b>Country : </b>' + showcust.address.country +
            '<br><b>Phone : </b>' + showcust.address.phone;

        $('#cusdetail').append(CardDetail);
    });
});

$(function () {
    $.get("customers.json", function (data) {
        var show = data;
        var showcust = show[document.cookie];

        var id = showcust.customerID;
        var company = showcust.companyName;
        var name = showcust.contactName;
        var title = showcust.contactTitle;
        var street = showcust.address.street;
        var city = showcust.address.city;
        var region = showcust.address.region;
        var postalCode = showcust.address.postalCode;
        var country = showcust.address.country;
        var phone = showcust.address.phone;

        $('#id').val(id);
        $('#company').val(company);
        $('#name').val(name);
        $('#title').val(title);
        $('#street').val(street);
        $('#city').val(city);
        $('#region').val(region);
        $('#postalCode').val(postalCode);
        $('#country').val(country);
        $('#phone').val(phone);

    });
});
