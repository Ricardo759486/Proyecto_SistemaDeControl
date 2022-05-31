package com.cursojava.curso.controllers;

import com.cursojava.curso.model.MaterialCuadrilla;
import com.cursojava.curso.service.MaterialCuadrillaServiceAPI;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping(value = "/MaterialCuadrilla")
public class MaterialCuadrillaRestController {

    @Autowired
    private MaterialCuadrillaServiceAPI materialCuadrillaServiceAPI;

    @GetMapping(value = "/getAll")
    public List<MaterialCuadrilla> getAll(){
        return materialCuadrillaServiceAPI.getAll();
    }

    @PostMapping(value = "/saveMaterialCuadrilla")
    public ResponseEntity<MaterialCuadrilla> save(@RequestBody MaterialCuadrilla materialCuadrilla){
        MaterialCuadrilla objeto = materialCuadrillaServiceAPI.save(materialCuadrilla);

        return new ResponseEntity<MaterialCuadrilla>(objeto, HttpStatus.OK);
    }

    @PutMapping(value = "/updateMaterialCuadrilla/{id}")
    public ResponseEntity<MaterialCuadrilla> update(@RequestBody MaterialCuadrilla materialCuadrilla, @PathVariable(value = "id") int id){

        MaterialCuadrilla objeto = materialCuadrillaServiceAPI.get(id);
        if (objeto != null){
            objeto.setCuadrilla(materialCuadrilla.getCuadrilla());
            objeto.setMaterial(materialCuadrilla.getMaterial());
            objeto.setCantidad(materialCuadrilla.getCantidad());
            materialCuadrillaServiceAPI.save(objeto);
        }else{
            return new ResponseEntity<MaterialCuadrilla>(materialCuadrilla, HttpStatus.INTERNAL_SERVER_ERROR);
        }
        return new ResponseEntity<MaterialCuadrilla>(objeto, HttpStatus.OK);
    }

    @GetMapping(value = "/deleteMaterialCuadrilla/{id}")
    public ResponseEntity<MaterialCuadrilla> delete(@PathVariable int id){
        MaterialCuadrilla materialCuadrilla = materialCuadrillaServiceAPI.get(id);
        if (materialCuadrilla != null){
            materialCuadrillaServiceAPI.delete(id);
        }else{
            return new ResponseEntity<MaterialCuadrilla>(materialCuadrilla, HttpStatus.INTERNAL_SERVER_ERROR);
        }
        return new ResponseEntity<MaterialCuadrilla>(materialCuadrilla, HttpStatus.OK);
    }
}
