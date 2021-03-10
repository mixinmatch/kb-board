package board;

import board.repository.TaskRepositoryImpl;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;

@Configuration
public class AppConfig {
    @Bean(name = "taskRepository")
    public TaskRepositoryImpl getTaskRepository() {
        return new TaskRepositoryImpl();
    }
}
