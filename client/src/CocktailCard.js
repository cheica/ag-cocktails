import { useEffect, useState } from 'react'
import Cocktails from './Cocktails'


function CocktailCard(props){
    // console.log("from props", props.deleteFunction)
 

    // Delete Function 
    // const [cocktails, setCocktails] = useState( [] )

//     function handleDelete (fullDrink){
//       console.log("In the delete function")
//       console.log("This is the cocktail ID", fullDrink)
//       fetch (`/cocktails/${fullDrink}`, { 
//           method: "DELETE"
      
//       })
  
//       .then(response => response.json())
//       .then(toRemove => {console.log("Removing this", toRemove)
//           let filterDrinks = cocktails.filter(eachDrink => 
//               eachDrink.id != fullDrink)
//               setCocktails([...filterDrinks])
//           })
  
//   }


 
    return (
     
    <div className="flex-container">
        <div className="center"> 
        <div className="card">
            <img className="card-img" src={props.drinksToRender.image} alt={props.drinksToRender.name} />
        {/* </div> */}

        {/* <div className="name"> */}
                <h4 >{props.drinksToRender.name}</h4>
            <button onClick={(e) => props.deleteFunc(props.drinksToRender.id)}>Delete</button>
        </div>

    </div>
    </div>
    )

}

export default CocktailCard;;