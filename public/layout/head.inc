<?php session_start(); ?>
<!doctype html>
<html lang="es">
<head>
    <meta charset="UTF-8">
    <meta name="viewport"
          content="width=device-width, user-scalable=no, initial-scale=1.0, maximum-scale=1.0, minimum-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    <title>MVC</title>
    <link rel="stylesheet" href="public/assets/css/bootstrap.min.css">
</head>
<body>
<nav class="navbar navbar-default">
    <div class="container-fluid">
        <div class="navbar-header">
            <a class="navbar-brand" href="">
                <p>MVC</p>
            </a>
        </div>
            <div class="collapse navbar-collapse" id="bs-example-navbar-collapse-1">
                <ul class="nav navbar-nav">
                    <?php if(isset($_SESSION['login'])){ ?>
                        <li><a href="#" onclick="addPerson();">Nueva persona</a></li>
                    <?php } ?>
                </ul>
                <ul class="nav navbar-nav navbar-right">
                    <?php if(isset($_SESSION['login'])){ ?>
                        <li><a href="#"><b><?php echo $_SESSION['login']; ?></b></a></li>
                        <li role="separator" class="divider"></li>
                        <li><a href="#" onclick="logout();"> Salir</a></li>
                     <?php }else{ ?>
                        <li><a href="#" onclick="login();"> Entrar</a></li>
                    <?php } ?>
                </ul>
            </div>
    </div>
</nav>
<div class="container">
    <div id="info"></div>