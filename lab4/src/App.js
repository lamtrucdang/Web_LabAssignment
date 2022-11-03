import * as React from 'react';
import MyComponent from './components/MyComponent';


function App() {
    const [MyComponent, setMyComponent] = React.useState(null);

    React.useEffect(() => {
      import(MyComponent).then((module) => {
        setMyComponent(module.default);
      });
    }, []);

    return <MyComponent/>;

}

export default App;
