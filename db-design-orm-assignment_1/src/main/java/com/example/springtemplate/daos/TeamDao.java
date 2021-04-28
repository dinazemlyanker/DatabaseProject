package com.example.springtemplate.daos;


import com.example.springtemplate.models.Team;
import com.example.springtemplate.repositories.TeamRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;
import java.util.List;

@RestController
@CrossOrigin(origins = "*")
public class TeamDao {

  @Autowired
  TeamRepository teamRepository;

  @PostMapping("/api/teams")
  public Team createTeam(@RequestBody Team team) {
    return teamRepository.save(team);
  }


  @GetMapping("/api/teams")
  public List<Team> findAllTeams() {
    return (List<Team>) teamRepository.findAll();
  }

  @GetMapping("/api/teams/{teamId}")
  public Team findTeamById(
      @PathVariable("teamId") Integer id) {
    return teamRepository.findById(id).get();
  }

  @PutMapping("/api/teams/{teamId}")
  public Team updateTeam(
      @PathVariable("teamId") Integer id,
      @RequestBody() Team newTeam) {
    Team team = this.findTeamById(id);
    team.setTeamName(newTeam.getTeamName());
    team.setRegistrations(newTeam.getRegistrations());
    team.setPlayers(newTeam.getPlayers());
    return teamRepository.save(team);
  }

  @DeleteMapping("/api/teams/{teamId}")
  public void deleteTeam(
      @PathVariable("teamId") Integer id) {
    teamRepository.deleteById(id);
  }
}