package Register.Data.Register.Info;

import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

@RestController
@CrossOrigin(origins = "http://localhost:3000")
@RequestMapping("/api/v1/users")
public class UserController {

    private final UserService userService;

    public UserController(UserService UserService){
        this.userService = UserService;
    }

    @PostMapping
    public ResponseEntity<User>createUser(@RequestBody User user){
        User createUser = userService.createUser(user);
        System.out.print("We are in");
        return new ResponseEntity<>(createUser, HttpStatus.CREATED);
    }

    @GetMapping("/user")
    public ResponseEntity<User>getUser(@RequestBody User user){
        User gotUser = userService.getUser(user);
        System.out.print("We are in get User ; ");
        return gotUser != null ? new ResponseEntity<>(gotUser, HttpStatus.OK) : null ;

    }



}
