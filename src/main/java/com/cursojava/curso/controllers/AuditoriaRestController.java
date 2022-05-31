package com.cursojava.curso.controllers;

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
    public ResponseEntity<Auditoria> save(@RequestBody Auditoria tipoDocumento){
        Auditoria objeto = auditoriaServiceAPI.save(tipoDocumento);

        return new ResponseEntity<Auditoria>(objeto, HttpStatus.OK);
    }

    @PutMapping(value = "/updateAuditoria/{id}")
    public ResponseEntity<Auditoria> update(@RequestBody Auditoria tipoDocumento, @PathVariable(value = "id") int id_documento){

        Auditoria objeto = auditoriaServiceAPI.get(id_documento);
        if (objeto != null){
            objeto.setUsuario(tipoDocumento.getUsuario());
            objeto.setFechaHora(tipoDocumento.getFechaHora());
            objeto.setEvento(tipoDocumento.getEvento());
            objeto.setTabla(tipoDocumento.getTabla());
            auditoriaServiceAPI.save(objeto);
        }else{
            return new ResponseEntity<Auditoria>(tipoDocumento, HttpStatus.INTERNAL_SERVER_ERROR);
        }
        return new ResponseEntity<Auditoria>(objeto, HttpStatus.OK);
    }

    @GetMapping(value = "/deleteAuditoria/{id}")
    public ResponseEntity<Auditoria> delete(@PathVariable int id){
        Auditoria tipoDocumento = auditoriaServiceAPI.get(id);
        if (tipoDocumento != null){
            auditoriaServiceAPI.delete(id);
        }else{
            return new ResponseEntity<Auditoria>(tipoDocumento, HttpStatus.INTERNAL_SERVER_ERROR);
        }
        return new ResponseEntity<Auditoria>(tipoDocumento, HttpStatus.OK);
    }
}