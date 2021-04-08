package board.model;

import javax.persistence.*;
import java.util.Date;
import java.util.List;
import java.util.Objects;

@Entity
@Table(name = "TASKS")
public class Task {
    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)
    private long id;

    @ManyToOne
    @JoinTable(name = "ASSIGNEES", joinColumns = {
            @JoinColumn(name = "ASSIGNEE_ID")
    })
    private Assignee assignee;

    @Column(name = "DESCRIPTION")
    private String description;

    @Column(name = "COMPLETED")
    private boolean isCompleted;

    @Column(name = "DEADLINE")
    private Date deadline;

//    private List<Task> subtasks;

//    private List<Attachment> attachments;

    @ManyToOne
    @JoinColumn(name = "BUCKET_ID")
    private Bucket parentBucket;

    @Column(name = "NAME", table="")
    private List<Assignee> collaborators;

    public Assignee getAssignee() {
        return assignee;
    }

    public void setAssignee(Assignee assignee) {
        this.assignee = assignee;
    }

    public String getDescription() {
        return description;
    }

    public void setDescription(String description) {
        this.description = description;
    }

    public boolean isCompleted() {
        return isCompleted;
    }

    public void setCompleted(boolean completed) {
        isCompleted = completed;
    }

    public Date getDeadline() {
        return deadline;
    }

    public void setDeadline(Date deadline) {
        this.deadline = deadline;
    }

//    public List<Task> getSubtasks() {
//        return subtasks;
//    }
//
//    public void setSubtasks(List<Task> subtasks) {
//        this.subtasks = subtasks;
//    }

//    public List<Attachment> getAttachments() {
//        return attachments;
//    }
//
//    public void setAttachments(List<Attachment> attachments) {
//        this.attachments = attachments;
//    }

    public Bucket getParentBucket() {
        return parentBucket;
    }

    public void setParentBucket(Bucket parentBucket) {
        this.parentBucket = parentBucket;
    }

    public List<Assignee> getCollaborators() {
        return collaborators;
    }

    public void setCollaborators(List<Assignee> collaborators) {
        this.collaborators = collaborators;
    }

    @Override
    public boolean equals(Object o) {
        if (this == o) return true;
        if (o == null || getClass() != o.getClass()) return false;
        Task task = (Task) o;
        return id == task.id && isCompleted == task.isCompleted && Objects.equals(assignee, task.assignee) && Objects.equals(description, task.description) && Objects.equals(deadline, task.deadline) /*&& Objects.equals(subtasks, task.subtasks)*/ && /*Objects.equals(attachments, task.attachments) &&*/ Objects.equals(collaborators, task.collaborators);
    }

    @Override
    public int hashCode() {
        return Objects.hash(id, assignee, description, isCompleted, deadline, /*subtasks, attachments,*/ collaborators);
    }
}
