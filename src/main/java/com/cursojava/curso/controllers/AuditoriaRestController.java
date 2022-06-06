package com.cursojava.curso.controllers;

import com.cursojava.curso.model.Auditoria;
import com.cursojava.curso.model.Cliente;
import com.cursojava.curso.model.TipoDocumento;
import com.cursojava.curso.model.Usuario;
import com.cursojava.curso.service.AuditoriaServiceAPI;
import com.cursojava.curso.service.UsuarioServiceAPI;
import com.cursojava.curso.service.dao.AuditoriaDAO;
import com.cursojava.curso.service.impl.UsuarioServiceImpl;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.ArrayList;
import java.util.Date;
import java.util.List;

@RestController
@RequestMapping(value = "/Auditoria")
public class AuditoriaRestController {

    public AuditoriaRestController() {
    }

    @Autowired
    private AuditoriaServiceAPI auditoriaServiceAPI;
    @Autowired
    private UsuarioServiceAPI usuarioServiceAPI = new UsuarioServiceImpl();


    @GetMapping(value = "/getAll")
    public List<AuditoriaDAO> getAll(){

        List<Auditoria> getall = auditoriaServiceAPI.getAll();
        List<AuditoriaDAO> listaF = new ArrayList<>();

        for (Auditoria a:getall){
                AuditoriaDAO objeto = new AuditoriaDAO(a.getIdInforme(), a.getFechaHora(), a.getIpUsuario(), a.getOperacionCrud(), a.getTabla(), a.getUsuario().getLogin());
                listaF.add(objeto);
        }

        return listaF;
    }

    //@PostMapping(value = "/saveAuditoria")
    /*public ResponseEntity<Auditoria> save(){
        Auditoria a = new Auditoria();
        //auditoria.setFechaHora(new Date());
        //Usuario usuario = usuarioServiceAPI.get(3);
        //auditoria.setUsuario(usuario);
        Auditoria objeto = auditoriaServiceAPI.save(auditoria);
        return new ResponseEntity<Auditoria>(objeto, HttpStatus.OK);
    }*/
}