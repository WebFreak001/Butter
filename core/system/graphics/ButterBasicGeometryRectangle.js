/**
 * Created by Kodukas on 27.04.14.
 */

ButterBasicGeometryRectangle=function(locationVector, sizeVector,color,app) {
    this.loc=locationVector;
    this.size=sizeVector;
    this.color=color;
    this.app=app;
    this.app.renderer.addToQueue(this);
    return this;
}

ButterBasicGeometryRectangle.prototype.draw=function() {
    this.app.ctx.fillStyle=this.color;
    this.app.ctx.fillRect(this.loc.x,this.loc.y,this.size.x,this.size.y);
}

