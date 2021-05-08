package board.model.Exception;

public class ElementMissingNameException extends Exception {
    public ElementMissingNameException() {
        super("Assignee name is missing");
    }
}
