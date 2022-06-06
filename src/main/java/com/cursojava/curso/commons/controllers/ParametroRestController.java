package com.cursojava.curso.commons.controllers;

import com.cursojava.curso.model.Parametro;
import com.cursojava.curso.service.ParametroServiceAPI;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping(value = "/Parametro")
public class ParametroRestController {

    @Autowired
    private ParametroServiceAPI parametroServiceAPI;

    @GetMapping(value = "/getAll")
    public List<Parametro> getAll(){
        return parametroServiceAPI.getAll();
    }

    @PostMapping(value = "/saveParametro")
    public ResponseEntity<Parametro> save(@RequestBody Parametro parametro){
        Parametro objeto = parametroServiceAPI.save(parametro);

        return new ResponseEntity<Parametro>(objeto, HttpStatus.OK);
    }

    @PutMapping(value = "/updateParametro/{id}")
    public ResponseEntity<Parametro> update(@RequestBody Parametro parametro, @PathVariable(value = "id") int id){

        Parametro objeto = parametroServiceAPI.get(id);
        if (objeto != null){
            objeto.setTipo(parametro.getTipo());
            objeto.setDescripcion(parametro.getDescripcion());
            objeto.setValor(parametro.getValor());
            parametroServiceAPI.save(objeto);
        }else{
            return new ResponseEntity<Parametro>(parametro, HttpStatus.INTERNAL_SERVER_ERROR);
        }
        return new ResponseEntity<Parametro>(objeto, HttpStatus.OK);
    }

    @GetMapping(value = "/deleteParametro/{id}")
    public ResponseEntity<Parametro> delete(@PathVariable int id){
        Parametro parametro = parametroServiceAPI.get(id);
        if (parametro != null){
            parametroServiceAPI.delete(id);
        }else{
            return new ResponseEntity<Parametro>(parametro, HttpStatus.INTERNAL_SERVER_ERROR);
        }
        return new ResponseEntity<Parametro>(parametro, HttpStatus.OK);
    }
}
