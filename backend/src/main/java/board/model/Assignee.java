package board.model;

import javax.persistence.*;
import java.util.List;
import java.util.Objects;

@Entity
@Table(name = "ASSIGNEES")
public class Assignee {

    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)
    @Column(name = "ASSIGNEE_ID")
    private long id;

    @Column(name = "NAME")
    private String name;

    @Column(name = "PROFILE_PICTURE")
    private String profileUrl;

    @ManyToMany(mappedBy = "collaborators")
    private List<Task> tasks;

    public Assignee() {}

    public List<Task> getTasks() {
        return tasks;
    }

    public void setTasks(List<Task> tasks) {
        this.tasks = tasks;
    }

    public Assignee(String name, String profile) {
        this.name = name;
        this.profileUrl = profile;
    }

    public String getName() {
        return name;
    }

    public void setName(String name) {
        this.name = name;
    }

    public String getProfileUrl() {
        return profileUrl;
    }

    public void setProfileUrl(String profileUrl) {
        this.profileUrl = profileUrl;
    }

    @Override
    public boolean equals(Object o) {
        if (this == o) return true;
        if (o == null || getClass() != o.getClass()) return false;
        Assignee assignee = (Assignee) o;
        return id == assignee.id && Objects.equals(name, assignee.name) && Objects.equals(profileUrl, assignee.profileUrl);
    }

    @Override
    public int hashCode() {
        return Objects.hash(id);
    }
}
