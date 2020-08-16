import React from 'react';
import ReactDOM from 'react-dom';

// var randomImg = 'https://picsum.photos/200'

ReactDOM.render(
  <div>
    <h1 className='heading' contentEditable='true' spellCheck='false'>Recent Books I read</h1>
    <ul>
      <li>Kafka on the shore</li>
      <img src="images/kafka.jpg" alt=""/>
      <li>Ikigai</li>
      <img src="images/ikigai.jpg" alt=""/>
      <li>Monk who sold his Ferrari</li>
      <img src="images/monk.jpg" alt=""/>
    </ul>
    {/* <img src={randomImg} alt=""/> */}
  </div>
  ,
  document.getElementById('root')
);
