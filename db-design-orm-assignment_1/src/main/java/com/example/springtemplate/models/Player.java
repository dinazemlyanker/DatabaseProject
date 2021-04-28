package com.example.springtemplate.models;

import com.fasterxml.jackson.annotation.JsonIgnore;
import java.sql.Date;
import javax.persistence.*;

@Entity
@Table(name="players")
public class Player {
  @Id
  @GeneratedValue(strategy = GenerationType.IDENTITY)
  private Integer id;
  private String firstName;
  private String lastName;
  private String username;
  private String password;
  private String email;
  private Date dateOfBirth;
  private int points;
  @ManyToOne
  @JsonIgnore
  private Team team;

  public Player(String firstName, String lastName, String username, String password, String email,
      Date dateOfBirth, int points) {
    this.username = username;
    this.password = password;
    this.firstName = firstName;
    this.lastName = lastName;
    this.email = email;
    this.dateOfBirth = dateOfBirth;
    this.points = points;
  }



  public Integer getPlayerId() { return id; }
  public void setPlayerId(Integer id) { this.id = id; }
  public String getFirstName() { return firstName; }
  public void setFirstName(String firstName) { this.firstName = firstName; }
  public String getLastName() { return lastName; }
  public void setLastName(String lastName) { this.lastName = lastName; }
  public String getUsername() { return username; }
  public void setUsername(String username) { this.username = username; }
  public String getPassword() { return password; }
  public void setPassword(String password) { this.password = password; }

  public String getEmail() {
    return this.email;
  }

  public void setEmail(String email) {
    this.email = email;
  }

  public Date getDateOfBirth() {
    return this.dateOfBirth;
  }

  public void setDateOfBirth(Date dob) {
    this.dateOfBirth = dob;
  }

  public int getPoints() {
    return this.points;
  }

  public void setPoints(int points) {
    this.points = points;
  }

  public Team getTeam() {
    return this.team;
  }

  public void setTeam(Team team) {
    this.team = team;
  }


  public Player(String username, String password, String firstName, String lastName, String email,
      Date dateOfBirth, int points, Team team) {
    this.username = username;
    this.password = password;
    this.firstName = firstName;
    this.lastName = lastName;
    this.email = email;
    this.dateOfBirth = dateOfBirth;
    this.points = points;
    this.team = team;
  }

  public Player() {}
}