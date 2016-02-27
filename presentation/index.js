require("./style.css");

// Import React
import React from "react";

// Import Spectacle Core tags
import {
  Appear,
  BlockQuote,
  Cite,
  CodePane,
  Deck,
  Fill,
  Heading,
  Image,
  Layout,
  Link,
  ListItem,
  List,
  Markdown,
  Quote,
  Slide,
  Spectacle,
  Text
} from "spectacle";

// Import image preloader util
import preloader from "spectacle/lib/utils/preloader";

// Import theme
import createTheme from "spectacle/lib/themes/default";

// Require CSS
require("normalize.css");
require("spectacle/lib/themes/default/index.css");

const images = {

};

//preloader(images);

const theme = createTheme({
  primary: "#474F57",
  secondary: "#FFF7EF",
  tertiary: "#88D4FD",
  quartenary: "#787C7F"
});

export default class Presentation extends React.Component {
  render() {
    return (
      <Spectacle theme={theme}>
        <Deck transition={["slide"]} transitionDuration={200}>
          <Slide bgColor="bg">
            <Heading size={1} fit caps lineHeight={1} textColor="secondary">
              New ideas on
            </Heading>
            <Heading size={2} fit caps lineHeight={1} textColor="secondary">
              Web App Development
            </Heading>
            <Heading size={2} textColor="tertiary">
              (Maybe not so new)
            </Heading>
          </Slide>

          <Slide transition={["slide"]}>

            <Heading size={2} cap>
              Problem #1:
            </Heading>

            <Heading size={2} caps fit>
              DOM Updates
            </Heading>

          </Slide>

          <Slide transition={["slide"]}>
            <Heading>DOM Update</Heading>
            <Layout>
              <Fill>
                <CodePane lang="js" source={require("raw!./gists/dom-updates.js")}/>
              </Fill>
              <Fill>
                <Text>TODO IMAGE</Text>
              </Fill>
            </Layout>
          </Slide>

          <Slide>
            <Heading fit>How to update the DOM when the model has change?</Heading>
            <CodePane lang="js" source={require("raw!./gists/dom-updates2.js")}/>
          </Slide>

          <Slide>
            <Heading fit>Update DOM strategies</Heading>
            <List>
              <ListItem>Minimal DOM Updates</ListItem>
              <ListItem>Recreate the whole DOM</ListItem>
            </List>
          </Slide>

          <Slide>
            <Heading fit>Minimal DOM Updates</Heading>
            <List>
              <ListItem>Used by frameworks like Angular ($scope.$digest)</ListItem>
              <ListItem>How to detect changes on big and complex data structures?</ListItem>
              <ListItem>$watchers can mutate the $scope, $digest need to run until nothing change</ListItem>
            </List>
          </Slide>

          <Slide>
            <CodePane lang="js" source={require("raw!./gists/dom-updates3.js")}/>
           </Slide>

          <Slide>
            <Heading>$digest performance</Heading>
            <List>
              <ListItem>Anything faster than 50 ms is imperceptible</ListItem>
              <ListItem>Around 2000 bindings is where you start to see problems</ListItem>
              <ListItem>The data binding can cause performance issues on complex pages.</ListItem>
            </List>
            <p><small>http://stackoverflow.com/questions/9682092/how-does-data-binding-work-in-angularjs/9693933#9693933</small></p>
          </Slide>

          <Slide>
            <Heading>Strategy #2: Recreate the whole DOM</Heading>
            <List>
              <ListItem>React interface</ListItem>
              <ListItem>When the model update, the whole application is rendered</ListItem>
              <ListItem>React doesn't need to know what data change, only if it has changed</ListItem>
              <ListItem>Efficient DOM updates using virtual DOM</ListItem>
            </List>
          </Slide>

          <Slide>
            <Heading size={2}>React DOM update</Heading>
            <List>
              <ListItem>Every time data change (setState()), React calls render method</ListItem>
              <ListItem>Render create a virtual dom representation</ListItem>
              <ListItem>Compare the new and the old tree. <a href="https://facebook.github.io/react/docs/reconciliation.html">Reconciliation</a> </ListItem>
              <ListItem>Creates a batch of DOM updates</ListItem>
            </List>
          </Slide>

          <Slide>
            <Heading>Reconciliation</Heading>
            <List>
              <ListItem>Generating the minimum number of operations to transform one tree into another</ListItem>
              <ListItem>O(n<sup>3</sup>) where n is the number of nodes in the three</ListItem>
              <ListItem>React implements a non-optimal O(n) algorithm using heuristics</ListItem>
            </List>
          </Slide>

          <Slide>
            <Heading fit>React component counter</Heading>
            <div>https://jsbin.com/gonaxohowi/2/edit?html,js,output</div>
          </Slide>

          <Slide>
            <Heading fit>Pure component</Heading>
            <List>
              <ListItem>Pure component (like pure function)</ListItem>
              <ListItem>It renders the same result given the same props and state</ListItem>
            </List>
            <CodePane lang="js" source={require("raw!./gists/pure-component.js")}/>
          </Slide>

          <Slide>
            <Heading fit>How to optimize a complex pure function?</Heading>
            <CodePane lang="js" source={require("raw!./gists/pure-function-factorial.js")}/>
          </Slide>

          <Slide>
            <Heading fit>Memoization</Heading>
            <List>
              <ListItem>Store the results of expensive function calls and returning the cached result when the same inputs occur again.</ListItem>
            </List>
          </Slide>

          <Slide>
            <Heading fit>Memoization</Heading>
            <CodePane lang="js" source={require("raw!./gists/pure-function-factorial-memoization.js")}/>
          </Slide>

          <Slide>
            <Heading>Render memoization</Heading>
            <CodePane lang="js" source={require("raw!./gists/render-memoization.js")}/>
          </Slide>

          <Slide>
            <Heading fits>shouldComponentUpdate</Heading>
            <CodePane lang="js" source={require("raw!./gists/render-memoization-shouldupdate.js")}/>
          </Slide>

          <Slide>
            <Heading>Equallity problem</Heading>
            <CodePane lang="js" source={require("raw!./gists/equality-problem.js")}/>
          </Slide>

          <Slide>
            <Heading fit>Equality checks</Heading>
            <List>
              <ListItem><strong>Value equality</strong>: Primitives (number, string)</ListItem>
              <ListItem><strong>Reference equality</strong>: Arrays and Objects</ListItem>
            </List>
          </Slide>

          <Slide>
            <Heading fit>Value equality for Arrays and Objects</Heading>
            <List>
              <ListItem>Recursive algorithm</ListItem>
              <ListItem>Data structures can have cycles (infinite loops)</ListItem>
            </List>
          </Slide>

          <Slide>
            <Heading>Immutability</Heading>
            <CodePane lang="js" source={require("raw!./gists/immutability-implementation.js")}/>
          </Slide>

          <Slide>
            <Heading>Immutability</Heading>
            <List>
              <ListItem>You don't need a library to implement immutability</ListItem>
              <ListItem>Everytime you want update and object, create a new object with the new value</ListItem>
              <ListItem>It seems like a waste of memory, but there are some optimizations we can apply.</ListItem>
            </List>
          </Slide>

          <Slide>
            <Heading>Persistent Immutable Data Structures</Heading>
            <div>TODO persisent immutable data structures diagram</div>
          </Slide>

          <Slide>
            <Heading>Immutable.js</Heading>
            <CodePane lang="js" source={require("raw!./gists/immutable-js.js")}/>
          </Slide>

          <Slide>
            <Heading>Om</Heading>
            <List>
              <ListItem>ClojureScript interface to React</ListItem>
              <ListItem>Data structures in clojure are immutable</ListItem>
              <ListItem>Immutable data Om can deliver even better results than using React out of the box</ListItem>
            </List>
          </Slide>

          <Slide>
            <Heading>Another benefit of Immutability</Heading>
            <p>It's easy to implement features like undo/redo.</p>
            <p><a href="https://jsbin.com/nitamunowo/edit?js,console,output">https://jsbin.com/nitamunowo/edit?js,console,output</a></p>
          </Slide>

          <Slide>
            <Heading>Problem #2</Heading>
            <Heading>Single-page applications have become increasingly complicated</Heading>
          </Slide>

          <Slide>
            <Heading>Application needs to store state</Heading>
            <List>
              <ListItem>State from server responses</ListItem>
              <ListItem>
                State from UI
                <List>
                  <ListItem>Selected tab</ListItem>
                  <ListItem>Need to show spinner?</ListItem>
                  <ListItem>Pagination controls</ListItem>
                </List>
              </ListItem>
              <ListItem>Share state beetween independent components</ListItem>
            </List>
          </Slide>

          <Slide>
            <p>MVC simple</p>
          </Slide>

          <Slide>
            <p>MVC complex</p>
          </Slide>

          <Slide>
            When a system is opaque and non-deterministic, it’s hard to reproduce bugs or add new features
          </Slide>

          <Slide>
            Mutation and asynchronicity create a mess.
            We need to find a way to make our state more predictable.
          </Slide>

          <Slide>
            <Heading>Redux</Heading>
            <List>
              <ListItem>Inspired on flux and elm</ListItem>
              <ListItem>Minimal api</ListItem>
              <ListItem>Completely predictable behaviour</ListItem>
              <ListItem>Not react specific, it's just an event and state management library</ListItem>
            </List>
          </Slide>

          <Slide>
            <Heading>Redux principles</Heading>
          </Slide>

          <Slide>
            <Heading>Single source of truth</Heading>
            <List>
              <ListItem>The state of the whole application is stored in an object tree within a single store</ListItem>
              <ListItem>Easy to share information across components</ListItem>
              <ListItem>Easy to debug</ListItem>
              <ListItem>We can easily save and restore the state of the whole application</ListItem>
              <ListItem>Undo/redo, hot reloading, trace production error</ListItem>
            </List>
          </Slide>

          <Slide>
            <CodePane lang="js" source={require("raw!./gists/redux-state.js")}/>
          </Slide>

          <Slide>
            <Heading>State is read-only</Heading>
            <List>
              <ListItem>The only way to mutate the state is to emit and action, an object describing what happened.</ListItem>
              <ListItem>Views or http callbacks don't modify the state, instead they express the intention to mutate the state.</ListItem>
              <ListItem>Actions can be logged for debugging or stored for testing purposes</ListItem>
            </List>
          </Slide>

          <Slide>
            <CodePane lang="js" source={require("raw!./gists/redux-actions.js")}/>
          </Slide>

          <Slide>
            <Heading>Changes are made with pure functions</Heading>
            <List>
              <ListItem>This pure functions are called reducers</ListItem>
            </List>
            <CodePane lang="js" source={require("raw!./gists/redux-reducer-signature.js")}/>
          </Slide>

          <Slide>
            <CodePane lang="js" source={require("raw!./gists/redux-reducer.js")}/>
          </Slide>

          <Slide>
            Redux diagram

            action -> reducer -> store
          </Slide>

          <Slide>
            <Heading>Redux dev tools demo</Heading>
            <List>
              <ListItem>Dev tools</ListItem>
              <ListItem>Hot reloading</ListItem>
              <ListItem>Time travel debugging</ListItem>
            </List>
          </Slide>

        </Deck>
      </Spectacle>
    )
  }
};