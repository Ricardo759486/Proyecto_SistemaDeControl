package com.cursojava.curso.controllers;

import com.cursojava.curso.model.Cliente;
import com.cursojava.curso.service.ClienteServiceAPI;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping(value = "/Cliente")
public class ClienteRestController {

    @Autowired
    private ClienteServiceAPI clienteServiceAPI;

    @GetMapping(value = "/getAll")
    public List<Cliente> getAll(){
        return clienteServiceAPI.getAll();
    }

    @PostMapping(value = "/saveCliente")
    public ResponseEntity<Cliente> save(@RequestBody Cliente cliente){
        Cliente objeto = clienteServiceAPI.save(cliente);

        return new ResponseEntity<Cliente>(objeto, HttpStatus.OK);
    }

    @PutMapping(value = "/updateCliente/{id}")
    public ResponseEntity<Cliente> update(@RequestBody Cliente cliente, @PathVariable(value = "id") int id){

        Cliente objeto = clienteServiceAPI.get(id);
        if (objeto != null){
            objeto.setCedula(cliente.getCedula());
            objeto.setDireccion(cliente.getDireccion());
            objeto.setTelefono(cliente.getTelefono());
            objeto.setTipoDocumento(cliente.getTipoDocumento());
            objeto.setEstado(cliente.getEstado());
            clienteServiceAPI.save(objeto);
        }else{
            return new ResponseEntity<Cliente>(cliente, HttpStatus.INTERNAL_SERVER_ERROR);
        }
        return new ResponseEntity<Cliente>(objeto, HttpStatus.OK);
    }

    @GetMapping(value = "/deleteCliente/{id}")
    public ResponseEntity<Cliente> delete(@PathVariable int id){
        Cliente cliente = clienteServiceAPI.get(id);
        if (cliente != null){
            clienteServiceAPI.delete(id);
        }else{
            return new ResponseEntity<Cliente>(cliente, HttpStatus.INTERNAL_SERVER_ERROR);
        }
        return new ResponseEntity<Cliente>(cliente, HttpStatus.OK);
    }
}