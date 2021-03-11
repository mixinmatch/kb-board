package board.model;

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
}
