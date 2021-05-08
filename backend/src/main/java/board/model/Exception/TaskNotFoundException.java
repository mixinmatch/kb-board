package board.model.Exception;

public class TaskNotFoundException extends Exception{
    public TaskNotFoundException(String id) {
        super("Task with id: " +id + " is not found");
    }
}
