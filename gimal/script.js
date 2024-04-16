// //동기적 vs 비동기적
// //동기적인 프로그래밍
// console.log(1);
// setTimeout(function(){
//     console.log(2);
// },1000);
// console.log(2);
// console.log(3);
// //비동기적인 프로그래밍
// //*1. 네트워크 통신/파일 입출력 -> long time* 중요
// //오래 기다린 다음에 다음 작업
// //2. 에러 처리
// //setTimeout -- 정해진 시간이 지나면 callback

// //동기적인 콜백
// function print1(print){
//     print()
// }
// print1(()=> console.log("동기적인 콜백"));

// //비동기적인 콜백
// //대표적으로 setTimeout
// function print2(print, timeout){
//     setTimeout(print,timeout)
// }
// print2(()=> console.log("비동기적인 콜백"),
// 2000);

// //콜백 지옥
// //서버로부터 사용자의 데이터를 받는 클래스
// class UserStorage {
//     loginUser(id, passwd, onSuccess, onError) {
//         setTimeout(() => {
//             if (id === 'moon' && passwd === '1234') {
//                 onSuccess(id);
//             } else {
//                 onError(new Error("ID 또는 패스워드가 일치하지 않습니다."));
//             }
//         }, 2000);
//     }
//     getRoles(user, onSuccess, onError) {
//         setTimeout(() => {
//             if (user === 'moon') {
//                 onSuccess({ name: 'moon', role: 'admin' });
//             } else {
//                 onError(new Error("권한이 없습니다."));
//             }
//         }, 1000);
//     }
// }
// const userStorage = new UserStorage();
// const id = prompt("아이디를 입력하세요.");
// const passwd = prompt("비밀번호를 입력하세요.");
// userStorage.loginUser(
//     id,
//     passwd,
//     (user) => {
//         userStorage.getRoles(
//             user,
//             (userWithRole) => {
//                 alert(`Welcome ${userWithRole.name}, you have a ${userWithRole.role} role`);
//             },
//             (error) => {
//                 console.log(error);
//             }
//         );
//     },
//     (error) => {
//         console.log(error);
//     }
// );

// //Promise
// //-객체
// const promise = new Promise((resolve, reject)=>{
//     console.log("Netword 작업....")
//     setTimeout(() => {
//         reject(new Error("network error"))
//     }, 2000)
// })
// promise.catch((value) => {
//     console.log(value) //약속 된 작업
// })
// .catch((error) => {
//     console.log(error)
// })
// .finally(() => {
//     console.log("무조건 실행")
// })

// //Promise 체이닝
// const fetchNumber = new Promise
// ((resolve,reject) => {
//     setTimeout(() => resolve(1), 1000);
// })
// fetchNumber
// .then((num) => {num * 2})
// .then((num) => {num * 3})
// .then((num) => {
//     return new Promise((resolve,reject) => {
//         setTimeout(() => resolve(num-1)
//     ,1000)
//     })
// })
// .then((num) => console.log(num))


// //재사용 해보겠읍니다.
// class UserStorage {
//     loginUser(id, passwd) {
//         return new Promise((resolve,reject) => {
//             setTimeout(() => {
//                 if (id === 'moon' && passwd === '1234') {
//                     resolve(id);
//                 } else {
//                     reject(new Error("ID 또는 패스워드가 일치하지 않습니다."));
//                 }
//             }, 2000);
//         })
//     }
//     getRoles(user) {
//         return new Promise((resolve,reject) => {
//             setTimeout(() => {
//                 if (user === 'moon') {
//                     resolve({ name: 'moon', role: 'admin' });
//                 } else {
//                     reject(new Error("권한이 없습니다."));
//                 }
//             }, 1000);
//         })
//     }
// }
// const userStorage = new UserStorage();
// const id = prompt("아이디를 입력하세요.");
// const passwd = prompt("비밀번호를 입력하세요.");
// userStorage
// .loginUser(id,passwd)
// .then(userStorage.getRoles)
// .then((user) => alert(`Your rols is ${user.role}`))
// .catch(console.log)

//async function 함수명(){
//     await 비동기함수();
// }
function fetchItem(){
    return new Promise((resolve, reject) => {
        var items = [1,2,3]
        resolve(items)
    })
}

async function logItems(){
    var result = await fetchItem(); //비동기
    console.log(result)
}

function fetchUser(){
    //사용자 정보 가져오는 비동기 함수(시간 걸림)
}