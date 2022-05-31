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
    public ResponseEntity<Rol> save(@RequestBody Rol rol){
        Rol objeto = rolServiceAPI.save(rol);

        return new ResponseEntity<Rol>(objeto, HttpStatus.OK);
    }

    @PutMapping(value = "/updateRol/{id}")
    public ResponseEntity<Rol> update(@RequestBody Rol rol, @PathVariable(value = "id") int id){

        Rol objeto = rolServiceAPI.get(id);
        if (objeto != null){
            objeto.setTipoRol(rol.getTipoRol());
            objeto.setEstado(rol.getEstado());
            rolServiceAPI.save(objeto);
        }else{
            return new ResponseEntity<Rol>(rol, HttpStatus.INTERNAL_SERVER_ERROR);
        }
        return new ResponseEntity<Rol>(objeto, HttpStatus.OK);
    }

    @GetMapping(value = "/deleteRol/{id}")
    public ResponseEntity<Rol> delete(@PathVariable int id){
        Rol rol = rolServiceAPI.get(id);
        if (rol != null){
            rolServiceAPI.delete(id);
        }else{
            return new ResponseEntity<Rol>(rol, HttpStatus.INTERNAL_SERVER_ERROR);
        }
        return new ResponseEntity<Rol>(rol, HttpStatus.OK);
    }
}
