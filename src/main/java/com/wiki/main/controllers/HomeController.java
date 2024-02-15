package com.wiki.main.controllers;

import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.GetMapping;

@Controller
public class HomeController {

    @GetMapping("/")
    public String home(Model model) {
        model.addAttribute("message", "¡Hola desde el controlador!");
        return "home"; // Renderiza la plantilla 'home.html' usando Thymeleaf
    }
}