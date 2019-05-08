
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



function Login(){

    var email = document.getElementById("email").value;
    var password = document.getElementById("password").value;

    if ( email == "admin@nw.com" && password == "12345**"){
        console.log(true);
    alert("Login successfully");
    return true;
}else{
    console.log(false);
    alert("Something Wrong!!")
    return false;
}

}