#!/bin/bash

echo "🚀 Starting fresh build process..."

# 1. Clear common build caches
echo "🧹 Clearing caches..."
rm -rf dist/ build/ .next/ out/ .cache/

# 2. Force Git to recognize file system changes 
# (Helps if you renamed files manually instead of using 'git mv')
echo "📂 Refreshing file index..."
git add -A

# 3. Run the build
echo "🛠️ Running build..."
npm run build

# 4. Start the dev server
echo "🌐 Starting dev server..."
npm run dev