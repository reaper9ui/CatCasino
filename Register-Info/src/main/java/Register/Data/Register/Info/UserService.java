package Register.Data.Register.Info;

import jakarta.persistence.Id;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.HashMap;
import java.util.Map;
import java.util.UUID;

@Service
public class UserService {


  // Map<Integer, User> db = new HashMap<>();
    

    private final UserRepository userRepo;

    @Autowired
    public UserService(UserRepository userRepo){
       this.userRepo = userRepo;
    }

    public User createUser(User user) {
      return userRepo.save(user);
    }


    public User getUser(String user){
        User used = userRepo.findByUsername(user);
        if(used == null)return null;
        return userRepo.findById(used.getId()).orElse(null);
    }

}
