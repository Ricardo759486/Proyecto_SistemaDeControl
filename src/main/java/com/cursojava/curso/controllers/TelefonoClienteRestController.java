package com.cursojava.curso.controllers;

import com.cursojava.curso.model.TelefonoCliente;
import com.cursojava.curso.service.TelefonoClienteServiceAPI;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping(value = "/TelefonoCliente")
public class TelefonoClienteRestController {

    @Autowired
    private TelefonoClienteServiceAPI telefonoClienteServiceAPI;

    @GetMapping(value = "/getAll")
    public List<TelefonoCliente> getAll(){
        return telefonoClienteServiceAPI.getAll();
    }

    @PostMapping(value = "/saveTelefonoCliente")
    public ResponseEntity<TelefonoCliente> save(@RequestBody TelefonoCliente telefonoCliente){
        TelefonoCliente objeto = telefonoClienteServiceAPI.save(telefonoCliente);

        return new ResponseEntity<TelefonoCliente>(objeto, HttpStatus.OK);
    }

    @PutMapping(value = "/updateTelefonoCliente/{id}")
    public ResponseEntity<TelefonoCliente> update(@RequestBody TelefonoCliente telefonoCliente, @PathVariable(value = "id") int id){

        TelefonoCliente objeto = telefonoClienteServiceAPI.get(id);
        if (objeto != null){
            objeto.setCliente(telefonoCliente.getCliente());
            objeto.setNumeroTelefono(telefonoCliente.getNumeroTelefono());
            telefonoClienteServiceAPI.save(objeto);
        }else{
            return new ResponseEntity<TelefonoCliente>(telefonoCliente, HttpStatus.INTERNAL_SERVER_ERROR);
        }
        return new ResponseEntity<TelefonoCliente>(objeto, HttpStatus.OK);
    }

    @GetMapping(value = "/deleteTelefonoCliente/{id}")
    public ResponseEntity<TelefonoCliente> delete(@PathVariable int id){
        TelefonoCliente telefonoCliente = telefonoClienteServiceAPI.get(id);
        if (telefonoCliente != null){
            telefonoClienteServiceAPI.delete(id);
        }else{
            return new ResponseEntity<TelefonoCliente>(telefonoCliente, HttpStatus.INTERNAL_SERVER_ERROR);
        }
        return new ResponseEntity<TelefonoCliente>(telefonoCliente, HttpStatus.OK);
    }
}