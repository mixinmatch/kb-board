package board;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.context.annotation.ComponentScan;

@SpringBootApplication
@ComponentScan(basePackages = {"board.api", "board.service"})
public class App {
	public static void main(String[] args) {
		SpringApplication.run(App.class, args);
	}
}
