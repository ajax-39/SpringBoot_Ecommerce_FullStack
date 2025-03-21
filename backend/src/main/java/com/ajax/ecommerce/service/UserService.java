package com.ajax.ecommerce.service;


import com.ajax.ecommerce.exception.UserException;
import com.ajax.ecommerce.model.User;

public interface UserService {
    public User findUserById(Long userId) throws UserException;

    public User findUserProfileByJwt(String jwt) throws UserException;


}
