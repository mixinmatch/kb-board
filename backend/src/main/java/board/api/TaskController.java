package board.api;

import board.model.Exception.BoardNotFoundException;
import board.model.Exception.ElementMissingNameException;
import board.model.Task;
import board.service.TaskServiceImpl;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.MediaType;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
public class TaskController {
    @Autowired
    private TaskServiceImpl taskServiceRepository;

    @CrossOrigin(origins = "http://localhost:3000")
    @PostMapping(value = "/task/new", produces = MediaType.APPLICATION_JSON_VALUE)
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
