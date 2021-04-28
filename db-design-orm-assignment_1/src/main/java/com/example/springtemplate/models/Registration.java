package com.example.springtemplate.models;

import com.fasterxml.jackson.annotation.JsonIgnore;
import javax.persistence.*;

@Entity
@Table(name="registrations")
public class Registration {
  @Id
  @GeneratedValue(strategy = GenerationType.IDENTITY)
  private Integer id;
  @ManyToOne
  @JsonIgnore
  private Tournament tournament;
  @ManyToOne
  @JsonIgnore
  private Team team;
  @Enumerated(EnumType.STRING)
  private Level level;
  private Boolean paid;


  public Integer getId() { return id; }
  public void setId(Integer id) { this.id = id; }
  public Tournament getTournament() { return tournament; }
  public void setTournament(Tournament tournament) { this.tournament = tournament; }
  public Team getTeam() { return team; }
  public void setTeam(Team team) { this.team = team; }
  public Level getLevel() { return level; }
  public void setLevel(Level level) { this.level = level; }
  public Boolean getPaid() { return paid; }

  public void setPaid(Boolean paid) {
    this.paid = paid;
  }

  public Registration(Tournament tournament, Team team, Level level, Boolean paid) {
    this.tournament = tournament;
    this.team = team;
    this.level = level;
    this.paid = paid;
  }

  public Registration() {}
}