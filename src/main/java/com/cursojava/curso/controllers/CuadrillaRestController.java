package com.cursojava.curso.controllers;

import com.cursojava.curso.model.Cuadrilla;
import com.cursojava.curso.model.Proveedor;
import com.cursojava.curso.model.TurnoTrabajo;
import com.cursojava.curso.model.Zona;
import com.cursojava.curso.service.CuadrillaServiceAPI;
import com.cursojava.curso.service.ProveedorServiceAPI;
import com.cursojava.curso.service.TurnoTrabajoServiceAPI;
import com.cursojava.curso.service.ZonaServiceAPI;
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

    @Autowired
    private ZonaServiceAPI zonaServiceAPI;

    @Autowired
    private ProveedorServiceAPI proveedorServiceAPI;

    @Autowired
    private TurnoTrabajoServiceAPI turnoTrabajoServiceAPI;

    @GetMapping(value = "/getAll")
    public List<Cuadrilla> getAll(){
        return cuadrillaServiceAPI.getAll();
    }

    @PostMapping(value = "/saveCuadrilla/{idZona}/{idProveedor}/{turnoTrabajo}")
    public ResponseEntity<Cuadrilla> save(@RequestBody Cuadrilla cuadrilla,
                                          @PathVariable(value = "idZona") int idZona,
                                          @PathVariable(value = "idProveedor") int idProveedor,
                                          @PathVariable(value = "turnoTrabajo") int idTurno){
        Zona zona = zonaServiceAPI.get(idZona);
        Proveedor proveedor = proveedorServiceAPI.get(idProveedor);
        TurnoTrabajo turno = turnoTrabajoServiceAPI.get(idTurno);
        cuadrilla.setZona(zona);
        cuadrilla.setProveedor(proveedor);
        cuadrilla.setTurnoTrabajoBean(turno);
        Cuadrilla objeto = cuadrillaServiceAPI.save(cuadrilla);

        return new ResponseEntity<Cuadrilla>(objeto, HttpStatus.OK);
    }

    @PutMapping(value = "/updateCuadrilla/{id}/{idZona}/{idProveedor}/{turnoTrabajo}")
    public ResponseEntity<Cuadrilla> update(@RequestBody Cuadrilla cuadrilla,
                                            @PathVariable(value = "id") int id,
                                            @PathVariable(value = "idZona") int idZona,
                                            @PathVariable(value = "idProveedor") int idProveedor,
                                            @PathVariable(value = "turnoTrabajo") int idTurno){

        Cuadrilla objeto = cuadrillaServiceAPI.get(id);
        Zona zona = zonaServiceAPI.get(idZona);
        Proveedor proveedor = proveedorServiceAPI.get(idProveedor);
        TurnoTrabajo turno = turnoTrabajoServiceAPI.get(idTurno);
        if (objeto != null){
            objeto.setZona(zona);
            objeto.setMovilAsociado(cuadrilla.getMovilAsociado());
            objeto.setProveedor(proveedor);
            objeto.setTurnoTrabajoBean(turno);
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
