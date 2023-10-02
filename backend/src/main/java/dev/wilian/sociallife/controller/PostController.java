package dev.wilian.sociallife.controller;

import dev.wilian.sociallife.domain.dto.PostInputDTO;
import dev.wilian.sociallife.domain.dto.PostOutputDTO;
import dev.wilian.sociallife.domain.entity.*;
import dev.wilian.sociallife.repository.PostRepository;
import org.apache.tomcat.util.codec.binary.Base64;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.ArrayList;
import java.util.List;
import java.util.stream.Collectors;

@RestController
@RequestMapping("/post")
public class PostController {

    private final PostRepository postRepository;

    public PostController(PostRepository postRepository) {
        this.postRepository = postRepository;
    }

    @GetMapping
    public List<PostOutputDTO> findAll() {
        List<Post> posts = postRepository.findAll();

        return posts.stream()
                .map(post -> {
                    List<String> imageBase64List = post.getImagePosts().stream()
                            .map(imageBytes -> Base64.encodeBase64String(imageBytes.getImageBytes()))
                            .toList();

                    List<String> links = post.getLinkPosts().stream()
                            .map(LinkPost::getUrl)
                            .toList();

                    List<String> comments = post.getCommentPosts().stream()
                            .map(CommentPost::getComment)
                            .toList();

                    return new PostOutputDTO(
                            post.getUser().getId(),
                            post.getTexto(),
                            imageBase64List,
                            links,
                            comments
                    );
                })
                .toList();
    }

    @PostMapping("{idUser}")
    public ResponseEntity<Void> create(
            @PathVariable Long idUser,
            @RequestBody PostInputDTO postInputDTO
    ) {
        Post post = Post.builder().texto(postInputDTO.texto()).build();

        post.setUser(User.builder().id(idUser).build());
        for (String imagePostUrl : postInputDTO.imagePosts()) {
            List<ImagePost> imagePostList = new ArrayList<>();
            imagePostList.add(ImagePost.builder()
                    .imageBytes(Base64.decodeBase64(imagePostUrl))
                    .post(post)
                    .build()
            );
            post.setImagePosts(imagePostList);
        }

        for (String linkPostUrl : postInputDTO.linkPosts()) {
            List<LinkPost> linkPosts = new ArrayList<>();
            linkPosts.add(LinkPost.builder()
                    .url(linkPostUrl)
                    .post(post)
                    .build()
            );
            post.setLinkPosts(linkPosts);
        }

        postRepository.save(post);

        return null;
    }
}
