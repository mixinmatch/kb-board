package board.model;

import java.util.Date;
import java.util.List;
import java.util.Objects;

public class Task {
    private long id;
    private Assignee assignee;
    private String description;
    private boolean isCompleted;
    private Date deadline;
    private List<Task> subtasks;
    private List<Attachment> attachments;
    private List<Assignee> collaborators;


    @Override
    public boolean equals(Object o) {
        if (this == o) return true;
        if (o == null || getClass() != o.getClass()) return false;
        Task task = (Task) o;
        return id == task.id && isCompleted == task.isCompleted && Objects.equals(assignee, task.assignee) && Objects.equals(description, task.description) && Objects.equals(deadline, task.deadline) && Objects.equals(subtasks, task.subtasks) && Objects.equals(attachments, task.attachments) && Objects.equals(collaborators, task.collaborators);
    }

    @Override
    public int hashCode() {
        return Objects.hash(id, assignee, description, isCompleted, deadline, subtasks, attachments, collaborators);
    }
}
