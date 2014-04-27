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
}