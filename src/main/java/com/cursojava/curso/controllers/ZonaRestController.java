package com.cursojava.curso.controllers;

import com.cursojava.curso.model.Zona;
import com.cursojava.curso.service.AuditoriaServiceAPI;
import com.cursojava.curso.service.ZonaServiceAPI;
import com.cursojava.curso.service.dao.ZonaDAO;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.ArrayList;
import java.util.List;

@RestController
@RequestMapping(value = "/Zona")
public class ZonaRestController {

    @Autowired
    private ZonaServiceAPI zonaServiceAPI;

    @Autowired
    private AuditoriaServiceAPI auditoriaServiceAPI;

    @GetMapping(value = "/getAll")
    public List<ZonaDAO> getAll(){

        List<Zona> getall = zonaServiceAPI.getAll();
        List<ZonaDAO> listaF = new ArrayList<>();

        for (Zona z:getall){
            if(z.getEstado().equals("A")){
                ZonaDAO objeto = new ZonaDAO(z.getIdZona(), z.getCiudad(), z.getLocalidad(), z.getCoordenadas(), z.getEstado() );
                listaF.add(objeto);
            }
        }
        return listaF;
    }

    @PostMapping(value = "/saveZona")
    public ResponseEntity<Zona> save(@RequestBody Zona zona){
        Zona objeto = zonaServiceAPI.save(zona);

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

    public void insercionAudo(){

    }
}

