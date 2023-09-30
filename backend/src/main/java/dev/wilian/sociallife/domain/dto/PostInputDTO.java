package dev.wilian.sociallife.domain.dto;

import java.util.List;

public record PostInputDTO (String texto, List<String> imagePosts, List<String> linkPosts) {
}
