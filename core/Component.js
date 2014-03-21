
Component = function(x,y,dim,game)
{
  this.xPos=x;
  this.yPos=y;
  this.dimension=dim;
  this.sprite=undefined;
  this.game=game;

  return this;
}

Component.prototype.setSprite = function(path)
{
  this.sprite=new Image();
  this.sprite.src=path;
  console.log(this.sprite);
};

Component.prototype.draw = function() 
{
  if(typeof(this.sprite) != "undefined")
  {
    this.game.getRenderer().renderContext.drawImage(this.sprite,this.xPos,this.yPos,this.dimension.w,this.dimension.h);
  
  }
  else
  {
    this.game.getRenderer().renderContext.fillStyle="#FF00FF";
    this.game.getRenderer().renderContext.fillRect(this.xPos, this.yPos, this.dimension.w, this.dimension.h);
    this.game.getRenderer().renderContext.fillStyle=this.game.getRenderer().defaultFillStyle;
  }
};

Component.prototype.update = function()
{
  
};