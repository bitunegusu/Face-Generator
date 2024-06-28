function setup() {
  createCanvas(400, 400);
}


function draw() {
  background(0);
  console.log(mouseX,mouseY);
  
let center_pixel_left_x = 190
let center_pixel_left_y = 150
let pixel_width = 10
let pixel_height = 10
let color_hue = random(260,368)
let color_saturation = 90-(mouseY/5)
let color_light = 86

//background card
rectMode(CENTER)
colorMode(HSB)
fill(70,95,70)
square(200, 200, 400);
// Left side of heart outline
rectMode(CORNER)
noStroke();
fill(0);
rect(center_pixel_left_x, center_pixel_left_y, pixel_width, pixel_height);
rect(center_pixel_left_x-10, center_pixel_left_y-10, pixel_width, pixel_height);
rect(center_pixel_left_x-10, center_pixel_left_y-10, pixel_width, pixel_height);
rect(center_pixel_left_x-40, center_pixel_left_y-20, pixel_width*3, pixel_height);
rect(center_pixel_left_x-60, center_pixel_left_y-10, pixel_width*2, pixel_height);
rect(center_pixel_left_x-70, center_pixel_left_y, pixel_width, pixel_height*2);
rect(center_pixel_left_x-80, center_pixel_left_y+20, pixel_width, pixel_height*4);
rect(center_pixel_left_x-70, center_pixel_left_y+60, pixel_width, pixel_height*2);
rect(center_pixel_left_x-60, center_pixel_left_y+80, pixel_width, pixel_height);
rect(center_pixel_left_x-50, center_pixel_left_y+90, pixel_width, pixel_height);
rect(center_pixel_left_x-40, center_pixel_left_y+100, pixel_width, pixel_height);
rect(center_pixel_left_x-30, center_pixel_left_y+110, pixel_width, pixel_height);
rect(center_pixel_left_x-20, center_pixel_left_y+120, pixel_width, pixel_height);
rect(center_pixel_left_x-10, center_pixel_left_y+130, pixel_width, pixel_height);
rect(center_pixel_left_x, center_pixel_left_y+140, pixel_width, pixel_height);
  
//right side of heart outline
rect(center_pixel_left_x+10, center_pixel_left_y, pixel_width, pixel_height); 
rect(center_pixel_left_x+20, center_pixel_left_y-10, pixel_width, pixel_height);
rect(center_pixel_left_x+30, center_pixel_left_y-20, pixel_width*3, pixel_height);
rect(center_pixel_left_x+60, center_pixel_left_y-10, pixel_width*2, pixel_height);
rect(center_pixel_left_x+80, center_pixel_left_y, pixel_width, pixel_height*2);
rect(center_pixel_left_x+90, center_pixel_left_y+20, pixel_width, pixel_height*4);
rect(center_pixel_left_x+80, center_pixel_left_y+60, pixel_width, pixel_height*2);
rect(center_pixel_left_x+70, center_pixel_left_y+80, pixel_width, pixel_height);
rect(center_pixel_left_x+20, center_pixel_left_y, pixel_width, pixel_height*13);
rect(center_pixel_left_x+30, center_pixel_left_y-10, pixel_width, pixel_height*13);
rect(center_pixel_left_x+40, center_pixel_left_y-10, pixel_width, pixel_height*12);
rect(center_pixel_left_x+50, center_pixel_left_y-10, pixel_width, pixel_height*11);
rect(center_pixel_left_x+60, center_pixel_left_y, pixel_width, pixel_height*9);
rect(center_pixel_left_x+70, center_pixel_left_y, pixel_width, pixel_height*8);
rect(center_pixel_left_x+80, center_pixel_left_y+20, pixel_width, pixel_height*4);
rect(center_pixel_left_x+60, center_pixel_left_y+90, pixel_width, pixel_height);
rect(center_pixel_left_x+50, center_pixel_left_y+100, pixel_width, pixel_height);
rect(center_pixel_left_x+40, center_pixel_left_y+110, pixel_width, pixel_height);
rect(center_pixel_left_x+30, center_pixel_left_y+120, pixel_width, pixel_height);
rect(center_pixel_left_x+20, center_pixel_left_y+130, pixel_width, pixel_height);
rect(center_pixel_left_x+10, center_pixel_left_y+140, pixel_width, pixel_height); 



colorMode(HSB);
fill(color_hue,color_saturation,color_light);
//inside of heart right
rect(center_pixel_left_x+10, center_pixel_left_y+10, pixel_width, pixel_height*13);
rect(center_pixel_left_x+20, center_pixel_left_y, pixel_width, pixel_height*13);
rect(center_pixel_left_x+30, center_pixel_left_y-10, pixel_width, pixel_height*13);
rect(center_pixel_left_x+40, center_pixel_left_y-10, pixel_width, pixel_height*12);
rect(center_pixel_left_x+50, center_pixel_left_y-10, pixel_width, pixel_height*11);
rect(center_pixel_left_x+60, center_pixel_left_y, pixel_width, pixel_height*9);
rect(center_pixel_left_x+70, center_pixel_left_y, pixel_width, pixel_height*8);
rect(center_pixel_left_x+80, center_pixel_left_y+20, pixel_width, pixel_height*4);
//inside of heart left
rect(center_pixel_left_x, center_pixel_left_y+10, pixel_width, pixel_height*13);
rect(center_pixel_left_x-10, center_pixel_left_y, pixel_width, pixel_height*13);
rect(center_pixel_left_x-20, center_pixel_left_y-10, pixel_width, pixel_height*13);
rect(center_pixel_left_x-30, center_pixel_left_y-10, pixel_width, pixel_height*12);
rect(center_pixel_left_x-40, center_pixel_left_y-10, pixel_width, pixel_height*11);
rect(center_pixel_left_x-50, center_pixel_left_y, pixel_width, pixel_height*9);
rect(center_pixel_left_x-60, center_pixel_left_y, pixel_width, pixel_height*8);
rect(center_pixel_left_x-70, center_pixel_left_y+20, pixel_width, pixel_height*4);
  


//shadow left (mouse)
colorMode(HSB);
fill(color_hue,color_saturation,color_light-34);
rect(center_pixel_left_x-70, center_pixel_left_y+30, pixel_width, pixel_height*3);
rect(center_pixel_left_x-60, center_pixel_left_y+60, pixel_width, pixel_height*2);
rect(center_pixel_left_x-50, center_pixel_left_y+80, pixel_width, pixel_height);
rect(center_pixel_left_x-40, center_pixel_left_y+90, pixel_width, pixel_height);
rect(center_pixel_left_x-30, center_pixel_left_y+100, pixel_width, pixel_height);
rect(center_pixel_left_x-20, center_pixel_left_y+110, pixel_width, pixel_height);
rect(center_pixel_left_x-10, center_pixel_left_y+120, pixel_width, pixel_height);
rect(center_pixel_left_x, center_pixel_left_y+130, pixel_width*2, pixel_height);
  
//shadow right (mouse)
rect(center_pixel_left_x+80, center_pixel_left_y+30, pixel_width, pixel_height*3);
rect(center_pixel_left_x+70, center_pixel_left_y+60, pixel_width, pixel_height*2);
rect(center_pixel_left_x+60, center_pixel_left_y+80, pixel_width, pixel_height);
rect(center_pixel_left_x+50, center_pixel_left_y+90, pixel_width, pixel_height);
rect(center_pixel_left_x+40, center_pixel_left_y+100, pixel_width, pixel_height);
rect(center_pixel_left_x+30, center_pixel_left_y+110, pixel_width, pixel_height);
rect(center_pixel_left_x+20, center_pixel_left_y+120, pixel_width, pixel_height);



//highlight right
fill(color_hue,color_saturation,color_light+90);
rect(center_pixel_left_x-70, center_pixel_left_y+20, pixel_width, pixel_height);
rect(center_pixel_left_x+20, center_pixel_left_y, pixel_width, pixel_height);
rect(center_pixel_left_x-60, center_pixel_left_y, pixel_width, pixel_height*2);
rect(center_pixel_left_x-50, center_pixel_left_y, pixel_width, pixel_height*1);
rect(center_pixel_left_x-40, center_pixel_left_y-10, pixel_width*3, pixel_height);
rect(center_pixel_left_x-10, center_pixel_left_y, pixel_width, pixel_height);
rect(center_pixel_left_x, center_pixel_left_y+10, pixel_width*2, pixel_height);
  
// highlight left
rect(center_pixel_left_x+80, center_pixel_left_y+20, pixel_width, pixel_height);
rect(center_pixel_left_x+70, center_pixel_left_y, pixel_width, pixel_height*2);
rect(center_pixel_left_x+60, center_pixel_left_y, pixel_width, pixel_height*1);
rect(center_pixel_left_x+30, center_pixel_left_y-10, pixel_width*3, pixel_height);
rect(center_pixel_left_x-10, center_pixel_left_y, pixel_width, pixel_height);
  
//eyes
fill(0);
rectMode(CENTER)
rect(160, 200, 40);
rect(240, 200, 40);
//mouth
rect(200,250,10,10)
rect(190,245+(mouseY/200),10,10)
rect(210,245+(mouseY/200),10,10) 
rect(180,240+(mouseY/50),10,10)
rect(220,240+(mouseY/50),10,10)
//little white dots
fill(100);
rect(233+(mouseX/30),190+(mouseY/35),20);
rect(175-(mouseX/25),210-(mouseY/25),7);
rect(154+(mouseX/30),190+(mouseY/35), 20);
rect(255-(mouseX/25),210-(mouseY/25), 7);

//cheek
fill(353,69,89)
rect(160,230,30,10)
rect(240,230,30,10)

}