<?php

require_once '../../models/db/db.php';

class personasModel
{
    private $db;
    private $personas;

    public function __construct()
    {
        $this->db=db::conexion();
        $this->personas=array();
    }

    public function getPersonas(){
        $sql = $this->db->query("SELECT * FROM personas");
        while($filas = $sql->fetch_assoc()){
            $this->personas[] = $filas;
        }

        return $this->personas;
    }

    public function getPersonasId($id_persona){
        $sql = $this->db->query("SELECT * FROM personas WHERE id_persona='{$id_persona}'");
        while($filas = $sql->fetch_assoc()){
            $this->personas[] = $filas;
        }
        return $this->personas;
    }

    public function setPersonas($cedula, $name, $salary){
        $sql = "INSERT INTO personas(id_persona, cedula, name, age)VALUES(
                NULL, '{$cedula}', '{$name}', '{$age}')";
        return $this->db->query($sql);
    }

    public function delPersonas($id_persona){
        $sql = "DELETE FROM personas WHERE id_persona={$id_persona}";
        return $this->db->query($sql);
    }

    public function editPersonas($id_persona ,$cedula, $name, $age, $created){
        $sql = "UPDATE personas SET cedula='{$cedula}', name='{$name}', 
                  age='{$age}', created='{$created}'
                  WHERE id_persona='{$id_persona}'";
        return $this->db->query($sql);
    }
}