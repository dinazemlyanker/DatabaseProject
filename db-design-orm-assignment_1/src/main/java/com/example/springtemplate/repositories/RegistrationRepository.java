package com.example.springtemplate.repositories;

import com.example.springtemplate.models.Registration;
import org.springframework.data.repository.CrudRepository;

public interface RegistrationRepository
    extends CrudRepository<Registration, Integer> {
}
