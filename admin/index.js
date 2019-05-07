
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

    var username = document.getElementById("username").value;
    var password = document.getElementById("password").value;
    if ( username == "admin@nw.com" && password == "12345**"){
    alert("Login successfully");
}
    //  var username =  document.getElementById('username').val;
    // var password =  document.getElementById('password').val;

    // if(username == "" && password == ""){
    //     console.log(true);
    // }else{
    //     console.log(false);
    // }

}