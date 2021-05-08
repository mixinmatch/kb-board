package board.service;

import board.model.Board;

import java.util.List;

public interface BoardService {
    List<Board> findAll();
    Board save(Board board);
}
