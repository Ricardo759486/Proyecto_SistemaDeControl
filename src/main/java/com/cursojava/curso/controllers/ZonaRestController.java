package com.cursojava.curso.controllers;

import com.cursojava.curso.model.Zona;
import com.cursojava.curso.service.ZonaServiceAPI;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping(value = "/Zona")
public class ZonaRestController {

    @Autowired
    private ZonaServiceAPI zonaServiceAPI;

    @GetMapping(value = "/getAll")
    public List<Zona> getAll(){
        return zonaServiceAPI.getAll();
    }

    @PostMapping(value = "/saveZona")
    public ResponseEntity<Zona> save(@RequestBody Zona tipoDocumento){
        Zona objeto = zonaServiceAPI.save(tipoDocumento);

        return new ResponseEntity<Zona>(objeto, HttpStatus.OK);
    }

    @PutMapping(value = "/updateZona/{id}")
    public ResponseEntity<Zona> update(@RequestBody Zona zona, @PathVariable(value = "id") int id){

        Zona objeto = zonaServiceAPI.get(id);
        if (objeto != null){
            objeto.setCoordenadas(zona.getCoordenadas());
            objeto.setCiudad(zona.getCiudad());
            objeto.setLocalidad(zona.getLocalidad());
            objeto.setEstado(zona.getEstado());
            zonaServiceAPI.save(objeto);
        }else{
            return new ResponseEntity<Zona>(zona, HttpStatus.INTERNAL_SERVER_ERROR);
        }
        return new ResponseEntity<Zona>(objeto, HttpStatus.OK);
    }

    @GetMapping(value = "/deleteZona/{id}")
    public ResponseEntity<Zona> delete(@PathVariable int id){
        Zona zona = zonaServiceAPI.get(id);
        if (zona != null){
            zonaServiceAPI.delete(id);
        }else{
            return new ResponseEntity<Zona>(zona, HttpStatus.INTERNAL_SERVER_ERROR);
        }
        return new ResponseEntity<Zona>(zona, HttpStatus.OK);
    }
}

