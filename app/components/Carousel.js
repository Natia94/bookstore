import React from 'react';
import { UncontrolledCarousel } from 'reactstrap';

const items = [
  {
    src: 'https://images2.alphacoders.com/261/26102.jpg',
    altText: 'Slide 1',
    caption: '- E.B White',
    header: `“Books are good company, in sad times and happy times, for books are people – people who have managed to stay alive by hiding between the covers of a book.”`,
    key: '1'
  },
  {
    src: 'https://images6.alphacoders.com/595/595276.jpg',
    altText: 'Slide 2',
    caption: 'Artur Conan Doyle',
    header: '“ When you have eliminated the impossible, whatever remains, however improbable, must be the truth?”',
    key: '2'
  },
  {
    src: 'https://images5.alphacoders.com/692/692886.jpg',
    altText: 'Slide 3',
    caption: '― Rudyard Kipling, The Jungle Book',
    header: '“The reason the beasts give among themselves is that Man is the weakest and most defenseless of all living things,”',
    key: '3'
  }
];

const MainCarousel = () => <UncontrolledCarousel items={items} />;

export default MainCarousel;