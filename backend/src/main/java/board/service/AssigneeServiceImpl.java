package board.service;

import board.repository.AssigneeRepository;
import board.model.Assignee;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import java.util.ArrayList;
import java.util.List;

@Service
public class AssigneeServiceImpl implements AssigneeService {

    private AssigneeRepository repository;

    @Autowired
    public AssigneeServiceImpl(AssigneeRepository repository) {
        this.repository = repository;
    }

    @Override
    public List<Assignee> findAll() {
        List<Assignee> assignees = new ArrayList<>();
         for(Assignee a : repository.findAll()) {
             assignees.add(a);
         }
         return assignees;
    }

    @Override
    @Transactional
    public Assignee save(Assignee assignee) {
        return repository.save(assignee);
    }
}
