// ===== Table Styler 功能 =====
const originalStyles = {
    width: '600px',
    borderWidth: '3px',
    cellSpacing: '3',
    backgroundColor: '#ecf0f1'
};

function changeWidth(width) {
    const table = document.getElementById('myTable');
    if (table) {
        table.style.width = width;
    }
}

function changeBorderSpacing(spacing) {
    const table = document.getElementById('myTable');
    if (table) {
        table.style.borderWidth = spacing;
        table.setAttribute('cellspacing', parseInt(spacing));
        
        const cells = table.querySelectorAll('th, td');
        cells.forEach(cell => {
            cell.style.borderWidth = spacing;
        });
    }
}

function changeColor(color) {
    const table = document.getElementById('myTable');
    if (table) {
        const cells = table.querySelectorAll('td');
        cells.forEach(cell => {
            cell.style.backgroundColor = color;
        });
    }
}

function resetTable() {
    const table = document.getElementById('myTable');
    if (table) {
        table.style.width = originalStyles.width;
        table.style.borderWidth = originalStyles.borderWidth;
        table.setAttribute('cellspacing', originalStyles.cellSpacing);
        
        const cells = table.querySelectorAll('th, td');
        cells.forEach(cell => {
            cell.style.borderWidth = '2px';
        });
        
        const tdCells = table.querySelectorAll('td');
        tdCells.forEach(cell => {
            cell.style.backgroundColor = originalStyles.backgroundColor;
        });
    }
}

// ===== Polaroid Image Switcher =====
const images = [
    'sunflower.jpg',
    'cascade.jpg',
    'dog.jpg',
    'fruit.jpg',
    'sail.jpg'
];

let currentIndex = 0;

function showImage() {
    const imageContainer = document.getElementById('imageContainer');
    const counter = document.getElementById('counter');
    
    if (imageContainer && counter) {
        imageContainer.innerHTML = `<img src="${images[currentIndex]}" alt="Workshop Image ${currentIndex + 1}">`;
        counter.textContent = `Image ${currentIndex + 1} of ${images.length}`;
    }
}

function nextImage() {
    if (currentIndex < images.length - 1) {
        currentIndex++;
    } else {
        currentIndex = 0;
    }
    showImage();
}

function prevImage() {
    if (currentIndex > 0) {
        currentIndex--;
    } else {
        currentIndex = images.length - 1;
    }
    showImage();
}

