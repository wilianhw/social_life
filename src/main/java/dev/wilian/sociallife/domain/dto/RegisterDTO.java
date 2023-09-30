package dev.wilian.sociallife.domain.dto;

import dev.wilian.sociallife.domain.enums.UserRole;

public record RegisterDTO(String username, String password, UserRole role) {
}
