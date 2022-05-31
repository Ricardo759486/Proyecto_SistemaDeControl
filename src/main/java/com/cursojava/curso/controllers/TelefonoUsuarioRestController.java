package com.cursojava.curso.controllers;

import com.cursojava.curso.model.TelefonoUsuario;
import com.cursojava.curso.service.TelefonoUsuarioServiceAPI;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping(value = "/TelefonoUsuario")
public class TelefonoUsuarioRestController {

    @Autowired
    private TelefonoUsuarioServiceAPI telefonoUsuarioServiceAPI;

    @GetMapping(value = "/getAll")
    public List<TelefonoUsuario> getAll(){
        return telefonoUsuarioServiceAPI.getAll();
    }

    @PostMapping(value = "/saveTelefonoUsuario")
    public ResponseEntity<TelefonoUsuario> save(@RequestBody TelefonoUsuario tipoDocumento){
        TelefonoUsuario objeto = telefonoUsuarioServiceAPI.save(tipoDocumento);

        return new ResponseEntity<TelefonoUsuario>(objeto, HttpStatus.OK);
    }

    @PutMapping(value = "/updateTelefonoUsuario/{id}")
    public ResponseEntity<TelefonoUsuario> update(@RequestBody TelefonoUsuario tipoDocumento, @PathVariable(value = "id") int id_documento){

        TelefonoUsuario objeto = telefonoUsuarioServiceAPI.get(id_documento);
        if (objeto != null){
            objeto.setUsuario(tipoDocumento.getUsuario());
            objeto.setNumTelefono(tipoDocumento.getNumTelefono());
            telefonoUsuarioServiceAPI.save(objeto);
        }else{
            return new ResponseEntity<TelefonoUsuario>(tipoDocumento, HttpStatus.INTERNAL_SERVER_ERROR);
        }
        return new ResponseEntity<TelefonoUsuario>(objeto, HttpStatus.OK);
    }

    @GetMapping(value = "/deleteTelefonoUsuario/{id}")
    public ResponseEntity<TelefonoUsuario> delete(@PathVariable int id){
        TelefonoUsuario tipoDocumento = telefonoUsuarioServiceAPI.get(id);
        if (tipoDocumento != null){
            telefonoUsuarioServiceAPI.delete(id);
        }else{
            return new ResponseEntity<TelefonoUsuario>(tipoDocumento, HttpStatus.INTERNAL_SERVER_ERROR);
        }
        return new ResponseEntity<TelefonoUsuario>(tipoDocumento, HttpStatus.OK);
    }
}