package board.model;

import java.util.Date;
import java.util.List;

public class Task {
    private long id;
    private Assignee assignee;
    private String description;
    private boolean isCompleted;
    private Date deadline;
    private List<Task> subtasks;
    private List<Attachment> attachments;
    private List<Assignee> collaborators;
}
