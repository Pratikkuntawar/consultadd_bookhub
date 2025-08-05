package com.consultadd.bookhub.SecurityTest;

import com.consultadd.bookhub.enums.Role;
import com.consultadd.bookhub.security.JwtTokenProvider;
import io.jsonwebtoken.ExpiredJwtException;
import org.junit.jupiter.api.BeforeEach;
import org.junit.jupiter.api.Test;
import org.springframework.test.util.ReflectionTestUtils;

import static org.junit.jupiter.api.Assertions.*;

class JwtTokenProviderTest {

    private JwtTokenProvider jwtTokenProvider;

    @BeforeEach
    void setUp() {
        jwtTokenProvider = new JwtTokenProvider();
        ReflectionTestUtils.setField(jwtTokenProvider, "secret", "mytestsecretkeymytestsecretkey1234"); // >=32 chars
        ReflectionTestUtils.setField(jwtTokenProvider, "expiration", 1000 * 60 * 60); // 1 hour
        jwtTokenProvider.init();
    }

    @Test
    void testGenerateAndValidateToken() {
        String email = "test@example.com";
        Role role = Role.SELLER;

        String token = jwtTokenProvider.generateToken(email, role);
        assertNotNull(token);

        assertTrue(jwtTokenProvider.validateToken(token, email));
        assertEquals(email, jwtTokenProvider.getEmailFromToken(token));
        assertEquals(role, jwtTokenProvider.getRoleFromToken(token));
    }

    @Test
    void testValidateTokenWithWrongEmail() {
        String email = "test@example.com";
        String wrongEmail = "wrong@example.com";
        String token = jwtTokenProvider.generateToken(email, Role.ADMIN);

        assertFalse(jwtTokenProvider.validateToken(token, wrongEmail));
    }

    @Test
    void testTokenExpiration() throws InterruptedException {
        ReflectionTestUtils.setField(jwtTokenProvider, "expiration", 1L); // 1ms for quick expiry
        jwtTokenProvider.init();

        String token = jwtTokenProvider.generateToken("test@example.com", Role.BUYER);
        Thread.sleep(10);

        assertThrows(ExpiredJwtException.class, () -> jwtTokenProvider.getEmailFromToken(token));
    }

    @Test
    void testGetCurrentUserEmail_NullAuth() {
        assertNull(jwtTokenProvider.getCurrentUserEmail());
    }
}
