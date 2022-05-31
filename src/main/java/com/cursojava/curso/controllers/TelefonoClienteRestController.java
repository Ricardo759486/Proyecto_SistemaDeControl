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
    public ResponseEntity<TelefonoCliente> save(@RequestBody TelefonoCliente tipoDocumento){
        TelefonoCliente objeto = telefonoClienteServiceAPI.save(tipoDocumento);

        return new ResponseEntity<TelefonoCliente>(objeto, HttpStatus.OK);
    }

    @PutMapping(value = "/updateTelefonoCliente/{id}")
    public ResponseEntity<TelefonoCliente> update(@RequestBody TelefonoCliente tipoDocumento, @PathVariable(value = "id") int id_documento){

        TelefonoCliente objeto = telefonoClienteServiceAPI.get(id_documento);
        if (objeto != null){
            objeto.setCliente(tipoDocumento.getCliente());
            objeto.setNumeroTelefono(tipoDocumento.getNumeroTelefono());
            telefonoClienteServiceAPI.save(objeto);
        }else{
            return new ResponseEntity<TelefonoCliente>(tipoDocumento, HttpStatus.INTERNAL_SERVER_ERROR);
        }
        return new ResponseEntity<TelefonoCliente>(objeto, HttpStatus.OK);
    }

    @GetMapping(value = "/deleteTelefonoCliente/{id}")
    public ResponseEntity<TelefonoCliente> delete(@PathVariable int id){
        TelefonoCliente tipoDocumento = telefonoClienteServiceAPI.get(id);
        if (tipoDocumento != null){
            telefonoClienteServiceAPI.delete(id);
        }else{
            return new ResponseEntity<TelefonoCliente>(tipoDocumento, HttpStatus.INTERNAL_SERVER_ERROR);
        }
        return new ResponseEntity<TelefonoCliente>(tipoDocumento, HttpStatus.OK);
    }
}