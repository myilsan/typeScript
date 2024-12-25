/**
 * 맵드 타입(실무에서 사용많다고 함. )
 */

interface User {
  id: number;
  name: string;
  age: number;
}
// 이렇게 중복으로 만들어도 되지만 또 interface를 만들게 됨
interface PartialUser {
  id?: number;
  name?: string;
  age: number;
}

type PartialUser2 = {
  //[key in "id" | "name" | "age"]?: User[key];
  [key in keyof User]?: User[key]; // keyof 연사자를 이용할수 있음
};

//readonly로 할경우 데이타를 수정할수 없음
type ReadonlyUser = {
  readonly [key in keyof User]?: User[key];
};

//한명의 유저 정보를 불러오는 임시기능을 만들어 보겠습니다.
function fetchUser(): User {
  //...기능
  //임시로 디턴 하는 기능 만듬
  return {
    id: 1,
    name: "최경호",
    age: 30,
  };
}

//한명의 유저 정보를 불러오는 임시기능을 만들어 보겠습니다.(읽기 전용 반환값 readonlayUser)
function fetchUser2(): ReadonlyUser {
  //...기능
  //임시로 디턴 하는 기능 만듬
  return {
    id: 1,
    name: "최경호",
    age: 30,
  };
}

function updateUser(user: User) {
  //수정하는 기능
}

function updateUser2(user: PartialUser2) {
  //수정하는 기능
}

//모든 객체를 넘겨야 된다 ㅠㅠ
updateUser({
  id: 1,
  name: "최경호",
  age: 20, // 20으로바꾸고 싶다
});

updateUser2({
  //id: 1,
  //name: "최경호",
  age: 20, // 20으로바꾸고 싶다
});

const user = fetchUser2();
//user.name = ""; //읽기 전용으로 name에 할당할 수 없음
