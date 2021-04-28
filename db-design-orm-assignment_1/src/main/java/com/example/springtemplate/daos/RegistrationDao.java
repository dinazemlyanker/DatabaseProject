package com.example.springtemplate.daos;

import com.example.springtemplate.models.Registration;
import com.example.springtemplate.repositories.RegistrationRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;
import java.util.List;

@RestController
@CrossOrigin(origins = "*")
public class RegistrationDao {

  @Autowired
  RegistrationRepository registrationRepository;

  @PostMapping("/api/registrations")
  public Registration createRegistration(@RequestBody Registration registration) {
    return registrationRepository.save(registration);
  }


  @GetMapping("/api/registrations")
  public List<Registration> findAllRegistrations() {
    return (List<Registration>) registrationRepository.findAll();
  }

  @GetMapping("/api/registrations/{registrationId}")
  public Registration findRegistrationById(
      @PathVariable("registrationId") Integer id) {
    return registrationRepository.findById(id).get();
  }

  @PutMapping("/api/registrations/{registrationId}")
  public Registration updateRegistration(
      @PathVariable("registrationId") Integer id,
      @RequestBody() Registration newRegistration) {
    Registration registration = this.findRegistrationById(id);
    registration.setTournament(newRegistration.getTournament());
    registration.setTeam(newRegistration.getTeam());
    registration.setLevel(newRegistration.getLevel());
    registration.setPaid(newRegistration.getPaid());
    return registrationRepository.save(registration);
  }

  @DeleteMapping("/api/registrations/{registrationId}")
  public void deleteRegistration(
      @PathVariable("registrationId") Integer id) {
    registrationRepository.deleteById(id);
  }
}