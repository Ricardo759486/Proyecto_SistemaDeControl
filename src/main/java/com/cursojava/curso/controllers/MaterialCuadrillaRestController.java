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
    public ResponseEntity<MaterialCuadrilla> save(@RequestBody MaterialCuadrilla tipoDocumento){
        MaterialCuadrilla objeto = materialCuadrillaServiceAPI.save(tipoDocumento);

        return new ResponseEntity<MaterialCuadrilla>(objeto, HttpStatus.OK);
    }

    @PutMapping(value = "/updateMaterialCuadrilla/{id}")
    public ResponseEntity<MaterialCuadrilla> update(@RequestBody MaterialCuadrilla tipoDocumento, @PathVariable(value = "id") int id_documento){

        MaterialCuadrilla objeto = materialCuadrillaServiceAPI.get(id_documento);
        if (objeto != null){
            objeto.setCuadrilla(tipoDocumento.getCuadrilla());
            objeto.setMaterial(tipoDocumento.getMaterial());
            objeto.setCantidad(tipoDocumento.getCantidad());
            materialCuadrillaServiceAPI.save(objeto);
        }else{
            return new ResponseEntity<MaterialCuadrilla>(tipoDocumento, HttpStatus.INTERNAL_SERVER_ERROR);
        }
        return new ResponseEntity<MaterialCuadrilla>(objeto, HttpStatus.OK);
    }

    @GetMapping(value = "/deleteMaterialCuadrilla/{id}")
    public ResponseEntity<MaterialCuadrilla> delete(@PathVariable int id){
        MaterialCuadrilla tipoDocumento = materialCuadrillaServiceAPI.get(id);
        if (tipoDocumento != null){
            materialCuadrillaServiceAPI.delete(id);
        }else{
            return new ResponseEntity<MaterialCuadrilla>(tipoDocumento, HttpStatus.INTERNAL_SERVER_ERROR);
        }
        return new ResponseEntity<MaterialCuadrilla>(tipoDocumento, HttpStatus.OK);
    }
}
