package com.cursojava.curso.controllers;

import com.cursojava.curso.model.TurnoTrabajo;
import com.cursojava.curso.model.Usuario;
import com.cursojava.curso.service.TurnoTrabajoServiceAPI;
import com.cursojava.curso.service.dao.TurnoTrabajoDAO;
import com.cursojava.curso.service.dao.UsuarioDAO;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.ArrayList;
import java.util.List;

@RestController
@RequestMapping(value = "/TurnoTrabajo")
public class TurnoTrabajoRestController {

    @Autowired
    private TurnoTrabajoServiceAPI turnoTrabajoServiceAPI;

    @Autowired
    private AuditoriaRestController audi;

    @GetMapping(value = "/getAll")
    public List<TurnoTrabajoDAO> getAll(){
        List<TurnoTrabajo> getall = turnoTrabajoServiceAPI.getAll();
        List<TurnoTrabajoDAO> listaF = new ArrayList<>();

        for (TurnoTrabajo t:getall){
            if(t.getEstado().equals("A")){
                TurnoTrabajoDAO objeto = new TurnoTrabajoDAO(t.getIdTurno(),t.getDescripcion(),t.getEstado());
                listaF.add(objeto);
            }
        }
        return listaF;
    }

    @PostMapping(value = "/saveTurnoTrabajo/{idUsuario}")
    public HttpStatus save(@RequestBody TurnoTrabajo turnoTrabajo, @PathVariable(value = "idUsuario") int idUsuario){
        turnoTrabajo.setEstado("A");
        turnoTrabajoServiceAPI.save(turnoTrabajo);
        audi.saveAuditoria("Guardar", "TurnoTrabajo",idUsuario);

        return HttpStatus.OK;
    }

    @PutMapping(value = "/updateTurnoTrabajo/{id}/{idUsuario}")
    public HttpStatus update(@RequestBody TurnoTrabajo tipoDocumento,
                                               @PathVariable(value = "id") int id_documento, @PathVariable(value = "idUsuario") int idUsuario){

        TurnoTrabajo objeto = turnoTrabajoServiceAPI.get(id_documento);
        if (objeto != null){
            objeto.setDescripcion(tipoDocumento.getDescripcion());
            objeto.setEstado(tipoDocumento.getEstado());
            turnoTrabajoServiceAPI.save(objeto);
            audi.saveAuditoria("Actualizar", "TurnoTrabajo",idUsuario);
        }else{
            return HttpStatus.INTERNAL_SERVER_ERROR;
        }
        return HttpStatus.OK;
    }

    @GetMapping(value = "/deleteTurnoTrabajo/{id}/{idUsuario}")
    public HttpStatus delete(@PathVariable int id, @PathVariable(value = "idUsuario") int idUsuario){
        TurnoTrabajo tipoDocumento = turnoTrabajoServiceAPI.get(id);
        if (tipoDocumento != null){
            tipoDocumento.setEstado("D");
            turnoTrabajoServiceAPI.save(tipoDocumento);
            audi.saveAuditoria("Eliminar", "TurnoTrabajo",idUsuario);
        }else{
            return HttpStatus.INTERNAL_SERVER_ERROR;
        }
        return HttpStatus.OK;
    }
}