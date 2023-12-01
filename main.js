const reservationForm = document.getElementById('reservationForm');

function handleFormSubmission(event) {
  event.preventDefault();

  const name = document.getElementById('name').value;
  const email = document.getElementById('email').value;
  const date = document.getElementById('date').value;
  const trainName = document.getElementById('trainName').value;
  const time = document.getElementById('time').value;
  const gender = document.getElementById('gender').value;
  const age = document.getElementById('age').value;
  const from = document.getElementById('from').value;
  const to = document.getElementById('to').value;

  const ticketInfo = `Name: ${name}<br>Email: ${email}<br>Date of Booking: ${date}<br>Train Name: ${trainName}<br>Time: ${time}<br>Gender: ${gender}<br>Age: ${age}<br>From: ${from}<br>To: ${to}`;

  const ticketWindow = window.open('', '_blank');
  ticketWindow.document.write(`
    <html>
      <head>
        <title>Ticket Information</title>
        <style>
          body {
            font-family: Arial, sans-serif;
            margin: 0;
            padding: 20px;
            background-color: #000;
            color: #fff;
          }
          .container {
            max-width: 600px;
            margin: 0 auto;
            padding: 20px;
            border: 2px solid #ffd700;
            border-radius: 10px;
            box-shadow: 0 0 20px rgba(255, 215, 0, 0.5);
          }
          h1 {
            text-align: center;
          }
          p {
            margin-bottom: 10px;
          }
        </style>
      </head>
      <body>
        <div class="container">
          <h1>Ticket Information</h1>
          <div>${ticketInfo}</div>
        </div>
      </body>
    </html>
  `);
  ticketWindow.document.close();
}

reservationForm.addEventListener('submit', handleFormSubmission);
