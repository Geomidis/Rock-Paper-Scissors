# Rock Paper Scissors game implemented in React

This is the classic Rock Paper Scissors game we all know in a well known 'setting' and using graphics & sprites from the classic 'Alex Kidd' game from the Sega Master System. If you love retro games chances are you played this one to death. Due to the graphics i wanted to use here, this is not responsive, but will fit on any device 640px+. 

It can of course be changed to work on any viewport but as this is a solution to satisfy the user story of "I would like to spend an hour of my day having fun", I decided to take initiative and make it more fun, this hour should now pass easily.

In case you do not know the game it or need a refresher check it out [here](https://en.wikipedia.org/wiki/Rock%E2%80%93paper%E2%80%93scissors).

This project was bootstrapped with [Create React App](https://github.com/facebookincubator/create-react-app).<br />
A change worthy of note is that react-scripts have been swapped with custom-react-scripts, so SASS/LESS (among other tools) can be enabled. (additional options stored in .env file)

It does not need any other dependencies, eslint and webpack are only mentioned in the package.json file because i had trouble getting it to run on Windows, i suspect it should compile fine on a mac/linux without installing these dependencies separately but felt i had to add the explanation in case you run into issues building!

It is split in external components for ease of expansion and keeping the code as lean as possible in each component.

## What it will do:

1. It will keep stats of all games played. It allows you to reset the stats to start from scratch, this returns the characters to their initial stance too.
2. It allows the user to choose their move. Once the move is selected, both characters will show their moves and the stats will increase.
3. It uses moderate css and is kept as dynamic as possible in the time constraints i had.

## How to run

npm install will take care of all dependencies. In windows, you might have to install python < 3.0 and run `npm install -g node-gyp` too, if you encounter errors. After this, you have the following choices:

  - `npm start` will start the project
  - `npm run build` to build for production (in the build folder)
  - `npm run eject` to remove the build tool and configuration choice and will expose Webpack, Babel, ESLint, etc configuration - Warning - one way operation, cannot be reversed!

You can also use Yarn instead of npm. (yarn start, yarn build)

Open [http://localhost:3000](http://localhost:3000) to view it in the browser. Linting errors will show up in the console and the page will reload when making edits.

## What can be done better/differently

1. Full character animations rather than single frames - Ran out of time!
2. Done fully responsive using the same or other, modernised assets.
3. The whole project is done in the front end. Server side integration would allow to keep scores, resume where you left and more.

Have fun!