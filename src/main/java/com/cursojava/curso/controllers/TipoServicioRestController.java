package com.cursojava.curso.controllers;

import com.cursojava.curso.model.TipoServicio;
import com.cursojava.curso.service.TipoServicioServiceAPI;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping(value = "/TipoServicio")
public class TipoServicioRestController {

    @Autowired
    private TipoServicioServiceAPI tipoServicioServiceAPI;

    @GetMapping(value = "/getAll")
    public List<TipoServicio> getAll(){
        return tipoServicioServiceAPI.getAll();
    }

    @PostMapping(value = "/saveTipoServicio")
    public ResponseEntity<TipoServicio> save(@RequestBody TipoServicio tipoDocumento){
        TipoServicio objeto = tipoServicioServiceAPI.save(tipoDocumento);

        return new ResponseEntity<TipoServicio>(objeto, HttpStatus.OK);
    }

    @PutMapping(value = "/updateTipoServicio/{id}")
    public ResponseEntity<TipoServicio> update(@RequestBody TipoServicio tipoDocumento, @PathVariable(value = "id") int id_documento){

        TipoServicio objeto = tipoServicioServiceAPI.get(id_documento);
        if (objeto != null){
            objeto.setDescripcion(tipoDocumento.getDescripcion());
            objeto.setEstado(tipoDocumento.getEstado());
            tipoServicioServiceAPI.save(objeto);
        }else{
            return new ResponseEntity<TipoServicio>(tipoDocumento, HttpStatus.INTERNAL_SERVER_ERROR);
        }
        return new ResponseEntity<TipoServicio>(objeto, HttpStatus.OK);
    }

    @GetMapping(value = "/deleteTipoServicio/{id}")
    public ResponseEntity<TipoServicio> delete(@PathVariable int id){
        TipoServicio tipoDocumento = tipoServicioServiceAPI.get(id);
        if (tipoDocumento != null){
            tipoServicioServiceAPI.delete(id);
        }else{
            return new ResponseEntity<TipoServicio>(tipoDocumento, HttpStatus.INTERNAL_SERVER_ERROR);
        }
        return new ResponseEntity<TipoServicio>(tipoDocumento, HttpStatus.OK);
    }
}