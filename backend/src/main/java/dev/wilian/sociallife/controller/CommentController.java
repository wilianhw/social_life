package dev.wilian.sociallife.controller;

import dev.wilian.sociallife.domain.dto.CommentInputDTO;
import dev.wilian.sociallife.domain.entity.CommentPost;
import dev.wilian.sociallife.domain.entity.Post;
import dev.wilian.sociallife.domain.entity.User;
import dev.wilian.sociallife.repository.CommentRepository;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/comment")
public class CommentController {

    private final CommentRepository commentRepository;

    public CommentController(CommentRepository commentRepository) {
        this.commentRepository = commentRepository;
    }


    @PostMapping
    public ResponseEntity<Void> create(
            @RequestBody CommentInputDTO commentInputDTO) {
        Post post = Post.builder().id(commentInputDTO.idPost()).build();
        CommentPost commentPost = CommentPost.builder()
                .comment(commentInputDTO.comment())
                .post(post)
                .userId(commentInputDTO.idUsuario())
                .build();
        post.setCommentPosts(List.of(commentPost));

        commentRepository.save(commentPost);

        return null;
    }
}
