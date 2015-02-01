import Point from "./Point.js";
import Line from "./Line.js";

class Canvas {
    constructor(x = 600, y = 300){

        this.pointOfOrigin = x instanceof Point ? x : new Point(x, y);

        this.stack = [];

        this.create();
        this.init();
    }

    init(){
        this.drawXAxis();
        this.drawYAxis();
        this.canvas.addEventListener("click", this.onMousemove.bind(this));
    }

    onMousemove(e){
        this.pointOfOrigin.x = e.x;
        this.pointOfOrigin.y = e.y;
        this.update();
    }

    drawXAxis(){
        var ctx = this.ctx;
        ctx.beginPath();
        ctx.moveTo(this.pointOfOrigin.x, 0);
        ctx.lineTo(this.pointOfOrigin.x, this.canvas.clientHeight);
        ctx.stroke();
    }

    drawYAxis(){
        var ctx = this.ctx;
        ctx.beginPath();
        ctx.moveTo(0, this.pointOfOrigin.y);
        ctx.lineTo(this.canvas.clientWidth, this.pointOfOrigin.y);
        ctx.stroke();
    }

    create(){
        this.canvas = document.createElement("canvas");
        this.canvas.setAttribute("id", "canvas");
        this.canvas.setAttribute("height", "600");
        this.canvas.setAttribute("width", "1200");
        document.body.appendChild(this.canvas);
    }

    get ctx(){
        return this.canvas.getContext("2d");
    }

    clear(){
        this.ctx.clearRect(0, 0, this.canvas.clientWidth, this.canvas.clientHeight);
    }

    update(){
        this.clear();
        var self = this;
        this.drawXAxis();
        this.drawYAxis();
        this.stack.forEach(function(obj){
            self.draw(obj.point, obj.vector, obj._flag);
        });
    }

    draw(point, vector = null, _flag = false){
        if(!_flag){
            this.stack.push({point: point, vector: vector, _flag: true});
        }

        if(point instanceof Line) return this.drawLine(point);
        if(vector == null) return this.drawPoint(point);
        var ctx = this.ctx;
        ctx.beginPath();
        ctx.moveTo(this.pointOfOrigin.x + point.x, this.pointOfOrigin.y - point.y);
        ctx.lineTo(this.pointOfOrigin.x + vector.x, this.pointOfOrigin.y - vector.y);
        ctx.stroke();
    }

    drawPoint(point) {
        this.ctx.beginPath();
        this.ctx.arc(this.pointOfOrigin.x + point.x, this.pointOfOrigin.y - point.y, 5, 0, 2*Math.PI);
        this.ctx.fill();
        this.ctx.stroke();
    }

    drawLine(line){
        var ctx = this.ctx;
        var n = this.canvas.clientHeight;

        for(var i = -this.pointOfOrigin.x; i < n; i++) {
            var x, y;
            x = this.pointOfOrigin.x + line.positionVec.x + i * line.vector.x;
            y = this.pointOfOrigin.y - line.positionVec.y - i * line.vector.y;
            //ctx.fillRect(x, y, 1, 1);
            ctx.moveTo(this.pointOfOrigin.x + line.positionVec.x + (i - 1) * line.vector.x, this.pointOfOrigin.y - line.positionVec.y - (i - 1) * line.vector.y);
            ctx.lineTo(x, y);
            ctx.stroke();

        }
        ctx.stroke();


        ctx.stroke();
    }
}

export default Canvas;