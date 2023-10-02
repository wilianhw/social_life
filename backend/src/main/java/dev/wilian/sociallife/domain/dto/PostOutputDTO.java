package dev.wilian.sociallife.domain.dto;

import java.util.List;

public record PostOutputDTO(Long id, String postTexto, List<String> imagesBase64, List<String> links, List<String> comments) {
}
