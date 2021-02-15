import React from 'react';
import DataProvider from './data/DataContext'
import NavScreen from './components/NavScreen';


const App = () => {
  
    return (
      <DataProvider>
        <NavScreen/>
      </DataProvider>
    );  
};



export default App;
