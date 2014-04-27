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

ButterApp.prototype.key=function(e) {
    console.log(e.charCode);
    var data=new Array();
    data.push(e.charCode);
    this.packets.sendPacket("motionkeypress",data);
}
ButterApp.prototype.run=function() {
    this.renderer=new ButterRenderer(this);
    this.packets=new ButterPacketHandler(this);
    document.addEventListener("keypress",this.key.bind(this),false);
}

/**
 * Created by Kodukas on 26.04.14.
 */

ButterPacketHandler=function(butterAppIn) {
    this.container=butterAppIn;
    this.listeners=new Array();
    return this;
}

ButterPacketHandler.prototype.sendPacket=function(type,data) {
    this.listeners.forEach(function(entry)
    {
       entry.getPacket(type,data);
    });
}

ButterPacketHandler.prototype.addListener=function(object) {
    this.listeners.push(object);
}

ButterPacketHandler.prototype.removeListener=function(object) {
    var index = this.listeners.indexOf(object);
    if (index > -1) {
        this.listeners.splice(index, 1);
    }
}/**
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
}/**
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