
## TO-DO LIST

야구게임: 1부터 9까지 서로 다른 수로 이루어진 3자리의 수를 맞추는 게임
---

게임 시작 문구 출력
 - [X] 시작 문구: '숫자 야구 게임을 시작합니다.'

컴퓨터 숫자 생성
 - [X] 컴퓨터는 1에서 9까지 서로 다른 임의의 수 3개를 선택
 
예외처리_사용자가 잘못된 값을 입력한 경우 
 - [X] 숫자 자리수: 3자리 이외 다른 수
 - [X] 같은 숫자인 경우: 1-2 / 2-3 / 1-3 / 1-2-3
 - [X] `throw`문을 사용해 예외를 발생
 - [X] 이 후, 애플리케이션은 종료
  
플레이어 숫자 선택
 - [X] 문구: '숫자를 입력해주세요: '

- 입력한 숫자에 대한 결과를 출력
힌트
 - [X] 같은 수가 같은 자리에 있으면 -> 스트라이크
 - [X] 다른 자리에 있으면 -> 볼
- [X] 같은 수가 전혀 없으면 -> 낫싱이란 힌트 
 - [X] 그 힌트를 이용해서 먼저 상대방(컴퓨터)의 수를 맞추면 승리

게임 종료
 - [X] 이 같은 과정을 반복해 컴퓨터가 선택한 3개의 숫자를 모두 맞히면 게임이 종료
 - [X] 게임을 종료한 후 게임을 다시 시작하거나 완전히 종료할 수 있다.
   - [X] 1 -> 게임 재시작
   - [X] 2 -> 종료

---

## 🎯 프로그래밍 요구 사항

 - [X] Node.js 18.17.1 버전에서 실행 가능해야 한다. **Node.js 18.17.1에서 정상적으로 동작하지 않을 경우 0점 처리한다.**
 - [X] 프로그램 실행의 시작점은 `App.js`의 `play` 메서드이다. 아래와 같이 프로그램을 실행시킬 수 있어야 한다.

**예시**

```javascript
const app = new App();
app.play();
```

 - [X] `package.json`을 변경할 수 없고 외부 라이브러리(jQuery, Lodash 등)를 사용하지 않는다. 순수 Vanilla JS로만 구현한다.
 - [ ] [JavaScript 코드 컨벤션](https://github.com/woowacourse/woowacourse-docs/tree/main/styleguide/javascript)을 지키면서 프로그래밍 한다
 - [X] 프로그램 종료 시 `process.exit()`를 호출하지 않는다.
 - [X] 프로그램 구현이 완료되면 `ApplicationTest`의 모든 테스트가 성공해야 한다. **테스트가 실패할 경우 0점 처리한다.**
 - [X] 프로그래밍 요구 사항에서 달리 명시하지 않는 한 파일, 패키지 이름을 수정하거나 이동하지 않는다.

### 라이브러리

 - [X] `@woowacourse/mission-utils`의 `Random` 및 `Console` API를 사용하여 구현해야 한다.
 - [X] Random 값 추출은 `Random.pickNumberInRange()`를 활용한다.
 - [X] 사용자의 값을 입력 받고 출력하기 위해서는 `Console.readLineAsync`, `Console.print`를 활용한다.

#### 사용 예시

```javascript
const computer = [];
while (computer.length < 3) {
  const number = MissionUtils.Random.pickNumberInRange(1, 9);
  if (!computer.includes(number)) {
    computer.push(number);
  }
}
```

---

## ✏️ 과제 진행 요구 사항

 - [ ] 미션은 [javascript-baseball](https://github.com/woowacourse-precourse/javascript-baseball-6/) 저장소를 Fork & Clone해 시작한다.
 - [X] **기능을 구현하기 전 `docs/README.md`에 구현할 기능 목록을 정리**해 추가한다.
 - [ ] 과제 진행 및 제출 방법은 [프리코스 과제 제출](https://github.com/woowacourse/woowacourse-docs/tree/master/precourse) 문서를 참고한다.
