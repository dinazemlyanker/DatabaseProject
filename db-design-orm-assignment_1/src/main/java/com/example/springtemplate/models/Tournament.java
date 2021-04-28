package com.example.springtemplate.models;

import java.sql.Date;
import java.util.List;
import javax.persistence.*;

@Entity
@Table(name="tournaments")
public class Tournament {
  @Id
  @GeneratedValue(strategy = GenerationType.IDENTITY)
  private Integer id;
  private Date date;
  private String location;
  @OneToMany(mappedBy = "tournament")
  private List<Registration> registrations;

  public Integer getId() { return id; }
  public void setId(Integer id) { this.id = id; }
  public Date getDate() { return date; }
  public void setDate(Date date) { this.date = date; }
  public String getLocation() { return location; }
  public void setLocation(String location) { this.location = location; }

  public List<Registration> getRegistrations() {
    return registrations;
  }

  public void setRegistrations(List<Registration> registrations) {
    this.registrations = registrations;
  }

  public Tournament(Date date, String location) {
    this.date = date;
    this.location = location;
  }

  public Tournament() {}
}