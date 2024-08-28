// 버튼0 누르면
// - 모든버튼에 붙은 orange 클래스명 제거
// - 버튼 0에 orange 클래스명 추가
// - 모든 div에 붙은 show 클래스명 제거
// - div0에 show 클래스명 추가

// 좋은관습 : 자주쓰는 셀렉터 변수에 넣어쓰기
let tabBtns = document.querySelectorAll('.tab-button');
let tabConts = document.querySelectorAll('.tab-content');

tabBtns.forEach((btn, index) =>{
    btn.addEventListener('click', ()=>{
        tabBtns.forEach(otherBtn => {
            otherBtn.classList.remove('orange');
        });
        tabBtns[index].classList.add('orange');
        tabConts.forEach(othercont => {
            othercont.classList.remove('show');
        });
        tabConts[index].classList.add('show');
    })
})



