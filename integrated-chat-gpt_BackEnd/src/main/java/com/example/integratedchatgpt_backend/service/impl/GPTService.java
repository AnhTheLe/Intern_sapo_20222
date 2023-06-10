package com.example.integratedchatgpt_backend.service.impl;

import com.theokanning.openai.service.OpenAiService;
import org.springframework.beans.factory.annotation.Value;

import java.time.Duration;

public class GPTService {
    @Value("${application.openai.api-key}")
    private String apiKey;

    @Value("${application.openai.api-timeout}")
    private Long apiTimeout;

    OpenAiService openAiService = new OpenAiService(apiKey, Duration.ofSeconds(apiTimeout));
}
