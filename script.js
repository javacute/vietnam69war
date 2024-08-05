document.addEventListener('DOMContentLoaded', () => {
    const cardDescriptions = [
        { description: 'เหตุการณ์สงครามเวียดนาม: การรบในป่าฝน', power: 10, image: '10.png' },
        { description: 'เหตุการณ์สงครามเวียดนาม: การโจมตีทางอากาศ', power: 9, image: '9.png' },
        { description: 'เหตุการณ์สงครามเวียดนาม: การต่อสู้ในเมือง', power: 8, image: '8.png' },
        { description: 'เหตุการณ์สงครามเวียดนาม: การปะทะที่แนวรบ', power: 7, image: '7.png' },
        { description: 'เหตุการณ์สงครามเวียดนาม: การทิ้งระเบิด', power: 6, image: '6.png' },
        { description: 'เหตุการณ์สงครามเวียดนาม: การช่วยเหลือผู้บาดเจ็บ', power: 5, image: '5.png' },
        { description: 'เหตุการณ์สงครามเวียดนาม: การสู้รบของทหาร', power: 4, image: '4.png' },
        { description: 'เหตุการณ์สงครามเวียดนาม: การเดินทางข้ามแม่น้ำ', power: 3, image: '3.png' },
        { description: 'เหตุการณ์สงครามเวียดนาม: การป้องกันฐานที่มั่น', power: 2, image: '2.png' },
        { description: 'เหตุการณ์สงครามเวียดนาม: การสนับสนุนจากพลเรือน', power: 1, image: '1.png' },
    ];

    let player1Score = 0;
    let player2Score = 0;
    const roundDetails = []; // เพื่อเก็บข้อมูลการ์ดในแต่ละรอบ

    document.getElementById('draw-card').addEventListener('click', () => {
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
        } else if (player2Card.power > player1Card.power) {
            player2Score++;
        }

        document.getElementById('player1-score').innerText = `คะแนน: ${player1Score}`;
        document.getElementById('player2-score').innerText = `คะแนน: ${player2Score}`;

        if (roundDetails.length === cardDescriptions.length) {
            localStorage.setItem('finalScore', `ผู้เล่น 1: ${player1Score} - ผู้เล่น 2: ${player2Score}`);
            localStorage.setItem('roundDetails', JSON.stringify(roundDetails));
            document.getElementById('finish-game').style.display = 'block';
        }
    });
});
