const fs = require("fs")
const path = require("path")

// Check if public folder exists
const publicFolderPath = path.join(process.cwd(), "public")
console.log(`Checking if public folder exists at: ${publicFolderPath}`)
if (fs.existsSync(publicFolderPath)) {
  console.log("✅ Public folder exists")

  // List all files in the public folder
  console.log("\nFiles in public folder:")
  const files = fs.readdirSync(publicFolderPath)
  files.forEach((file) => {
    const filePath = path.join(publicFolderPath, file)
    const stats = fs.statSync(filePath)
    console.log(`- ${file} (${stats.isDirectory() ? "directory" : "file"}, ${stats.size} bytes)`)
  })

  // Check specifically for photo.jpg
  const photoPath = path.join(publicFolderPath, "photo.jpg")
  if (fs.existsSync(photoPath)) {
    const stats = fs.statSync(photoPath)
    console.log(`\n✅ photo.jpg exists (${stats.size} bytes)`)

    // Check if file is readable
    try {
      fs.accessSync(photoPath, fs.constants.R_OK)
      console.log("✅ photo.jpg is readable")
    } catch (err) {
      console.log("❌ photo.jpg is not readable")
    }
  } else {
    console.log("\n❌ photo.jpg does not exist in the public folder")

    // Check for other image files
    const imageFiles = files.filter((file) =>
      [".jpg", ".jpeg", ".png", ".gif", ".webp"].some((ext) => file.toLowerCase().endsWith(ext)),
    )

    if (imageFiles.length > 0) {
      console.log("\nFound other image files:")
      imageFiles.forEach((file) => console.log(`- ${file}`))
    } else {
      console.log("\nNo image files found in the public folder")
    }
  }
} else {
  console.log("❌ Public folder does not exist")
}

