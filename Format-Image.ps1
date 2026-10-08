Get-ChildItem -Path *.jpg, *.jpeg, *.png | ForEach-Object { magick $_.FullName -quality 85 ($_.BaseName + ".webp") }

Get-ChildItem -Path *.jpg, *.jpeg, *.png | ForEach-Object { magick $_.FullName -resize "600x600^" -gravity center -extent 600x600 -quality 85 ($_.BaseName + ".webp") }