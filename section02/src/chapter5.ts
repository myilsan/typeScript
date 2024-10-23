//enum 타입 -> type script 에서만 제공

enum Role {
    ADMIN =3,
    USER,
    GUEST,
};

enum Language {
    korean ="ko",
    english = "en"

}


const user1 ={
name :"최경호",
role : Role.ADMIN,
language : Language.korean

}

const user2 ={
    name : "안경은",
    role : Role.USER
};

console.log(user1,user2);