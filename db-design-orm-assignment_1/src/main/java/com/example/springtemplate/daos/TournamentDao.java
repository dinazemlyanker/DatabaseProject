package com.example.springtemplate.daos;


import com.example.springtemplate.models.Tournament;
import com.example.springtemplate.repositories.TournamentRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;
import java.util.List;

@RestController
@CrossOrigin(origins = "*")
// @CrossOrigin(origins = "*", allowCredentials = "true", allowedHeaders = "*")
public class TournamentDao {

  @Autowired
  TournamentRepository tournamentRepository;

  @PostMapping("/api/tournaments")
  public Tournament createTournament(@RequestBody Tournament tournament) {
    System.out.println(tournament.getDate());
    System.out.println(tournament.getLocation());
    return tournamentRepository.save(tournament);
  }


  @GetMapping("/api/tournaments")
  public List<Tournament> findAllTournaments() {
    return (List<Tournament>) tournamentRepository.findAll();
  }

  @GetMapping("/api/teams/{tournamentId}")
  public Tournament findTournamentById(
      @PathVariable("tournamentId") Integer id) {
    return tournamentRepository.findById(id).get();
  }

  @PutMapping("/api/tournaments/{tournamentId}")
  public Tournament updateTournament(
      @PathVariable("tournamentId") Integer id,
      @RequestBody() Tournament newTournament) {
    System.out.println(id);
    System.out.println(newTournament.getDate());
    System.out.println(newTournament.getLocation());
    Tournament tournament = this.findTournamentById(id);
    tournament.setDate(newTournament.getDate());
    tournament.setLocation(newTournament.getLocation());
    return tournamentRepository.save(tournament);
  }

  @DeleteMapping("/api/tournaments/{tournamentId}")
  public void deleteTournament(
      @PathVariable("tournamentId") Integer id) {
    tournamentRepository.deleteById(id);
  }
}