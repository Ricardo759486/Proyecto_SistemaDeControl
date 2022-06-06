package com.cursojava.curso.controllers;

import com.cursojava.curso.model.Cuadrilla;
import com.cursojava.curso.model.Material;
import com.cursojava.curso.model.MaterialCuadrilla;
import com.cursojava.curso.service.CuadrillaServiceAPI;
import com.cursojava.curso.service.MaterialCuadrillaServiceAPI;
import com.cursojava.curso.service.MaterialServiceAPI;
import com.cursojava.curso.service.dao.MaterialCuadrillaDAO;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.ArrayList;
import java.util.List;

@RestController
@RequestMapping(value = "/MaterialCuadrilla")
public class MaterialCuadrillaRestController {

    @Autowired
    private MaterialCuadrillaServiceAPI materialCuadrillaServiceAPI;

    @Autowired
    private CuadrillaServiceAPI cuadrillaServiceAPI;

    @Autowired
    private MaterialServiceAPI materialServiceAPI;

    @GetMapping(value = "/getAll")
    public List<MaterialCuadrillaDAO> getAll(){

        List<MaterialCuadrilla> getall = materialCuadrillaServiceAPI.getAll();
        List<MaterialCuadrillaDAO> listaF = new ArrayList<>();

        for (MaterialCuadrilla m:getall){
                MaterialCuadrillaDAO objeto = new MaterialCuadrillaDAO(m.getIdRegistro(),m.getMaterial().getNombreMaterial(),m.getCantidad(),m.getCuadrilla().getMovilAsociado());
                listaF.add(objeto);
        }
        return listaF;
    }

    @PostMapping(value = "/saveMaterialCuadrilla/{idCuadrilla}/{idInventario}")
    public ResponseEntity<MaterialCuadrilla> save(@RequestBody MaterialCuadrilla materialCuadrilla,
                                                  @PathVariable(value = "idCuadrilla") int idCuadrilla,
                                                  @PathVariable(value = "idInventario") int idInventario){
        Cuadrilla cuadrilla = cuadrillaServiceAPI.get(idCuadrilla);
        Material material = materialServiceAPI.get(idInventario);
        materialCuadrilla.setMaterial(material);
        materialCuadrilla.setCuadrilla(cuadrilla);
        MaterialCuadrilla objeto = materialCuadrillaServiceAPI.save(materialCuadrilla);
        return new ResponseEntity<MaterialCuadrilla>(objeto, HttpStatus.OK);
    }

    @PutMapping(value = "/updateMaterialCuadrilla/{id}/{idCuadrilla}/{idInventario}")
    public ResponseEntity<MaterialCuadrilla> update(@RequestBody MaterialCuadrilla materialCuadrilla,
                                                    @PathVariable(value = "id") int id,
                                                    @PathVariable(value = "idCuadrilla") int idCuadrilla,
                                                    @PathVariable(value = "idInventario") int idInventario){
        Cuadrilla cuadrilla = cuadrillaServiceAPI.get(idCuadrilla);
        Material material = materialServiceAPI.get(idInventario);
        MaterialCuadrilla objeto = materialCuadrillaServiceAPI.get(id);
        if (objeto != null){
            objeto.setCuadrilla(cuadrilla);
            objeto.setMaterial(material);
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
