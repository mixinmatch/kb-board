package board.api;

import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

@RestController
public class Board {
    @GetMapping("/board/new")
    public board.model.Board createBoard(@RequestParam(defaultValue = "") String name) {

        return new board.model.Board();
    }

//    @GetMapping("/board/new")
//    public Board deleteBoard(@RequestParam() String name) {

//        return new Board();
//    }
}
