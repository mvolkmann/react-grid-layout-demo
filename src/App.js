import React, {Component} from 'react';
//import GridLayout from 'react-grid-layout';
import GridLayout from 'react-grid-layout';

import 'react-grid-layout/css/styles.css';
import 'react-resizable/css/styles.css';
import './App.css';

class App extends Component {
  render() {
    var layout = [
      {i: 'a', x: 0, y: 0, w: 1, h: 2},
      {i: 'b', x: 1, y: 0, w: 3, h: 2},
      {i: 'c', x: 4, y: 0, w: 1, h: 2}
    ];

    return (
      <div className="App">
        <header>Header Content</header>
        <div className="body">
          {/*TODO: As long as the nav is present, the mouse location is off when dragging an item! */}
          <div className="nav">Nav Content</div>
          <GridLayout
            autoSize={false}
            cols={12}
            items={3}
            layout={layout}
            rowHeight={30}
            width={1200}
          >
            {/* Why aren't these resizable? */}
            <div key="a" i="a" x="0" y="0" w="1" h="1">
              a
            </div>
            <div key="b" i="b" x="1" y="0" w="1" h="1">
              b
            </div>
            <div key="c" i="c" x="0" y="1" w="2" h="1">
              c
            </div>
          </GridLayout>
        </div>
      </div>
    );
  }
}

export default App;
