package com.cursojava.curso.controllers;

import com.cursojava.curso.model.Cuadrilla;
import com.cursojava.curso.service.CuadrillaServiceAPI;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping(value = "/Cuadrilla")
public class CuadrillaRestController {

    @Autowired
    private CuadrillaServiceAPI cuadrillaServiceAPI;

    @GetMapping(value = "/getAll")
    public List<Cuadrilla> getAll(){
        return cuadrillaServiceAPI.getAll();
    }

    @PostMapping(value = "/saveCuadrilla")
    public ResponseEntity<Cuadrilla> save(@RequestBody Cuadrilla cuadrilla){
        Cuadrilla objeto = cuadrillaServiceAPI.save(cuadrilla);

        return new ResponseEntity<Cuadrilla>(objeto, HttpStatus.OK);
    }

    @PutMapping(value = "/updateCuadrilla/{id}")
    public ResponseEntity<Cuadrilla> update(@RequestBody Cuadrilla cuadrilla, @PathVariable(value = "id") int id){

        Cuadrilla objeto = cuadrillaServiceAPI.get(id);
        if (objeto != null){
            objeto.setZona(cuadrilla.getZona());
            objeto.setMovilAsociado(cuadrilla.getMovilAsociado());
            objeto.setProveedor(cuadrilla.getProveedor());
            objeto.setEstado(cuadrilla.getEstado());
            cuadrillaServiceAPI.save(objeto);
        }else{
            return new ResponseEntity<Cuadrilla>(cuadrilla, HttpStatus.INTERNAL_SERVER_ERROR);
        }
        return new ResponseEntity<Cuadrilla>(objeto, HttpStatus.OK);
    }

    @GetMapping(value = "/deleteCuadrilla/{id}")
    public ResponseEntity<Cuadrilla> delete(@PathVariable int id){
        Cuadrilla cuadrilla = cuadrillaServiceAPI.get(id);
        if (cuadrilla != null){
            cuadrillaServiceAPI.delete(id);
        }else{
            return new ResponseEntity<Cuadrilla>(cuadrilla, HttpStatus.INTERNAL_SERVER_ERROR);
        }
        return new ResponseEntity<Cuadrilla>(cuadrilla, HttpStatus.OK);
    }
}
