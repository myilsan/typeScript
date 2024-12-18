/**
 * 제네릭 인터페이스
 */
let keypair = {
    key: "key",
    value: 0,
};
let keypair2 = {
    key: true,
    value: ["1"],
};
let numberMap1 = {
    key: -67767,
    key222: 3333,
    key11: 543,
};
let stringMap = {
    key: "value",
    key22: "fgfffff",
};
let booleanMap = {
    key: true,
};
let stringMap2 = {
    Key: "hello",
};
const studentUser = {
    name: "홍길동",
    profile: {
        type: "student",
        school: "카톨릭대학교",
    },
};
const developerUser = {
    name: "최경호",
    profile: {
        type: "developer",
        skill: "TypeScript",
    },
};
function goToSchool(user) {
    // 제네릭 이용해서 type 좁히기를 할 없음
    //   if (user.profile.type !== "student") {
    //     console.log("잘못오셨습니다."); // 들어올때마다 type 좁히기를 계속해야하는 문제
    //     return;
    //   }
    const school = user.profile.school;
}
export {};
