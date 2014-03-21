
GuiButton = function(x,y,dim,text,game)
{
  this.xPos=x;
  this.yPos=y;
  this.dim=dim;
  this.game=game;
  this.sprite=new Image();
  this.sprite.src="src/core/assets/guiButton.png";
  this.text=text;
  this.font=undefined;
  this.determineFontSize();
  return this;
};

GuiButton.prototype.draw = function()
{
  if(!this.hover)
  {
    this.game.getRenderer().renderContext.fillStyle="#FFFFFF";
    this.game.getRenderer().renderContext.drawImage(this.sprite,this.xPos,this.yPos,this.dim.w,this.dim.h);
    this.game.getRenderer().renderContext.font=this.font;
    this.game.getRenderer().renderContext.fillText(this.text, this.xPos+(this.dim.w/2-this.game.getRenderer().renderContext.measureText(this.text).width/2),this.yPos+(this.dim.h/2+this.game.getRenderer().renderContext.measureText("M").width/2-3));
 }
 else
 {
     this.game.getRenderer().renderContext.fillStyle="#000000";
      this.game.getRenderer().renderContext.drawImage(this.sprite,this.xPos,this.yPos,this.dim.w,this.dim.h);
      this.game.getRenderer().renderContext.font=this.font;
      this.game.getRenderer().renderContext.fillText(this.text, this.xPos+(this.dim.w/2-this.game.getRenderer().renderContext.measureText(this.text).width/2),this.yPos+(this.dim.h/2+this.game.getRenderer().renderContext.measureText("M").width/2-3));
 }
};

GuiButton.prototype.determineFontSize = function()
{
  this.font=(this.dim.h-4)+"px Arial";
  console.log(this.game.getRenderer().renderContext.font);
};

GuiButton.prototype.recievePacket = function(type, dataArray)
{
  if(dataArray[0]>=this.xPos && dataArray[0]<=this.xPos+this.dim.w && dataArray[1]>=this.yPos && dataArray[1]<=this.yPos+this.dim.h)
  {
    this.hover=true;
     
  }
  else
  {
    this.hover=false;
  }
};