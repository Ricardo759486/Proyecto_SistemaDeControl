package com.cursojava.curso.commons.controllers;

import com.cursojava.curso.model.Auditoria;
import com.cursojava.curso.model.Usuario;
import com.cursojava.curso.service.AuditoriaServiceAPI;
import com.cursojava.curso.service.UsuarioServiceAPI;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.repository.query.Param;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping(value = "/Auditoria")
public class AuditoriaRestController {

    @Autowired
    private AuditoriaServiceAPI auditoriaServiceAPI;
    @Autowired
    private UsuarioServiceAPI usuarioServiceAPI;

    @GetMapping(value = "/getAll")
    public List<Auditoria> getAll(){
        return auditoriaServiceAPI.getAll();
    }

    @PostMapping(value = "/saveAuditoria/{idUsuario}")
    public ResponseEntity<Auditoria> save(@RequestBody Auditoria auditoria,
                                          @PathVariable(value = "idUsuario") int idUsuario){
        Usuario usuario = usuarioServiceAPI.get(idUsuario);
        auditoria.setUsuario(usuario);
        Auditoria objeto = auditoriaServiceAPI.save(auditoria);

        return new ResponseEntity<Auditoria>(objeto, HttpStatus.OK);
    }

    @PutMapping(value = "/updateAuditoria/{id}/{idUsuario}")
    public ResponseEntity<Auditoria> update(@RequestBody Auditoria auditoria,
                                            @PathVariable(value = "id") int id,
                                            @PathVariable(value = "idUsuario") int idUsuario){
        Usuario usuario = usuarioServiceAPI.get(idUsuario);
        Auditoria objeto = auditoriaServiceAPI.get(id);
        if (objeto != null){
            objeto.setUsuario(usuario);
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