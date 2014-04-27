/**
 * Created by Kodukas on 26.04.14.
 */

ButterRenderer=function (butterAppIn) {
    this.container=butterAppIn;
    this.queue=new Array();
    this.init();
    this.bgcolor="#000000";
    return this;
}

ButterRenderer.prototype.init=function() {
    this.container.ctx.fillStyle=this.bgcolor;
    this.container.ctx.fillRect(0,0,this.container.sizeVector.x,this.container.sizeVector.y);
    this.start();
}

ButterRenderer.prototype.render=function() {
    this.clearScreen();
    this.queue.forEach(function(object)
    {
        object.draw();
    });
}

ButterRenderer.prototype.start=function()
{
    var t=this;
    setInterval(function(){t.render();},30);
}

ButterRenderer.prototype.addToQueue=function(object) {
    this.queue.push(object);
}

ButterRenderer.prototype.clearScreen=function() {
    this.container.ctx.fillStyle=this.bgcolor;
    this.container.ctx.fillRect(0,0,this.container.sizeVector.x,this.container.sizeVector.y);
}