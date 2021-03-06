package com.cursojava.curso.controllers;

import com.cursojava.curso.model.Cuadrilla;
import com.cursojava.curso.model.Rol;
import com.cursojava.curso.model.TipoDocumento;
import com.cursojava.curso.model.Usuario;
import com.cursojava.curso.service.CuadrillaServiceAPI;
import com.cursojava.curso.service.RolServiceAPI;
import com.cursojava.curso.service.TipoDocumentoServiceAPI;
import com.cursojava.curso.service.UsuarioServiceAPI;
import com.cursojava.curso.service.dao.UsuarioDAO;
import com.cursojava.curso.service.impl.EnvioCorreoImpl;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.ArrayList;
import java.util.Date;
import java.util.List;

@RestController
@RequestMapping(value = "/api")
public class UsuarioRestController {

    @Autowired
    private UsuarioServiceAPI usuarioServiceAPI;
    @Autowired
    private TipoDocumentoServiceAPI tipoDocumentoServiceAPI;
    @Autowired
    private CuadrillaServiceAPI cuadrillaServiceAPI;
    @Autowired
    private RolServiceAPI rolServiceAPI;

    @Autowired
    private EnvioCorreoImpl correoService;

    @Autowired
    private AuditoriaRestController audi;

    @GetMapping(value = "/getAll")
    public List<UsuarioDAO> getAll(){

        List<Usuario> getall = usuarioServiceAPI.getAll();
        List<UsuarioDAO> listaF = new ArrayList<>();

        for (Usuario u:getall){
            if(u.getEstado().equals("A")){
                if(u.getCuadrilla() == null){
                    UsuarioDAO objeto = new UsuarioDAO(u.getIdUsuario(),u.getLogin(),u.getTipoDocumento().getDescripcion(),u.getIdentificacion(),u.getFecha_ultima_contra()+"",u.getDireccion(),u.getRol().getTipoRol(),"",u.getIntentos(),u.getEstado());
                    listaF.add(objeto);
                }else {
                    UsuarioDAO objeto = new UsuarioDAO(u.getIdUsuario(), u.getLogin(), u.getTipoDocumento().getDescripcion(), u.getIdentificacion(), u.getFecha_ultima_contra() + "", u.getDireccion(), u.getRol().getTipoRol(), u.getCuadrilla().getMovilAsociado(), u.getIntentos(), u.getEstado());
                    listaF.add(objeto);
                }
            }
        }
        return listaF;
    }

    @PostMapping(value = "/saveUsuario/{idIdentificacion}/{idCuadrilla}/{idRol}/{idUsuario}")
    public HttpStatus save(@RequestBody Usuario usuario,
                                        @PathVariable(value = "idIdentificacion") int idIdentificacion,
                                        @PathVariable(value = "idCuadrilla") int idCuadrilla,
                                        @PathVariable(value = "idRol") int idRol,
                                        @PathVariable(value = "idUsuario") int idUsuario){

        TipoDocumento identificacion = tipoDocumentoServiceAPI.get(idIdentificacion);
        Cuadrilla cuadrilla = cuadrillaServiceAPI.get(idCuadrilla);
        Rol rol = rolServiceAPI.get(idRol);
        usuario.setTipoDocumento(identificacion);
        usuario.setCuadrilla(cuadrilla);
        usuario.setRol(rol);
        usuario.setFecha_ultima_contra(new Date());
        String contra = usuario.getClave();
        usuario.setClave(usuarioServiceAPI.hashearContra(contra));
        usuario.setIntentos(0);
        usuario.setEstado("A");
        usuarioServiceAPI.save(usuario);
        audi.saveAuditoria("Guardar", "Usuario",idUsuario);
        correoService.enviarCorreo(usuario.getLogin()+"", "Registro exitoso", "Bienvenido usuario "+usuario.getLogin()+":\nUsted ha sido registrado" +
                "por un administrador de la empresa de Electri-Bogota, asignado a la cuadrilla: "+usuario.getCuadrilla()+", su clave de accesso es: " +contra);
        return HttpStatus.OK;
    }

    @PostMapping(value = "/saveUsuario/{idIdentificacion}")
    public HttpStatus saveLogin(@RequestBody Usuario usuario,
                           @PathVariable(value = "idIdentificacion") int idIdentificacion){

        TipoDocumento identificacion = tipoDocumentoServiceAPI.get(idIdentificacion);
        Rol rol = rolServiceAPI.get(1);
        usuario.setTipoDocumento(identificacion);
        usuario.setRol(rol);
        usuario.setFecha_ultima_contra(new Date());
        usuario.setClave(usuarioServiceAPI.hashearContra(usuario.getClave()));
        usuario.setEstado("A");
        usuario.setIntentos(0);
        usuarioServiceAPI.save(usuario);
        correoService.enviarCorreo(usuario.getLogin()+"", "Registro exitoso", "Bienvenido usuario "+usuario.getLogin()+":\nHa quedado" +
                "registrado en nuestra sistema como un nuevo usuario, ya puede iniciar sesi??n");
        return HttpStatus.OK;
    }

    @PutMapping(value = "/updateUsuario/{id}/{idIdentificacion}/{idCuadrilla}/{idRol}/{idUsuario}")
    public HttpStatus update(@RequestBody Usuario usuario,
                                          @PathVariable(value = "id") int id,
                                          @PathVariable(value = "idIdentificacion") int idIdentificacion,
                                          @PathVariable(value = "idCuadrilla") int idCuadrilla,
                                          @PathVariable(value = "idRol") int idRol,
                                          @PathVariable(value = "idUsuario") int idUsuario){

        Usuario objeto = usuarioServiceAPI.get(id);
        TipoDocumento identificacion = tipoDocumentoServiceAPI.get(idIdentificacion);
        Cuadrilla cuadrilla = cuadrillaServiceAPI.get(idCuadrilla);
        Rol rol = rolServiceAPI.get(idRol);
        if (objeto != null){
            objeto.setRol(rol);
            objeto.setLogin(usuario.getLogin());
            objeto.setClave(usuarioServiceAPI.hashearContra(usuario.getClave()));
            objeto.setDireccion(usuario.getDireccion());
            objeto.setIdentificacion(usuario.getIdentificacion());
            objeto.setTipoDocumento(identificacion);
            objeto.setCuadrilla(cuadrilla);
            objeto.setIntentos(usuario.getIntentos());
            objeto.setFecha_ultima_contra(usuario.getFecha_ultima_contra());
            objeto.setEstado(usuario.getEstado());
            usuarioServiceAPI.save(objeto);
            audi.saveAuditoria("Actualizar", "Usuario",idUsuario);
        }else{
            return HttpStatus.INTERNAL_SERVER_ERROR;
        }
        return HttpStatus.OK;
    }

    @PutMapping(value = "/cambiarContrasenia/{id}/{contra}")
    public HttpStatus cambiarContra(@RequestBody Usuario usuario,
                                                 @PathVariable(value = "contra") String contra){
        usuario.setClave(usuarioServiceAPI.hashearContra(contra));
        return HttpStatus.OK;
    }

    @GetMapping(value = "/deleteUsuario/{id}/{idUsuario}")
    public HttpStatus delete(@PathVariable int id, @PathVariable(value = "idUsuario") int idUsuario){
        Usuario usuario = usuarioServiceAPI.get(id);
        if (usuario != null){
            usuario.setEstado("D");
            audi.saveAuditoria("Eliminar", "Usuario",idUsuario);
            usuarioServiceAPI.save(usuario);
        }else{
            return HttpStatus.INTERNAL_SERVER_ERROR;
        }
        return HttpStatus.OK;
    }
}
