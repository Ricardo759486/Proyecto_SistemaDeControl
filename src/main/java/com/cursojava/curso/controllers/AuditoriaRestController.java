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
    private UsuarioServiceAPI usuarioServiceAPI;

    @GetMapping(value = "/getAll")
    public List<AuditoriaDAO> getAll(){

        List<Auditoria> getall = auditoriaServiceAPI.getAll();
        List<AuditoriaDAO> listaF = new ArrayList<>();

        for (Auditoria a:getall){
                AuditoriaDAO objeto = new AuditoriaDAO(a.getIdInforme(), "" + a.getFechaHora(), a.getIpUsuario(), a.getOperacionCrud(), a.getTabla(), a.getUsuario().getLogin());
                listaF.add(objeto);
        }
        return listaF;
    }

    public void saveAuditoria(String ope, String tabla, int idUsuario){
        Auditoria auditoria = new Auditoria();

        auditoria.setFechaHora(new Date());
        auditoria.setIpUsuario("pruebaip");
        auditoria.setOperacionCrud(ope);
        auditoria.setTabla(tabla);
        Usuario usuario = usuarioServiceAPI.get(idUsuario);
        auditoria.setUsuario(usuario);
        auditoriaServiceAPI.save(auditoria);
    }
}