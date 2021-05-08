package board.model.Exception;

public class BoardNotFoundException extends Exception {
    public BoardNotFoundException(String id) {
        super("Board with id: " +id + " is not found");
    }
}
