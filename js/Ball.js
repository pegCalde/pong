let number_ball = 0;
let numberMAX_ball = 200;

class Ball
{
        x;
        y;
        r;
        speed_x;
        speed_y;

        constructor(x_init, y_init, rayon, speedX, speedY)
        {

                if(number_ball < numberMAX_ball)
                {
                        this.x = x_init;
                        this.y = y_init;
                        this.r = rayon;
                        this.speed_x = speedX;
                        this.speed_y = speedY;
                        number_ball ++;
                }
        }

        get x()
        {
                return this.x;
        }
        get y()
        {
                return this.y;
        }
        get r()
        {
                return this.r;
        }



        set x(coor_x)
        {
                this.x = coor_x;
        }
        set y(coor_y)
        {
                this.y = coor_y;
        }
        set r(rayon)
        {
                this.r = rayon;
        }
}




