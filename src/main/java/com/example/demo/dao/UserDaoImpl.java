package com.example.demo.dao;

import com.example.demo.entity.User;
import jakarta.persistence.EntityManager;
import jakarta.transaction.Transactional;
import org.hibernate.Session;
import org.hibernate.SessionFactory;
import org.hibernate.query.Query;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public class UserDaoImpl implements UserDao {

    @Autowired
    private EntityManager entityManager;
    @Override
    @Transactional
    public List<User> getUsers() {
        System.out.println("1");
        Session currentSession = entityManager.unwrap(Session.class);
        System.out.println("2");
        Query<User> query = currentSession.createQuery("from User", User.class);
        System.out.println("3");
        List<User> users = query.getResultList();
        System.out.println("4");
        System.out.println(users);
        return users;

    }

    @Override
    @Transactional
    public String insertUsers() {
//        Session currentSession = sessionFactory.getCurrentSession();
//        Query<User> query = currentSession.createQuery()
        return null;
    }

    @Override
    @Transactional
    public String deleteUsers() {
        return null;
    }
}
