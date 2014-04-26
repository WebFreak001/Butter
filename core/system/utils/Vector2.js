/**
 * Created by Kodukas on 25.04.14.
 */

Vector2=function(x,y) {
    this.x=x;
    this.y=y;
    return this;
}

Vector2.prototype.copy=function(vector) {
    this.x=vector.x;
    this.y=vector.y;
}

Vector2.prototype.equals=function(vector) {
    return this.x==vector.x && this.y==vector.y;
}