
PacketHandler = function(game)
{
  this.game=game;
  this.packetQueue=new Array(); //unused until needed
  this.packetListeners=new Array();
  return this;
}

PacketHandler.prototype.sendPacket = function(packetType, dataArray)
{
    this.packetListeners.forEach(function(entry)
    {
      entry.recievePacket(packetType,dataArray);
    });
};

PacketHandler.prototype.addPacketListener = function(element)
{
  this.packetListeners.push(element);
  console.log(element);
};

PacketHandler.prototype.removePacketListener = function(element)
{
  var index = this.packetListeners.indexOf(element);
  if (index > -1) 
  {
    this.packetListeners.splice(index, 1);
  }  
};