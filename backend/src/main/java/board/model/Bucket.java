package board.model;

import javax.persistence.*;
import java.util.ArrayList;
import java.util.Collections;
import java.util.List;
import java.util.Objects;

@Entity
@Table(name = "Bucket")
public class Bucket {
    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)
    @Column(name = "BUCKET_ID")
    private long id;

    @Column(name = "NAME")
    private String name;

    @OneToMany(mappedBy = "parentBucket")
    private List<Task> tasks = new ArrayList<>();

    @ManyToOne
    private Board parentBoard;

    public long getId() {
        return id;
    }

    public Board getParentBoard() {
        return parentBoard;
    }

    public void setParentBoard(Board parentBoard) {
        this.parentBoard = parentBoard;
    }

    public String getName() {
        return name;
    }

    public void setName(String name) {
        this.name = name;
    }

    public List<Task> getTasks() {
        return Collections.unmodifiableList(tasks);
    }

    public void addTask(Task task) {
        this.tasks.add(task);
    }
    public void removeTask(Task task) {
        this.tasks.remove(task);
    }

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
