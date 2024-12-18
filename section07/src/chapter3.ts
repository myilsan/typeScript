/**
 * 제네릭 인터페이스
 */

interface keyPair<K, V> {
  key: K;
  value: V;
}

let keypair: keyPair<string, number> = {
  key: "key",
  value: 0,
};

let keypair2: keyPair<boolean, string[]> = {
  key: true,
  value: ["1"],
};

/**
 * 인덱스 시그니처
 */

interface NumberMap {
  [key: string]: number; //키값이 스트링이면됨.
}

let numberMap1: NumberMap = {
  key: -67767,
  key222: 3333,
  key11: 543,
};

interface Map<V> {
  [key: string]: V;
}

let stringMap: Map<string> = {
  key: "value",
  key22: "fgfffff",
};

let booleanMap: Map<boolean> = {
  key: true,
};

/**
 * 제네릭 타입 별칭
 */

type Map2<V> = {
  [key: string]: V;
};

let stringMap2: Map2<string> = {
  Key: "hello",
};

/***
 * 제네릭 인터페이스 활용예시
 * -->유저 관리 프로그램
 * --> 유저 구분 : 학생유저 , 개발자 유저
 */

interface Student {
  type: "student";
  school: string;
}

interface Developer {
  type: "developer";
  skill: string;
}

/**
 *  안좋은 케이스
 */
// interface User {
//   name: string;
//   profile: Student | Developer;
// }

// const studentUser: User = {
//   name: "홍길동",
//   profile: {
//     type: "student",
//     school: "카톨릭대학교",
//   },
// };

// const developerUser: User = {
//   name: "최경호",
//   profile: {
//     type: "developer",
//     skill: "TypeScript",
//   },
// };

// function goToSchool(user: User) {
//   if (user.profile.type !== "student") {
//       console.log("잘못오셨습니다."); // 들어올때마다 type 좁히기를 계속해야하는 문제
//       return;

//   }
//   const school = user.profile.school;
// }

/**
 * 좋은 케이스로 수정
 */
interface User<T> {
  name: string;
  profile: T;
}

const studentUser: User<Student> = {
  name: "홍길동",
  profile: {
    type: "student",
    school: "카톨릭대학교",
  },
};

const developerUser: User<Developer> = {
  name: "최경호",
  profile: {
    type: "developer",
    skill: "TypeScript",
  },
};

function goToSchool(user: User<Student>) {
  // 제네릭 이용해서 type 좁히기를 할 없음
  //   if (user.profile.type !== "student") {
  //     console.log("잘못오셨습니다."); // 들어올때마다 type 좁히기를 계속해야하는 문제
  //     return;
  //   }
  const school = user.profile.school;
}
