package board.model;

import java.util.List;
import java.util.Objects;

public class Board {
    private long id;
    private String name;
    private List<Bucket> tasksBuckets;


    @Override
    public boolean equals(Object o) {
        if (this == o) return true;
        if (o == null || getClass() != o.getClass()) return false;
        Board board = (Board) o;
        return id == board.id && Objects.equals(name, board.name) && Objects.equals(tasksBuckets, board.tasksBuckets);
    }

    @Override
    public int hashCode() {
        return Objects.hash(id);
    }
}
