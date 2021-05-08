package board.api;

import board.model.Assignee;
import board.model.Exception.ElementMissingNameException;
import board.service.AssigneeServiceImpl;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
public class AssigneeController {
    @Autowired
    private AssigneeServiceImpl assigneeServiceRepository;

    @PostMapping("/board/{id}/Assignee/new")
    public Assignee createAssignee(@RequestParam(defaultValue = "") String name) throws ElementMissingNameException {
        if(name == null)
            throw new ElementMissingNameException();
        Assignee assignee  = new Assignee();
        assignee.setName(name);
        assignee.setProfileUrl("");

        assigneeServiceRepository.save(assignee);

        return assignee;
    }
    @PutMapping("/board/{id}/Assignee/{id}")
    public Assignee updateAssignee(@RequestParam(defaultValue = "") Assignee assignee) throws ElementMissingNameException {
        if(assignee.getName() == null)
            throw new ElementMissingNameException();

        assigneeServiceRepository.save(assignee);

        return assignee;
    }
    @GetMapping("/board/{id}/Assignees")
    public List<Assignee> getBoardAssignees() throws ElementMissingNameException {
        return assigneeServiceRepository.findAll();
    }

}
