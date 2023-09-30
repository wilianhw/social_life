package dev.wilian.sociallife.controller;

import dev.wilian.sociallife.domain.dto.LoginDTO;
import dev.wilian.sociallife.domain.dto.RegisterDTO;
import dev.wilian.sociallife.domain.dto.ResponseLoginDTO;
import dev.wilian.sociallife.domain.entity.User;
import dev.wilian.sociallife.repository.UserRepository;
import dev.wilian.sociallife.service.TokenService;
import org.springframework.http.ResponseEntity;
import org.springframework.security.authentication.AuthenticationManager;
import org.springframework.security.authentication.UsernamePasswordAuthenticationToken;
import org.springframework.security.core.Authentication;
import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping("/auth")
public class AuthenticationController {
    private final AuthenticationManager manager;
    private final UserRepository userRepository;
    private final BCryptPasswordEncoder encoder;
    private final TokenService tokenService;

    public AuthenticationController(AuthenticationManager manager, UserRepository userRepository, BCryptPasswordEncoder encoder, TokenService tokenService) {
        this.manager = manager;
        this.userRepository = userRepository;
        this.encoder = encoder;
        this.tokenService = tokenService;
    }

    @PostMapping("/login")
    public ResponseEntity<ResponseLoginDTO> login(@RequestBody LoginDTO login) {
        UsernamePasswordAuthenticationToken userNamePassword = new UsernamePasswordAuthenticationToken(login.username(), login.password());
        Authentication auth = manager.authenticate(userNamePassword);

        String token = tokenService.generateToken((User) auth.getPrincipal());

        return ResponseEntity.ok(new ResponseLoginDTO(token));
    }

    @PostMapping("/register")
    public ResponseEntity<Void> register(@RequestBody RegisterDTO registerDTO) {
        if (userRepository.findByUsername(registerDTO.username()) != null)
            return ResponseEntity.badRequest().build();

        String encryptedPassword = encoder.encode(registerDTO.password());
        User newUser = new User(registerDTO.username(), encryptedPassword, registerDTO.role());

        userRepository.save(newUser);

        return ResponseEntity.ok().build();
    }
}
