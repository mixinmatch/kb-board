package board.service;

import board.model.Assignee;
import board.repository.AssigneeRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service("assigneeServiceRepository")
public class AssigneeServiceRepository {
    private AssigneeRepository repository;

    @Autowired
    public AssigneeServiceRepository(AssigneeRepository repository) {
        this.repository = repository;
    }

    public List<Assignee> findAll() {
        return repository.findAll();
    }

    public Assignee createAssignee(Assignee assignee) {
        return repository.createAssignee(assignee);
    }

    public void removeAssignee(Assignee assignee) {
        repository.removeAssignee(assignee);
    }


}
