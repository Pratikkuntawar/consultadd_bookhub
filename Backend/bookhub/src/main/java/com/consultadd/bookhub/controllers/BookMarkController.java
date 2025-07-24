package com.consultadd.bookhub.controllers;

import com.consultadd.bookhub.model.Bookmark;
import com.consultadd.bookhub.service.BookMarkService;
import lombok.RequiredArgsConstructor;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/consultadd/bookmarks")
@RequiredArgsConstructor
public class BookMarkController {

    private final BookMarkService bookmarkService;

    @PostMapping("/add")
    public ResponseEntity<Bookmark> saveBookmark(@RequestBody Bookmark bookmark) {
        return ResponseEntity.ok(bookmarkService.saveBookmark(bookmark));
    }

    @GetMapping("/employee/{employeeId}")
    public ResponseEntity<List<Bookmark>> getBookmarks(@PathVariable Long employeeId) {
        return ResponseEntity.ok(bookmarkService.getBookmarksByEmployeeId(employeeId));
    }

    @DeleteMapping("/delete/{bookmarkId}")
    public ResponseEntity<Void> deleteBookmark(@PathVariable Long bookmarkId) {
        bookmarkService.deleteBookmark(bookmarkId);
        return ResponseEntity.noContent().build();
    }
}
