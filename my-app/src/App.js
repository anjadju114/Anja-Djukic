import React, { Component } from 'react';
import slika1 from './pics/slika1.jpg';
import slika2 from './pics/slika2.jpg';
import slika3 from './pics/slika3.jpg';
import slika4 from './pics/slika4.jpeg';
class App extends Component {   

    state = {
        index: 0, 
        picList: [slika1,slika2,slika3,slika4]
      }
      
      onClickNext= () => {
          if (this.state.index + 1 === this.state.picList.length ){
              this.setState({ 
                  index: 0 
                })
            } else {
                this.setState({
                    index: this.state.index + 1
                })
            }

          }
          onClickPrevious= () => {
            if (this.state.index - 1 === -1 ){
                this.setState({ 
                    index: this.state.picList.length - 1
                  })
              } else {
                  this.setState({
                      index: this.state.index - 1
                  })
              }
            }
      
      render() {
        return (
          <div>
            <p id="naslov">GALERIJA</p>
            <img src={this.state.picList[this.state.index]} style={{"maxHeight":"40%","maxWidth":"40%"}} /> <br/>
            <button onClick={this.onClickPrevious}> Previous </button>
            <button onClick={this.onClickNext}> Next </button>
          </div>
        );
      }

}


export default App;
