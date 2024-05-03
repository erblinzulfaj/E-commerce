package com.example.sta.repositories;

import com.example.sta.models.Tshirt;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface ShirtRepository extends JpaRepository<Tshirt, Long> {
}
