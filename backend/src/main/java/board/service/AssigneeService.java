package board.service;

import board.model.Assignee;

import java.util.List;

public interface AssigneeService {
    List<Assignee> findAll();
    Assignee save(Assignee assignee);
}
