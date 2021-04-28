package com.example.springtemplate.daos;

import com.example.springtemplate.models.Player;
import com.example.springtemplate.models.Registration;
import com.example.springtemplate.repositories.PlayerRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;
import java.util.List;

@RestController
@CrossOrigin(origins = "*")
public class PlayerDao {
  @Autowired
  PlayerRepository playerRepository;

  @PostMapping("/api/players")
  public Player createPlayer(@RequestBody Player player) {
    return playerRepository.save(player);
  }


  @GetMapping("/api/players")
  public List<Player> findAllPlayers() {
    System.out.println("i did a thing");
    System.out.println((List<Player>) playerRepository.findAll());
    List<Player> list = (List<Player>) playerRepository.findAll();
    System.out.println(list.get(0).getFirstName());
    System.out.println("I am no longer doing things");
    return (List<Player>) playerRepository.findAll();
  }


  @GetMapping("/api/players/{playerId}")
  public Player findPlayerById(
      @PathVariable("playerId") Integer id) {
    return playerRepository.findById(id).get();
  }

  @PutMapping("/api/players/{playerId}")
  public Player updatePlayer(
      @PathVariable("playerId") Integer id,
      @RequestBody Player playerUpdates) {
    Player player = playerRepository.findById(id).get();
    player.setFirstName(playerUpdates.getFirstName());
    player.setLastName(playerUpdates.getLastName());
    player.setUsername(playerUpdates.getUsername());
    player.setPassword(playerUpdates.getPassword());
    player.setEmail(playerUpdates.getEmail());
    player.setDateOfBirth(playerUpdates.getDateOfBirth());
    player.setPoints(playerUpdates.getPoints());
    player.setTeam(playerUpdates.getTeam());
    return playerRepository.save(player);
  }

  @DeleteMapping("/api/players/{playerId}")
  public void deleteUser(
      @PathVariable("playerId") Integer id) {
    playerRepository.deleteById(id);
  }
}