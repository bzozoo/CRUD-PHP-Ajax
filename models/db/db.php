<?php
/**
 * Created by PhpStorm.
 * User: rondonle
 * Date: 28/12/2017
 * Time: 03:19 PM
 */

class db
{
    public static function conexion(){
        $conexion = new mysqli('localhost', 'root', 'avior.2018', 'mvc', '3306');
        $conexion->query("SET NAMES 'utf8'");
        return $conexion;
    }
}