package com.cursojava.curso.controllers;

import com.cursojava.curso.model.TelefonoProveedor;
import com.cursojava.curso.service.TelefonoProveedorServiceAPI;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping(value = "/TelefonoProveedor")
public class TelefonoProveedorRestController {

    @Autowired
    private TelefonoProveedorServiceAPI telefonoProveedorServiceAPI;

    @GetMapping(value = "/getAll")
    public List<TelefonoProveedor> getAll(){
        return telefonoProveedorServiceAPI.getAll();
    }

    @PostMapping(value = "/saveTelefonoProveedor")
    public ResponseEntity<TelefonoProveedor> save(@RequestBody TelefonoProveedor tipoDocumento){
        TelefonoProveedor objeto = telefonoProveedorServiceAPI.save(tipoDocumento);

        return new ResponseEntity<TelefonoProveedor>(objeto, HttpStatus.OK);
    }

    @PutMapping(value = "/updateTelefonoProveedor/{id}")
    public ResponseEntity<TelefonoProveedor> update(@RequestBody TelefonoProveedor tipoDocumento, @PathVariable(value = "id") int id_documento){

        TelefonoProveedor objeto = telefonoProveedorServiceAPI.get(id_documento);
        if (objeto != null){
            objeto.setProveedor(tipoDocumento.getProveedor());
            objeto.setNumeroTelefono(tipoDocumento.getNumeroTelefono());
            telefonoProveedorServiceAPI.save(objeto);
        }else{
            return new ResponseEntity<TelefonoProveedor>(tipoDocumento, HttpStatus.INTERNAL_SERVER_ERROR);
        }
        return new ResponseEntity<TelefonoProveedor>(objeto, HttpStatus.OK);
    }

    @GetMapping(value = "/deleteTelefonoProveedor/{id}")
    public ResponseEntity<TelefonoProveedor> delete(@PathVariable int id){
        TelefonoProveedor tipoDocumento = telefonoProveedorServiceAPI.get(id);
        if (tipoDocumento != null){
            telefonoProveedorServiceAPI.delete(id);
        }else{
            return new ResponseEntity<TelefonoProveedor>(tipoDocumento, HttpStatus.INTERNAL_SERVER_ERROR);
        }
        return new ResponseEntity<TelefonoProveedor>(tipoDocumento, HttpStatus.OK);
    }
}
