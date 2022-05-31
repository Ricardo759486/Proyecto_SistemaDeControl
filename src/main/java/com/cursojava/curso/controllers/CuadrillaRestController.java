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
    public ResponseEntity<Cuadrilla> save(@RequestBody Cuadrilla tipoDocumento){
        Cuadrilla objeto = cuadrillaServiceAPI.save(tipoDocumento);

        return new ResponseEntity<Cuadrilla>(objeto, HttpStatus.OK);
    }

    @PutMapping(value = "/updateCuadrilla/{id}")
    public ResponseEntity<Cuadrilla> update(@RequestBody Cuadrilla tipoDocumento, @PathVariable(value = "id") int id_documento){

        Cuadrilla objeto = cuadrillaServiceAPI.get(id_documento);
        if (objeto != null){
            objeto.setZona(tipoDocumento.getZona());
            objeto.setMovilAsociado(tipoDocumento.getMovilAsociado());
            objeto.setProveedor(tipoDocumento.getProveedor());
            objeto.setEstado(tipoDocumento.getEstado());
            cuadrillaServiceAPI.save(objeto);
        }else{
            return new ResponseEntity<Cuadrilla>(tipoDocumento, HttpStatus.INTERNAL_SERVER_ERROR);
        }
        return new ResponseEntity<Cuadrilla>(objeto, HttpStatus.OK);
    }

    @GetMapping(value = "/deleteCuadrilla/{id}")
    public ResponseEntity<Cuadrilla> delete(@PathVariable int id){
        Cuadrilla tipoDocumento = cuadrillaServiceAPI.get(id);
        if (tipoDocumento != null){
            cuadrillaServiceAPI.delete(id);
        }else{
            return new ResponseEntity<Cuadrilla>(tipoDocumento, HttpStatus.INTERNAL_SERVER_ERROR);
        }
        return new ResponseEntity<Cuadrilla>(tipoDocumento, HttpStatus.OK);
    }
}
