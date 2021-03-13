package board.service;

import board.model.Board;
import board.repository.BoardRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service("boardServiceRepository")
public class BoardServiceRepository {

    private BoardRepository repository;

    @Autowired
    public BoardServiceRepository(BoardRepository repository) {
        this.repository = repository;
    }

    public List<Board> findAll() {
        return repository.findAll();
    }

    public Board createBoard() {
        return repository.createBoard();
    }

    public void removeBoard(Board board) {
        repository.removeBoard(board);
    }
}
