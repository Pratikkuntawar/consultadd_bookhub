package com.consultadd.bookhub.ServiceTest;

import com.consultadd.bookhub.dto.BookCreateRequestDto;
import com.consultadd.bookhub.enums.BookType;
import com.consultadd.bookhub.enums.Departments;
import com.consultadd.bookhub.model.Book;
import com.consultadd.bookhub.model.Employee;
import com.consultadd.bookhub.repository.BookRepository;
import com.consultadd.bookhub.service.BookService;
import org.junit.jupiter.api.*;
import org.mockito.*;

import java.util.*;

import static org.junit.jupiter.api.Assertions.*;
import static org.mockito.Mockito.*;

class BookServiceTest {

    @InjectMocks
    private BookService bookService;

    @Mock
    private BookRepository bookRepository;

    private AutoCloseable closeable;

    private Employee seller;
    private Book book;

    @BeforeEach
    void setUp() {
        closeable = MockitoAnnotations.openMocks(this);
        seller = new Employee();
        seller.setId(1L);
        seller.setFullName("John Doe");

        book = Book.builder()
                .id(1L)
                .title("Test Book")
                .author("Author A")
                .description("A test book")
                .bookType(BookType.DIGITAL)
                .department(Departments.CODING)
                .pdfUrl("http://example.com/book.pdf")
                .price(100.0)
                .imageUrl("http://image.com/cover.jpg")
                .seller(seller)
                .isApproved(false)
                .build();
    }

    @AfterEach
    void tearDown() throws Exception {
        closeable.close();
    }

    @Test
    void testAddBook() {
        BookCreateRequestDto request = BookCreateRequestDto.builder()
                .title("Test Book")
                .author("Author A")
                .description("A test book")
                .bookType(BookType.DIGITAL)
                .department(Departments.CODING)
                .pdfUrl("http://example.com/book.pdf")
                .price(100.0)
                .imageUrl("http://image.com/cover.jpg")
                .build();

        when(bookRepository.save(any(Book.class))).thenReturn(book);

        var response = bookService.addBook(request, seller);

        assertNotNull(response);
        assertEquals("Test Book", response.getTitle());
        verify(bookRepository).save(any(Book.class));
    }

    @Test
    void testGetAllBooks() {
        when(bookRepository.findAll()).thenReturn(List.of(book));
        var result = bookService.getAllBooks();
        assertEquals(1, result.size());
        assertEquals("Test Book", result.get(0).getTitle());
    }

    @Test
    void testGetBookById() {
        when(bookRepository.findById(1L)).thenReturn(Optional.of(book));
        var result = bookService.getBookById(1L);
        assertNotNull(result);
        assertEquals("Test Book", result.getTitle());
    }

    @Test
    void testGetBooksByDepartment() {
        when(bookRepository.findByDepartment(Departments.CODING)).thenReturn(List.of(book));
        var result = bookService.getBooksByDepartment(Departments.CODING);
        assertEquals(1, result.size());
    }

    @Test
    void testGetBooksByBookType() {
        when(bookRepository.findByBookType(BookType.DIGITAL)).thenReturn(List.of(book));
        var result = bookService.getBooksByBookType(BookType.DIGITAL);
        assertEquals(1, result.size());
    }

    @Test
    void testSearchBooksByTitle() {
        when(bookRepository.findByTitleContainingIgnoreCase("test")).thenReturn(List.of(book));
        var result = bookService.searchBooksByTitle("test");
        assertEquals(1, result.size());
    }

    @Test
    void testUpdateBook() {
        BookCreateRequestDto updateDto = BookCreateRequestDto.builder()
                .title("Updated Title")
                .author("New Author")
                .description("Updated")
                .bookType(BookType.DIGITAL)
                .department(Departments.CODING)
                .pdfUrl("newUrl")
                .price(200.0)
                .imageUrl("newImage")
                .build();

        when(bookRepository.findById(1L)).thenReturn(Optional.of(book));
        when(bookRepository.save(any(Book.class))).thenReturn(book);

        var result = bookService.updateBook(1L, updateDto, seller);

        assertEquals("Updated Title", result.getTitle());
        verify(bookRepository).save(any(Book.class));
    }

    @Test
    void testDeleteBook() {
        Employee seller = getMockSeller();
        Book book = getMockBook();
        book.setSeller(seller);

        when(bookRepository.findById(1L)).thenReturn(Optional.of(book));

        bookService.deleteBook(1L, seller);

        // Verify both interactions
        verify(bookRepository).findById(1L);
        verify(bookRepository).delete(book);
    }

    private Employee getMockSeller() {
        return Employee.builder()
                .id(1L)
                .fullName("John Doe")
                .isActive(true)
                .build();
    }

    private Book getMockBook() {
        return Book.builder()
                .id(1L)
                .title("Test Book")
                .author("Author A")
                .description("A test book")
                .bookType(BookType.DIGITAL)
                .department(Departments.CODING)
                .pdfUrl("http://example.com/book.pdf")
                .imageUrl("http://image.com/cover.jpg")
                .price(100.0)
                .isApproved(false)
                .build();
    }


    @Test
    void testDeleteBookUnauthorized() {
        Employee another = new Employee();
        another.setId(2L);

        when(bookRepository.findById(1L)).thenReturn(Optional.of(book));

        Exception exception = assertThrows(RuntimeException.class, () -> {
            bookService.deleteBook(1L, another);
        });

        assertEquals("Unauthorized: Not your book", exception.getMessage());

    }

    @Test
    void testBookNotFound() {
        when(bookRepository.findById(100L)).thenReturn(Optional.empty());

        Exception exception = assertThrows(RuntimeException.class, () -> {
            bookService.getBookById(100L);
        });

        assertEquals("Book not found", exception.getMessage());
    }
}
