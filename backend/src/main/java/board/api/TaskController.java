package board.api;

import board.model.Exception.BoardNotFoundException;
import board.model.Exception.ElementMissingNameException;
import board.model.Task;
import board.service.TaskServiceImpl;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;

import java.util.List;

public class TaskController {
    @Autowired
    private TaskServiceImpl taskServiceRepository;

    @PostMapping("/task/new")
    public Task createTask() {
        Task board = new Task();
        taskServiceRepository.save(board);
        return board;
    }
    @PutMapping("/board/{id}/task/{tid}")
    public Task updateTask(Task task) throws ElementMissingNameException {
        if(task == null)
            throw new ElementMissingNameException();

        taskServiceRepository.save(task);
        return task;
    }
    @GetMapping("/board/{id}/tasks")
    public List<Task> getBoard(@PathVariable long id) throws BoardNotFoundException {
        List<Task> tasks = taskServiceRepository.findAll();
        return tasks;
    }
}
