<?php
session_start();
require_once '../../models/person/person_model.php';

//Instance
$persona = new personasModel();
//GET
$datos = $persona->getPersonas();
//POST
if(!empty($_POST['new'])){
    $persona->setPersonas($_POST['cedula'], $_POST['name'], $_POST['salary']);
}
//DELETE
if(!empty($_GET['id'])){
    $persona->delPersonas($_GET['id']);
}
//EDIT
if(!empty($_POST['edit'])){
    $persona->editPersonas($_POST['id_employee'], $_POST['new_cedula'], $_POST['new_name'], $_POST['new_salary'], $_POST['new_created']);
}