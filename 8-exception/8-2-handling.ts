{
  class TimeoutError extends Error {}
  class OfflineError extends Error {}

  class NetworkClient {
    tryConnect(): void {
      throw new OfflineError("no network!");
    }
  }

  class UserService {
    constructor(private client: NetworkClient) {}

    login() {
      this.client.tryConnect();
    }
  }

  class App {
    constructor(private userService: UserService) {}
    run() {
      // 어디서 에러 처리를 하는 것이 더 의미 있는지 고민 필요!
      try {
        this.userService.login();
      } catch (error) {
        // catch로 error를 받는 순간 any 타입이 되어서 타입 정보를 잃어버림
        // 따라서 instanceof 사용 불가
        if (error instanceof OfflineError) {
        }
      }
    }
  }

  const client = new NetworkClient();
  const service = new UserService(client);
  const app = new App(service);
  app.run();
}
