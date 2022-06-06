package com.cursojava.curso.controllers;

import com.cursojava.curso.model.Rol;
import com.cursojava.curso.model.Zona;
import com.cursojava.curso.service.RolServiceAPI;
import com.cursojava.curso.service.dao.RolDAO;
import com.cursojava.curso.service.dao.ZonaDAO;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.ArrayList;
import java.util.List;

@RestController
@RequestMapping(value = "/Rol")
public class RolRestController {

    @Autowired
    private RolServiceAPI rolServiceAPI;

    @GetMapping(value = "/getAll")
    public List<RolDAO> getAll(){
        List<Rol> getall = rolServiceAPI.getAll();
        List<RolDAO> listaF = new ArrayList<>();

        for (Rol r:getall){
            if(r.getEstado().equals("A")){
                RolDAO objeto = new RolDAO(r.getIdRol(),r.getTipoRol(),r.getEstado());
                listaF.add(objeto);
            }
        }
        return listaF;
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
