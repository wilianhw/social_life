package dev.wilian.sociallife.controller;

import dev.wilian.sociallife.domain.dto.PostInputDTO;
import dev.wilian.sociallife.domain.entity.ImagePost;
import dev.wilian.sociallife.domain.entity.LinkPost;
import dev.wilian.sociallife.domain.entity.Post;
import dev.wilian.sociallife.domain.entity.User;
import dev.wilian.sociallife.repository.PostRepository;
import dev.wilian.sociallife.repository.UserRepository;
import org.apache.tomcat.util.codec.binary.Base64;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.ArrayList;
import java.util.List;

@RestController
@RequestMapping("/post")
public class PostController {

    private final PostRepository postRepository;

    public PostController(PostRepository postRepository) {
        this.postRepository = postRepository;
    }

    @GetMapping
    public List<Post> findAll() {
        return postRepository.findAll();
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
