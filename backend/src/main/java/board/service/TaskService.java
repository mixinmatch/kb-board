package board.service;

import board.model.Task;

import java.util.List;

public interface TaskService {
    List<Task> findAll();
    Task save(Task task);
}
