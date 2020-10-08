# proj-dompet-web v0.1
Project Web Pages for money management.

## Credit

This non commercial/personal use project is inspired by the https://budgetbakers.com/, and https://www.realbyteapps.com/.
Love how the apps work and wanna try to create the similar apps for learning purposes. 

This project uses component based folder structure, therefore every component and it's complementary files such as styles, 
will be placed on the same folder.

# How to contribute

- Fork the repository
- Create a new branch from `master` branch, i.e.
    > n.b. please follow this naming format:
    >
    > feature/<your_feature_name> for new feature implementation
    >
    > bugfix/<your_bugfix_name> for creating a bugfix
    >   
    
    ```
    git checkout -b feature/add_new_support_pages
    ```
- Use commit message that represent your changes, don't put random commit message. i.e.

    ```
    adding new support pages -> Allowed
    asdasdasd -> Not allowed
    ```
- After you're done with your development, please create the PR to `master` branch

# FAQ

Q: Is it paid apps?

A: It's completely free.

Q: This project uses [airbnb style guide](https://github.com/airbnb/javascript). 
   How to use it ?

A: 

   Install eslint extension on your code editor and configure it to do actions on save.
   Example, if you use [vscode](https://code.visualstudio.com/) you can add : 
   ```
   "editor.codeActionsOnSave": {
    "source.fixAll.eslint": true
   }
   ```
   
Q: This project uses prettier formatter to format files other than javascript files. How to use it ?

A: 

   Install prettier extension on your code editor and configure it to 
   do format on save on specific format, such as **.scss** or **.html**.
   Example, if you use [vscode](https://code.visualstudio.com/) you can add :
   ```
   "[scss]": {
    "editor.formatOnSave": true
   },
   "[html]": {
    "editor.formatOnSave": true
   }
   ```

