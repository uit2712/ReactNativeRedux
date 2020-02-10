# ReactNativeRedux
An example about using Redux in React Native

<h2>YOUTUBE VIDEO:</h2>
<h2>DEMO</h2>

<h2>0. Step 0:</h2> Benefits of using Redux:<br>
- Avoid pass data multiple levels (React/ React native passes props from parent component to its child components<br>
=> maybe some child components don't need the passing data, but it contains a component that needs this data) => data is useless in some components<br>
- Redux makes it's easy to test (actions tell us what is happening) => traditional state in every components makes us crazy when something wrong but we don't know where it happened<br>

=>>>> THREE OBJECTS IN REDUX: STORE, REDUCER AND ACTION<br>

<h2>1. Step 1:</h2> Install modules: redux, react-redux<br>
```javascript
npm i --save redux react-redux
```
<h2>2. Step 2:</h2> Create a simple store => store is used to contain your app states (combines all components state)<br>
<h2>3. Step 3:</h2> Create a simple reducer => reducer is a pure function which returns new state based on an action (I will explain this in later steps). Reducer has 2 parameters:<br>
- state: this is state of current reducer<br>
- action: simple is a plain object contains some value, such as: type (often a string tell something about this action), payload (contains data),...<br>
=> Because reducer is a pure function, we shouldn't change these parameters => this is a rule :)))<br>
=> NOTE: reducer 'contains' state (we init this with 'initialState')<br>
<h2>4. Step 4:</h2> Connect REDUX to our app<br>
<h2>5. Step 5:</h2> Build REDUX FRAMEWORK => create folders: store, reducers, actions<br>
<h2>6. Step 6:</h2> Combine reducers<br>
<h2>7. Step 7:</h2> Use middleware redux-thunk => used for actions which don't return a plain object, such as fetch
data from API<br>
```javascript
npm i --save redux-thunk
```
