package com.cursojava.curso.service.impl;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.repository.CrudRepository;

import com.cursojava.curso.model.Usuario;
import com.cursojava.curso.repository.UsuarioRepository;
import com.cursojava.curso.commons.GenericServiceImpl;
import com.cursojava.curso.service.UsuarioServiceAPI;
import org.springframework.stereotype.Service;

import javax.persistence.EntityManager;
import javax.persistence.PersistenceContext;
import java.security.MessageDigest;
import java.security.NoSuchAlgorithmException;
import java.time.LocalDate;
import java.time.ZoneId;
import java.util.Date;
import java.util.List;
import java.util.concurrent.TimeUnit;

@Service
public class UsuarioServiceImpl extends GenericServiceImpl<Usuario, Integer> implements UsuarioServiceAPI {
    
    @Autowired
    private UsuarioRepository usuarioDaoAPI;

    @PersistenceContext
    EntityManager entityManager;

    @Override
    public CrudRepository<Usuario, Integer> getDao(){
        return usuarioDaoAPI;
    }
    @Override
    public Usuario login(String correo, String clave){
        String query = "FROM Usuario WHERE login = :login";
        List<Usuario> lista = entityManager.createQuery(query).setParameter("login", correo).getResultList();
        Usuario encontrado = lista.get(0);

        if(encontrado != null){
            System.out.println("entro a no null");
            if(validarContra(clave, encontrado)){
                System.out.println("Clave correcta");
                return lista.get(0);
            }else {
                System.out.println("Clave incorrecta");
                return null;
            }
        }else{
            System.out.println("Dio null");
            return null;
        }
    }
    public boolean validarContra(String contraValidar, Usuario u){
        String contraHash = hashearContra(contraValidar);
        System.out.println(contraHash);
        if(contraHash.equals(u.getClave())){
            System.out.println("Contraseña igual");
            u.setIntentos(0);
            return true;
        }
        System.out.println("Contraseña diferente");
        int intentos = u.getIntentos() +1;
        System.out.println(u.getIntentos());
        System.out.println(intentos);
        u.setIntentos(intentos);
        validarIntentos(u);
        return false;
    }
    @Override
    public boolean validarEstado(Usuario u){
      if(u.getEstado().equals("A")){
          System.out.println("Estado activo");
          return true;
      }
        System.out.println("Estado desactivado");
      return false;
    }

    public void validarIntentos(Usuario u){
        if(u.getIntentos() > 3){
            System.out.println("Usuario con mas de tres intentos bloquear");
            u.setEstado("D");
        }
        System.out.println("Intentos permitidos");
    }
    @Override
    public boolean revisionFecha(Usuario u){
        Date fecha_creacion = u.getFecha_ultima_contra();
        Date fecha_actual = new Date();

        long rest = fecha_actual.getTime() - fecha_creacion.getTime();
        TimeUnit time = TimeUnit.DAYS;
        long dias_dif = time.convert(rest, TimeUnit.MILLISECONDS);

        if(dias_dif <= 7){
            System.out.println("Fecha correcta");
            return true;
        }
        System.out.println("Fecha pasada, cambie contra");
        return false;
    }

    @Override
    public String hashearContra(String contra){
        MessageDigest md = null;
        try {
            md = MessageDigest.getInstance("SHA-256");
        }
        catch (NoSuchAlgorithmException e) {
            e.printStackTrace();
            return null;
        }

        byte[] hash = md.digest(contra.getBytes());
        StringBuffer sb = new StringBuffer();

        for(byte b : hash) {
            sb.append(String.format("%02x", b));
        }

        return sb.toString();
    }
}
