package board.api;

import board.model.Board;
import board.model.Bucket;
import board.model.Exception.BoardNotFoundException;
import board.model.Exception.ElementMissingNameException;
import board.repository.BucketRepository;
import board.service.BoardServiceImpl;
import board.service.BucketServiceImpl;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.MediaType;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
public class BoardController {
    @Autowired
    private BoardServiceImpl boardServiceRepository;
    @Autowired
    private BucketServiceImpl bucketServiceRepository;

    @CrossOrigin(origins = "http://localhost:3000")
    @PostMapping("/board/new")
    public Board createBoard() {
        Board board = new Board();
        boardServiceRepository.save(board);
        return board;
    }

    @CrossOrigin(origins = "http://localhost:3000")
    @PutMapping("/board/{id}")
    public Board updateBoard(Board board) throws ElementMissingNameException {
        if(board.getName() == null)
            throw new ElementMissingNameException();

        boardServiceRepository.save(board);

        return board;
    }

    @CrossOrigin(origins = "http://localhost:3000")
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

    @CrossOrigin(origins = "http://localhost:3000")
    @PostMapping(value = "/board/{id}/column/new", produces = MediaType.APPLICATION_JSON_VALUE)
    public Bucket createNewBucket(@PathVariable long id) {
        Board b = null;
        try {
            b = boardServiceRepository.findById(id);
        }catch(Exception e) {
            e.printStackTrace();
        }
        return bucketServiceRepository.createBucket(b);
    }

    @CrossOrigin(origins = "http://localhost:3000")
    @PutMapping(value = "/board/{id}/column/{cid}}", produces = MediaType.APPLICATION_JSON_VALUE)
    public Bucket updateBucket(@PathVariable long id,
                                  @PathVariable long cid,
                                  @RequestBody String name) {
        Board b = null;
        try {
            b = boardServiceRepository.findById(id);
        }catch(Exception e) {
            e.printStackTrace();
        }
        Bucket bucket = b.getTasksBuckets().stream().filter(bu -> bu.getId() == cid).findFirst().get();
        bucket.setName(name);
        boardServiceRepository.save(b);

        return bucket;
    }
}
