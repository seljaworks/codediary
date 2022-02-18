# CodeDiary

This is an interactive coding environment. You can write javascript, see it excecuted and write comprehensive documention using markdown.
- Add then click any text cell (including this one) to edit it.
-  The code in each code editor is joined together into one file. if you define a variable in cel #1, you can refer to it in any following cell.\n- You can show any react component, string, number or anything else by calling `render` function. This is a function built into this enviroment. Call render multiple time to show multiple values.
-  Re-order or delete cells using the button on the top right.
-  Add new cell by hovering on the divider between each cell. All of your changes get saved to the file you named with or the default codenote1.js. You can change the file name by `run npx codediary serve filename.js`. 


## Run
```
npx -y codediary serve
```

Or install globally

```
npm i -g codediary 
```

Then run

```
codediary serve
```


## Usage

```
    $ npx -y codediary serve <filename>
    $ npx -y codediary serve --port <port>

    (filename is optional, default codenote1.js)

  Args
    --port, -p    Use another port, default 4005.

  Examples
    $ npx -y codediary serve code1.js
    $ npx -y codediary serve --port 3009
    $ npx -y codediary serve code1.js -p 3007
    $ npx -y codediary serve -p 3007
```

## Tasklist
- [ ] Add Typescript support
- [ ] Fix bugs
- [ ] Improve Responsiveness