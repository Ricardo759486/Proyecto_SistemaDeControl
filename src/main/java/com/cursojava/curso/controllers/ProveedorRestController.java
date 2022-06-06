package com.cursojava.curso.controllers;

import com.cursojava.curso.model.Proveedor;
import com.cursojava.curso.model.Zona;
import com.cursojava.curso.service.ProveedorServiceAPI;
import com.cursojava.curso.service.dao.ProveedorDAO;
import com.cursojava.curso.service.dao.ZonaDAO;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.ArrayList;
import java.util.List;

@RestController
@RequestMapping(value = "/Proveedor")
public class ProveedorRestController {

    @Autowired
    private ProveedorServiceAPI proveedorServiceAPI;

    @GetMapping(value = "/getAll")
    public List<ProveedorDAO> getAll(){
        List<Proveedor> getall = proveedorServiceAPI.getAll();
        List<ProveedorDAO> listaF = new ArrayList<>();

        for (Proveedor p:getall){
            if(p.getEstado().equals("A")){
                ProveedorDAO objeto = new ProveedorDAO(p.getIdProveedor(),p.getNit(),p.getDireccion(),p.getEmail(),p.getNombre(),p.getEstado());
                listaF.add(objeto);
            }
        }
        return listaF;
    }

    @PostMapping(value = "/saveProveedor")
    public HttpStatus save(@RequestBody Proveedor proveedor){
        proveedorServiceAPI.save(proveedor);
        return HttpStatus.OK;
    }

    @PutMapping(value = "/updateProveedor/{id}")
    public HttpStatus update(@RequestBody Proveedor proveedor, @PathVariable(value = "id") int id){

        Proveedor objeto = proveedorServiceAPI.get(id);
        if (objeto != null){
            objeto.setDireccion(proveedor.getDireccion());
            objeto.setNombre(proveedor.getNombre());
            objeto.setEmail(proveedor.getEmail());
            objeto.setNit(proveedor.getNit());
            objeto.setEstado(proveedor.getEstado());
            proveedorServiceAPI.save(objeto);
        }else{
            return HttpStatus.INTERNAL_SERVER_ERROR;
        }
        return HttpStatus.OK;
    }

    @GetMapping(value = "/deleteProveedor/{id}")
    public HttpStatus delete(@PathVariable int id){
        Proveedor proveedor = proveedorServiceAPI.get(id);
        if (proveedor != null){
            proveedor.setEstado("D");
            proveedorServiceAPI.save(proveedor);
        }else{
            return HttpStatus.INTERNAL_SERVER_ERROR;
        }
        return HttpStatus.OK;
    }
}