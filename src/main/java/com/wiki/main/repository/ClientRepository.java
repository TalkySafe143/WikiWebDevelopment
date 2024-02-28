package com.wiki.main.repository;

import org.springframework.data.repository.CrudRepository;

import com.wiki.main.model.Client;

public interface ClientRepository extends CrudRepository<Client, Long> {
    
}
