{
  /**
   * Union Types: OR
   * 발생할 수 있는 여러 케이스 중 하나만 할당해야 할 때 사용
   */
  type Direction = "left" | "right" | "up" | "down";
  function move(direction: Direction) {
    console.log(direction);
  }
  move("right");

  type TileSize = 8 | 16 | 32;
  const tile: TileSize = 16;

  // function: login -> success, fail
  type SuccessState = {
    response: {
      body: string;
    };
  };
  type FailState = {
    reason: string;
  };
  type LoginState = SuccessState | FailState;
  function login(): LoginState {
    return {
      response: {
        body: "logged in!",
      },
    };
  }

  // printLoginState(state: LoginState)
  // success => body
  // fail => reason
  function printLoginState(state: LoginState) {
    // 좋지 않은 방법!
    if ("response" in state) {
      console.log(state.response.body);
    } else {
      console.log(state.reason);
    }
  }
}
