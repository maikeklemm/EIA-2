namespace L09_Skipiste {

  

export function drawBackground(): void {
    console.log("Background");

    let gradient: CanvasGradient = crc2.createLinearGradient(0, 0, 0, crc2.canvas.height);
    gradient.addColorStop(0, "#38D4F2");
    gradient.addColorStop(golden, "#5DB3F4");


    crc2.fillStyle = gradient;
    crc2.fillRect(0, 0, crc2.canvas.width, crc2.canvas.height);
}

export function drawSun(_position: Vekktor): void {
    console.log("Sun", _position);

    let r1: number = 30;
    let r2: number = 150;
    let gradient: CanvasGradient = crc2.createRadialGradient(0, 0, r1, 0, 0, r2);

    gradient.addColorStop(0, "#F2D080");
    gradient.addColorStop(1, "HSLA(42, 47%, 100%, 0)");

    crc2.save();
    crc2.translate(_position.x, _position.y);
    crc2.fillStyle = gradient;
    crc2.arc(0, 0, r2, 0, 2 * Math.PI);
    crc2.fill();
    crc2.restore();
}


export function drawCloud(_position: Vekktor, _size: Vekktor): void {
    console.log("Cloud", _position, _size);

    let nParticles: number = 40;
    let radiusParticle: number = 70;
    let particle: Path2D = new Path2D();
    let gradient: CanvasGradient = crc2.createRadialGradient(0, 0, 0, 0, 0, radiusParticle);

    particle.arc(0, 0, radiusParticle, 0, 2 * Math.PI);
    gradient.addColorStop(0, "HSLA(203, 20%, 97%, 0.5)");
    gradient.addColorStop(1, "HSLA(203, 20%, 97%, 0)");

    crc2.save();
    crc2.translate(_position.x, _position.y);
    crc2.fillStyle = gradient;

    for (let drawn: number = 0; drawn < nParticles; drawn++) {
        crc2.save();
        let x: number = (Math.random() - 0.5) * _size.x;
        let y: number = - (Math.random() * _size.y);
        crc2.translate(x, y);
        crc2.fill(particle);
        crc2.restore();
    }
    crc2.restore();
}

export function drawPiste(): void {
    console.log("drawing Piste");
    crc2.beginPath();
    crc2.moveTo(0, 150);
    crc2.lineTo(1080, 470);
    crc2.lineTo(1080, 720);
    crc2.lineTo(0, 720);
    crc2.closePath();

    let gradient: CanvasGradient = crc2.createLinearGradient(0, 100, 0, 920);
    gradient.addColorStop(0, "#CFDDE6");
    gradient.addColorStop(0.9, "white");

    crc2.fillStyle = gradient;
    crc2.fill();
}



export function drawHouse(_position:Vekktor){
    console.log("drawing House")

    crc2.save();
    crc2.translate(_position.x, _position.y);
    crc2.scale(0.8,0.8);

    crc2.beginPath();
    crc2.moveTo(0,0);
    crc2.lineTo(100,0);
    crc2.lineTo(100,-200);
    crc2.lineTo(0,-300);
    crc2.closePath;

    crc2.fillStyle="#830DA6";
    crc2.fill();

    crc2.restore();
    crc2.save();
    crc2.translate(1080, 100);

    crc2.beginPath();
    crc2.moveTo(0,0);
    crc2.lineTo(-1080,-75);
    
    crc2.lineWidth= 8;
    crc2.strokeStyle="#F2B31F";
    crc2.stroke();

    crc2.restore();
    
}
export function drawLift(_position:Vekktor){

    console.log("drawing Lift")

    crc2.save();
    crc2.translate(_position.x, _position.y);

   
    

    crc2.fillStyle = "#830DA6";
    
   crc2.fillRect(-400,-24,110,110);
  

    crc2.restore();


}


}