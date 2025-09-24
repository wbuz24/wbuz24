<?php
$counterFile = "counter.txt";

// Check if file exists, else create
if (!file_exists($counterFile)) {
    file_put_contents($counterFile, 0);
}

// Read current count
$hits = (int)file_get_contents($counterFile);

// Increment and save
$hits++;
file_put_contents($counterFile, $hits);

// Output the count
echo $hits;
?>
