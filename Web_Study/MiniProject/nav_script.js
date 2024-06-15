// 언어 설정 변경

const changeLanguageBtn = document.getElementById("change-lang");
let currentLanguage = "en"; // 초기 언어 설정

// JSON 파일에서 번역 데이터를 불러오는 함수
async function fetchTranslations() {
    const response = await fetch("translations.json");
    return await response.json();
}

// 언어를 변경하는 함수
async function toggleLanguage() {
    const translations = await fetchTranslations();
    currentLanguage = currentLanguage === "en" ? "ko" : "en"; // 언어 토글

    // 모든 data-i18n 요소를 업데이트
    document.querySelectorAll("[data-i18n]").forEach((element) => {
        const key = element.getAttribute("data-i18n");
        element.textContent = translations[currentLanguage][key];
    });

    // 모든 input 요소를 찾습니다.
    var inputs = document.querySelectorAll('input');

    // 각 input 요소에 대해 data-i18n 속성 값을 가져와서 placeholder 속성을 업데이트합니다.
    inputs.forEach(function(input) {
        console.log(input);
        var i18nKey = input.getAttribute('data-i18n');
        if (i18nKey) {
            input.setAttribute('placeholder', translations[currentLanguage][i18nKey]);
        }
    });
}



changeLanguageBtn.addEventListener("click", (event) => {
    event.preventDefault();
    toggleLanguage();
});

if (sessionStorage.getItem("id")) {
    // sessionStorge에 id값이 존재하는지 확인
    document.getElementById("login_out").innerText = "Logout"; // 존재할경우 sidenav의 login을 logout으로변경
    const logoutBtn = document.getElementById("logoutBtn"); // a태그 가져오기
    logoutBtn.addEventListener("click", () => {
        // 이벤트 걸어주기
        logoutBtn.href = "Login.html"; // 로그아웃버튼일때 이동하고싶은 주소 지정
        sessionStorage.removeItem("id"); // 세션에 담은 id값 삭제
        sessionStorage.removeItem("name"); // 세션에 담은 name값 삭제
    });
}