// ===== Canvas Drawing - Dream Planet Explorer (創意版) =====
function drawDreamSpace() {
    const canvas = document.getElementById('spaceCanvas');
    if (!canvas) return;
    
    const ctx = canvas.getContext('2d');
    
    // ===== 1. 深太空背景（漸層）=====
    const spaceGradient = ctx.createLinearGradient(0, 0, 680, 400);
    spaceGradient.addColorStop(0, "#1a0933");  // 深紫
    spaceGradient.addColorStop(0.5, "#0f1a3d"); // 深藍
    spaceGradient.addColorStop(1, "#1a0933");  // 深紫
    ctx.fillStyle = spaceGradient;
    ctx.fillRect(0, 0, 680, 400);
    
    // ===== 2. 星星（不同大小）=====
    ctx.fillStyle = "white";
    for (let i = 0; i < 60; i++) {
        const x = Math.random() * 680;
        const y = Math.random() * 400;
        const size = Math.random() * 2 + 0.5;
        
        ctx.beginPath();
        ctx.arc(x, y, size, 0, 2 * Math.PI);
        ctx.fill();
    }
    
    // ===== 3. 大星球（中間）=====
    // 星球主體
    ctx.beginPath();
    ctx.arc(340, 200, 100, 0, 2 * Math.PI);
    ctx.fillStyle = "#4a90e2";
    ctx.fill();
    
    // 星球條紋（裝飾）
    ctx.strokeStyle = "#357abd";
    ctx.lineWidth = 8;
    ctx.beginPath();
    ctx.arc(340, 200, 100, 0.2, Math.PI - 0.2);
    ctx.stroke();
    
    ctx.strokeStyle = "#5fa3e8";
    ctx.lineWidth = 6;
    ctx.beginPath();
    ctx.arc(340, 200, 100, Math.PI + 0.5, 2 * Math.PI - 0.3);
    ctx.stroke();
    
    // 星球高光
    ctx.beginPath();
    ctx.arc(310, 170, 25, 0, 2 * Math.PI);
    ctx.fillStyle = "rgba(255, 255, 255, 0.3)";
    ctx.fill();
    
    // ===== 4. 星球環（像土星）=====
    ctx.strokeStyle = "#d4a574";
    ctx.lineWidth = 15;
    ctx.beginPath();
    ctx.ellipse(340, 200, 140, 40, 0, 0, 2 * Math.PI);
    ctx.stroke();
    
    ctx.strokeStyle = "#c9935a";
    ctx.lineWidth = 8;
    ctx.beginPath();
    ctx.ellipse(340, 200, 140, 40, 0, 0, 2 * Math.PI);
    ctx.stroke();
    
    // 用星球遮住環的後半部（製造前後關係）
    ctx.beginPath();
    ctx.arc(340, 200, 100, 0, 2 * Math.PI);
    ctx.fillStyle = "#4a90e2";
    ctx.fill();
    
    // 重畫星球細節
    ctx.strokeStyle = "#357abd";
    ctx.lineWidth = 8;
    ctx.beginPath();
    ctx.arc(340, 200, 100, 0.2, Math.PI - 0.2);
    ctx.stroke();
    
    ctx.strokeStyle = "#5fa3e8";
    ctx.lineWidth = 6;
    ctx.beginPath();
    ctx.arc(340, 200, 100, Math.PI + 0.5, 2 * Math.PI - 0.3);
    ctx.stroke();
    
    ctx.beginPath();
    ctx.arc(310, 170, 25, 0, 2 * Math.PI);
    ctx.fillStyle = "rgba(255, 255, 255, 0.3)";
    ctx.fill();
    
    // ===== 5. 小衛星（左上）=====
    ctx.beginPath();
    ctx.arc(120, 80, 30, 0, 2 * Math.PI);
    ctx.fillStyle = "#8b7355";
    ctx.fill();
    
    // 衛星坑洞
    ctx.beginPath();
    ctx.arc(115, 75, 5, 0, 2 * Math.PI);
    ctx.fillStyle = "#6b5940";
    ctx.fill();
    
    ctx.beginPath();
    ctx.arc(130, 85, 4, 0, 2 * Math.PI);
    ctx.fill();
    
    // ===== 6. 小行星（右下）=====
    ctx.beginPath();
    ctx.arc(580, 320, 25, 0, 2 * Math.PI);
    ctx.fillStyle = "#5a4a3a";
    ctx.fill();
    
    ctx.beginPath();
    ctx.arc(575, 315, 4, 0, 2 * Math.PI);
    ctx.fillStyle = "#3a2a1a";
    ctx.fill();
    
    // ===== 7. 太空船 =====
    // 船身
    ctx.fillStyle = "#e0e0e0";
    ctx.beginPath();
    ctx.moveTo(100, 300);
    ctx.lineTo(140, 300);
    ctx.lineTo(130, 320);
    ctx.lineTo(110, 320);
    ctx.closePath();
    ctx.fill();
    
    // 船頭
    ctx.fillStyle = "#ff6b6b";
    ctx.beginPath();
    ctx.moveTo(110, 320);
    ctx.lineTo(130, 320);
    ctx.lineTo(120, 335);
    ctx.closePath();
    ctx.fill();
    
    // 窗戶
    ctx.beginPath();
    ctx.arc(120, 310, 5, 0, 2 * Math.PI);
    ctx.fillStyle = "#6eb5ff";
    ctx.fill();
    
    // 火焰
    ctx.fillStyle = "#ffa500";
    ctx.beginPath();
    ctx.moveTo(115, 335);
    ctx.lineTo(125, 335);
    ctx.lineTo(120, 350);
    ctx.closePath();
    ctx.fill();
    
    ctx.fillStyle = "#ffff00";
    ctx.beginPath();
    ctx.moveTo(117, 335);
    ctx.lineTo(123, 335);
    ctx.lineTo(120, 345);
    ctx.closePath();
    ctx.fill();
    
    // ===== 8. 彗星（右上飛過）=====
    ctx.strokeStyle = "rgba(255, 255, 255, 0.6)";
    ctx.lineWidth = 3;
    ctx.beginPath();
    ctx.moveTo(550, 60);
    ctx.lineTo(500, 90);
    ctx.stroke();
    
    ctx.lineWidth = 2;
    ctx.beginPath();
    ctx.moveTo(550, 60);
    ctx.lineTo(520, 100);
    ctx.stroke();
    
    // 彗星頭
    ctx.fillStyle = "white";
    ctx.beginPath();
    ctx.arc(550, 60, 4, 0, 2 * Math.PI);
    ctx.fill();

    // ===== 9. 標題 =====
    // 標題陰影
    ctx.fillStyle = "rgba(0, 0, 0, 0.5)";
    ctx.font = "bold 30px Arial";
    ctx.fillText("DREAM SPACE ", 22, 52);
    
    // 標題主體
    ctx.fillStyle = "#6eb5ff";
    ctx.font = "bold 30px Arial";
    ctx.fillText("DREAM SPACE ", 20, 50);
    
    // 副標題
    ctx.fillStyle = "rgba(255, 255, 255, 0.8)";
    ctx.font = "14px Arial";
    ctx.fillText("Journey to the Unknown Planet", 20, 72);
    
    console.log('Dream Space rendered!');
}

// ===== 頁面載入時執行 =====
window.addEventListener('load', function() {
    // 如果在 Showcase 頁面，初始化圖片顯示
    if (document.getElementById('imageContainer')) {
        showImage();
    }
    
    // 如果在 Contact 頁面，繪製 Canvas
    if (document.getElementById('spaceCanvas')) {
        drawDreamSpace();
    }
});

// ===== 表單提交處理（可選） =====
const contactForm = document.querySelector('.contact-form');
if (contactForm) {
    contactForm.addEventListener('submit', function(e) {
        e.preventDefault();
        alert('感謝您的訊息！我會盡快回覆您。');
        this.reset();
    });
}