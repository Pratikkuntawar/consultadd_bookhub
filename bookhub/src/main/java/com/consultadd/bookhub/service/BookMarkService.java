package com.consultadd.bookhub.service;

import com.consultadd.bookhub.model.Bookmark;
import com.consultadd.bookhub.repository.BookMarkRepository;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
@RequiredArgsConstructor
public class BookMarkService {

    private final BookMarkRepository bookmarkRepository;

    public Bookmark saveBookmark(Bookmark bookmark) {
        return bookmarkRepository.save(bookmark);
    }

    public List<Bookmark> getBookmarksByEmployeeId(Long employeeId) {
        return bookmarkRepository.findByEmployeeId(employeeId);
    }

    public void deleteBookmark(Long bookmarkId) {
        bookmarkRepository.deleteById(bookmarkId);
    }
}
