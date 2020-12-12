namespace CanvasTest{

let canvas: HTMLCanvasElement = <HTMLCanvasElement>document.getElementById("myCanvas");
let crc2: CanvasRenderingContext2D = <CanvasRenderingContext2D>canvas.getContext("2d");

crc2.fillStyle = "#73AEE6";
crc2.fillRect(200, 700, 800, 400);
}