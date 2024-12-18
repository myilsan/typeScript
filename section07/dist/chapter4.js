/**
 * 제네릭 클래스
 */
class List {
    list;
    constructor(list) {
        this.list = list;
    }
    push(data) {
        this.list.push(data);
    }
    pop() {
        return this.list.pop();
    }
    print() {
        console.log(this.list);
    }
}
const numberList = new List([1, 2, 3, 4]);
numberList.pop();
numberList.push(77);
numberList.print();
export {};
