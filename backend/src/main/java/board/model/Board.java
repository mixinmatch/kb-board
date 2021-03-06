package board.model;

import com.fasterxml.jackson.annotation.JsonIgnore;

import javax.persistence.*;
import java.util.List;
import java.util.Objects;

@Entity
@Table(name = "Board")
public class Board {
    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)
    private long id;

    @Column(name = "NAME")
    private String name;

    @JsonIgnore
    @OneToMany(mappedBy = "parentBoard")
    private List<Bucket> tasksBuckets;

    public long getId() {
        return id;
    }

    public String getName() {
        return name;
    }

    public void setName(String name) {
        this.name = name;
    }

    public List<Bucket> getTasksBuckets() {
        return tasksBuckets;
    }

    public void setTasksBuckets(List<Bucket> tasksBuckets) {
        this.tasksBuckets = tasksBuckets;
    }

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
