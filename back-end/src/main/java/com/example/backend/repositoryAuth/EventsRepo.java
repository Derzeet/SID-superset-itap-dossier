package com.example.backend.repositoryAuth;

import com.example.backend.modelsAuth.events;
import org.springframework.data.jpa.repository.JpaRepository;

public interface EventsRepo  extends JpaRepository<events,Long> {
}
