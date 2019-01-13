import React, {Component} from 'react';
//import GridLayout from 'react-grid-layout';
import GridLayout from 'react-grid-layout';

import 'react-grid-layout/css/styles.css';
import 'react-resizable/css/styles.css';
import './App.css';

class App extends Component {
  render() {
    var layout = [
      {i: 'a', x: 0, y: 0, w: 1, h: 1},
      {i: 'b', x: 1, y: 0, w: 1, h: 1},
      {i: 'c', x: 0, y: 1, w: 2, h: 2}
    ];

    return (
      <div className="App">
        <header>Header Content</header>
        <div className="body">
          <div className="nav">Nav Content</div>
          <GridLayout
            autoSize={false}
            cols={12} /* default is 12 */
            layout={layout}
            rowHeight={50} /* default is 150 */
            width={1200}
          >
            <div key="a">
              {/* Can't drag by images!  Need to disable those mouse events? */}
              <img alt="Boston 2013" src="images/boston-2013.jpg" />
            </div>
            <div key="b">
              <img alt="Oreos" src="images/oreos.jpg" />
            </div>
            <div key="c">
              <img alt="MackinawIsland" src="images/MackinawIsland.jpg" />
            </div>
          </GridLayout>
        </div>
      </div>
    );
  }
}

export default App;
