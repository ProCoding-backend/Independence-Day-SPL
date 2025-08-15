/*const flagCanvas = document.getElementById('flag');
const fctx = flagCanvas.getContext('2d');
flagCanvas.width = 320;
flagCanvas.height = 200;

let flagOffset = 0;

function drawAshokaChakra(cx, cy, radius, spokes) {
    fctx.beginPath();
    fctx.arc(cx, cy, radius, 0, Math.PI * 2);
    fctx.strokeStyle = '#000080'; // Navy blue
    fctx.lineWidth = 2;
    fctx.stroke();
    for (let i = 0; i < spokes; i++) {
        let angle = i * Math.PI * 2 / spokes;
        let x1 = cx + Math.cos(angle) * radius;
        let y1 = cy + Math.sin(angle) * radius;
        let x2 = cx + Math.cos(angle) * (radius * 0.1);
        let y2 = cy + Math.sin(angle) * (radius * 0.1);
        fctx.moveTo(x2, y2);
        fctx.lineTo(x1, y1);
    }
    fctx.stroke();
}

function drawFlag() {
    fctx.clearRect(0, 0, flagCanvas.width, flagCanvas.height);

    const waveAmplitude = 5;
    const rows = 40;
    const cols = 64;

    for (let y = 0; y < rows; y++) {
        for (let x = 0; x < cols; x++) {
            const wave = Math.sin((x / cols * 2 * Math.PI) + flagOffset) * waveAmplitude;
            const xx = x * 5;
            const yy = y * 5 + wave;
            
            const segment = y * 5;
            if (segment < flagCanvas.height / 3) {
                fctx.fillStyle = '#ff9933'; // Saffron
            } else if (segment < flagCanvas.height / 3 * 2) {
                fctx.fillStyle = '#fff'; // White
            } else {
                fctx.fillStyle = '#138808'; // Green
            }
            fctx.fillRect(xx, yy, 5, 5);
        }
    }

    const chakraX = flagCanvas.width / 2;
    const chakraY = flagCanvas.height / 2 + Math.sin(flagOffset) * waveAmplitude;
    drawAshokaChakra(chakraX, chakraY, 30, 24);

    flagOffset += 0.05;
    requestAnimationFrame(drawFlag);
}
drawFlag();

const canvas = document.getElementById('fireworks');
const ctx = canvas.getContext('2d');
canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

class Firework {
    constructor(x, y, color) {
        this.x = x;
        this.y = y;
        this.particles = [];
        this.color = color;
        for (let i = 0; i < 40; i++) {
            this.particles.push({
                x: x,
                y: y,
                dx: (Math.random() - 0.5) * 8,
                dy: (Math.random() - 0.5) * 8,
                alpha: 1
            });
        }
    }
    draw() {
        this.particles.forEach(p => {
            ctx.beginPath();
            ctx.arc(p.x, p.y, 3, 0, Math.PI * 2);
            ctx.fillStyle = `rgba(${this.color.r},${this.color.g},${this.color.b},${p.alpha})`;
            ctx.fill();
        });
    }
    update() {
        this.particles.forEach(p => {
            p.x += p.dx;
            p.y += p.dy;
            p.alpha -= 0.02;
        });
        this.particles = this.particles.filter(p => p.alpha > 0);
        this.draw();
    }
}

let fireworks = [];

function animate() {
    ctx.fillStyle = 'rgba(17,17,17,0.2)';
    ctx.fillRect(0, 0, canvas.width, canvas.height);
    fireworks.forEach(fw => fw.update());
    requestAnimationFrame(animate);
}

canvas.addEventListener('click', (e) => {
    const colors = [{
        r: 255,
        g: 153,
        b: 51
    }, {
        r: 255,
        g: 255,
        b: 255
    }, {
        r: 19,
        g: 136,
        b: 8
    }];
    const color = colors[Math.floor(Math.random() * colors.length)];
    fireworks.push(new Firework(e.x, e.y, color));
});

setInterval(() => {
    const colors = [{
        r: 255,
        g: 153,
        b: 51
    }, {
        r: 255,
        g: 255,
        b: 255
    }, {
        r: 19,
        g: 136,
        b: 8
    }];
    const color = colors[Math.floor(Math.random() * colors.length)];
    const x = Math.random() * canvas.width;
    const y = Math.random() * canvas.height / 2;
    fireworks.push(new Firework(x, y, color));
}, 1000);

window.addEventListener('resize', () => {
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;
});

animate(); */