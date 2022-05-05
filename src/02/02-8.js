/* ES6의 라이브러리 의존성 관리 방법 */
//1. import 구문을 사용해 지정된 파일(MyModule.js)의 기본 default로 공유하는 모듈을 부름
import MyModule from './MyModule.js';
//2. 이름을 맞춰 모듈 안의 특정 함수 혹은 변수를 참조할 수 있음
import { ModuleName } from './MyModule.js';
//3. 객체 구조 할당과 유사하게 특정 모듈을 가져올 때 이름이 충돌할 경우 다른 이름으로 변경하여 불러들일 수 있음
import { ModuleName as RenamedModuleName } from './MyModule.js';
function Func() { 
    MyModule();
} 
//4. 변수나 클래스의 이름을 다른 파일에서 따로 참조할 수 있도록 정의
export const CONST_VALUE = 0;
//5. 변수나 클래스의 이름을 다른 파일에서 따로 참조할 수 있도록 정의
export class MyClass {}
//6. 현재 파일이 다른 파일에서 기본default로 참조하게 되는 항목을 정의
export default new Func();
