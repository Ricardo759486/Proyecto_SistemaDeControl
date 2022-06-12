package com.cursojava.curso.controllers;

import com.cursojava.curso.model.Cliente;
import com.cursojava.curso.model.TipoDocumento;
import com.cursojava.curso.service.ClienteServiceAPI;
import com.cursojava.curso.service.TipoDocumentoServiceAPI;
import com.cursojava.curso.service.dao.ClienteDAO;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.web.bind.annotation.*;

import java.util.ArrayList;
import java.util.List;

@RestController
@RequestMapping(value = "/Cliente")
public class ClienteRestController {

    @Autowired
    private ClienteServiceAPI clienteServiceAPI;

    @Autowired
    private TipoDocumentoServiceAPI tipoDocumentoServiceAPI;

    @Autowired
    private AuditoriaRestController audi;

    @GetMapping(value = "/getAll")
    public List<ClienteDAO> getAll(){

        List<Cliente> getall = clienteServiceAPI.getAll();
        List<ClienteDAO> listaF = new ArrayList<>();

        for (Cliente c:getall){
            if(c.getEstado().equals("A")){
                ClienteDAO objeto = new ClienteDAO(c.getIdCliente(),c.getDireccion(),c.getTipoDocumento().getDescripcion(),c.getNumDocumento(),c.getEstado());
                listaF.add(objeto);
            }
        }

        return listaF;
    }

    @PostMapping(value = "/saveCliente/{idDocumento}/{idUsuario}")
    public HttpStatus save(@RequestBody Cliente cliente,
                                        @PathVariable(value = "idDocumento") int idDocumento, @PathVariable(value = "idUsuario") int idUsuario ){

        TipoDocumento tipoDocumento = tipoDocumentoServiceAPI.get(idDocumento);
        cliente.setTipoDocumento(tipoDocumento);
        cliente.setEstado("A");
        clienteServiceAPI.save(cliente);
        audi.saveAuditoria("Guardar", "Cliente",idUsuario);
        return HttpStatus.OK;
    }

    @PutMapping(value = "/updateCliente/{id}/{idDocumento}/{idUsuario}")
    public HttpStatus update(@RequestBody Cliente cliente,
                                          @PathVariable(value = "id") int id,
                                          @PathVariable(value = "idDocumento") int idDocumento,
                                          @PathVariable(value = "idUsuario") int idUsuario){

        Cliente objeto = clienteServiceAPI.get(id);
        TipoDocumento tipoDocumento = tipoDocumentoServiceAPI.get(idDocumento);
        if (objeto != null){
            objeto.setNumDocumento(cliente.getNumDocumento());
            objeto.setDireccion(cliente.getDireccion());
            objeto.setTipoDocumento(tipoDocumento);
            objeto.setEstado(cliente.getEstado());
            clienteServiceAPI.save(objeto);
            audi.saveAuditoria("Actualizar", "Cliente",idUsuario);
        }else{
            return HttpStatus.INTERNAL_SERVER_ERROR;
        }
        return HttpStatus.OK;
    }

    @GetMapping(value = "/deleteCliente/{id}/{idUsuario}")
    public HttpStatus delete(@PathVariable int id, @PathVariable(value = "idUsuario") int idUsuario){
        Cliente cliente = clienteServiceAPI.get(id);
        if (cliente != null){
            cliente.setEstado("D");
            clienteServiceAPI.save(cliente);
            audi.saveAuditoria("Eliminar", "Cliente",idUsuario);
        }else{
            return HttpStatus.INTERNAL_SERVER_ERROR;
        }
        return HttpStatus.OK;
    }
}