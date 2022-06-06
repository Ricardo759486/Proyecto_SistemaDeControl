package com.cursojava.curso.controllers;
import com.cursojava.curso.model.Usuario;
import com.cursojava.curso.service.UsuarioServiceAPI;
import com.cursojava.curso.service.dao.UsuarioDAO;
import com.cursojava.curso.service.impl.EnvioCorreoImpl;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.context.event.ApplicationReadyEvent;
import org.springframework.context.event.EventListener;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;


@RestController
@RequestMapping(value = "/Autenticacion")
public class AuthController {

    @Autowired
    private UsuarioServiceAPI usuarioServiceAPI;
    @Autowired
    private EnvioCorreoImpl correoService;

    @EventListener(ApplicationReadyEvent.class)
    public void envioCorreo() {
        System.out.println("----- Iniciado");
    }

    @GetMapping(value = "/validarLogin/{correo}/{clave}")
    public UsuarioDAO login(@PathVariable(value = "correo") String correo,
                                         @PathVariable(value = "clave") String clave){
       Usuario usC =  usuarioServiceAPI.login(correo, clave);
       UsuarioDAO objeto = new UsuarioDAO();
       if(usC != null){
           objeto = new UsuarioDAO(usC.getIdUsuario(),usC.getLogin(),usC.getTipoDocumento().getDescripcion(),usC.getIdentificacion(),usC.getFecha_ultima_contra()+"",usC.getDireccion(),usC.getRol().getTipoRol(),usC.getCuadrilla().getMovilAsociado(),usC.getIntentos(),usC.getEstado());
       }
       int val = comprobacion(usC);
        switch(val) {
            case 0:
                System.out.println("Usuario bloqueado");
                correoService.enviarCorreo(usC.getLogin(),"Usuario Bloqueado", "Su usuario ha sido bloqueado debido a varios intentos fallidos" +
                        "\nde inicio de sesion, contactece con un administrador para acceder\na su cuenta.\nCordialmente, Sistema de Gestion Administrativo ");
                return objeto;
            case 1:
                System.out.println("Sesion iniciada con exito");
                return objeto;
            case 2:
                System.out.println("La contrasenia debe ser cambiada");
                correoService.enviarCorreo(usC.getLogin(), "Solicitud nueva contraseña", "Debido a reglas propia de la empresa su contraseña debe\n" +
                        "ser cambiada para poder acceder a su usuario: Dirigase a xyz.com para cambiar la contraseña");
                return objeto;
            case 3:
                System.out.println("Login fallido");
                return null;
            default:
                System.out.println("Se peto");
                return null;
        }
    }
    public int comprobacion(Usuario u){
        int resultado = -1;
        if(u != null){
            if(!usuarioServiceAPI.validarEstado(u)){
                return 0;
                // "Estado inactivo"
            }
            if(usuarioServiceAPI.revisionFecha(u)){
                return 1;
                //"Sesión iniciada con exito"
            }
            return 2;
            //"La contrasenia debe ser cambiada"
        }else{
            return 3;
            //"Login fallido"
        }
    }
}
