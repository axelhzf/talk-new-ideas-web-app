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

const images = {
  virtualDom: require("./images/virtual-dom.svg"),
  virtualDom2: require("./images/virtual-dom2.svg"),
  immutable: require("./images/immutable.svg"),
  mvc: require("./images/mvc.svg"),
  mvcComplex: require("./images/mvc-complex.svg"),
  redux: require("./images/redux.svg")
};
preloader(images);

const theme = createTheme({
  primary: "#232323", //black
  secondary: "#FFFFFF", //white
  tertiary: "#34D5FF", //blue
  quartenary: "#787C7F" //gray
}, {
  primary: "Open Sans Condensed",
  secondary: "Open Sans Condensed",
  tertiary: "monospace"
});

export default class Presentation extends React.Component {
  render() {
    return (
      <Spectacle theme={theme}>
        <Deck transition={["slide"]} transitionDuration={100} progress="bar">
          <Slide>
            <Heading size={1} fit caps lineHeight={1} textColor="tertiary">
              New ideas on
            </Heading>
            <Heading size={2} fit caps lineHeight={1} textColor="secondary">
              Web App Development
            </Heading>
            <Heading size={2} textColor="quartenary">
              (Maybe not so new)
            </Heading>
          </Slide>

          <Slide>
            <Heading size={3} caps textColor="secondary">
              Problem #1:
            </Heading>
            <Heading size={2} caps fit textColor="tertiary">
              DOM Updates
            </Heading>
          </Slide>

          <Slide>
            <Heading caps>DOM Creation</Heading>
            <Layout>
              <Fill>
                <CodePane lang="js" source={require("raw!./gists/dom-updates.js")}/>
              </Fill>
              <Fill>
                <CodePane lang="html" source={require("raw!./gists/dom-updates.html")}/>
              </Fill>
            </Layout>
          </Slide>

          <Slide>
            <Heading fit caps>How to update the DOM?</Heading>
            <Layout>
              <Fill>
                <CodePane lang="js" source={require("raw!./gists/dom-updates2.js")}/>
              </Fill>
              <Fill>
                <CodePane lang="html" source={require("raw!./gists/dom-updates2.html")}/>
              </Fill>
            </Layout>
          </Slide>

          <Slide>
            <Heading caps fit>Re-render everything</Heading>
            <List>
              <ListItem>Used by frameworks like React</ListItem>
              <ListItem>When the model update, the whole application is rendered</ListItem>
              <ListItem>React doesn't need to know what data change, only if it has changed</ListItem>
              <ListItem>Efficient DOM updates using virtual DOM</ListItem>
            </List>
          </Slide>

          <Slide>
            <Heading caps>DOM update cycle</Heading>
            <List>
              <ListItem>Every time state change <code>setState()</code>, React calls <code>render</code> method</ListItem>
              <ListItem><code>render</code> create a <code>virtual dom</code>  representation</ListItem>
              <ListItem>Compare the new and the old tree using <code>reconciliation</code></ListItem>
              <ListItem>Creates a batch of DOM updates</ListItem>
            </List>
          </Slide>

          <Slide>
            <Image src={images.virtualDom}/>
          </Slide>

          <Slide>
            <Image src={images.virtualDom2}/>
          </Slide>

          <Slide>
            <Heading caps>Virtual DOM</Heading>
            <List>
              <ListItem>It's fast</ListItem>
              <ListItem>React is not the <a href="https://github.com/Matt-Esch/virtual-dom">only implementation</a></ListItem>
              <ListItem>Render to something diferent that the DOM: string (server-side-render), native components (react-native), canvas (react-canvas) </ListItem>
            </List>
          </Slide>

          <Slide>
            <Heading fit>React component example</Heading>
            <p><a target="_blank" href="https://jsbin.com/remeruqujo/edit?js,console,output">https://jsbin.com/remeruqujo/edit?js,console,output</a></p>
          </Slide>

          <Slide>
            <Heading>Pure component</Heading>
            <List>
              <ListItem>Pure component like in pure function</ListItem>
              <ListItem>It renders the same result given the same props and state</ListItem>
            </List>
            <CodePane lang="js" source={require("raw!./gists/pure-component.js")}/>
          </Slide>

          <Slide>
            <Heading caps fit>How to optimize a complex pure function?</Heading>
            <CodePane lang="js" source={require("raw!./gists/pure-function-factorial.js")}/>
          </Slide>

          <Slide>
            <Heading caps>Memoization</Heading>
            <List>
              <ListItem>Store the results of expensive function calls and returning the cached result when the same inputs occur again.</ListItem>
            </List>
          </Slide>

          <Slide>
            <Heading caps>Memoization</Heading>
            <CodePane lang="js" source={require("raw!./gists/pure-function-factorial-memoization.js")}/>
          </Slide>

          <Slide>
            <Heading caps fit>Render memoization</Heading>
            <CodePane lang="js" source={require("raw!./gists/render-memoization.js")}/>
          </Slide>

          <Slide>
            <Heading caps fit>shouldComponentUpdate</Heading>
            <CodePane lang="js" source={require("raw!./gists/render-memoization-shouldupdate.js")}/>
          </Slide>

          <Slide>
            <Heading caps fit>Equallity problem</Heading>
            <CodePane lang="js" source={require("raw!./gists/equality-problem.js")}/>
          </Slide>

          <Slide>
            <Heading caps fit>Equality checks</Heading>
            <List>
              <ListItem><strong>Value equality</strong>: Primitives (number, string)</ListItem>
              <ListItem><strong>Reference equality</strong>: Arrays and Objects</ListItem>
            </List>
          </Slide>

          <Slide>
            <Heading caps fit>Value equality for Arrays and Objects</Heading>
            <List>
              <ListItem>Recursive algorithm</ListItem>
              <ListItem>Data structures can have cycles (infinite loops)</ListItem>
            </List>
          </Slide>

          <Slide>
            <Heading caps>Immutability</Heading>
            <CodePane lang="js" source={require("raw!./gists/immutability-implementation.js")}/>
          </Slide>

          <Slide>
            <Heading caps>Immutability</Heading>
            <List>
              <ListItem>You don't need a library to implement immutability</ListItem>
              <ListItem>Everytime you want update and object, create a new object with the new value</ListItem>
              <ListItem>It seems like a waste of memory, but there are some optimizations we can apply.</ListItem>
            </List>
          </Slide>

          <Slide>
            <Heading caps fit>Persistent Immutable</Heading>
            <Heading caps fit>Data Structures</Heading>
            <p><a href="https://www.youtube.com/watch?v=I7IdS-PbEgI">https://www.youtube.com/watch?v=I7IdS-PbEgI</a></p>
          </Slide>

          <Slide>
            <Heading caps fit>Structural sharing</Heading>
            <Image src={images.immutable}/>
          </Slide>


          <Slide>
            <Heading caps>Immutable.js</Heading>
            <CodePane lang="js" source={require("raw!./gists/immutable-js.js")}/>
          </Slide>

          <Slide>
            <Heading caps fit>Extra benefits of Immutability</Heading>
            <p>It's easy to implement complex features like undo/redo.</p>
            <p><a target="_blank" href="https://jsbin.com/nitamunowo/edit?js,console,output">https://jsbin.com/nitamunowo/edit?js,console,output</a></p>
          </Slide>

          <Slide>
            <Heading caps size={2}>Problem #2</Heading>
            <Heading caps fit>SPA have become </Heading>
            <Heading caps fit>increasingly complicated</Heading>
          </Slide>

          <Slide>
            <Heading>State</Heading>
            <List>
              <ListItem>Applications needs to store complex state</ListItem>
              <ListItem>State from server responses</ListItem>
              <ListItem>State from UI (selected tab, spinners, pagination)</ListItem>
              <ListItem>Share state beetween independent components</ListItem>
            </List>
          </Slide>

          <Slide>
            <Heading caps>MVC</Heading>
            <Image src={images.mvc}/>
          </Slide>

          <Slide>
            <Heading caps fit>Real world MVC</Heading>
            <Image src={images.mvcComplex}/>
          </Slide>

          <Slide>
            <BlockQuote>
              <Quote textColor="secondary">When a system is opaque and non-deterministic, it’s hard to reproduce bugs or add new features</Quote>
            </BlockQuote>
          </Slide>

          <Slide>
            <BlockQuote>
            <Quote textColor="secondary">Mutation and asynchronicity create a mess. We need to find a way to make our state more predictable.</Quote>
            </BlockQuote>
          </Slide>

          <Slide>
            <Heading caps>Redux</Heading>
            <List>
              <ListItem>Inspired on flux and elm</ListItem>
              <ListItem>Minimal api</ListItem>
              <ListItem>Completely predictable behaviour</ListItem>
              <ListItem>Not react specific, it's just an event and state management library</ListItem>
            </List>
          </Slide>

          <Slide>
            <Heading caps fit>Redux principles</Heading>
          </Slide>

          <Slide>
            <Heading caps fit>Single source of truth</Heading>
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
            <Heading caps fit>State is read-only</Heading>
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
            <Heading caps fit>Changes are made with pure functions</Heading>
            <List>
              <ListItem>These pure functions are called reducers</ListItem>
            </List>
            <CodePane lang="js" source={require("raw!./gists/redux-reducer-signature.js")}/>
          </Slide>

          <Slide>
            <CodePane lang="js" source={require("raw!./gists/redux-reducer.js")}/>
          </Slide>

          <Slide>
            <Image src={images.redux}/>
          </Slide>

          <Slide>
            <Heading caps fit>Redux dev tools demo</Heading>
            <List>
              <ListItem>Dev tools</ListItem>
              <ListItem>Hot reloading</ListItem>
              <ListItem>Time travel debugging</ListItem>
            </List>
            <p><a href="http://axelhzf.com/react-redux-table">http://axelhzf.com/react-redux-table</a></p>
          </Slide>

          <Slide>
            <Heading>Questions?</Heading>
            <Heading><a target="_blank" href="http://www.twitter.com/axelhzf">@axelhzf</a></Heading>
          </Slide>

        </Deck>
      </Spectacle>
    )
  }
};