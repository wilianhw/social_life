package dev.wilian.sociallife.repository;

import dev.wilian.sociallife.domain.entity.CommentPost;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface CommentRepository extends JpaRepository<CommentPost, Long> {
}
