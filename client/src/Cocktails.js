import react, { useEffect, useState } from 'react'
import BookNow from './BookNow';
import CocktailCard from './CocktailCard';
import NavBar from './NavBar'


function Cocktails(props) {

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
                deleteFunc={handleDelete} 
                adminPassCard={props.adminPass}/>
                
                
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
                e.target.reset();
                
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

    function renderTailsForm () {

        return props.adminPass ? 
        (<form onSubmit={handleSubmit}>
            <label>Name</label>
            <input type="text" onChange={handleName}/>

            <label>Image</label>
            <input type="text" onChange={handleImg}/>

            <input className="button" type="submit" value="SUBMIT" />
        </form>)
        :
        (<> </>)

            }

    return (
        
        <div className="center">
        <h1 className="featured">Featured Creations </h1>
        {<BookNow/>}
        <br></br>
        {/* <div> */}
        {renderTailsForm()}

        {/* </div> */}

        {mapDrinks()}


        </div>
        
    )
    
    
    
}

export default Cocktails;