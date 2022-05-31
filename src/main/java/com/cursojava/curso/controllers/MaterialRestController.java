package com.cursojava.curso.controllers;

import com.cursojava.curso.model.Material;
import com.cursojava.curso.service.MaterialServiceAPI;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping(value = "/Material")
public class MaterialRestController {

    @Autowired
    private MaterialServiceAPI materialServiceAPI;

    @GetMapping(value = "/getAll")
    public List<Material> getAll(){
        return materialServiceAPI.getAll();
    }

    @PostMapping(value = "/saveMaterial")
    public ResponseEntity<Material> save(@RequestBody Material tipoDocumento){
        Material objeto = materialServiceAPI.save(tipoDocumento);

        return new ResponseEntity<Material>(objeto, HttpStatus.OK);
    }

    @PutMapping(value = "/updateMaterial/{id}")
    public ResponseEntity<Material> update(@RequestBody Material tipoDocumento, @PathVariable(value = "id") int id_documento){

        Material objeto = materialServiceAPI.get(id_documento);
        if (objeto != null){
            objeto.setNombreMaterial(tipoDocumento.getNombreMaterial());
            objeto.setCantidad(tipoDocumento.getCantidad());
            objeto.setCosto(tipoDocumento.getCosto());
            objeto.setEstado(tipoDocumento.getEstado());
            materialServiceAPI.save(objeto);
        }else{
            return new ResponseEntity<Material>(tipoDocumento, HttpStatus.INTERNAL_SERVER_ERROR);
        }
        return new ResponseEntity<Material>(objeto, HttpStatus.OK);
    }

    @GetMapping(value = "/deleteMaterial/{id}")
    public ResponseEntity<Material> delete(@PathVariable int id){
        Material tipoDocumento = materialServiceAPI.get(id);
        if (tipoDocumento != null){
            materialServiceAPI.delete(id);
        }else{
            return new ResponseEntity<Material>(tipoDocumento, HttpStatus.INTERNAL_SERVER_ERROR);
        }
        return new ResponseEntity<Material>(tipoDocumento, HttpStatus.OK);
    }
}
