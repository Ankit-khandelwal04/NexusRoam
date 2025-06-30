package com.example.smart_city.service;

import com.example.smart_city.model.Hotel;
import com.example.smart_city.repository.HotelRepository;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class HotelService {
    private final HotelRepository repo;

    public HotelService(HotelRepository repo) {
        this.repo = repo;
    }

    public List<Hotel> getAll() {
        return repo.findAll();
    }

    public Hotel save(Hotel hotel) {
        return repo.save(hotel);
    }

    public void delete(Long id) {
        repo.deleteById(id);
    }
}
