import React from 'react';
import ReactDOM from 'react-dom';
import Coverflow from '../../src/Coverflow';
import {StyleRoot} from 'radium';

var fn = () => {
  console.log('Album one');
};

ReactDOM.render(

  <Coverflow
    width={960}
    height={480}
    displayQuantityOfSide={2}
    navigation={true}
    enableHeading={false}
    >
    <img src='images/album-1.png' alt='Album one' data-action={fn} />
    <img src='images/album-2.png' alt='Album two' data-action="http://passer.cc"/>
    <img src='images/album-3.png' alt='Album three' data-action="https://doce.cc/"/>
    <img src='images/album-4.png' alt='Album four' data-action="http://tw.yahoo.com"/>
    <img src='images/album-5.png' alt='Album five' data-action="http://www.bbc.co.uk"/>
    <img src='images/album-6.png' alt='Album six' data-action="https://medium.com"/>
    <img src='images/album-7.png' alt='Album seven' data-action="http://www.google.com"/>
    <img src='images/album-1.png' alt='Album one' data-action="https://facebook.github.io/react/"/>
    <img src='images/album-2.png' alt='Album two' data-action="http://passer.cc"/>
    <img src='images/album-3.png' alt='Album three' data-action="https://doce.cc/"/>
    <img src='images/album-4.png' alt='Album four' data-action="http://tw.yahoo.com"/>
    <img src='images/album-5.png' alt='Album five' data-action="http://www.bbc.co.uk"/>
    <img src='images/album-6.png' alt='Album six' data-action="https://medium.com"/>
    <img src='images/album-7.png' alt='Album seven' data-action="http://www.google.com"/>
    <img src='images/album-1.png' alt='Album one' data-action="https://facebook.github.io/react/"/>
    <img src='images/album-2.png' alt='Album two' data-action="http://passer.cc"/>
    <img src='images/album-3.png' alt='Album three' data-action="https://doce.cc/"/>
    <img src='images/album-4.png' alt='Album four' data-action="http://tw.yahoo.com"/>
    <img src='images/album-5.png' alt='Album five' data-action="http://www.bbc.co.uk"/>
    <img src='images/album-6.png' alt='Album six' data-action="https://medium.com"/>
    <img src='images/album-7.png' alt='Album seven' data-action="http://www.google.com"/>
    <img src='images/album-1.png' alt='Album one' data-action="https://facebook.github.io/react/"/>
    <img src='images/album-2.png' alt='Album two' data-action="http://passer.cc"/>
    <img src='images/album-3.png' alt='Album three' data-action="https://doce.cc/"/>
    <img src='images/album-4.png' alt='Album four' data-action="http://tw.yahoo.com"/>
    <img src='images/album-5.png' alt='Album five' data-action="http://www.bbc.co.uk"/>
    <img src='images/album-6.png' alt='Album six' data-action="https://medium.com"/>
    <img src='images/album-7.png' alt='Album seven' data-action="http://www.google.com"/>

  </Coverflow>,

  document.querySelector('.example_1')
);

ReactDOM.render(
  <StyleRoot>
  <Coverflow
    displayQuantityOfSide={2}
    navigation={true}
    enableHeading={true}
    active={3}
    media={{
      '@media (max-width: 900px)': {
        width: '600px',
        height: '300px'
      },
      '@media (min-width: 900px)': {
        width: '960px',
        height: '600px'
      }
    }}
    >
    <img src='images/album-1.png' alt='Album one' data-action="https://facebook.github.io/react/"/>
    <img src='images/album-2.png' alt='Album two' data-action="http://passer.cc"/>
    <img src='images/album-3.png' alt='Album three' data-action="https://doce.cc/"/>
    <img src='images/album-4.png' alt='Album four' data-action="http://tw.yahoo.com"/>
  </Coverflow>
  </StyleRoot>
  ,
  document.querySelector('.example_2')
);
