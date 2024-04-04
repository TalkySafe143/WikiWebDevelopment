package com.wiki.main.controllers;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.ModelAttribute;
import org.springframework.web.bind.annotation.RequestMapping;
import com.wiki.main.model.Client;
import com.wiki.main.services.ClientService;

import org.springframework.web.bind.annotation.PostMapping;


@Controller
@RequestMapping("/grupo-2-1/galindo")
public class HomeController {

    @Autowired
    private ClientService clientService;

    @GetMapping("/")
    public String home(Model model) {
        return "home"; 
    }

    @GetMapping("/description")
    public String about(Model model) {
        return "description";
    }

    @GetMapping("/requirements")
    public String error(Model model) {
        return "requirements";
    }

    @GetMapping("/architecture")
    public String architecture(Model model) {
        return "architecture";
    }

    @GetMapping("/development")
    public String development(Model model) {
        return "developing";
    }

    @GetMapping("/tests")
    public String tests(Model model) {
        return "tests";
    }

    @GetMapping("/deploy")
    public String deploy(Model model) {
        return "deploy";
    }

    @GetMapping("/contact")
    public String contact(Model model) {
        model.addAttribute("client", new Client());
        return "contact";
    }

    @PostMapping("/client")
    public String createClient(@ModelAttribute Client client, Model model) {
        clientService.createClient(client);
        return "success";
    }

    @GetMapping("/error")
    public String errorMapping(Model model){
        return "error";
    }
}
