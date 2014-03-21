
Game = function(canvasObj)
{
  if(this.canvasObj!='null')
  {
    this.canvas = document.getElementById(canvasObj);
    this.dim=new Dimension(this.canvas.width,this.canvas.height);
    this.renderer=undefined;
    this.packetHandler=undefined;
    return this;
  }
  else
  {
    console.error("Faulty canvas passed to Game constructor!");
    return null;
  }
};

Game.prototype.getRenderer = function()
{
  return this.renderer;
};

Game.prototype.attachRenderer = function()
{
  this.renderer=new Renderer(this);
  console.log("Attached renderer to game: ");
  console.log(this.renderer);
};

Game.prototype.mousemoved = function(event) 
{
  var data=new Array();
  data.push(event.clientX-this.canvas.offsetLeft+1);
  data.push(event.clientY-this.canvas.offsetTop+1);
  this.packetHandler.sendPacket("mousemoved",data);
};

Game.prototype.attachPacketHandler = function()
{
  this.packetHandler=new PacketHandler(this);
  this.canvas.addEventListener("mousemove",this.mousemoved.bind(this),false);

  console.log("Attached packet handler to game: ");
  console.log(this.packetHandler);
};

Game.prototype.getPacketHandler = function()
{
  return this.packetHandler;
};