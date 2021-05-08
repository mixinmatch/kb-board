package board.api;

import board.model.Board;
import board.model.Exception.BoardNotFoundException;
import board.model.Exception.ElementMissingNameException;
import board.service.BoardServiceImpl;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
public class BoardController {
    @Autowired
    private BoardServiceImpl boardServiceRepository;

    @PostMapping("/board/new")
    public Board createBoard() {
        Board board = new Board();
        boardServiceRepository.save(board);
        return board;
    }
    @PutMapping("/board/{id}")
    public Board updateBoard(Board board) throws ElementMissingNameException {
        if(board.getName() == null)
            throw new ElementMissingNameException();

        boardServiceRepository.save(board);

        return board;
    }
    @GetMapping("/board/{id}")
    public Board getBoard(@PathVariable long id) throws BoardNotFoundException {
        List<Board> boards = boardServiceRepository.findAll();
        for(Board b : boards) {
            if(b.getName() == String.valueOf(id)) {
                return b;
            }
        }
        throw new BoardNotFoundException(String.valueOf(id));
    }
}
