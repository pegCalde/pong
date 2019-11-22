class ball
{
    constructor(r, x, y, vx, vy, color)
    {
        this.x = x;
        this.y = y;
        this.r = r;
        this.vx = vx;
        this.vy = vy;
        this.color = color;
    }
    getX()
    {
        return this.x;
    }
    getY()
    {
        return this.y;
    }
    getR()
    {
        return this.r;
    }
    getVx()
    {
        return this.vx;
    }
    getVy()
    {
        return this.vy;
    }
    getColor()
    {
        return this.color;
    }
    setX(coor_x)
    {
        this.x = coor_x;
    }
    setY(coor_y)
    {
         this.y = coor_y;
    }
    setR(rayon)
    {
         this.r = rayon;
    }
    setVx(vitX)
    {
         this.vx = vitX;
    }
    setVy(vitY)
    {
         this.vy = vitY;
    }
    setColor(couleur)
    {
         this.color = couleur;
    }

}
