// You can add custom JS for additional interactivity if needed.
document.addEventListener('DOMContentLoaded', () => {
  console.log('Navbar is loaded and ready!');
});
var ctx = document.getElementById('drugStatsChart').getContext('2d');
var drugStatsChart = new Chart(ctx, {
  type: 'bar', // Bar chart type
  data: {
    labels: ['Youth (18-25)', 'Adults (26-40)', 'Middle-Aged (41-60)', 'Seniors (60+)'], // Age groups
    datasets: [{
      label: 'Number of Addicts (in Millions)',
      data: [5.1, 7.3, 3.2, 1.5], // Example data (replace with actual stats)
      backgroundColor: 'rgba(75, 192, 192, 0.2)', // Bar color
      borderColor: 'rgba(75, 192, 192, 1)', // Bar border color
      borderWidth: 1
    }]
  },
  options: {
    responsive: true,
    scales: {
      y: {
        beginAtZero: true,
        title: {
          display: true,
          text: 'Addicts (in Millions)'
        }
      }
    }
  }
});


 // FAQ toggle functionality
 document.querySelectorAll('.faq-question').forEach((item) => {
  item.addEventListener('click', () => {
    const parent = item.parentNode;
    parent.classList.toggle('open');
  });
});

 // JavaScript to toggle the popup
 const floatingButton = document.getElementById('floatingButton');
 const floatingPopup = document.getElementById('floatingPopup');
 const closePopup = document.getElementById('closePopup');

 // Show the popup when the floating button is clicked
 floatingButton.addEventListener('click', () => {
   floatingPopup.classList.remove('d-none');
   floatingPopup.style.display = 'block';
 });

 // Close the popup when the close button is clicked
 closePopup.addEventListener('click', () => {
   floatingPopup.style.display = 'none';
 });

 // Handle form submission
 document.getElementById('reportForm').addEventListener('submit', function (e) {
   e.preventDefault(); // Prevent form submission for demonstration

   const address = document.getElementById('address').value;
   const description = document.getElementById('description').value;

   // Simulate form submission or display the information
   alert(`Thank you for reporting!\n\nAddress: ${address}\nDescription: ${description}`);

   // Clear the form
   this.reset();

   // Close the popup after submission
   floatingPopup.style.display = 'none';
 });




   // Add event listeners to fixed amount buttons
   document.querySelectorAll('.fixed-amount').forEach(button => {
    button.addEventListener('click', () => {
      // Set the custom amount input to the button's amount
      document.getElementById('customAmount').value = button.getAttribute('data-amount');
    });
  });

  // Handle form submission
  document.getElementById('contributionForm').addEventListener('submit', (e) => {
    e.preventDefault(); // Prevent form submission for demonstration
    const amount = document.getElementById('customAmount').value;
    if (amount) {
      alert(`Thank you for contributing ₹${amount}!`);
    } else {
      alert('Please enter an amount to contribute.');
    }
  });
