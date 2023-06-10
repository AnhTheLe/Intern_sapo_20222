package com.example.integratedchatgpt_backend.exception;

public class UnknowException extends RuntimeException{
    public UnknowException(String message) {
        super(message);
    }
}
