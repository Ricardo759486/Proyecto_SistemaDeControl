package com.cursojava.curso.controllers;

import com.cursojava.curso.model.Cliente;
import com.cursojava.curso.model.Proveedor;
import com.cursojava.curso.model.Telefono;
import com.cursojava.curso.model.Usuario;
import com.cursojava.curso.service.ClienteServiceAPI;
import com.cursojava.curso.service.ProveedorServiceAPI;
import com.cursojava.curso.service.TelefonoServiceAPI;
import com.cursojava.curso.service.UsuarioServiceAPI;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping(value = "/Telefono")
public class TelefonoRestController {

    @Autowired
    private TelefonoServiceAPI telefonoServiceAPI;
    @Autowired
    private UsuarioServiceAPI usuarioServiceAPI;
    @Autowired
    private ClienteServiceAPI clienteServiceAPI;
    @Autowired
    private ProveedorServiceAPI proveedorServiceAPI;

    @GetMapping(value = "/getAll")
    public List<Telefono> getAll(){
        return telefonoServiceAPI.getAll();
    }

    @PostMapping(value = "/saveTelefono/{id}")
    public ResponseEntity<Telefono> save(@RequestBody Telefono telefonoCliente,
                                         @PathVariable(value = "id") int id){
        String tipo = telefonoCliente.getTipo();
        switch (tipo){
            case "U":  Usuario usuario = usuarioServiceAPI.get(id);
                telefonoCliente.setUsuario(usuario);
                break;
            case "P":  Proveedor proveedor = proveedorServiceAPI.get(id);
                telefonoCliente.setProveedor(proveedor);
                break;
            case "C":  Cliente cliente = clienteServiceAPI.get(id);
                telefonoCliente.setCliente(cliente);
                break;
            default: return new ResponseEntity<Telefono>(telefonoCliente, HttpStatus.CONFLICT);
        }
        Telefono objeto = telefonoServiceAPI.save(telefonoCliente);

        return new ResponseEntity<Telefono>(objeto, HttpStatus.OK);
    }

    @PutMapping(value = "/updateTelefono/{id}/{idTipo}")
    public ResponseEntity<Telefono> update(@RequestBody Telefono telefonoCliente,
                                           @PathVariable(value = "id") int id,
                                           @PathVariable(value = "idTipo") int idTipo){

        Telefono objeto = telefonoServiceAPI.get(id);
        if (objeto != null){
            String tipo = telefonoCliente.getTipo();
            objeto.setNumTelefono(telefonoCliente.getNumTelefono());
            objeto.setTipo(tipo);
            switch (tipo){
                case "U":  Usuario usuario = usuarioServiceAPI.get(idTipo);
                objeto.setUsuario(usuario);
                break;
                case "P":  Proveedor proveedor = proveedorServiceAPI.get(idTipo);
                objeto.setProveedor(proveedor);
                break;
                case "C": Cliente cliente = clienteServiceAPI.get(idTipo);
                objeto.setCliente(cliente);
                break;
                default: return new ResponseEntity<Telefono>(telefonoCliente, HttpStatus.CONFLICT);
            }
            telefonoServiceAPI.save(objeto);
        }else{
            return new ResponseEntity<Telefono>(telefonoCliente, HttpStatus.INTERNAL_SERVER_ERROR);
        }
        return new ResponseEntity<Telefono>(objeto, HttpStatus.OK);
    }

    @GetMapping(value = "/deleteTelefono/{id}")
    public ResponseEntity<Telefono> delete(@PathVariable int id){
        Telefono telefonoCliente = telefonoServiceAPI.get(id);
        if (telefonoCliente != null){
            telefonoServiceAPI.delete(id);
        }else{
            return new ResponseEntity<Telefono>(telefonoCliente, HttpStatus.INTERNAL_SERVER_ERROR);
        }
        return new ResponseEntity<Telefono>(telefonoCliente, HttpStatus.OK);
    }
}