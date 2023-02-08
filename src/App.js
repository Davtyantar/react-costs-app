import Costs from "./components/costs/Costs";
import NewCost from "./components/NewCost/NewCost";
import React, {useState} from "react";

const INITIAL_COSTS = [
  {
    id: 'c1',
    date: new Date (2022, 2, 12),
    description: 'Холодильник',
    amount: 999.99,
  },
  { 
    id: 'c2',
    date: new Date (2021, 11, 25),
    description: 'MacBook',
    amount: 1254.72,
  },
  {
    id: 'c3',
    date: new Date (2021, 3, 1),
    description: 'Джинсы',
    amount: 149.99,
  },
  {
    id: 'c4',
    date: new Date (2022, 7, 21),
    description: 'Духи',
    amount: 99.99,
  },
  {
    id: 'c5',
    date: new Date (2022, 11, 9),
    description: 'Одежда',
    amount: 199.99,
  },
];

const App = () => {

  const [costs, setCosts] = useState(INITIAL_COSTS);

  const addCostHandler = (cost) => {
    setCosts((prevCosts) => {
      return [cost, ...prevCosts]
    });
  };

  return (
    <div>
      <NewCost onAddCost ={addCostHandler} />
      <Costs costs={costs}/>
    </div>
  );
}

export default App;
