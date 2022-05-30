package com.cursojava.curso.dao;

import com.cursojava.curso.model.Usuario;
import de.mkammerer.argon2.Argon2;
import de.mkammerer.argon2.Argon2Factory;
import org.springframework.stereotype.Repository;
import org.springframework.transaction.annotation.Transactional;

import javax.persistence.EntityManager;
import javax.persistence.PersistenceContext;
import java.util.List;

@Repository
@Transactional
public class UsuarioDaoImp implements UsuarioDao {

    @PersistenceContext
    EntityManager entityManager;

    @Override
    @Transactional
    public List<Usuario> getUsuarios() {
        String query = "FROM Usuario";
        return entityManager.createQuery(query).getResultList();
    }

    @Override
    public void eliminar(Long id) {
        Usuario usuario = entityManager.find(Usuario.class, id);
        entityManager.remove(usuario);
    }

    @Override
    public void registrar(Usuario usuario) {
        entityManager.merge(usuario);
    }

    @Override
    public Usuario obtenerUsuarioDatos(Usuario usuario) {
        String query = "FROM Usuario WHERE login = :login";
        List<Usuario> lista = entityManager.createQuery(query)
                .setParameter("login", usuario.getLogin())
                .getResultList();

        if (lista.isEmpty()) {
            return null;
        }

        String contraHashed = lista.get(0).getClave();
        Argon2 argon2 = Argon2Factory.create(Argon2Factory.Argon2Types.ARGON2id);

        if (argon2.verify(contraHashed, usuario.getClave())) {
            return lista.get(0);
        }
        return null;
    }

}
