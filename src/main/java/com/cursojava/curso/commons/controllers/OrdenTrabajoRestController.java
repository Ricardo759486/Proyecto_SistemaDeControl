package com.cursojava.curso.commons.controllers;

import com.cursojava.curso.model.*;
import com.cursojava.curso.service.ClienteServiceAPI;
import com.cursojava.curso.service.CuadrillaServiceAPI;
import com.cursojava.curso.service.OrdenTrabajoServiceAPI;
import com.cursojava.curso.service.TipoServicioServiceAPI;
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

    @Autowired
    private CuadrillaServiceAPI cuadrillaServiceAPI;

    @Autowired
    private ClienteServiceAPI clienteServiceAPI;

    @Autowired
    private TipoServicioServiceAPI tipoServicioServiceAPI;

    @GetMapping(value = "/getAll")
    public List<OrdenTrabajo> getAll(){
        return ordenTrabajoServiceAPI.getAll();
    }

    @PostMapping(value = "/saveOrdenTrabajo/{idCuadrilla}/{idCliente}/{idTipoServicio}")
    public ResponseEntity<OrdenTrabajo> save(@RequestBody OrdenTrabajo ordenTrabajo,
                                             @PathVariable(value = "idCuadrilla") int idCuadrilla,
                                             @PathVariable(value = "idCliente") int idCliente,
                                             @PathVariable(value = "idTipoServicio") int idTipoServicio){
        Cuadrilla cuadrilla = cuadrillaServiceAPI.get(idCuadrilla);
        Cliente cliente = clienteServiceAPI.get(idCliente);
        TipoServicio tipoServicio = tipoServicioServiceAPI.get(idTipoServicio);
        ordenTrabajo.setCuadrilla(cuadrilla);
        ordenTrabajo.setCliente(cliente);
        ordenTrabajo.setTipoServicio(tipoServicio);
        OrdenTrabajo objeto = ordenTrabajoServiceAPI.save(ordenTrabajo);
        return new ResponseEntity<OrdenTrabajo>(objeto, HttpStatus.OK);
    }

    @PutMapping(value = "/updateOrdenTrabajo/{id}/{idCuadrilla}/{idCliente}/{idTipoServicio}")
    public ResponseEntity<OrdenTrabajo> update(@RequestBody OrdenTrabajo ordenTrabajo,
                                               @PathVariable(value = "id") int id,
                                               @PathVariable(value = "idCuadrilla") int idCuadrilla,
                                               @PathVariable(value = "idCliente") int idCliente,
                                               @PathVariable(value = "idTipoServicio") int idTipoServicio){
        Cuadrilla cuadrilla = cuadrillaServiceAPI.get(idCuadrilla);
        Cliente cliente = clienteServiceAPI.get(idCliente);
        TipoServicio tipoServicio = tipoServicioServiceAPI.get(idTipoServicio);
        OrdenTrabajo objeto = ordenTrabajoServiceAPI.get(id);
        if (objeto != null){
            objeto.setCliente(cliente);
            objeto.setCuadrilla(cuadrilla);
            objeto.setTipoServicio(tipoServicio);
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
