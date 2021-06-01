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

    @CrossOrigin(origins = "http://localhost:3000")
    @PutMapping("/board/{id}/task/{tid}")
    public Task updateTask(@PathVariable long id,
                           @PathVariable long tid,
                           @RequestBody Task task) throws ElementMissingNameException, BoardNotFoundException {
        if(task == null || tid < 0)
            throw new ElementMissingNameException();

        if(id < 0)
            throw new BoardNotFoundException(String.valueOf(id));

        taskServiceRepository.save(task);

        return task;
    }

    @CrossOrigin(origins = "http://localhost:3000")
    @GetMapping("/board/{id}/tasks")
    public List<Task> getBoard(@PathVariable long id) throws BoardNotFoundException {
        List<Task> tasks = taskServiceRepository.findAll();
        return tasks;
    }
}
