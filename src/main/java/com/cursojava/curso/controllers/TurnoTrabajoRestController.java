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
    public ResponseEntity<TurnoTrabajo> save(@RequestBody TurnoTrabajo tipoDocumento){
        TurnoTrabajo objeto = turnoTrabajoServiceAPI.save(tipoDocumento);

        return new ResponseEntity<TurnoTrabajo>(objeto, HttpStatus.OK);
    }

    @PutMapping(value = "/updateTurnoTrabajo/{id}")
    public ResponseEntity<TurnoTrabajo> update(@RequestBody TurnoTrabajo tipoDocumento,
                                               @PathVariable(value = "id") int id_documento){

        TurnoTrabajo objeto = turnoTrabajoServiceAPI.get(id_documento);
        if (objeto != null){
            objeto.setDescripcion(tipoDocumento.getDescripcion());
            objeto.setEstado(tipoDocumento.getEstado());
            turnoTrabajoServiceAPI.save(objeto);
        }else{
            return new ResponseEntity<TurnoTrabajo>(tipoDocumento, HttpStatus.INTERNAL_SERVER_ERROR);
        }
        return new ResponseEntity<TurnoTrabajo>(objeto, HttpStatus.OK);
    }

    @GetMapping(value = "/deleteTurnoTrabajo/{id}")
    public ResponseEntity<TurnoTrabajo> delete(@PathVariable int id){
        TurnoTrabajo tipoDocumento = turnoTrabajoServiceAPI.get(id);
        if (tipoDocumento != null){
            turnoTrabajoServiceAPI.delete(id);
        }else{
            return new ResponseEntity<TurnoTrabajo>(tipoDocumento, HttpStatus.INTERNAL_SERVER_ERROR);
        }
        return new ResponseEntity<TurnoTrabajo>(tipoDocumento, HttpStatus.OK);
    }
}