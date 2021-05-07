{
  /**
   * 어떤 케이스든 공통적인 property를 가지고 있음으로써
   * 조금 더 구분하기 쉽게 만든다!
   */

  // function: login -> success, fail
  type SuccessState = {
    result: "success"; // 공통적인 property
    response: {
      body: string;
    };
  };
  type FailState = {
    result: "fail"; // 공통적인 property
    reason: string;
  };
  type LoginState = SuccessState | FailState;

  // printLoginState(state: LoginState)
  // success => body
  // fail => reason
  function printLoginState(state: LoginState) {
    if (state.result === "success") {
      console.log(state.response.body);
    } else {
      console.log(state.reason);
    }
  }
}
