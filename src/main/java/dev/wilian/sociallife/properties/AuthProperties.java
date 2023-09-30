package dev.wilian.sociallife.properties;

import lombok.Setter;
import org.springframework.boot.context.properties.ConfigurationProperties;
import org.springframework.stereotype.Component;

@Component
@Setter
@ConfigurationProperties("api.security.token")
public class AuthProperties {
    private String secret;

    public String getSecret() {
        return secret;
    }
}
