import React from 'react';

export default class ScrollSpy extends React.PureComponent {
    constructor(props) {
        super(props);
        this.setRef = this.setRef.bind(this);
        this.checkPosition = this.checkPosition.bind(this);
        // 1. 윈도우의 스크롤 이동 이벤트를 감지하여 checkPosition() 함수가 실행되도록 함
        window.addEventListener('scroll', this.checkPosition);
    }
    setRef(ref) {
        // 2. ref 프로퍼티에서 반환된 객체를 컴포넌트 변수에 할당
        this.ref = ref;
    }
    checkPosition() {
        if (this.ref.getBoundingClientRect().top < window.innerHeight) {
            // 3. 현재 DOM 객체의 위치가 스크롤 화면 안팎인지 측정
            console.log(('enter'));
        }else{
            console.log('exit');
        }
    }
    componentDidMount() {
        this.checkPosition();
    }
    componentWillUnmount() {
        // 4. 컴포넌트가 소멸할 때 화면 스크롤 감시 함수를 메모리에서 제거
        window.removeEventListener('scroll', this.checkPosition);
    }
    render() {
        return (
            <div ref={this.setRef} />
        );
    }
}

export default ScrollSpy;