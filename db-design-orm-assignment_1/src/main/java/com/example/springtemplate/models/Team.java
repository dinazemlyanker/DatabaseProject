package com.example.springtemplate.models;

import java.util.List;
import javax.persistence.*;

@Entity
@Table(name="teams")
public class Team {
  @Id
  @GeneratedValue(strategy = GenerationType.IDENTITY)
  private Integer id;
  private String team_name;
  @OneToMany(mappedBy = "team")
  private List<Registration> registrations;
  @OneToMany(mappedBy = "team")
  private List<Player> players;


  public Integer getId() { return id; }
  public void setId(Integer id) { this.id = id; }
  public String getTeamName() { return team_name; }
  public void setTeamName(String team_name) { this.team_name = team_name; }

  public List<Registration> getRegistrations() {
    return registrations;
  }

  public void setRegistrations(List<Registration> registrations) {
    this.registrations = registrations;
  }

  public List<Player> getPlayers() {
    return players;
  }

  public void setPlayers(List<Player> players) {
    this.players = players;
  }

  public Team(String team_name) {
    this.team_name = team_name;
  }

  public Team() {}
}