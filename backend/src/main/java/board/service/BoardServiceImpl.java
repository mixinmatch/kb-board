package board.service;

import board.model.Exception.BoardNotFoundException;
import board.repository.BoardRepository;
import board.model.Board;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import javax.swing.text.html.Option;
import java.util.ArrayList;
import java.util.List;
import java.util.Optional;

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

    @Override
    public Board findById(long id) throws BoardNotFoundException {
        Optional<Board> f = repository.findById(id);
        if(f.isPresent())
            return f.get();

        throw new BoardNotFoundException(String.valueOf(id));
    }
}
