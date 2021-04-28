package com.example.springtemplate.repositories;



import com.example.springtemplate.models.Team;
import com.example.springtemplate.models.Tournament;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.CrudRepository;
import org.springframework.data.repository.query.Param;

import java.util.List;

public interface TournamentRepository
    extends CrudRepository<Tournament, Integer> {
}
