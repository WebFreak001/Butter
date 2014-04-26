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
}