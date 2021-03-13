package board.repository;

import board.model.Assignee;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository("assigneeRepository")
public class HibernateAssigneeRepository implements AssigneeRepository {

    @Override
    public List<Assignee> findAll() {
        return null;
    }

    @Override
    public Assignee updateAssignee(Assignee a) {
        return null;
    }

    @Override
    public void removeAssignee(Assignee a) {

    }

    @Override
    public Assignee createAssignee(Assignee a) {
        return null;
    }
}
