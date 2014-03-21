
Renderer = function(gameObj)
{
  this.renderContext = gameObj.canvas.getContext('2d');
  this.gameOperating = gameObj;
  this.renderQueue = new Array();
  this.init(this.gameOperating.dim.getWidth(),this.gameOperating.dim.getHeight());
  this.defaultFillStyle="#000000";
  return this;
};

Renderer.prototype.init = function(w,h)
{
  this.renderContext.fillStyle=this.defaultFillStyle;
  this.renderContext.fillRect(0,0,w,h);
};

Renderer.prototype.render = function()
{
  this.renderQueue.forEach(function(entry)
  {
    entry.draw();
  });
};

Renderer.prototype.start = function()
{
  var t=this;
  setInterval(function(){ t.render(); },50);
};

Renderer.prototype.addToQueue = function(element)
{
  this.renderQueue.push(element);
  console.log(this.renderQueue);
  return true;
};

Renderer.prototype.removeFromQueue = function(element)
{
  var index = this.renderQueue.indexOf(element);
  if (index > -1) 
  {
    this.renderQueue.splice(index, 1);
  }  
};