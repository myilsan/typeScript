/**
 * 인덱스드 엑세스 타입 *
 *
 * 복잡한 큰타입에서 필요한 만큼만 잘게 잘게 추출해서 사용하기 위함이다.
 */

interface Post {
  title: string;
  constant: string;
  author: {
    //작성자
    id: number;
    name: string;
    age: number;
  };
}

//function printAuthorInfo(author: { id: number; name: string; age: number }) {
function printAuthorInfo(author: Post["author"]) {
  //post["타입만 사용할수 있다"]
  console.log(`${author.name}-${author.id}`);
}

const post: Post = {
  title: "게시글 제목",
  constant: "게시글 본문",
  author: {
    id: 1,
    name: "최경호",
    age: 27,
  },
};

printAuthorInfo(post.author);

/**
 * 2번째
 *
 */

type PostList = {
  title: string;
  constant: string;
  author: {
    //작성자
    id: number;
    name: string;
    age: number;
  };
}[];

function printAuthorInfo2(author: PostList[0]["author"]) {
  //post["타입만 사용할수 있다"]
  console.log(`${author.name}-${author.id}`);
}

const postlist: PostList[number] = {
  // [0]로 해도 된다 . 0은 숫자가 아니라 타입니다.
  title: "게시글 제목",
  constant: "게시글 본문",
  author: {
    id: 1,
    name: "최경호",
    age: 27,
  },
};

printAuthorInfo2(postlist.author);

/**
 * 튜플과 사용하는 방법
 * 튜플타입에서 타입을 뽑아오는 방식
 */

type Tup = [number, string, boolean];

type Tup0 = Tup[0];
type Tup1 = Tup[1];
type Tup2 = Tup[2];
type TupNum = Tup[number];
