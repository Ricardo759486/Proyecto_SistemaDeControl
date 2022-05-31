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
    public ResponseEntity<OrdenTrabajo> save(@RequestBody OrdenTrabajo ordenTrabajo){
        OrdenTrabajo objeto = ordenTrabajoServiceAPI.save(ordenTrabajo);

        return new ResponseEntity<OrdenTrabajo>(objeto, HttpStatus.OK);
    }

    @PutMapping(value = "/updateOrdenTrabajo/{id}")
    public ResponseEntity<OrdenTrabajo> update(@RequestBody OrdenTrabajo ordenTrabajo, @PathVariable(value = "id") int id){

        OrdenTrabajo objeto = ordenTrabajoServiceAPI.get(id);
        if (objeto != null){
            objeto.setCliente(ordenTrabajo.getCliente());
            objeto.setCuadrilla(ordenTrabajo.getCuadrilla());
            objeto.setTipoServicio(ordenTrabajo.getTipoServicio());
            objeto.setDescripcion(ordenTrabajo.getDescripcion());
            objeto.setEstado(ordenTrabajo.getEstado());
            ordenTrabajoServiceAPI.save(objeto);
        }else{
            return new ResponseEntity<OrdenTrabajo>(ordenTrabajo, HttpStatus.INTERNAL_SERVER_ERROR);
        }
        return new ResponseEntity<OrdenTrabajo>(objeto, HttpStatus.OK);
    }

    @GetMapping(value = "/deleteOrdenTrabajo/{id}")
    public ResponseEntity<OrdenTrabajo> delete(@PathVariable int id){
        OrdenTrabajo ordenTrabajo = ordenTrabajoServiceAPI.get(id);
        if (ordenTrabajo != null){
            ordenTrabajoServiceAPI.delete(id);
        }else{
            return new ResponseEntity<OrdenTrabajo>(ordenTrabajo, HttpStatus.INTERNAL_SERVER_ERROR);
        }
        return new ResponseEntity<OrdenTrabajo>(ordenTrabajo, HttpStatus.OK);
    }
}
