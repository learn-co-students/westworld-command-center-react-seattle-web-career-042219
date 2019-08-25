import React, { Component } from "react";
import "./stylesheets/App.css";
import { Segment } from "semantic-ui-react";
import WestworldMap from "./components/WestworldMap";
import Headquarters from "./components/Headquarters";

class App extends Component {
  state = {
    areas: [],
    hosts: [],
    selectedHostId: null
  };

  componentDidMount() {
    Promise.all([
      fetch("http://localhost:3000/areas"),
      fetch("http://localhost:3000/hosts")
    ])
      .then(([res1, res2]) => Promise.all([res1.json(), res2.json()]))
      .then(([res1, res2]) => {
        return this.setState({ areas: res1, hosts: res2 }
        );
      })
      .catch(err => console.log(err));
  }

  selectAHost = selectedHostIdInput => {
    this.setState({ selectedHostId: selectedHostIdInput });
  };

  chooseActiveHosts = () => {
    return this.state.hosts.filter(host => host.active === true);
  };

  // makes state.hosts undefined

  setArea = (id, areaName) => {
    this.setState(prevState => ({
      hosts: prevState.hosts.map(host => {
        if (host.id === id) {
          host.area = areaName;
        }
        return host
      })
    }));
  };

  // setArea = (id, areaName) => {
  //   const newState = [...this.state.hosts];
  //   newState.forEach(host => (host.id === id ? (host.name = areaName) : null));
  //   this.setState({ hosts: newState });
  // };

  // makes state.hosts undefined

  // activateAHost = id => {
  //   this.setState(
  //     prevState => ({
  //       hosts: prevState.hosts.forEach(host => {
  //         if (host.id === id) {
  //           host.active = !host.active;
  //         }
  //       })
  //     })
  //   );
  // };

  activateAHost = id => {
    const newHosts = [...this.state.hosts];
    newHosts.forEach(host =>
      host.id === id ? (host.active = !host.active) : null
    );
    this.setState({ hosts: newHosts });
  };

  activateAllHosts = activated => {
    const newHostsActivated = [...this.state.hosts];
    newHostsActivated.map(host => (host.active = activated));
    this.setState({
      hosts: newHostsActivated
    });
  };

  render() {
    return (
      <Segment id="app">
        <WestworldMap
          areas={this.state.areas}
          selectedHostId={this.state.selectedHostId}
          selectAHost={this.selectAHost}
          // gives index.js:2178 Warning: Cannot update during an existing state transition
          hosts={this.chooseActiveHosts()}
          // breaks completely.
          // hosts={() => {
          //   this.chooseActiveHosts();
          // }}
        />
        <Headquarters
          hosts={this.state.hosts}
          selectedHostId={this.state.selectedHostId}
          areas={this.state.areas}
          selectAHost={this.selectAHost}
          activateAHost={this.activateAHost}
          setArea={this.setArea}
          activateAllHosts={this.activateAllHosts}
        />
      </Segment>
    );
  }
}

export default App;


// def prime_finder(maximum_number)
// 	finalArray=[]
// 	if maximum_number <=2 
// 			p "Please enter a number greater than 2."
// 	end
// 	2.upto(maximum_number) do |i|
// 			result = false
// 			2.upto(Math.sqrt(i)) do |j|
// 					if i % j == 0
// 							result = true
// 							break
// 					end
// 			end
// 			result ? nil : finalArray << i
// 	end
// 	print "The prime numbers under #{maximum_number} are: \n #{finalArray}\n"
// end

// prime_finder(100)


// import math

// def primes(max_number):
//     finalAr=[]
//     if max_number <=2:
//         return "Please enter a number greater than 2."
//     for i in range(2, max_number):
//         result = False
//         for j in range(2, math.floor(math.sqrt(i))+1):
//             if i % j == 0:
//                 result = True
//                 break
//         finalAr.append(i) if result == False else None      
//     print(f'The prime numbers under {max_number} are: \n {finalAr}\n')

// primes (100)


// function primeFinder(max_number) {
//   let finalArray = [];
//   if (max_number <= 2) {
//     return "Please enter a number greater than two.";
//   }
//   for (let i = 2; i < max_number; i++) {
//     let result = false;
//     for (let j = 2; j <= Math.sqrt(i); j++) {
//       if (i % j === 0) {
//         result = true;
//         break;
//       }
//     }
//     result ? null : finalArray.push(i);
//   }
//   console.log(`The prime numbers under ${max_number} are: \n ${finalArray}\n`);
//   return finalArray;
// }

// console.log(primeFinder(100));
