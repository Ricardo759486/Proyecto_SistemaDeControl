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

    @PostMapping(value = "/saveTurnoTrabajo")
    public HttpStatus save(@RequestBody TurnoTrabajo tipoDocumento){
        turnoTrabajoServiceAPI.save(tipoDocumento);
        return HttpStatus.OK;
    }

    @PutMapping(value = "/updateTurnoTrabajo/{id}")
    public HttpStatus update(@RequestBody TurnoTrabajo tipoDocumento,
                                               @PathVariable(value = "id") int id_documento){

        TurnoTrabajo objeto = turnoTrabajoServiceAPI.get(id_documento);
        if (objeto != null){
            objeto.setDescripcion(tipoDocumento.getDescripcion());
            objeto.setEstado(tipoDocumento.getEstado());
            turnoTrabajoServiceAPI.save(objeto);
        }else{
            return HttpStatus.INTERNAL_SERVER_ERROR;
        }
        return HttpStatus.OK;
    }

    @GetMapping(value = "/deleteTurnoTrabajo/{id}")
    public HttpStatus delete(@PathVariable int id){
        TurnoTrabajo tipoDocumento = turnoTrabajoServiceAPI.get(id);
        if (tipoDocumento != null){
            tipoDocumento.setEstado("D");
            turnoTrabajoServiceAPI.save(tipoDocumento);
        }else{
            return HttpStatus.INTERNAL_SERVER_ERROR;
        }
        return HttpStatus.OK;
    }
}