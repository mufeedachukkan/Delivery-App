import React from 'react';
import Pizza from '../components/Pizza';
import pizzas from '../data'
function HomeScreen() {
  return (
    <div>
      <h1>{pizzas.length}</h1>
      <div className="row">
        {pizzas.map(pizza=>{
            return <div className="col-md-4">
                <div>
                    <Pizza pizza={pizza}></Pizza>
                </div>
            </div>
        })}
      </div>
    </div>
  );
}

export default HomeScreen;
