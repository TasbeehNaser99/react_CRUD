export const validationUserData=(user)=>{
    let error={};
    if(user.name.trim()==""){
        error.name="name is requierd";
    }else if(user.name.trim().length<3){
        error.name="name must be at least 3 characters"
    }
    if(user.email.trim()==""){
        error.email="email is requierd"
    }else if(user.email.trim().length<9){
        error.email="email must be at least 9 characters"
    }
    if(user.password.trim()==""){
        error.password="password is requierd"
    }else if(user.password.trim().length<3){
        error.password="password must be at least 3 characters"
    }
    return error;
}