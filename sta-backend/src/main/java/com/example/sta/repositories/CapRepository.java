package com.example.sta.repositories;

import com.example.sta.models.Cap;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface CapRepository extends JpaRepository<Cap, Long> {
}
