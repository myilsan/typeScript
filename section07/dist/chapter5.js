/**프로미스 */
const promise = new Promise((resolve, reject) => {
    setTimeout(() => {
        resolve(10); //성공일때
        //reject("~~ 때문에 실패");
    }, 3000);
});
promise.then((res) => {
    console.log(res * 10); //20
});
promise.catch((err) => {
    if (typeof err === "string") {
        console.log(err);
    }
});
function fetchPost() {
    //응답값이 post로 선언
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve({
                id: 1,
                title: "게시글제목",
                content: "게시글 컨텐츠",
            });
        }, 3000);
    });
}
const postRequest = fetchPost();
postRequest.then((post) => {
    console.log(post.id, post.title, post.content);
});
export {};
