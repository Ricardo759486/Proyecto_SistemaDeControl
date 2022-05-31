package com.cursojava.curso.controllers;

import com.cursojava.curso.model.Rol;
import com.cursojava.curso.service.RolServiceAPI;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping(value = "/Rol")
public class RolRestController {

    @Autowired
    private RolServiceAPI rolServiceAPI;

    @GetMapping(value = "/getAll")
    public List<Rol> getAll(){
        return rolServiceAPI.getAll();
    }

    @PostMapping(value = "/saveRol")
    public ResponseEntity<Rol> save(@RequestBody Rol tipoDocumento){
        Rol objeto = rolServiceAPI.save(tipoDocumento);

        return new ResponseEntity<Rol>(objeto, HttpStatus.OK);
    }

    @PutMapping(value = "/updateRol/{id}")
    public ResponseEntity<Rol> update(@RequestBody Rol tipoDocumento, @PathVariable(value = "id") int id_documento){

        Rol objeto = rolServiceAPI.get(id_documento);
        if (objeto != null){
            objeto.setTipoRol(tipoDocumento.getTipoRol());
            objeto.setEstado(tipoDocumento.getEstado());
            rolServiceAPI.save(objeto);
        }else{
            return new ResponseEntity<Rol>(tipoDocumento, HttpStatus.INTERNAL_SERVER_ERROR);
        }
        return new ResponseEntity<Rol>(objeto, HttpStatus.OK);
    }

    @GetMapping(value = "/deleteRol/{id}")
    public ResponseEntity<Rol> delete(@PathVariable int id){
        Rol tipoDocumento = rolServiceAPI.get(id);
        if (tipoDocumento != null){
            rolServiceAPI.delete(id);
        }else{
            return new ResponseEntity<Rol>(tipoDocumento, HttpStatus.INTERNAL_SERVER_ERROR);
        }
        return new ResponseEntity<Rol>(tipoDocumento, HttpStatus.OK);
    }
}
