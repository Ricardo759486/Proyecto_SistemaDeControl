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

    @Autowired
    private AuditoriaRestController audi;

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

    @PostMapping(value = "/saveMaterial/{idUsuario}")
    public HttpStatus save(@RequestBody Material material, @PathVariable(value = "idUsuario") int idUsuario ){
        material.setEstado("A");
        materialServiceAPI.save(material);
        audi.saveAuditoria("Guardar", "Usuario",idUsuario);

        return HttpStatus.OK;
    }

    @PutMapping(value = "/updateMaterial/{id}/{idUsuario}")
    public HttpStatus update(@RequestBody Material material, @PathVariable(value = "id") int id, @PathVariable(value = "idUsuario") int idUsuario){

        Material objeto = materialServiceAPI.get(id);
        if (objeto != null){
            objeto.setNombreMaterial(material.getNombreMaterial());
            objeto.setCantidad(material.getCantidad());
            objeto.setCosto(material.getCosto());
            objeto.setEstado(material.getEstado());
            materialServiceAPI.save(objeto);
            audi.saveAuditoria("Actualizar", "Usuario",idUsuario);
        }else{
            return HttpStatus.INTERNAL_SERVER_ERROR;
        }
        return HttpStatus.OK;
    }

        @GetMapping(value = "/deleteMaterial/{id}/{idUsuario}")
    public HttpStatus delete(@PathVariable int id, @PathVariable(value = "idUsuario") int idUsuario){
        Material material = materialServiceAPI.get(id);
        if (material != null){
            material.setEstado("D");
            materialServiceAPI.save(material);
            audi.saveAuditoria("Eliminar", "Usuario",idUsuario);
        }else{
            return HttpStatus.INTERNAL_SERVER_ERROR;
        }
        return HttpStatus.OK;
    }
}
