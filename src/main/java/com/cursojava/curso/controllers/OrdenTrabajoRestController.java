package com.cursojava.curso.controllers;

import com.cursojava.curso.model.OrdenTrabajo;
import com.cursojava.curso.service.OrdenTrabajoServiceAPI;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping(value = "/OrdenTrabajo")
public class OrdenTrabajoRestController {

    @Autowired
    private OrdenTrabajoServiceAPI ordenTrabajoServiceAPI;

    @GetMapping(value = "/getAll")
    public List<OrdenTrabajo> getAll(){
        return ordenTrabajoServiceAPI.getAll();
    }

    @PostMapping(value = "/saveOrdenTrabajo")
    public ResponseEntity<OrdenTrabajo> save(@RequestBody OrdenTrabajo tipoDocumento){
        OrdenTrabajo objeto = ordenTrabajoServiceAPI.save(tipoDocumento);

        return new ResponseEntity<OrdenTrabajo>(objeto, HttpStatus.OK);
    }

    @PutMapping(value = "/updateOrdenTrabajo/{id}")
    public ResponseEntity<OrdenTrabajo> update(@RequestBody OrdenTrabajo tipoDocumento, @PathVariable(value = "id") int id_documento){

        OrdenTrabajo objeto = ordenTrabajoServiceAPI.get(id_documento);
        if (objeto != null){
            objeto.setCliente(tipoDocumento.getCliente());
            objeto.setCuadrilla(tipoDocumento.getCuadrilla());
            objeto.setTipoServicio(tipoDocumento.getTipoServicio());
            objeto.setDescripcion(tipoDocumento.getDescripcion());
            objeto.setEstado(tipoDocumento.getEstado());
            ordenTrabajoServiceAPI.save(objeto);
        }else{
            return new ResponseEntity<OrdenTrabajo>(tipoDocumento, HttpStatus.INTERNAL_SERVER_ERROR);
        }
        return new ResponseEntity<OrdenTrabajo>(objeto, HttpStatus.OK);
    }

    @GetMapping(value = "/deleteOrdenTrabajo/{id}")
    public ResponseEntity<OrdenTrabajo> delete(@PathVariable int id){
        OrdenTrabajo tipoDocumento = ordenTrabajoServiceAPI.get(id);
        if (tipoDocumento != null){
            ordenTrabajoServiceAPI.delete(id);
        }else{
            return new ResponseEntity<OrdenTrabajo>(tipoDocumento, HttpStatus.INTERNAL_SERVER_ERROR);
        }
        return new ResponseEntity<OrdenTrabajo>(tipoDocumento, HttpStatus.OK);
    }
}
