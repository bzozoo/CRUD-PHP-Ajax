'use strict';
//Autoload
getPerson();

//Modal form call
function addPerson() {
    $('#addPerson').modal('toggle');
}

//SELECT
function getPerson(){
    var xmlhttp = new XMLHttpRequest();
    var data = 'views/person/person_view.php';

    xmlhttp.onreadystatechange = function () {
        if(xmlhttp.readyState == XMLHttpRequest.DONE){
            if(xmlhttp.status == 200){
                document.getElementById('info').innerHTML = xmlhttp
                    .responseText;

            }else if(xmlhttp.status == 400){
                alert('not found');
            }else{
                alert('Nada');
            }
        }
    };
    xmlhttp.open('GET', data, true);
    xmlhttp.send();
}

//INSERT
//Send form submit new person
document.getElementById('formadd').addEventListener('submit', function (e) {
    e.preventDefault();
    //Campos
    var cedula = document.getElementById('cedula').value;
    var name = document.getElementById('name').value;
    var salary = document.getElementById('salary').value;

    setPerson(cedula, name, salary);
});

function setPerson(cedula, name, salary) {
    var Form = new FormData();
    Form.append('cedula', cedula);
    Form.append('name', name);
    Form.append('salary', salary);
    Form.append('new', 'new');

    var url = 'controllers/person/person_ctrl.php';

    if(window.XMLHttpRequest){
        var solicitud = new XMLHttpRequest();
    }else{
        solicitud = new ActiveXObject("Microsoft.XMLHTTP");
    }

    solicitud.onreadystatechange = function () {
        if(solicitud.readyState == 4 && solicitud.status == 200){
            getPerson();
            addPerson();
            document.getElementById('formadd').reset();
        }
    }
    solicitud.open('POST', url, true);
    solicitud.send(Form);
}

//DELETE
function delPerson(index, id){
    var tabla = document.getElementById('table');
    var tr = index.parentNode.parentNode.rowIndex;
    var confirmacion = confirm(`Seguro que desea eliminar esta persona ${id}?`);
    if(confirmacion){
        var xmlhttp = new XMLHttpRequest();
        var data='controllers/person/person_ctrl.php?id='+id;
        xmlhttp.onreadystatechange = function() {
            if (xmlhttp.readyState == XMLHttpRequest.DONE) {
                if (xmlhttp.status == 200) {
                    console.log(xmlhttp.responseText);
                    getPerson();
                    tabla.deleteRow(tr);
                }
                else if (xmlhttp.status == 400) {
                    console.log('error 400');
                }
                else {
                    console.log('something else other than 200 was returned');
                }
            }
        };
        xmlhttp.open("GET", data, true);
        xmlhttp.send();
    }
}

//EDIT
//1=> Me llena el formulario modal editar
function modalEdit(index) {
    //Modal edit
    $('#editPerson').modal('toggle');

    //Nodos tabla
    var id_employee = index.parentNode.parentNode.cells[0].textContent;
    var new_cedula = index.parentNode.parentNode.cells[1].textContent;
    var new_name = index.parentNode.parentNode.cells[2].textContent;
    var new_salary = index.parentNode.parentNode.cells[3].textContent;
    var new_created = index.parentNode.parentNode.cells[4].textContent;

    //Pego en el formulario
    document.getElementById('id_employee').value = id_employee;
    document.getElementById('new_cedula').value = new_cedula;
    document.getElementById('new_name').value = new_name;
    document.getElementById('new_salary').value = new_salary;
    document.getElementById('new_created').value = new_created;
}

//2=> Send form submit edit person
document.getElementById('formedit').addEventListener('submit', function (e) {
//document.forms[1].addEventListener('submit', function (e) {
    e.preventDefault();
    //Campos
    var id_employee = document.getElementById('id_employee').value;
    var new_cedula = document.getElementById('new_cedula').value;
    var new_name = document.getElementById('new_name').value;
    var new_salary = document.getElementById('new_salary').value;
    var new_created = document.getElementById('new_created').value;

    editPerson(id_employee, new_cedula, new_name, new_salary, new_created);
});

//3 => Se envia la informacion
function editPerson(id_employee, cedula, name, salary, created){
    //DataForm
    var FormEdit = new FormData();
    FormEdit.append('id_employee', id_employee);
    FormEdit.append('new_cedula', cedula);
    FormEdit.append('new_name', name);
    FormEdit.append('new_salary', salary);
    FormEdit.append('new_created', created);
    FormEdit.append('edit', 'edit');

    var url = 'controllers/person/person_ctrl.php';

    if(window.XMLHttpRequest){
        var solicitud = new XMLHttpRequest();
    }else{
        solicitud = new ActiveXObject("Microsoft.XMLHTTP");
    }

    solicitud.onreadystatechange = function () {
        if(solicitud.readyState == 4 && solicitud.status == 200){
            getPerson();
            $('#editPerson').modal('hide');
            document.getElementById('formedit').reset();
        }
    }
    solicitud.open('POST', url, true);
    solicitud.send(FormEdit);
}