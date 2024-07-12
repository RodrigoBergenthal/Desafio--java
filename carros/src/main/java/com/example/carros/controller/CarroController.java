package com.example.carros.controller;

import com.example.carros.model.Carro;
import com.example.carros.model.Cor;
import com.example.carros.model.Marca;
import com.example.carros.repository.CarroRepository;
import com.example.carros.repository.CorRepository;
import com.example.carros.repository.MarcaRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.Optional;

@CrossOrigin
@RestController
@RequestMapping("/api")
public class CarroController {

    @Autowired
    private MarcaRepository marcaRepository;

    @Autowired
    private CorRepository corRepository;

    @Autowired
    private CarroRepository carroRepository;

    // Endpoint para criar uma marca
    @PostMapping("/marcas")
    public ResponseEntity<Marca> createMarca(@RequestBody Marca marca) {
        Marca novaMarca = marcaRepository.save(marca);
        return ResponseEntity.status(HttpStatus.CREATED).body(novaMarca);
    }

    // Endpoint para criar uma cor
    @PostMapping("/cores")
    public ResponseEntity<Cor> createCor(@RequestBody Cor cor) {
        Cor novaCor = corRepository.save(cor);
        return ResponseEntity.status(HttpStatus.CREATED).body(novaCor);
    }

    // Endpoint para criar um carro
    @PostMapping("/carros")
    public ResponseEntity<Carro> createCarro(@RequestBody Carro carro) {
        if (carro.getMarca() == null || carro.getCor() == null || carro.getModelo() == null) {
            return ResponseEntity.badRequest().build();
        }

        // Verifica se a marca existe
        Optional<Marca> marcaOptional = marcaRepository.findById(carro.getMarca().getId());
        if (marcaOptional.isEmpty()) {
            return ResponseEntity.notFound().build();
        }

        // Verifica se a cor existe
        Optional<Cor> corOptional = corRepository.findById(carro.getCor().getId());
        if (corOptional.isEmpty()) {
            return ResponseEntity.notFound().build();
        }

        // Associa a marca e a cor ao carro
        carro.setMarca(marcaOptional.get());
        carro.setCor(corOptional.get());

        // Salva o carro
        Carro novoCarro = carroRepository.save(carro);
        return ResponseEntity.status(HttpStatus.CREATED).body(novoCarro);
    }

    // Endpoint para listar todas as marcas
    @GetMapping("/marcas")
    public ResponseEntity<List<Marca>> listarMarcas() {
        List<Marca> marcas = marcaRepository.findAll();
        return ResponseEntity.ok(marcas);
    }

    // Endpoint para listar todas as cores
    @GetMapping("/cores")
    public ResponseEntity<List<Cor>> listarCores() {
        List<Cor> cores = corRepository.findAll();
        return ResponseEntity.ok(cores);
    }

    // Endpoint para listar todos os carros
    @GetMapping("/carros")
    public ResponseEntity<List<Carro>> listarCarros() {
        List<Carro> carros = carroRepository.findAll();
        return ResponseEntity.ok(carros);
    }
}
