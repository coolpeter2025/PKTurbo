/**
 * This script renames image files in the public/images directory
 * to remove spaces from filenames, making them more web-friendly
 */

const fs = require('fs');
const path = require('path');

const imagesDir = path.join(__dirname, 'public', 'images');

// Files to rename with their new names
const fileRenames = [
  { from: 'truck 1.jpg', to: 'truck1.jpg' },
  { from: 'truck 2.jpg', to: 'truck2.jpg' },
  { from: 'truck 3.jpg', to: 'truck3.jpg' },
  { from: 'truck 4.jpg', to: 'truck4.jpg' },
  { from: 'truck 5.jpg', to: 'truck5.jpg' },
  { from: 'truck 6.jpg', to: 'truck6.jpg' },
  { from: 'truck 7.jpg', to: 'truck7.jpg' },
  { from: 'truck 8.jpg', to: 'truck8.jpg' },
  { from: 'truck 9.jpg', to: 'truck9.jpg' },
  { from: 'Truck at night.jpg', to: 'Truckatnight.jpg' },
  { from: 'Cargo 3.jpg', to: 'Cargo3.jpg' },
  { from: 'Cargo Boxes.jpg', to: 'CargoBoxes.jpg' },
  { from: 'Cargo Pallets.jpg', to: 'CargoPallets.jpg' }
];

console.log('Starting file rename process...');

// Perform the renames
fileRenames.forEach(({ from, to }) => {
  const sourcePath = path.join(imagesDir, from);
  const destPath = path.join(imagesDir, to);
  
  try {
    if (fs.existsSync(sourcePath)) {
      fs.renameSync(sourcePath, destPath);
      console.log(`✅ Renamed: ${from} -> ${to}`);
    } else {
      console.error(`❌ Source file not found: ${from}`);
    }
  } catch (error) {
    console.error(`❌ Error renaming ${from} to ${to}:`, error.message);
  }
});

console.log('File rename process completed.');
