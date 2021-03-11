package board.repository;

import board.model.Task;

import java.util.List;

public interface TasksRepository {
    public List<Task> findAll();
    public Task updateTask(Task t);
    public void removeTask(Task t);
    public Task createTask(Task t);
}
