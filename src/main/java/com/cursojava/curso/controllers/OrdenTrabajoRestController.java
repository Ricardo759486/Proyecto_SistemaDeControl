package com.cursojava.curso.controllers;

import com.cursojava.curso.model.*;
import com.cursojava.curso.service.ClienteServiceAPI;
import com.cursojava.curso.service.CuadrillaServiceAPI;
import com.cursojava.curso.service.OrdenTrabajoServiceAPI;
import com.cursojava.curso.service.TipoServicioServiceAPI;
import com.cursojava.curso.service.dao.OrdenTrabajoDAO;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.ArrayList;
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
    public List<OrdenTrabajoDAO> getAll(){

        List<OrdenTrabajo> getall = ordenTrabajoServiceAPI.getAll();
        List<OrdenTrabajoDAO> listaF = new ArrayList<>();

        for (OrdenTrabajo o:getall){
            if(o.getEstado().equals("A")) {
                OrdenTrabajoDAO objeto = new OrdenTrabajoDAO(o.getIdOrdenTrabajo(),o.getDescripcion(),o.getTipoServicio().getDescripcion(),o.getCliente().getNumDocumento(),o.getCuadrilla().getMovilAsociado(),o.getEstado());
                listaF.add(objeto);
            }
        }
        return listaF;
    }

    @PostMapping(value = "/saveOrdenTrabajo/{idCuadrilla}/{idCliente}/{idTipoServicio}")
    public HttpStatus save(@RequestBody OrdenTrabajo ordenTrabajo,
                                             @PathVariable(value = "idCuadrilla") int idCuadrilla,
                                             @PathVariable(value = "idCliente") int idCliente,
                                             @PathVariable(value = "idTipoServicio") int idTipoServicio){
        Cuadrilla cuadrilla = cuadrillaServiceAPI.get(idCuadrilla);
        Cliente cliente = clienteServiceAPI.get(idCliente);
        TipoServicio tipoServicio = tipoServicioServiceAPI.get(idTipoServicio);
        ordenTrabajo.setCuadrilla(cuadrilla);
        ordenTrabajo.setCliente(cliente);
        ordenTrabajo.setTipoServicio(tipoServicio);
        ordenTrabajoServiceAPI.save(ordenTrabajo);
        return HttpStatus.OK;
    }

    @PutMapping(value = "/updateOrdenTrabajo/{id}/{idCuadrilla}/{idCliente}/{idTipoServicio}")
    public HttpStatus update(@RequestBody OrdenTrabajo ordenTrabajo,
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
            return HttpStatus.INTERNAL_SERVER_ERROR;
        }
        return HttpStatus.OK;
    }

    @GetMapping(value = "/deleteOrdenTrabajo/{id}")
    public HttpStatus delete(@PathVariable int id){
        OrdenTrabajo ordenTrabajo = ordenTrabajoServiceAPI.get(id);
        if (ordenTrabajo != null){
            ordenTrabajo.setEstado("D");
            ordenTrabajoServiceAPI.save(ordenTrabajo);
        }else{
            return HttpStatus.INTERNAL_SERVER_ERROR;
        }
        return HttpStatus.OK;
    }
}
