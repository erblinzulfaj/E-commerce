package com.example.sta.services.Impls;

import com.example.sta.dtos.AdminDto;
import com.example.sta.models.Admin;
import com.example.sta.services.AdminService;
import org.springframework.stereotype.Service;

@Service
public class AdminServiceImpl implements AdminService {

    private boolean itsTrue = false;

    public void setItsTrue(boolean itsTrue) {
        this.itsTrue = itsTrue;
    }

    public boolean isItsTrue() {
        return itsTrue;
    }

    @Override
    public boolean checkEntity(AdminDto dto) {
            Admin admin = new Admin();
            String username = admin.getUsername();
            String password = admin.getPassword();
            String dtoUsername = String.valueOf(dto.getUsername());
            String dtoPassword = String.valueOf(dto.getPassword());
        System.out.println(username);
        System.out.println(dtoUsername);

            if (dtoUsername.equals(username) && dtoPassword.equals(password)){
                itsTrue = true;
            }else{
                itsTrue = false;
            }
        System.out.println(itsTrue);
            return itsTrue;
    }
}
