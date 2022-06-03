package com.cursojava.curso.controllers;

import com.cursojava.curso.model.Telefono;
import com.cursojava.curso.service.TelefonoServiceAPI;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping(value = "/Telefono")
public class TelefonoRestController {

    @Autowired
    private TelefonoServiceAPI telefonoServiceAPI;

    @GetMapping(value = "/getAll")
    public List<Telefono> getAll(){
        return telefonoServiceAPI.getAll();
    }

    @PostMapping(value = "/saveTelefonoCliente")
    public ResponseEntity<Telefono> save(@RequestBody Telefono telefonoCliente){
        Telefono objeto = telefonoServiceAPI.save(telefonoCliente);

        return new ResponseEntity<Telefono>(objeto, HttpStatus.OK);
    }

    @PutMapping(value = "/updateTelefonoCliente/{id}")
    public ResponseEntity<Telefono> update(@RequestBody Telefono telefonoCliente,
                                           @PathVariable(value = "id") int id){

        Telefono objeto = telefonoServiceAPI.get(id);
        if (objeto != null){
            String tipo = telefonoCliente.getTipo();
            objeto.setNumTelefono(telefonoCliente.getNumTelefono());
            objeto.setTipo(tipo);
            switch (tipo){
                case "U":  objeto.setUsuario(telefonoCliente.getUsuario());
                break;
                case "P":  objeto.setProveedor(telefonoCliente.getProveedor());
                break;
                case "C":  objeto.setProveedor(telefonoCliente.getProveedor());
                break;
                default: return new ResponseEntity<Telefono>(telefonoCliente, HttpStatus.CONFLICT);
            }
            telefonoServiceAPI.save(objeto);
        }else{
            return new ResponseEntity<Telefono>(telefonoCliente, HttpStatus.INTERNAL_SERVER_ERROR);
        }
        return new ResponseEntity<Telefono>(objeto, HttpStatus.OK);
    }

    @GetMapping(value = "/deleteTelefonoCliente/{id}")
    public ResponseEntity<Telefono> delete(@PathVariable int id){
        Telefono telefonoCliente = telefonoServiceAPI.get(id);
        if (telefonoCliente != null){
            telefonoServiceAPI.delete(id);
        }else{
            return new ResponseEntity<Telefono>(telefonoCliente, HttpStatus.INTERNAL_SERVER_ERROR);
        }
        return new ResponseEntity<Telefono>(telefonoCliente, HttpStatus.OK);
    }
}