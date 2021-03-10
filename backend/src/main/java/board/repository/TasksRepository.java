package board.repository;

import board.model.Task;

import java.util.List;

public interface TasksRepository {
    public List<Task> findAll();
    public List<Task> updateTask(Task t);
    public List<Task> removeTask(Task t);
    public List<Task> createTask(Task t);
}
