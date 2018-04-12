'use strict';

function login() {
    $('#login').modal('toggle');
}

//SESSIONS
document.getElementById('loginForm').addEventListener('submit', function (e) {
    e.preventDefault();
    //Campos
    var user = document.getElementById('user').value;
    var pass = document.getElementById('pass').value;

    setSession(user, pass);
});

function setSession(user, pass) {
    var Form = new FormData();
    Form.append('user', user);
    Form.append('pass', pass);
    Form.append('session', 'session');

    var url = 'controllers/login/login.php';

    if(window.XMLHttpRequest){
        var solicitud = new XMLHttpRequest();
    }else{
        solicitud = new ActiveXObject("Microsoft.XMLHTTP");
    }

    solicitud.onreadystatechange = function () {
        if(solicitud.readyState == 4 && solicitud.status == 200){
            login();
            document.getElementById('loginForm').reset();
        }
    }
    solicitud.open('POST', url, true);
    solicitud.send(Form);
    window.location.reload(true);
}

function logout() {
    var Form = new FormData();
    //Form.append('user', user);
    Form.append('logout', 'logout');

    var url = 'controllers/login/login.php';

    if(window.XMLHttpRequest){
        var solicitud = new XMLHttpRequest();
    }else{
        solicitud = new ActiveXObject("Microsoft.XMLHTTP");
    }

    solicitud.onreadystatechange = function () {
        if(solicitud.readyState == 4 && solicitud.status == 200){
            //document.getElementById('loginForm').reset();
        }
    }
    solicitud.open('POST', url, true);
    solicitud.send(Form);
    window.location.reload(true);
}