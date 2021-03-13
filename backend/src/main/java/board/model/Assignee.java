package board.model;

import java.util.Objects;

public class Assignee {
    private long id;
    private String name;
    private String profileUrl;

    public Assignee(String name, String profile) {
        this.name = name;
        this.profileUrl = profile;
    }

    public void setName(String name) {
        this.name = name;
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
