# mobile-assessment
<!-- I have created only index.js file for the moment here for the assessment, but the general usage is as below -->
This directory contains configuration variables in 3 files:

- `index.dev.js` : contain development variables
- `index.prod.js` : contains production variables
You need to create or modify(if index.js is present) index.js by copying the right file.

#### Warning
Each time you need to build, you need to verify if your index.js is the right one. For example, during development, before building your app do:
````
cp src\Config\index.dev.js src\Config\index.js
````
In other environment, you must pay attention to change your index.js with the correct one.

#### Usage
```
import Config from 'src/Config'

...
let uri = Config.API_URL
...

```
