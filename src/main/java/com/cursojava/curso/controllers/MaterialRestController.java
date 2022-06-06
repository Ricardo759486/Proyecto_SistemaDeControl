package com.cursojava.curso.controllers;

import com.cursojava.curso.model.Material;
import com.cursojava.curso.service.MaterialServiceAPI;
import com.cursojava.curso.service.dao.MaterialDAO;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.ArrayList;
import java.util.List;

@RestController
@RequestMapping(value = "/Material")
public class MaterialRestController {

    @Autowired
    private MaterialServiceAPI materialServiceAPI;

    @GetMapping(value = "/getAll")
    public List<MaterialDAO> getAll(){

        List<Material> getall = materialServiceAPI.getAll();
        List<MaterialDAO> listaF = new ArrayList<>();

        for (Material m:getall){
            if(m.getEstado().equals("A")) {
                MaterialDAO objeto = new MaterialDAO(m.getIdInventario(),m.getNombreMaterial(),m.getCantidad(),m.getCosto(),m.getEstado());
                listaF.add(objeto);
            }
        }
        return listaF;
    }

    @PostMapping(value = "/saveMaterial")
    public ResponseEntity<Material> save(@RequestBody Material material){
        Material objeto = materialServiceAPI.save(material);

        return new ResponseEntity<Material>(objeto, HttpStatus.OK);
    }

    @PutMapping(value = "/updateMaterial/{id}")
    public ResponseEntity<Material> update(@RequestBody Material material, @PathVariable(value = "id") int id){

        Material objeto = materialServiceAPI.get(id);
        if (objeto != null){
            objeto.setNombreMaterial(material.getNombreMaterial());
            objeto.setCantidad(material.getCantidad());
            objeto.setCosto(material.getCosto());
            objeto.setEstado(material.getEstado());
            materialServiceAPI.save(objeto);
        }else{
            return new ResponseEntity<Material>(material, HttpStatus.INTERNAL_SERVER_ERROR);
        }
        return new ResponseEntity<Material>(objeto, HttpStatus.OK);
    }

    @GetMapping(value = "/deleteMaterial/{id}")
    public ResponseEntity<Material> delete(@PathVariable int id){
        Material material = materialServiceAPI.get(id);
        if (material != null){
            materialServiceAPI.delete(id);
        }else{
            return new ResponseEntity<Material>(material, HttpStatus.INTERNAL_SERVER_ERROR);
        }
        return new ResponseEntity<Material>(material, HttpStatus.OK);
    }
}
