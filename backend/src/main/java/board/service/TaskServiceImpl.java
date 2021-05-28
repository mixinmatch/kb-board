package board.service;

import board.repository.TasksRepository;
import board.model.Task;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import java.util.ArrayList;
import java.util.List;

@Service
public class TaskServiceImpl implements TaskService{
    private TasksRepository repository;

    @Autowired
    public TaskServiceImpl(TasksRepository repository) {
        this.repository = repository;
    }

    @Override
    public List<Task> findAll() {
        List<Task> tasks = new ArrayList<>();
        for(Task t : repository.findAll()) {
            tasks.add(t);
        }
        return tasks;
    }

    @Override
    @Transactional
    public Task save(Task task) {
        return repository.save(task);
    }

}
