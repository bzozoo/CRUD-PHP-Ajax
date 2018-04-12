<?php 
session_start();

//SESSION
if(!empty($_POST['session'])){
    //$persona->setSession($_POST['user'], $_POST['pass']);
    $_SESSION['login'] = $_POST['user'];
}

if(!empty($_POST['logout'])){
    //$persona->setSession($_POST['user'], $_POST['pass']);
    //$_SESSION['login'] = $_POST['user'];
    session_destroy();
}