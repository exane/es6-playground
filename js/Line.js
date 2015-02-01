class Line {
    constructor(positionVec, vector){
        if(!(this instanceof Line)) return new Line(positionVec, vector);

        this.positionVec = positionVec;
        this.vector = vector;
    }
}

export default Line;