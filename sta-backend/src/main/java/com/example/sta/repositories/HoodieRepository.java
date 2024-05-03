package com.example.sta.repositories;

import com.example.sta.models.Hoodie;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface HoodieRepository extends JpaRepository<Hoodie,Long> {
}
