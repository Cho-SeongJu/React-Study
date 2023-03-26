// React Component!
// Follow <-> following
// React Component 추가
function FollowButton() {
  const [following, setFollowing] = React.useState(false); // following이라는 변수를 만들건데 초기값은 false. 상태값(변수) 변경하기 위해서는 SetFollowing이라는 함수를 사용한다.

  const commonBtnStyle = {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    position: "absolute",
    top: "12px",
    right: "16px",
    width: "100px",
    height: "36px",
    borderRadius: "9999px",
    fontWeight: "bold",
  };

  const followBtnStyle = {
    ...commonBtnStyle,
    backgroundColor: "black",
    color: "white",
  };

  const followingBtnStyle = {
    ...commonBtnStyle,
    backgroundColor: "white",
    color: "black",
    border: "1px solid #cfd9de",
  };

  return React.createElement(
    "div",
    {
      onClick: () => setFollowing(!following), // 함수들
      style: following ? followingBtnStyle : followBtnStyle, // 스타일 지정
    },
    following ? "following" : "follow" // 버튼에 출력되는 텍스트
  );
}

const domContainer = document.querySelector("#follow_button_container");
ReactDOM.render(React.createElement(FollowButton), domContainer);

/* 
    지금 공식문서에서는 이렇게 되어 있음
    const root = ReactDOM.createRoot(domContainer);
    root.render(e(LikeButton));
    e = React.createElement
 */
