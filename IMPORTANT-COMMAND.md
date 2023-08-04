# sequilize commands

(1) dump all db file in to your local sql database (replace dotio with your database name )
```sh
    find . -type f -name "*.sql" -exec mysql -u root -proot dotio -e "source {}" \;
```

(2) for install sequelize cli
```sh
    npm install --save-dev sequelize-cli
```

(3) for sequelize cli help 
```sh
    npx sequelize-cli --help
```

 (4) for install sequelize package
 ```sh
    npm install sequelize 
 ```

(5) for create migration file in migration forlder
```sh
    npx sequelize-cli migration:create --name <file name without extension>
```

# git commands

(1) get current git hub account details:
```sh
    git config --global user.email
    git config --global user.name
```

(2) change github account in vs-code using terminal
```sh
    git config --global user.email <your email>
    git config --global user.name <your username>
```

(3) delete last commit and rest of files
```sh
    git reset --hard HEAD~1
```

(4) undo last commit and goes to the staging area
```sh
    git reset --soft HEAD~1
```

(5) undo perticular commit 
```sh
    git reset <commit uuid>
```

(5) remove file from staging area 
```sh
    git restore --staged <fileName to unstage>
```

(6) ignore eslint warnings (dry run) 
```sh
    git commit -n -m <message>
```

(7) commit msg with name 
```sh
    git lg
```

(8) display commit with changes
```sh
    git log --stat
```

(9) 
