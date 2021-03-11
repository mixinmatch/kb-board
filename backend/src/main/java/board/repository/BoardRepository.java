package board.repository;

import board.model.Board;

import java.util.List;

public interface BoardRepository {
        public List<Board> findAll();
        public void removeBoard(Board b);
        public Board createBoard();
}
