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
    private ProveedorServiceAPI tipoDocumentoServiceAPI;

    @GetMapping(value = "/getAll")
    public List<Proveedor> getAll(){
        return tipoDocumentoServiceAPI.getAll();
    }

    @PostMapping(value = "/saveProveedor")
    public ResponseEntity<Proveedor> save(@RequestBody Proveedor tipoDocumento){
        Proveedor objeto = tipoDocumentoServiceAPI.save(tipoDocumento);

        return new ResponseEntity<Proveedor>(objeto, HttpStatus.OK);
    }

    @PutMapping(value = "/updateProveedor/{id}")
    public ResponseEntity<Proveedor> update(@RequestBody Proveedor tipoDocumento, @PathVariable(value = "id") int id_documento){

        Proveedor objeto = tipoDocumentoServiceAPI.get(id_documento);
        if (objeto != null){
            objeto.setDireccion(tipoDocumento.getDireccion());
            objeto.setNombre(tipoDocumento.getNombre());
            objeto.setEmail(tipoDocumento.getEmail());
            objeto.setEstado(tipoDocumento.getEstado());
            tipoDocumentoServiceAPI.save(objeto);
        }else{
            return new ResponseEntity<Proveedor>(tipoDocumento, HttpStatus.INTERNAL_SERVER_ERROR);
        }
        return new ResponseEntity<Proveedor>(objeto, HttpStatus.OK);
    }

    @GetMapping(value = "/deleteProveedor/{id}")
    public ResponseEntity<Proveedor> delete(@PathVariable int id){
        Proveedor tipoDocumento = tipoDocumentoServiceAPI.get(id);
        if (tipoDocumento != null){
            tipoDocumentoServiceAPI.delete(id);
        }else{
            return new ResponseEntity<Proveedor>(tipoDocumento, HttpStatus.INTERNAL_SERVER_ERROR);
        }
        return new ResponseEntity<Proveedor>(tipoDocumento, HttpStatus.OK);
    }
}