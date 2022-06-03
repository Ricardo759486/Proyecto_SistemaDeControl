package com.cursojava.curso.controllers;

import com.cursojava.curso.model.Auditoria;
import com.cursojava.curso.service.AuditoriaServiceAPI;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping(value = "/Auditoria")
public class AuditoriaRestController {

    @Autowired
    private AuditoriaServiceAPI auditoriaServiceAPI;

    @GetMapping(value = "/getAll")
    public List<Auditoria> getAll(){
        return auditoriaServiceAPI.getAll();
    }

    @PostMapping(value = "/saveAuditoria")
    public ResponseEntity<Auditoria> save(@RequestBody Auditoria auditoria){
        Auditoria objeto = auditoriaServiceAPI.save(auditoria);

        return new ResponseEntity<Auditoria>(objeto, HttpStatus.OK);
    }

    @PutMapping(value = "/updateAuditoria/{id}")
    public ResponseEntity<Auditoria> update(@RequestBody Auditoria auditoria, @PathVariable(value = "id") int id){

        Auditoria objeto = auditoriaServiceAPI.get(id);
        if (objeto != null){
            objeto.setUsuario(auditoria.getUsuario());
            objeto.setFechaHora(auditoria.getFechaHora());
            objeto.setIpUsuario(auditoria.getIpUsuario());
            objeto.setOperacionCrud(auditoria.getOperacionCrud());
            objeto.setTabla(auditoria.getTabla());
            auditoriaServiceAPI.save(objeto);
        }else{
            return new ResponseEntity<Auditoria>(auditoria, HttpStatus.INTERNAL_SERVER_ERROR);
        }
        return new ResponseEntity<Auditoria>(objeto, HttpStatus.OK);
    }

    @GetMapping(value = "/deleteAuditoria/{id}")
    public ResponseEntity<Auditoria> delete(@PathVariable int id){
        Auditoria auditoria = auditoriaServiceAPI.get(id);
        if (auditoria != null){
            auditoriaServiceAPI.delete(id);
        }else{
            return new ResponseEntity<Auditoria>(auditoria, HttpStatus.INTERNAL_SERVER_ERROR);
        }
        return new ResponseEntity<Auditoria>(auditoria, HttpStatus.OK);
    }
}