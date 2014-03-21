
Dimension= function(x,y)
{
    this.w=x;
    this.h=y;
    return this;
};

Dimension.prototype.getWidth = function()
{
  return this.w;
};

Dimension.prototype.getHeight = function()
{
  return this.h;
};

Dimension.prototype.setWidth = function(x)
{
  this.w=x;
};

Dimension.prototype.setHeight = function(y) 
{
  this.h=y;
};

Dimension.prototype.setSize = function(x,y)
{
  this.w=x;
  this.h=y;
};