package board.repository;

import board.model.Assignee;

import java.util.List;

public interface AssigneeRepository {
    public List<Assignee> findAll();
    public Assignee updateAssignee(Assignee a);
    public void removeAssignee(Assignee a);
    public Assignee createAssignee(Assignee a);
}
