package board.service;

import board.repository.BoardRepository;
import board.model.Board;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import java.util.ArrayList;
import java.util.List;

@Service
public class BoardServiceImpl implements BoardService{

    private BoardRepository repository;

    @Autowired
    public BoardServiceImpl(BoardRepository repository) {
        this.repository = repository;
    }

    @Override
    public List<Board> findAll() {
        List<Board> board = new ArrayList<>();
        for(Board b : repository.findAll()) {
            board.add(b);
        }
        return board;
    }

    @Override
    @Transactional
    public Board save(Board board) {
        return repository.save(board);
    }
}
