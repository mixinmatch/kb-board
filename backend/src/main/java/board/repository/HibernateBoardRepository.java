package board.repository;

import board.model.Board;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository("boardRepository")
public class HibernateBoardRepository implements BoardRepository{
    @Override
    public List<Board> findAll() {

        return null;
    }

    @Override
    public void removeBoard(Board b) {

    }

    @Override
    public Board createBoard() {
        return null;
    }
}
