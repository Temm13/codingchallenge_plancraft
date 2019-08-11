import React, { useReducer } from "react";
import { render } from "react-dom";
import SortableTree from "react-sortable-tree";
import 'react-sortable-tree/style.css';

function App() {
  const [treeData, newState] = useReducer((state, action) => {
    if(action.body.length === 1) {
      state = action.body;
    }
    return state;
  }, [
    {
      title: 'Category 1',
      expanded: true,
      children: [
        {
          title: "Category 1.1",
          expanded: true,
          children: [
            {
               title: "Item Group 1",
               expanded: true,
               children: [
                 {
                   title: "Item 1",
                 },
                 {
                   title: "Item 2",
                 }
               ]
            },
            {
              title: "Item 3",
            }
          ]
        },
        {
          title: "Category 1.2",
          expanded: true,
          children: [
             {
               title: "Item 4",
             },
             {
               title: "Item 5",
             },
          ]
        }
      ]
    }
  ])
  return (
    <div style={{ height: '100vh' }}>
      <SortableTree
        treeData={treeData}
        onChange={treeData => newState({ body: treeData })}
      />
    </div>
  );
}

export default App;
