class Person{
    constructor(id,name,email,phone){
        this.id=id,
        this.name=name,
        this.email=email,
        this.phone=phone
    }

    modifyEmail(email){
        this.email=email
    }
    modifyPhone(phone){
        this.phone=phone
    }
}