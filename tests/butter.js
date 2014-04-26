/**
 * Created by Kodukas on 25.04.14.
 */

ButterApp=function(appName,sizevector) {
    this.name="name";
    this.sizeVector=sizevector;
    this.canvas=document.getElementById("appSpace");
    this.ctx=this.canvas.getContext('2d');

    return this;
}

ButterApp.prototype.fullDisplayArea=function()
{
    this.sizeVector.x=this.canvas.width;
    this.sizeVector.y=this.canvas.height;
}

ButterApp.prototype.run=function()
{
    this.renderer=new ButterRenderer(this);
}/**
 * Created by Kodukas on 26.04.14.
 */

ButterRenderer=function (butterAppIn) {
    this.container=butterAppIn;
    this.init();
    this.bgcolor="#000000";
    return this;
}

ButterRenderer.prototype.init=function() {
    this.container.ctx.fillStyle=this.bgcolor;
    this.container.ctx.fillRect(0,0,this.container.sizeVector.x,this.container.sizeVector.y);
}/**
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