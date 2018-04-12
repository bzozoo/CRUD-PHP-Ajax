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

    var url = 'controllers/person/person_ctrl.php';

    if(window.XMLHttpRequest){
        var solicitud = new XMLHttpRequest();
    }else{
        solicitud = new ActiveXObject("Microsoft.XMLHTTP");
    }

    solicitud.onreadystatechange = function () {
        if(solicitud.readyState == 4 && solicitud.status == 200){
            $('#login').modal('hide');
            document.getElementById('loginForm').reset();
        }
    }
    solicitud.open('POST', url, true);
    solicitud.send(Form);
}