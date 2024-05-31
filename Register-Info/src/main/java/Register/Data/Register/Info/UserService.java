package Register.Data.Register.Info;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
public class UserService {

    private final UserRepository userRepo;

    @Autowired
    public UserService(UserRepository userRepo){
       this.userRepo = userRepo;
    }

    public User createUser(User user) {
      return userRepo.save(user);
    }
}
