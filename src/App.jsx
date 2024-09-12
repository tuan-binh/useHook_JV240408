import FormStudent from './components/FormStudent';
import MyTextArea from './components/MyTextArea';
import { useEffect } from 'react';
// import { useState } from 'react';

function App() {
  // const [data, setData] = useState([1, 2]);

  useEffect(() => {
    // alert('Lê Minh Quang');
    // call api findAll
    //
  }, []);

  return (
    <>
      {/* <div>{data.toString()}</div>
      <button onClick={() => setData([...data, Math.floor(Math.random() * 10)])}>random</button> */}
      {/* <MyTextArea /> */}
      <FormStudent />
    </>
  );
}

export default App;
