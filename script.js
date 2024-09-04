
document.addEventListener('DOMContentLoaded', () => {
    const slides = document.querySelectorAll('.slide');
    let currentSlide = 0;

    function showSlide(index) {
        slides.forEach((slide, i) => {
            slide.classList.remove('active');
            if (i === index) {
                slide.classList.add('active');
                if (slide.querySelector('#myChart')) {
                    createChart()
                }

            }
        });
    }

    document.getElementById('prevBtn').addEventListener('click', () => {
        currentSlide = (currentSlide > 0) ? currentSlide - 1 : slides.length - 1;
        showSlide(currentSlide);
    });

    document.getElementById('nextBtn').addEventListener('click', () => {
        currentSlide = (currentSlide < slides.length - 1) ? currentSlide + 1 : 0;
        showSlide(currentSlide);
    });

    
    showSlide(currentSlide);

function createChart() {
    const ctx = document.getElementById('myChart').getContext('2d');
    const myChart = new Chart(ctx, {
        type: 'bar', 
        data: {
            labels: ['Red', 'Blue', 'Yellow', 'Green', 'Purple', 'Orange'],
            datasets: [{
                label: '# of Votes',
                data: [12, 19, 3, 5, 2, 3],
                backgroundColor: [
                    'rgba(255, 99, 132, 0.2)',
                    'rgba(54, 162, 235, 0.2)',
                    'rgba(255, 206, 86, 0.2)',
                    'rgba(75, 192, 192, 0.2)',
                    'rgba(153, 102, 255, 0.2)',
                    'rgba(255, 159, 64, 0.2)'
                ],
                borderColor: [
                    'rgba(255, 99, 132, 1)',
                    'rgba(54, 162, 235, 1)',
                    'rgba(255, 206, 86, 1)',
                    'rgba(75, 192, 192, 1)',
                    'rgba(153, 102, 255, 1)',
                    'rgba(255, 159, 64, 1)'
                ],
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
}
 
function outf(text) { 
    const outputElement = document.getElementById('pythonOutput');
    outputElement.innerHTML += text; 
}

function runPythonCode() {
    let prog = document.getElementById("pythonEditor").value;
    let outputElement = document.getElementById("pythonOutput");
    outputElement.innerHTML = ''; 
    Skulpt.configure({ output: outf });
    Skulpt.preemptiveService = true;
    try {
        Skulpt.eval(prog);
    } catch (e) {
        outputElement.innerHTML = e.toString();
    }
}

document.getElementById('runPythonBtn').addEventListener('click',runPythonCode);

})

