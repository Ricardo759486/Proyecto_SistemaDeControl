package com.cursojava.curso.service.impl;

import de.mkammerer.argon2.Argon2;
import de.mkammerer.argon2.Argon2Factory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.repository.CrudRepository;

import com.cursojava.curso.model.Usuario;
import com.cursojava.curso.repository.UsuarioRepository;
import com.cursojava.curso.commons.GenericServiceImpl;
import com.cursojava.curso.service.UsuarioServiceAPI;
import org.springframework.stereotype.Service;

import javax.persistence.EntityManager;
import javax.persistence.PersistenceContext;
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
            if(validarContra(clave, encontrado)){
                return lista.get(0);
            }
        }
        return null;
    }
    public boolean validarContra(String contraValidar, Usuario u){
        String contraHash = hashearContra(contraValidar);
        if(contraHash.equals(u.getClave())){
            u.setIntentos(0);
            return true;
        }
        u.setIntentos(u.getIntentos()+1);
        validarIntentos(u);
        return false;
    }
    @Override
    public boolean validarEstado(Usuario u){
      if(u.getEstado().equals("A")){
          return true;
      }
      return false;
    }

    public void validarIntentos(Usuario u){
        if(u.getIntentos() > 3){
            u.setEstado("D");
        }
    }
    @Override
    public boolean revisionFecha(Usuario u){
        Date fecha_creacion = u.getFecha_ultimaContra();
        Date fecha_actual = calTiempoActual();

        long rest = fecha_actual.getTime() - fecha_creacion.getTime();
        TimeUnit time = TimeUnit.DAYS;
        long dias_dif = time.convert(rest, TimeUnit.MILLISECONDS);

        if(dias_dif <= 7){
            return true;
        }
        return false;
    }

    public Date calTiempoActual(){
        LocalDate myObj = LocalDate.now();
        ZoneId defaultZoneId = ZoneId.systemDefault();
        Date date = Date .from(myObj.atStartOfDay(defaultZoneId).toInstant());
        return date;
    }

    @Override
    public String hashearContra(String contra){
        Argon2 argon2 = Argon2Factory.create(Argon2Factory.Argon2Types.ARGON2id);
        return argon2.hash(1, 1024, 1, contra);
    }


}
