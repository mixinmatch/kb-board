package board;

import board.repository.HibernateTaskRepository;
import board.repository.TasksRepository;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;

@Configuration
public class AppConfig {
    @Bean(name = "taskRepository")
    public TasksRepository getTaskRepository() {
        return new HibernateTaskRepository();
    }
}
