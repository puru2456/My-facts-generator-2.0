<!DOCTYPE html>
<html>
<head>
    <title>Personal Facts Display</title>
    <style>
        body {
            font-family: Arial, sans-serif;
            margin: 0;
            padding: 20px;
            background-color: #f0f0f0;
        }
        .fact-card {
            padding: 20px;
            margin: 10px;
            border-radius: 8px;
            transition: background-color 0.5s;
            color: white;
            text-align: center;
        }
    </style>
</head>
<body>
    <div id="factContainer"></div>

    <script>
        const personalFacts = [
            "An 18-year-old photography enthusiast who combines trekking adventures with capturing mountain views",
            "A bookworm who loves experimenting with cooking in their free time",
            "An avid traveler who finds happiness in long road trips and exploring new destinations"
        ];

        const backgroundColors = ['#FF6B6B', '#4ECDC4', '#45B7D1'];

        function displayFacts() {
            const container = document.getElementById('factContainer');
            personalFacts.forEach((fact, index) => {
                const factDiv = document.createElement('div');
                factDiv.className = 'fact-card';
                factDiv.style.backgroundColor = backgroundColors[index];
                factDiv.textContent = fact;
                container.appendChild(factDiv);
            });
        }

        displayFacts();
    </script>
</body>
</html>
