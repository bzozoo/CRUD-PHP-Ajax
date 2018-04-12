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
        $sql = $this->db->query("SELECT * FROM employee");
        while($filas = $sql->fetch_assoc()){
            $this->personas[] = $filas;
        }

        return $this->personas;
    }

    public function getPersonasId($id_employee){
        $sql = $this->db->query("SELECT * FROM employee WHERE id_employee='{$id_employee}'");
        while($filas = $sql->fetch_assoc()){
            $this->personas[] = $filas;
        }
        return $this->personas;
    }

    public function setPersonas($cedula, $name, $salary){
        $sql = "INSERT INTO employee(id_employee, cedula, name, salary)VALUES(
                NULL, '{$cedula}', '{$name}', '{$salary}')";
        return $this->db->query($sql);
    }

    public function delPersonas($id_employee){
        $sql = "DELETE FROM employee WHERE id_employee={$id_employee}";
        return $this->db->query($sql);
    }

    public function editPersonas($id_employee ,$cedula, $name, $salary, $created){
        $sql = "UPDATE employee SET cedula='{$cedula}', name='{$name}', 
                  salary='{$salary}', created='{$created}'
                  WHERE id_employee='{$id_employee}'";
        return $this->db->query($sql);
    }
}