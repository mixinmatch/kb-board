package board;

import board.service.TaskServiceRepository;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.context.ApplicationContext;
import org.springframework.context.annotation.AnnotationConfigApplicationContext;

@SpringBootApplication
public class App {

	public static void main(String[] args) {
		ApplicationContext context = new AnnotationConfigApplicationContext(AppConfig.class);
		TaskServiceRepository r = context.getBean("taskServiceRepository", TaskServiceRepository.class);

		System.out.println(r);
		TaskServiceRepository r2 = context.getBean("taskServiceRepository", TaskServiceRepository.class);
		System.out.println(r2);

//		SpringApplication.run(App.class, args);
	}

}
