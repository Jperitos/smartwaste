document.addEventListener('DOMContentLoaded', function() {
    const bins = [
        { name: "Bins 051", status: 78 },
        { name: "Bins 052", status: 32 },
        { name: "Bins 053", status: 100 }
    ];

    const container = document.querySelector('.map-container');

    bins.forEach(bin => {
        const statusBar = document.createElement('div');
        statusBar.classList.add('status-bar');
        
        const span = document.createElement('span');
        span.textContent = bin.name;
        statusBar.appendChild(span);
        
        const progress = document.createElement('div');
        progress.classList.add('progress');
        progress.style.width = bin.status + '%';
        progress.style.backgroundColor = bin.status === 100 ? 'red': 'yellow'; // Different colors based on status
        statusBar.appendChild(progress);
        
        container.appendChild(statusBar);
    });
});