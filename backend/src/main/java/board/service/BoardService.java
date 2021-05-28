package board.service;

import board.model.Board;
import board.model.Exception.BoardNotFoundException;

import java.util.List;

public interface BoardService {
    List<Board> findAll();
    Board save(Board board);
    Board findById(long id) throws BoardNotFoundException;
}
