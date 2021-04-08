package board;

import board.model.Assignee;
import board.model.Task;
import board.service.TaskServiceRepository;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.context.ApplicationContext;
import org.springframework.context.annotation.AnnotationConfigApplicationContext;

import javax.persistence.EntityManager;
import javax.persistence.EntityManagerFactory;
import javax.persistence.Persistence;

@SpringBootApplication
public class App {

	public static void main(String[] args) {
		EntityManagerFactory entityManagerFactory = Persistence.createEntityManagerFactory("persistenceStuff");
		EntityManager entityManager = entityManagerFactory.createEntityManager();

		entityManager.getTransaction().begin();

//		Assignee a = new Assignee();
//		a.setName("tesst");
//		a.setProfileUrl("tesst");
//
//		entityManager.persist(a);
		entityManager.getTransaction().commit();


//		SpringApplication.run(App.class, args);
	}

}
