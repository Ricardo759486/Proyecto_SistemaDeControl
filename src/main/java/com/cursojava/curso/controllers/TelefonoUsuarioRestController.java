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
    public ResponseEntity<TelefonoUsuario> save(@RequestBody TelefonoUsuario telefonoUsuario){
        TelefonoUsuario objeto = telefonoUsuarioServiceAPI.save(telefonoUsuario);

        return new ResponseEntity<TelefonoUsuario>(objeto, HttpStatus.OK);
    }

    @PutMapping(value = "/updateTelefonoUsuario/{id}")
    public ResponseEntity<TelefonoUsuario> update(@RequestBody TelefonoUsuario telefonoUsuario, @PathVariable(value = "id") int id){

        TelefonoUsuario objeto = telefonoUsuarioServiceAPI.get(id);
        if (objeto != null){
            objeto.setUsuario(telefonoUsuario.getUsuario());
            objeto.setNumTelefono(telefonoUsuario.getNumTelefono());
            telefonoUsuarioServiceAPI.save(objeto);
        }else{
            return new ResponseEntity<TelefonoUsuario>(telefonoUsuario, HttpStatus.INTERNAL_SERVER_ERROR);
        }
        return new ResponseEntity<TelefonoUsuario>(objeto, HttpStatus.OK);
    }

    @GetMapping(value = "/deleteTelefonoUsuario/{id}")
    public ResponseEntity<TelefonoUsuario> delete(@PathVariable int id){
        TelefonoUsuario telefonoUsuario = telefonoUsuarioServiceAPI.get(id);
        if (telefonoUsuario != null){
            telefonoUsuarioServiceAPI.delete(id);
        }else{
            return new ResponseEntity<TelefonoUsuario>(telefonoUsuario, HttpStatus.INTERNAL_SERVER_ERROR);
        }
        return new ResponseEntity<TelefonoUsuario>(telefonoUsuario, HttpStatus.OK);
    }
}