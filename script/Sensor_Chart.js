
const tableIds = ['sensor1_data_table', 'sensor2_data_table'];

const ctx1 = document.getElementById('Sensor1_Chart_id');
const ctx2 = document.getElementById('Sensor2_Chart_id');
//  use axios get sensor data in phpmyadmin

axios.get('http://1.175.178.176/sensor/Sensor1_mysql.php')
    .then(function (response) {
        var table = document.getElementById('sensor1_data_table');

        // Insert the table header
        var headerRow = table.insertRow(0);
        var headerCells = ['ID', 'Sensor', 'Location', 'PM', 'Situation', 'Timestamp'];
        for (var i = 0; i < headerCells.length; i++) {
            var headerCell = document.createElement('th');
            headerCell.innerHTML = headerCells[i];
            headerRow.appendChild(headerCell);
        }

        // Insert the data into the table
        response.data.forEach(function (data) {
            var row = table.insertRow();
            var cells = [data.id, data.sensor, data.location, data.PM, data.situation, data.reading_time];
            for (var i = 0; i < cells.length; i++) {
                var cell = row.insertCell();
                cell.innerHTML = cells[i];
            }
        });

        var data = response.data;
        var labels = data.map(function (d) { return d.reading_time; });
        var sensors = data.map(function (d) { return d.sensor; });
        var locations = data.map(function (d) { return d.location; });
        var PMs = data.map(function (d) { return d.PM; });
        var situations = data.map(function (d) { return d.situation; });

        console.log(labels);
        Chart.defaults.font.size = 10;
        new Chart(ctx1, {
            type: 'line',
            data: {
                labels: labels,
                datasets: [{
                    label: '# of sensor',
                    data: sensors,
                    borderWidth: 7
                },
                {
                    label: '# of location',
                    data: locations,
                    borderWidth: 7
                },
                {
                    label: '# of PM',
                    data: PMs,
                    borderWidth: 7
                },
                {
                    label: '# of situation',
                    data: situations,
                    borderWidth: 7
                }
                ]
            },
            options: {
                responsive: true,   // 禁用响应式布局
                width: 1200,          // 设置图表宽度为400像素
                height: 900,        // 设置图表高度为300像素
                scales: {
                    y: {
                        beginAtZero: true
                    }
                }
            }
        });

        const table1 = document.getElementById(tableIds[0]);
        table1.style.float = 'left';
        table1.style.marginLeft = '300px';

    })
    .catch(function (error) {
        console.log(error);
    });  

axios.get('http://1.175.178.176/sensor/Sensor2_mysql.php')
    .then(function (response) {
        var table = document.getElementById('sensor2_data_table');

        // Insert the table header
        var headerRow = table.insertRow(0);
        var headerCells = ['ID', 'Sensor', 'Location', 'PM', 'Situation', 'Timestamp'];
        for (var i = 0; i < headerCells.length; i++) {
            var headerCell = document.createElement('th');
            headerCell.innerHTML = headerCells[i];
            headerRow.appendChild(headerCell);
        }

        // Insert the data into the table
        response.data.forEach(function (data) {
            var row = table.insertRow();
            var cells = [data.id, data.sensor, data.location, data.PM, data.situation, data.reading_time];
            for (var i = 0; i < cells.length; i++) {
                var cell = row.insertCell();
                cell.innerHTML = cells[i];
            }
        });

        var data = response.data;
        var labels = data.map(function (d) { return d.reading_time; });
        var sensors = data.map(function (d) { return d.sensor; });
        var locations = data.map(function (d) { return d.location; });
        var PMs = data.map(function (d) { return d.PM; });
        var situations = data.map(function (d) { return d.situation; });

        console.log(labels);
        Chart.defaults.font.size = 10;
        new Chart(ctx2, {
            type: 'line',
            data: {
                labels: labels,
                datasets: [{
                    label: '# of sensor',
                    data: sensors,
                    borderWidth: 7
                },
                {
                    label: '# of location',
                    data: locations,
                    borderWidth: 7
                },
                {
                    label: '# of PM',
                    data: PMs,
                    borderWidth: 7
                },
                {
                    label: '# of situation',
                    data: situations,
                    borderWidth: 7
                }
                ]
            },
            options: {
                responsive: true,   // 禁用响应式布局
                width: 1200,          // 设置图表宽度为400像素
                height: 900,
                scales: {
                    y: {
                        beginAtZero: true
                    }
                }
            }
        });
        const table2 = document.getElementById(tableIds[1]);
        table2.style.float = 'right';
        table2.style.marginRight  = '1000px';

    })
    .catch(function (error) {
        console.log(error);
    });  
