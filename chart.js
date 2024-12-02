// Expense Trends Chart using Chart.js
const ctx = document.getElementById('expenseChart').getContext('2d');
const expenseChart = new Chart(ctx, {
    type: 'bar',
    data: {
        labels: ['January', 'February', 'March', 'April', 'May'],
        datasets: [{
            label: 'Expenses ($)',
            data: [500, 600, 450, 700, 650],
            backgroundColor: '#6a4c9c',
            borderColor: '#6a4c9c',
            borderWidth: 1
        }]
    },
    options: {
        scales: {
            y: {
                beginAtZero: true
            }
        }
    }
});
