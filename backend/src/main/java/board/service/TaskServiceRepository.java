package board.service;

import board.model.Task;
import board.repository.TasksRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service("taskServiceRepository")
public class TaskServiceRepository {
        private TasksRepository repository;

    @Autowired
    public TaskServiceRepository(TasksRepository repository) {
            this.repository = repository;
    }

    public List<Task> findAll() {
            return repository.findAll();
        }

    public Task createBoard() {
            return repository.createTask();
        }

    public void removeBoard(Task task) {
            repository.removeTask(task);
        }
}
