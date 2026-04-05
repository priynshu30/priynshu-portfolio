Remove-Item -Path .git\index.lock -Force -ErrorAction SilentlyContinue
git rm -r --cached node_modules -ErrorAction SilentlyContinue
git add .
git commit -m "Initial commit for portfolio"
git branch -M main
git push -u origin main -f
