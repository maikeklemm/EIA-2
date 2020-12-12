namespace L08_Skipiste {
    interface Vector {
        x: number;
        y: number;
    }

    window.addEventListener("load", handleLoad);
    let crc2: CanvasRenderingContext2D;
    let golden: number = 0.38;

    function handleLoad(_event: Event): void {
        let canvas: HTMLCanvasElement | null = document.querySelector("canvas");
        if (!canvas)
            return;
        crc2 = <CanvasRenderingContext2D>canvas.getContext("2d");

        let horizon: number = crc2.canvas.height * golden;


        let posMountains: Vector = { x: 0, y: horizon };



        drawBackground();
        drawSun({ x: 900, y: 75 });
        drawCloud({ x: 740, y: 175 }, { x: 250, y: 75 });
        drawMountains(posMountains, 75, 200, "#CCCCCC", "#FFFFFF");
        drawPiste();
        // drawTrees(8, posTreesStart, posTreesEnd, 0.1, 0.37, 1.4);
        // // posTreesStart.x = posStreet.x + streetWidthBack / 2 + treesOffsetBack;
        // // posTreesEnd.x = posTreesEnd.x + streetWidthFront + 2 * treesOffsetFront;
        // drawTrees(8, posTreesStart, posTreesEnd, 0.1, 0.37, 1.4);
        // drawLift({ x: 900, y: 75 });
        // drawHouse();
        drawSkier({ x: 0, y: 0 });
        drawSnow({ x: 0, y: 0 });

    }

    function drawTrees(_nTrees: number, _posStart: Vector, _posEnd: Vector, _minScale: number, _stepPos: number, _stepScale: number): void {
        console.log("Trees", _posStart, _posEnd);
        let transform: DOMMatrix = crc2.getTransform();
        let step: Vector = {
            x: (_posEnd.x - _posStart.x) * _stepPos,
            y: (_posEnd.y - _posStart.y) * _stepPos
        };

        crc2.translate(_posStart.x, _posStart.y);
        crc2.scale(_minScale, _minScale);

        do {
            drawTree();

            crc2.translate(step.x, step.y);
            crc2.scale(_stepScale, _stepScale);

        } while (--_nTrees > 0);

        crc2.setTransform(transform);
    }

    function drawTree(): void {
        console.log("Tree");
        let nBranches: number = 50;
        let maxRadius: number = 60;
        let branch: Path2D = new Path2D();
        branch.arc(0, 0, maxRadius, 0, 2 * Math.PI);

        crc2.fillStyle = "brown";
        crc2.fillRect(0, 0, 20, -200);

        crc2.save();
        crc2.translate(0, -120);

        do {
            let y: number = Math.random() * 350;
            let size: number = 1 - y / 700;
            let x: number = (Math.random() - 0.5) * 2 * maxRadius;

            crc2.save();
            crc2.translate(0, -y);
            crc2.scale(size, size);
            crc2.translate(x, 0);

            let colorAngle: number = 120 - Math.random() * 60;
            let color: string = "HSLA(" + colorAngle + ", 50%, 30%, 0.5)";

            crc2.fillStyle = color;
            crc2.fill(branch);

            crc2.restore();
        } while (--nBranches > 0);
        crc2.restore();
    }

    function drawBackground(): void {
        console.log("Background");

        let gradient: CanvasGradient = crc2.createLinearGradient(0, 0, 0, crc2.canvas.height);
        gradient.addColorStop(0, "#38D4F2");
        gradient.addColorStop(golden, "#5DB3F4");


        crc2.fillStyle = gradient;
        crc2.fillRect(0, 0, crc2.canvas.width, crc2.canvas.height);
    }

    function drawSun(_position: Vector): void {
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


    function drawCloud(_position: Vector, _size: Vector): void {
        console.log("Cloud", _position, _size);

        let nParticles: number = 40;
        let radiusParticle: number = 70;
        let particle: Path2D = new Path2D();
        let gradient: CanvasGradient = crc2.createRadialGradient(0, 0, 0, 0, 0, radiusParticle);

        particle.arc(0, 0, radiusParticle, 0, 2 * Math.PI);
        gradient.addColorStop(0, "HSLA(0, 100%, 100%, 0.5)");
        gradient.addColorStop(1, "HSLA(0, 100%, 100%, 0)");

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

    function drawPiste(): void {
        console.log("drawing Piste");
        crc2.beginPath();
        crc2.moveTo(0, 150);
        crc2.lineTo(1080, 470);
        crc2.lineTo(1080, 720);
        crc2.lineTo(0, 720);
        crc2.closePath();

        let gradient: CanvasGradient = crc2.createLinearGradient(0, 0, 0, crc2.canvas.height);
        gradient.addColorStop(0, "#E6F5FF");
        gradient.addColorStop(0.9, "white");

        crc2.fillStyle = gradient;
        crc2.fill();
    }

    function drawMountains(_position: Vector, _min: number, _max: number, _colorLow: string, _colorHigh: string): void {
        console.log("Mountains", _position, _min, _max);
        let stepMin: number = 50;
        let stepMax: number = 150;
        let x: number = 0;

        crc2.save();
        crc2.translate(_position.x, _position.y);

        crc2.beginPath();
        crc2.moveTo(0, 700);
        crc2.lineTo(0, -_max);

        do {
            x += stepMin + Math.random() * (stepMax - stepMin);
            let y: number = -_min - Math.random() * (_max - _min);

            crc2.lineTo(x, y);
        } while (x < crc2.canvas.width);

        crc2.lineTo(x, 400);
        crc2.closePath();

        let gradient: CanvasGradient = crc2.createLinearGradient(0, 0, 0, -_max);
        gradient.addColorStop(0, _colorLow);
        gradient.addColorStop(0.7, _colorHigh);

        crc2.fillStyle = gradient;
        crc2.fill();

        crc2.restore();
    }

    function drawSkier(_position: Vector) {
        console.log("drawing Skier");

        let SkierColors: string[] = ["#830DA6", "#38F2AA", "#F2B31F", "#0033A6", "#4513F2", "#F21371", "#38F240"];

        for (let i: number = 0; i < 6; i++) {

            _position.x = + Math.random() * 1000;
            _position.y = + Math.random() * (720 - 400) + 400;



            let SIZE = Math.random() * (0.4 - 0.3) + 0.3;
            let randomColor: string = SkierColors[Math.floor(Math.random() * SkierColors.length)]

            crc2.save();
            crc2.translate(_position.x, _position.y);
            crc2.rotate(Math.PI / 10);
            crc2.scale(SIZE, SIZE);

            crc2.beginPath();
            crc2.moveTo(0, 15);
            crc2.lineTo(100, 15);
            crc2.lineTo(130, -15);
            crc2.lineTo(0, -15); //Fuß
            crc2.lineTo(0, -70); //Knie
            crc2.lineTo(-50, -140);//Hüfte
            crc2.lineTo(0, -210); //Oberkörper
            crc2.lineTo(-40, -210);
            crc2.lineTo(-90, -140);//Hüfte
            crc2.lineTo(-40, -70); //Knie
            crc2.lineTo(-40, -15); //Fuß
            crc2.lineTo(-140, -15);
            crc2.lineTo(-140, 15);
            crc2.lineTo(0, 15);
            crc2.closePath;

            crc2.arc(0, -250, 30, 0, 2 * Math.PI);  //Kopf

            crc2.rect(-180, -185, 200, 20);   //skistock

            crc2.fillStyle = randomColor;
            crc2.fill();

            crc2.restore();
        }
       crc2.restore();
    }

    function drawSnow(_position: Vector) {
        console.log("drawing Snow");

        // let SkierColors: string[] = ["#830DA6", "#38F2AA", "#F2B31F", "#0033A6", "#4513F2", "#F21371", "#38F240"];

        for (let i: number = 0; i < 60; i++) {

            _position.x = + Math.random() * (1080 - 0) + 0;;
            _position.y = + Math.random() * (720 - 0) + 0;



            let SIZE = Math.random() * (0.4 - 0.3) + 0.3;
            // let randomColor: string = SkierColors[Math.floor(Math.random() * SkierColors.length)]

            crc2.save();
            crc2.translate(_position.x, _position.y);
            // crc2.rotate(Math.PI / 10);
            crc2.scale(SIZE, SIZE);

            crc2.beginPath();
           

            crc2.arc(0, 0, 10, 0, 2 * Math.PI);  

            
            crc2.fillStyle = "black";
            crc2.fill();

            crc2.restore();
        }
       crc2.restore();
    }

// function drawSnow() :void{

//     for (let i: number = 0; i < 100; i++) {

//         let x =+ Math.random() * (1080 - 0) + 0;
//         let y =+ Math.random() * (720 - 0) + 0;

//         crc2.save();
//         crc2.translate(x, y);

       
//         crc2.arc(0, 0, 3, 0, 2 * Math.PI);
       

//         crc2.fillStyle = "black";
//         crc2.fill();

//         crc2.restore();

//     }
// }
}
