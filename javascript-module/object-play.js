const person = { 
    name : "MAX",
    age : 29,
    greet: () => {
        console.log(`hello I am ${this.name}`)
    }, // undefined
    hell: function(){
        console.log(`${this.name}`);
    }, // Max
    hello() {
        console.log(`${this.name}`);
    } // MAX
}

person.greet()
person.hell()
person.hello()
// this 에서 점 표기법은 매우 중요하다
// undefined가 출력되는 이유는 화살표 함수를 사용하면 기존 함수를 사용하면 가능하지만, 
// 화살표함수에서의 this 는 전역 범위, 전역 노드 런타임 에서 실행되기때문에

// 배열과 배열 메서드

// const hob = ['sports' , 'cook', 'mixing',1,person]
const hobs = ['sports' , 'cook', 'mixing'] // 내부의 요소는 참조 타입이기때문에 수정이 가능하다 
for (let hob of hobs){ // => for of 구문으로 처리가 가능하다
    console.log(hob);
}
console.log(hobs.map(hob => {
    return "Hobby : " + hob;
}));
// 새로운 배열에 할당된다.

// 스프레드 및 레스트 연산자에 대한 이해 
// 레스트 연산자란
hobs.push("hell")
// 어레이 복사 
// const copArr = hobs.slice(); // 2중 배열로 복사됨
const copArr = [...hobs] // => 새로운 배열에 추가됨
console.log(copArr);
const copyPer = {...person}

console.log(copyPer);

const toArray = (...args) => { 
    return args;
}

const arr = toArray("hell","hell2", "hell3")
console.log(arr);

const printName = ({name}) => {
    console.log(name)
}

printName(person);

const {name, age} = person; // 

console.log(name, age);