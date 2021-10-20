import react, { useEffect, useState } from 'react'
import CocktailCard from './CocktailCard';
import NavBar from './NavBar'


function Cocktails() {

   const [drinks, setDrinks] = useState( [] )

   //useState for new Drink 

   const [newName, setNewName] = useState( [] )

   const [newImg, setNewImg] = useState( [] )

   ///

    useEffect( () => {
        fetch("/cocktails")
        .then(response => response.json())
        .then(fetchedTails => {console.log("from fetch:", fetchedTails)
            setDrinks(fetchedTails)
            
    
    })
    },[]);
    // console.log("drinks in UseState", drinks)

    const mapDrinks = () => {
        let mappedDrinks = drinks.map(eachDrink => {
            return (
            
            <CocktailCard 
                key={eachDrink.id}
                drinksToRender={eachDrink}
                deleteFunc={handleDelete} />
                
                
            )
        })
        return mappedDrinks
    }

    //Functions for Form 

    function handleName (e) { 
        console.log("I'm typing this", e.target.value)
        setNewName(e.target.value)
        console.log("This is the new name: ", newName)
        

    }

    function handleImg (e) { 
        console.log("I'm typing this", e.target.value)
        setNewImg(e.target.value)
        console.log("This is the new name: ", newImg)

    }

    function handleSubmit(e){
        e.preventDefault()
            let newCocktail ={
                "name": newName, 
                "image": newImg,
                "user_id": 1
            }
        
            fetch("/cocktails",{
                method: 'POST',
                headers: { "Content-type" : "application/json",
                },
              body: JSON.stringify(newCocktail)
              
              })
              .then(response => response.json())
              .then(fetchedTails => {
                console.log(fetchedTails)
                setDrinks([...drinks, fetchedTails])
                
              })
              
        
            


    }
    // DELETE 
    function handleDelete (fullDrink){
        console.log("In the delete function")
        console.log("This is the cocktail ID", fullDrink)
        fetch (`/cocktails/${fullDrink}`, { 
            method: "DELETE"
        
        })
    
        .then(response => response.json())
        .then(toRemove => {console.log("Removing this", toRemove)
            let filterDrinks = drinks.filter(eachDrink => 
                eachDrink.id != fullDrink)
                setDrinks([...filterDrinks])
            })
    
    }

    // End of Form Functions 

    return (
        
        <>
        <h1>Our CREATIONS </h1>
       {/* <div> */}
                 <form onSubmit={handleSubmit}>
                    <label>Name</label>
                    <input type="text" onChange={handleName}/>

                    <label>Image</label>
                    <input type="text" onChange={handleImg}/>

                    <label>User</label>
                    <input type="text"/>
                    <input className="button" type="submit" value="SUBMIT" />
                </form>
        {/* </div> */}

        {mapDrinks()}


        </>
        
    )
    
    
    
}

export default Cocktails;