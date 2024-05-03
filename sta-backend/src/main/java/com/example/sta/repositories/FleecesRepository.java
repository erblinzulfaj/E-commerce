package com.example.sta.repositories;

import com.example.sta.models.Fleeces;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface FleecesRepository extends JpaRepository<Fleeces, Long> {
}
