
import Vector from "./Vector.js";
import Canvas from "./Canvas.js";
import Point from "./Point.js";
import Line from "./Line.js";

(function main(){
    var canvas = new Canvas(Point(600, 300));
    var v1 = Vector(1,1);
    var v2 = Vector(2,2);

    v1.add(v2).multiply(v2).multiply(v1);
    var abs = v1.abs;

    canvas.draw(Point(-50, 0), Vector(-50, 50));
    canvas.draw(Point(-50, 50), Vector(0, 80));
    canvas.draw(Point(0, 80), Vector(50, 50));
    canvas.draw(Point(50, 50), Vector(50, 0));
    canvas.draw(Point(-50, 50), Vector(50, 50));

    canvas.draw(Line(Vector(0,0), Vector(100, 50)));
    canvas.draw(Line(Vector(100,0), Vector(-100, 100)));
    //canvas.draw(Line(Vector(100,0), Vector(-200, 50)));
    canvas.draw(Point(2/3*100, 2/3*50));

})();