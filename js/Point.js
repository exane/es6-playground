class Point {
    constructor(x = 0, y = 0) {
        if(!(this instanceof Point))
            return new Point(x, y);
        this.x = x;
        this.y = y;
    }

}

export default Point;