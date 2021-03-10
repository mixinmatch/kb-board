package board.model;

import java.util.Date;
import java.util.List;

public class Task {
    private Assignee assignee;
    private String description;
    private boolean isCompleted;
    private Date deadline;
    private List<Task> subtasks;
}
