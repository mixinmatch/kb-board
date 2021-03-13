package board.model;

import java.util.List;
import java.util.Objects;

public class Bucket {
    private long id;
    private String name;
    private List<Task> tasks;

    @Override
    public boolean equals(Object o) {
        if (this == o) return true;
        if (o == null || getClass() != o.getClass()) return false;
        Bucket bucket = (Bucket) o;
        return id == bucket.id && Objects.equals(name, bucket.name) && Objects.equals(tasks, bucket.tasks);
    }

    @Override
    public int hashCode() {
        return Objects.hash(id);
    }
}
