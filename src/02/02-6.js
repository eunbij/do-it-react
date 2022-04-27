function Shape (x, y){
    this.name = 'Shape';
    this.move(x, y);
};
//statice 함수를 선언하는 예제
Shape.create = function(x, y){return new Shape(x, y)};
//인스턴스 함수를 선언하는 예제
Shape.prototype.move = function(x, y){
    this.x = x;
    this.y = y;
};
Shape.prototype.area = function(){
    return 0;
};
//혹은
Shape.prototype = {
    move: function(x, y){
        this.x = x;
        this.y = y;
    },
    area: function(){
        return 0;
    }
};
var s = new Shape (0,0);
s.area(); //0


//Circle() 함수를 만드는 방법으로 자식 클래스를 생성한 예시
function Circle(x, y, radius){
    Shape.call(this,x,y);
    this.name = "Circle";
    this.radius = radius;
};
Object.assign(Circle.prototype, Shape.prototype, {
    area: function(){
        return this.radius * this.radius;
    }
});
var c = new Circle(0,0,10);
c.area(); //100

// 위의 코드를 ES6 클래스 표현식으로 변환한 코드
class Shape {
    static create(x, y){return new Shape(x,y)};
    name = 'Shape';
    constructor(x, y){
        this.move(x, y);
    }
    move(x, y){
        this.x = x;
        this.y = y;
    }
    area(){
        return 0;
    }
}
var s = new Shape(0,0);
s.area(); //0

// 위의 상속을 간결하게 작성하는 경우
class Circle extends Shape {
  constructor(x, y, radius){
      super(x, y);
      this.radius = radius;
  }
  area(){
      if(this.radius === 0) return super.area();
      return this.radius * this.radius;
  }
};
var c = new Circle(0,0,10);
c.area(); //100