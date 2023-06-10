package com.example.integratedchatgpt_backend.exception;

public class WrongUsernamePasswordException extends RuntimeException{
    public WrongUsernamePasswordException(String message) {
        super(message);
    }
}
