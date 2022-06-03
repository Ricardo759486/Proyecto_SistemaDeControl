package com.cursojava.curso.controllers;

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
    public ResponseEntity<TelefonoProveedor> save(@RequestBody TelefonoProveedor telefonoProveedor){
        TelefonoProveedor objeto = telefonoProveedorServiceAPI.save(telefonoProveedor);

        return new ResponseEntity<TelefonoProveedor>(objeto, HttpStatus.OK);
    }

    @PutMapping(value = "/updateTelefonoProveedor/{id}")
    public ResponseEntity<TelefonoProveedor> update(@RequestBody TelefonoProveedor telefonoProveedor, @PathVariable(value = "id") int id){

        TelefonoProveedor objeto = telefonoProveedorServiceAPI.get(id);
        if (objeto != null){
            objeto.setProveedor(telefonoProveedor.getProveedor());
            objeto.setNumeroTelefono(telefonoProveedor.getNumeroTelefono());
            telefonoProveedorServiceAPI.save(objeto);
        }else{
            return new ResponseEntity<TelefonoProveedor>(telefonoProveedor, HttpStatus.INTERNAL_SERVER_ERROR);
        }
        return new ResponseEntity<TelefonoProveedor>(objeto, HttpStatus.OK);
    }

    @GetMapping(value = "/deleteTelefonoProveedor/{id}")
    public ResponseEntity<TelefonoProveedor> delete(@PathVariable int id){
        TelefonoProveedor telefonoProveedor = telefonoProveedorServiceAPI.get(id);
        if (telefonoProveedor != null){
            telefonoProveedorServiceAPI.delete(id);
        }else{
            return new ResponseEntity<TelefonoProveedor>(telefonoProveedor, HttpStatus.INTERNAL_SERVER_ERROR);
        }
        return new ResponseEntity<TelefonoProveedor>(telefonoProveedor, HttpStatus.OK);
    }
}
