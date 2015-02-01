class Vector {
    constructor(x = 0, y = 0, z = 0){
        if(!(this instanceof Vector))
            return new Vector(x, y, z);
        this.x = x;
        this.y = y;
        this.z = z;
    }

    add(v){
        this.x += v.x;
        this.y += v.y;
        this.z += v.z;
        return this;
    }

    subtract(v){
        this.x -= v.x;
        this.y -= v.y;
        this.z -= v.z;
        return this;
    }

    multiply(v){
        this.x *= v.x;
        this.y *= v.y;
        this.z *= v.z;
        return this;
    }


    get abs(){
        return Math.sqrt(this.x * this.x + this.y * this.y + this.z * this.z);
    }

    get dim(){
        return this.z ? "3d" : "2d";
    }

}
export default Vector;