import { Random, Console } from '@woowacourse/mission-utils'; // 이런건 원래 class 밖에서 사용

class App {
  constructor() {
    this.computerInputDigits = [];
    this.userInputDigits = '';
    this.randomedNumber = '';
    this.strikeCount = '';
    this.ballCount = '';
  }

  async play() {
    this.printGameStart(); // 게임 시작 프린트
    this.computuerDigitsInitializeVariables();
    this.generateComputerInput(); // 컴퓨터 랜덤 함수 생성
    // Console.print(this.printThreestrikeCountGameEndMessage());

    while (this.strikeCount !== 3) {
      await this.receiveUserInput(); // 유저 값 받기
      this.userDigitinitializeVariables();
      if (this.validateUserInput() === true) {
        this.getstrikeCountAndBallCount(); // 스트라이크 볼 갯수 - 세기
        this.printstrikeCountAndBallResult(); // 스트라이크 볼 갯수 - 프린트
        this.printThreestrikeCountGameEndMessage();
        // Console.print(this.printThreestrikeCountGameEndMessage());
      }
    }
    this.strikeCount = '';
    await this.prcessGameRestartOrExit(); // 프로그램 종료
  }

  
  printGameStart() {
    Console.print('숫자 야구 게임을 시작합니다. ');
  }

  generateComputerInput() {
    while (this.computerInputDigits.length < 3) {
      this.randomedNumber = Random.pickNumberInRange(1, 9);
      if (!this.computerInputDigits.includes(this.randomedNumber)) {
        this.computerInputDigits.push(this.randomedNumber);
      }
    }
    Console.print('컴퓨터 숫자 ' + this.computerInputDigits);
  }

  async receiveUserInput() {
    this.userInputDigits = await Console.readLineAsync('숫자를 입력해주세요 : ');
    Console.print('입력된 값: ' + this.userInputDigits);
  }

  validateUserInput() {
    if (this.userInputDigits.length !== 3) {
      throw new Error('[ERROR]세 자리를 입력해 주세요.');
    } else if (this.userInputDigits[0] === this.userInputDigits[1] || this.userInputDigits[1] === this.userInputDigits[2] || this.userInputDigits[0] === this.userInputDigits[2]) {
      throw new Error('[ERROR]서로 다른 숫자를 입력해 주세요.');
    }
    return true;
  }

  computuerDigitsInitializeVariables() {
    this.computerInputDigits.length = 0;
  }

  userDigitinitializeVariables() {
    this.strikeCount = 0;
    this.ballCount = 0;
  }

  getstrikeCountAndBallCount() {
    for (let i = 0; i < 3; i++) {
      for (let j = 0; j < 3; j++) {
        if (Number(this.userInputDigits[i]) === this.computerInputDigits[j]) {
          if (i === j) {
            this.strikeCount += 1;
          }
          if (i !== j) {
            this.ballCount += 1;
          }
        }
      }
    }
  }

  printstrikeCountAndBallResult() {
    // 스트라이크 볼 결과 프린트
    if (this.strikeCount === 0 && this.ballCount === 0) {
      Console.print('낫싱');
    }
    if (this.strikeCount > 0 && this.strikeCount < 3 && this.ballCount === 0) {
      Console.print(`${this.strikeCount}스트라이크`);
    }
    if (this.strikeCount === 0 && this.ballCount > 0) {
      Console.print(`${this.ballCount}볼`);
    }
    if (this.strikeCount > 0 && this.ballCount > 0) {
      Console.print(`${this.ballCount}볼 ${this.strikeCount}스트라이크`);
    }
  }

  printThreestrikeCountGameEndMessage() {
    if (this.strikeCount === 3) {
      Console.print('3스트라이크');
      Console.print('3개의 숫자를 모두 맞히셨습니다! 게임 종료');
    }
    return true;
  }

  async prcessGameRestartOrExit() {
    this.userChoice = await Console.readLineAsync('게임을 새로 시작하려면 1, 종료하려면 2를 입력하세요. : ');
    if (this.userChoice === '1') {
      await this.play(); // 게임 재시작
    }
    if (this.userChoice === '2') {
      Console.print('게임을 종료합니다.');
      return; // 프로그램 완전 종료
    }
  }
}

export default App;
