const canvasSketch = require('canvas-sketch');

const settings = {
  dimensions: [ 600, 600 ]
};

const sketch = () => {
  return ({ context, width, height }) => {
    context.fillStyle = 'black';
    context.fillRect(0, 0, width, height);
    context.lineWidth=width*0.01

    //version con porcentajes

    const w = width * 0.10;
    const h = height *0.10;
    const gap = width * 0.03;
    const ix = width *0.17
    const iy = height *0.17;

    const off = width *0.02;
    let x,y;

    for(let i = 0 ; i<5 ; i ++){
      for(let j = 0 ; j<5; j++){

        x = ix +(w+gap) *i
        y = iy+ (h+gap) * j

          context.beginPath()
      context.rect(x,y,w, h)
      context.strokeStyle = "#FFFFFF"
      context.stroke()
      if(Math.random()>0.5){
          context.beginPath()
          context.rect(x+off/2, y + off/2, w-off, h -off)
          context.strokeStyle = "#FFFFFF"
          context.stroke()

      }

      }
      
      
  }

    /* version sin porcentajes 
    for(let i = 0 ; i<5 ; i ++){
      for(let j = 0 ; j<5; j++){

          let w = 60
          let h = 60
          let gap = 20
          let x= 100 + (w + gap) * i
          let y = 100 + (h + gap) * j

          context.beginPath()
      context.rect(x,y,w, h)
      context.stroke()
      if(Math.random()>0.5){
          context.beginPath()
          context.rect(x+8, y + 8, w-16, h -16)
          context.stroke()

      }

      }
      
      
  } */
  };
};

canvasSketch(sketch, settings);
