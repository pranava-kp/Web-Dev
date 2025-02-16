<?php
	// Define the file path to store the visitor count
	$filename = 'count.txt';
	// Check if the file exists
	if (!file_exists($filename)) {
	// If the file doesn't exist, create it and initialize the count to 0
	file_put_contents($filename, '0');
	}
	// Read the current count from the file
	$count = (int)file_get_contents($filename);
	// Increment the count
	$count++;
	// Update the count in the file
	file_put_contents($filename, $count);
	// Output the HTML with the visitor count
	?>
<!DOCTYPE html>
<html lang="en">
    <head>
        <meta charset="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <title>Visitor Counter</title>
        <style>
            body {
            font-family: Arial, sans-serif;
            text-align: center;
            background-color: #f4f4f4;
            margin: 0;
            padding: 50px;
            }
            h1 {
            color: #333;
            }
            .container {-
            background: #fff;
            border-radius: 8px;
            box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
            display: inline-block;
            padding: 20px;
            }
            p{
            font-size: 1.2em;
            color: #555;
            }
        </style>
    </head>
    <body>
        <div class="container">
            <h1>Visitor Counter</h1>
            <p>
                Number of visitors to this page:
                <?php echo $count; ?>
            </p>
        </div>
    </body>
</html>

