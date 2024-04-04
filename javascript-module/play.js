// var 은 변수를 생성하는 키워드
var name = "MAX";
var age = 29;

// let  => 해당 이름의 변수 재할당이 불가
// let age = 29;
age = 30;

// const => 상수다 절대 값이 변하지 않음 
// 절대 바뀌지 않는 것에 대해선 const 를 사용하자

//화살표 함수

const hell = function() { // 익명 함수 타입

}

const hello = () => { // 화살표 함수 타입

}

const add = a => a + 1 // 인자가 하나라면 한줄로 사용도 가능

add(34);
console.log(add(34));