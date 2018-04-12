<div class="modal fade" id="editPerson">
    <div class="modal-dialog">
        <div class="modal-content">
            <div class="modal-header">
                <button type="button" class="close" data-dismiss="modal"
                        title="Cerrar">&times;</button>
                <h4 class="modal-title">Editar Persona</h4>
            </div>
            <div class="modal-body">
                <form id="formedit">
                    <div class="form-group">
                        <input class="form-control" type="text" disabled id="id_employee" placeholder="ID">
                    </div>
                    <div class="form-group">
                        <input class="form-control" type="text" id="new_cedula" placeholder="Cedula" autocomplete="off">
                    </div>
                    <div class="form-group">
                        <input class="form-control" type="text" id="new_name" placeholder="Nombre" autocomplete="off">
                    </div>
                    <div class="form-group">
                        <input class="form-control" type="text" id="new_salary" placeholder="Salario" autocomplete="off">
                    </div>
                    <div class="form-group">
                        <input class="form-control" type="text" id="new_created" placeholder="Created" autocomplete="off">
                    </div>
                    <input class="btn btn-primary" type="submit" value="Guardar">
                </form>
            </div>
        </div>
    </div>
</div>