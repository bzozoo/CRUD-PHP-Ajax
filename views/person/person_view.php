<?php require_once '../../controllers/person/person_ctrl.php';?>
<input type="search" id="search" class="form-control" onkeyup="filterPerson();" placeholder="Buscar">
<table id="table" class="table table-responsive">
        <tr>
            <th>ID</th>
            <th>CEDULA</th>
            <th>NAME</th>
            <th>AGE</th>
            <th>CREATED</th>
            <th>OPCION</th>
        </tr>
        <tr><?php foreach ($datos as $dato){ ?>
            <td data-prop="id_persona"><?php echo $dato['id_persona']; ?></td>
            <td data-prop="cedula"><?php echo $dato['cedula']; ?></td>
            <td data-prop="name"><?php echo $dato['name']; ?></td>
            <td data-prop="age"><?php echo $dato['age']; ?></td>
            <td data-prop="created"><?php echo $dato['created']; ?></td>
            <td>
                <button class="btn btn-default" onclick="modalEdit(this, <?php echo $dato['id_persona']; ?>)"><i class="glyphicon glyphicon-pencil"></i></button>
                <button class="btn btn-default" onclick="delPerson(this, <?php echo $dato['id_persona']; ?>)"><i class="glyphicon glyphicon-trash"></i></button>
            </td>
        </tr>
        <?php } ?>
    </table>
    <hr>