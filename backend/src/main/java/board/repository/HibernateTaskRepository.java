package board.repository;

import board.model.Task;

import java.util.List;

public class HibernateTaskRepository implements TasksRepository {
    @Override
    public List<Task> findAll() {
        return null;
    }

    @Override
    public Task updateTask(Task t) {
        return null;
    }

    @Override
    public void removeTask(Task t) {

    }

    @Override
    public Task createTask(Task t) {
        return null;
    }
}
