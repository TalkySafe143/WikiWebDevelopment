package com.wiki.main.services;

import java.util.ArrayList;
import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.wiki.main.model.Client;
import com.wiki.main.repository.ClientRepository;

@Service
public class ClientService {
    
    @Autowired
    private ClientRepository clientRepository;

    public Client createClient(Client client) {
        return clientRepository.save(client);
    }

    public List<Client> getAllClients() {
        List<Client> res = new ArrayList<Client>();
        clientRepository.findAll().forEach(res::add);
        return res;
    }
}
