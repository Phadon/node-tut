NodeJs Built-in Modules

->  OS
->  PATH
->  FS
->  HTTP

Dependancies:
    Nodemon ->  restart application automatically when the source file is saved.
        1.  npm i nodemon -D    // -D means devdependancies
        2.  add `"dev": "nodemon app.js"` to dependancies {} in package.json
        3.  to start nodemon, run `npm run dev`


Topics:
    Event loop
    Async patterns
    Event emitter and streams


        There are 4 types of stream in NodeJs:
            Writable    // write date sequecially
            Readble     // read date sequecially
            Duplex      // read & write date sequecially
            Transform   // data can be modified when reading or writing
