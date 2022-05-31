package com.cursojava.curso.controllers;

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
    public ResponseEntity<Parametro> save(@RequestBody Parametro tipoDocumento){
        Parametro objeto = parametroServiceAPI.save(tipoDocumento);

        return new ResponseEntity<Parametro>(objeto, HttpStatus.OK);
    }

    @PutMapping(value = "/updateParametro/{id}")
    public ResponseEntity<Parametro> update(@RequestBody Parametro tipoDocumento, @PathVariable(value = "id") int id_documento){

        Parametro objeto = parametroServiceAPI.get(id_documento);
        if (objeto != null){
            objeto.setTipo(tipoDocumento.getTipo());
            objeto.setDescripcion(tipoDocumento.getDescripcion());
            objeto.setValorNum(tipoDocumento.getValorNum());
            objeto.setValorTexto(tipoDocumento.getValorTexto());
            objeto.setValorFecha(tipoDocumento.getValorFecha());
            parametroServiceAPI.save(objeto);
        }else{
            return new ResponseEntity<Parametro>(tipoDocumento, HttpStatus.INTERNAL_SERVER_ERROR);
        }
        return new ResponseEntity<Parametro>(objeto, HttpStatus.OK);
    }

    @GetMapping(value = "/deleteParametro/{id}")
    public ResponseEntity<Parametro> delete(@PathVariable int id){
        Parametro tipoDocumento = parametroServiceAPI.get(id);
        if (tipoDocumento != null){
            parametroServiceAPI.delete(id);
        }else{
            return new ResponseEntity<Parametro>(tipoDocumento, HttpStatus.INTERNAL_SERVER_ERROR);
        }
        return new ResponseEntity<Parametro>(tipoDocumento, HttpStatus.OK);
    }
}
