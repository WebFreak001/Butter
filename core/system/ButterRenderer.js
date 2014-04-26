/**
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
}