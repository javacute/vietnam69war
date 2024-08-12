document.addEventListener('DOMContentLoaded', () => {
    const cardDescriptions = [
        { description: 'เหตุการณ์สงครามเวียดนาม: การรบในป่าฝน', power: 10, image: '103.png' },
        { description: 'เหตุการณ์สงครามเวียดนาม: การโจมตีทางอากาศ', power: 9, image: '93.png' },
        { description: 'เหตุการณ์สงครามเวียดนาม: การต่อสู้ในเมือง', power: 8, image: '83.png' },
        { description: 'เหตุการณ์สงครามเวียดนาม: การปะทะที่แนวรบ', power: 7, image: '73.png' },
        { description: 'เหตุการณ์สงครามเวียดนาม: การทิ้งระเบิด', power: 6, image: '63.png' },
        { description: 'เหตุการณ์สงครามเวียดนาม: การช่วยเหลือผู้บาดเจ็บ', power: 5, image: '53.png' },
        { description: 'เหตุการณ์สงครามเวียดนาม: การสู้รบของทหาร', power: 4, image: '43.png' },
        { description: 'เหตุการณ์สงครามเวียดนาม: การเดินทางข้ามแม่น้ำ', power: 3, image: '33.png' },
        { description: 'เหตุการณ์สงครามเวียดนาม: การป้องกันฐานที่มั่น', power: 2, image: '23.png' },
        { description: 'เหตุการณ์สงครามเวียดนาม: การสนับสนุนจากพลเรือน', power: 1, image: '13.png' },
    ];

    let player1Score = 0;
    let player2Score = 0;
    const roundDetails = []; // เพื่อเก็บข้อมูลการ์ดในแต่ละรอบ
    const maxDraws = 10; // จำนวนครั้งสูงสุดที่สามารถจั่วการ์ดได้
    let drawsRemaining = maxDraws; // ตัวนับสำหรับการจั่วการ์ดที่เหลืออยู่
    const player1ScoreDisplay = document.getElementById('player1-total-score');
    const player2ScoreDisplay = document.getElementById('player2-total-score');

    const drawCardButton = document.getElementById('draw-card');
    const remainingDrawsElement = document.getElementById('remaining-draws');

    // แสดงจำนวนการจั่วการ์ดที่เหลือ
    remainingDrawsElement.innerText = `การจั่วการ์ดที่เหลือ: ${drawsRemaining}`;

    drawCardButton.addEventListener('click', () => {
        if (drawsRemaining > 0) {
            const player1CardIndex = Math.floor(Math.random() * cardDescriptions.length);
            const player2CardIndex = Math.floor(Math.random() * cardDescriptions.length);

            const player1Card = cardDescriptions[player1CardIndex];
            const player2Card = cardDescriptions[player2CardIndex];

            // แสดงข้อมูลการ์ดและภาพ
            document.getElementById('player1-card').innerHTML = `${player1Card.description} (พลัง: ${player1Card.power})<br><img src="${player1Card.image}" class="card-image" alt="Card Image">`;
            document.getElementById('player2-card').innerHTML = `${player2Card.description} (พลัง: ${player2Card.power})<br><img src="${player2Card.image}" class="card-image" alt="Card Image">`;

            // บันทึกข้อมูลรอบ
            roundDetails.push({
                round: roundDetails.length + 1,
                player1Card: player1Card,
                player2Card: player2Card
            });

            if (player1Card.power > player2Card.power) {
                player1Score++;
                document.getElementById('player1-score').innerText = `ชนะ`;
                document.getElementById('player2-score').innerText = `แพ้`;
            } else if (player2Card.power > player1Card.power) {
                player2Score++;
                document.getElementById('player1-score').innerText = `แพ้`;
                document.getElementById('player2-score').innerText = `ชนะ`;
            
        } else if (player2Card.power = player1Card.power) {
            document.getElementById('player1-score').innerText = `เสมอ`;
            document.getElementById('player2-score').innerText = `เสมอ`;
        }

        player1ScoreDisplay.innerText = `คะแนนรวม: ${player1Score}`;
        player2ScoreDisplay.innerText = `คะแนนรวม: ${player2Score}`;

            // ลดจำนวนครั้งที่สามารถจั่วการ์ดได้
            drawsRemaining--;
            remainingDrawsElement.innerText = `การจั่วการ์ดที่เหลือ: ${drawsRemaining}`;

            // ตรวจสอบว่าการจั่วการ์ดถึงจำนวนสูงสุดหรือไม่
            if (drawsRemaining === 0 || roundDetails.length === cardDescriptions.length) {
                drawCardButton.disabled = true; // ปิดการใช้งานปุ่มจั่วการ์ด
                if (player1Score > player2Score) {
                    localStorage.setItem('finalScore', `ผู้เล่น 1: [${player1Score}][ชนะ!!] - ผู้เล่น 2: [${player2Score}][แพ้]`);
                } else if (player1Score < player2Score) {
                    localStorage.setItem('finalScore', `ผู้เล่น 1: [${player1Score}][แพ้] - ผู้เล่น 2: [${player2Score}][ชนะ!!]`);
                
                } else if (player1Score = player2Score) {
                    localStorage.setItem('finalScore', `ผู้เล่น 1: [${player1Score}][เสมอ] - ผู้เล่น 2: [${player2Score}][เสมอ]`);
                }
                localStorage.setItem('roundDetails', JSON.stringify(roundDetails));
                document.getElementById('finish-game').style.display = 'block';
            }
        }
    });
});

document.addEventListener('DOMContentLoaded', () => {
    const marqueeText = document.querySelector('.marquee span');
    marqueeText.textContent = 'Welcome to the Vietnam War Card Game! |  ยินดีต้อนรับสู่เกมการ์ดสงครามเวียดนาม! | ขอบคุณที่เข้ามาเล่นเกมของเรา!';
});



