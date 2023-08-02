##### sequilize commands

# dump all db file in to your local sql database
    find . -type f -name "*.sql" -exec mysql -u root -proot dotio -e "source {}" \;
    
    replace dotio with your database name 
    
# for install sequelize cli 
    npm install --save-dev sequelize-cli

# for sequelize cli help 
    npx sequelize-cli --help

# for install sequelize package
    npm install sequelize 

# for create migration file in migration forlder
    npx sequelize-cli migration:create --name <file name without extension>

# get current git hub account details:
    git config --global user.email
    git config --global user.name

# change github account in vs-code using terminal
    git config --global user.email <your email>
    git config --global user.name <your username>

# delete last commit and rest of files
    git reset --hard HEAD~1

# undo last commit and goes to the staging area
    git reset --soft HEAD~1

# remove file from staging area 
    git restore --staged <fileName to unstage>

# ignore eslint warnings (dry run) 
    git commit -n -m "message"

