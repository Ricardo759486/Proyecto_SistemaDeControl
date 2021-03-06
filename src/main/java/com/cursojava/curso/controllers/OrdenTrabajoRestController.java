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

    @Autowired
    private AuditoriaRestController audi;

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

    @PostMapping(value = "/saveOrdenTrabajo/{idCuadrilla}/{idCliente}/{idTipoServicio}/{idUsuario}")
    public HttpStatus save(@RequestBody OrdenTrabajo ordenTrabajo,
                                             @PathVariable(value = "idCuadrilla") int idCuadrilla,
                                             @PathVariable(value = "idCliente") int idCliente,
                                             @PathVariable(value = "idTipoServicio") int idTipoServicio,
                                             @PathVariable(value = "idUsuario") int idUsuario){
        Cuadrilla cuadrilla = cuadrillaServiceAPI.get(idCuadrilla);
        Cliente cliente = clienteServiceAPI.get(idCliente);
        TipoServicio tipoServicio = tipoServicioServiceAPI.get(idTipoServicio);
        ordenTrabajo.setCuadrilla(cuadrilla);
        ordenTrabajo.setCliente(cliente);
        ordenTrabajo.setTipoServicio(tipoServicio);
        ordenTrabajo.setEstado("A");
        ordenTrabajoServiceAPI.save(ordenTrabajo);
        audi.saveAuditoria("Guardar", "OrdenTrabajo",idUsuario);
        return HttpStatus.OK;
    }

    @PutMapping(value = "/updateOrdenTrabajo/{id}/{idCuadrilla}/{idCliente}/{idTipoServicio}/{idUsuario}")
    public HttpStatus update(@RequestBody OrdenTrabajo ordenTrabajo,
                                               @PathVariable(value = "id") int id,
                                               @PathVariable(value = "idCuadrilla") int idCuadrilla,
                                               @PathVariable(value = "idCliente") int idCliente,
                                               @PathVariable(value = "idTipoServicio") int idTipoServicio,
                                               @PathVariable(value = "idUsuario") int idUsuario){
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
            audi.saveAuditoria("Actualizar", "OrdenTrabajo",idUsuario);
        }else{
            return HttpStatus.INTERNAL_SERVER_ERROR;
        }
        return HttpStatus.OK;
    }

    @GetMapping(value = "/deleteOrdenTrabajo/{id}/{idUsuario}")
    public HttpStatus delete(@PathVariable int id, @PathVariable(value = "idUsuario") int idUsuario){
        OrdenTrabajo ordenTrabajo = ordenTrabajoServiceAPI.get(id);
        if (ordenTrabajo != null){
            ordenTrabajo.setEstado("D");
            ordenTrabajoServiceAPI.save(ordenTrabajo);
            audi.saveAuditoria("Eliminar", "OrdenTrabajo",idUsuario);
        }else{
            return HttpStatus.INTERNAL_SERVER_ERROR;
        }
        return HttpStatus.OK;
    }
}
