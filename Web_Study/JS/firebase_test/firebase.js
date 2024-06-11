console.log("firebase file")

 // Firebase 설정객체 : 내 firebase 에대한 정보
 const firebaseConfig = {
    apiKey: "AIzaSyBjPPPPhjM1zdSWRJs0TKYrlne0nTFKb8M",
    authDomain: "fir-test-2941b.firebaseapp.com",
    databaseURL: "https://fir-test-2941b-default-rtdb.firebaseio.com",
    projectId: "fir-test-2941b",
    storageBucket: "fir-test-2941b.appspot.com",
    messagingSenderId: "57174928866",
    appId: "1:57174928866:web:584e0568dd9f9e235a9dbb"
  };

  // Firebase 앱 초기화
  const app = firebase.initializeApp(firebaseConfig);

  // Firebase 의 실시간 데이터베이스
  const database = firebase.database()

  // firebase에 데이터쓰기
  const writeUserData = (userId, name, email) =>{
    firebase.database().ref('users/'+ userId).set({
        name : name,
        email : email
    })
  }

  // firebase에 있는 데이터 읽기
  const readUserData = (userId)=>{
    const userRef = firebase.database().ref('users/') 
                    // 'users/'라는 경로에 참조를 가져옴

    userRef.once('value').then((res)=>{
        const data = res.val()
        console.log(data);
    })                
  }
  

let addUserBtn =  document.getElementById("addUserBtn");
let frm = document.frm.elements


addUserBtn.addEventListener("click",()=>{    
    
    // console.log(frm.id.value);
    // console.log(frm.email.value);
    // console.log(frm.userName.value);
   
    console.log(frm[0].value);
    console.log(frm[1].value);
    console.log(frm[2].value);

    writeUserData(frm[0].value, frm[2].value, frm[1].value)

})
/* 
1. addUserBtn 이라는 id를 가진 버튼을 클릭 시
2. 사용자가 input에 입력한 세개의 데이터를 각각 console에 찍어보기
*/


let getUserBtn = document.getElementById("getUserBtn")
getUserBtn.addEventListener('click',()=>{
    console.log('유저가져오기 ck');
    readUserData('yim7595');
})


