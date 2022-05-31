package com.cursojava.curso.controllers;

import com.cursojava.curso.model.Proveedor;
import com.cursojava.curso.service.ProveedorServiceAPI;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping(value = "/Proveedor")
public class ProveedorRestController {

    @Autowired
    private ProveedorServiceAPI proveedorServiceAPI;

    @GetMapping(value = "/getAll")
    public List<Proveedor> getAll(){
        return proveedorServiceAPI.getAll();
    }

    @PostMapping(value = "/saveProveedor")
    public ResponseEntity<Proveedor> save(@RequestBody Proveedor proveedor){
        Proveedor objeto = proveedorServiceAPI.save(proveedor);

        return new ResponseEntity<Proveedor>(objeto, HttpStatus.OK);
    }

    @PutMapping(value = "/updateProveedor/{id}")
    public ResponseEntity<Proveedor> update(@RequestBody Proveedor proveedor, @PathVariable(value = "id") int id){

        Proveedor objeto = proveedorServiceAPI.get(id);
        if (objeto != null){
            objeto.setDireccion(proveedor.getDireccion());
            objeto.setNombre(proveedor.getNombre());
            objeto.setEmail(proveedor.getEmail());
            objeto.setEstado(proveedor.getEstado());
            proveedorServiceAPI.save(objeto);
        }else{
            return new ResponseEntity<Proveedor>(proveedor, HttpStatus.INTERNAL_SERVER_ERROR);
        }
        return new ResponseEntity<Proveedor>(objeto, HttpStatus.OK);
    }

    @GetMapping(value = "/deleteProveedor/{id}")
    public ResponseEntity<Proveedor> delete(@PathVariable int id){
        Proveedor proveedor = proveedorServiceAPI.get(id);
        if (proveedor != null){
            proveedorServiceAPI.delete(id);
        }else{
            return new ResponseEntity<Proveedor>(proveedor, HttpStatus.INTERNAL_SERVER_ERROR);
        }
        return new ResponseEntity<Proveedor>(proveedor, HttpStatus.OK);
    }
}