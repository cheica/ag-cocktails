import { useEffect, useState } from "react";
import BookNow from "./BookNow";
import ReviewCard from "./ReviewCard";

function Reviews () {
    //UseState for Reviews 
    
    const [reviews, setReviews] = useState( [] )

    const [newCustomer, setCustomer] = useState( [] )

    const [newRtg, setRtg] = useState( [] )

    const [newComment, setComment] = useState( [] )



    useEffect( () => {
        fetch("/reviews")
        .then(response => response.json())
        .then(fetchedReviews => {console.log("from fetch:", fetchedReviews)
            setReviews(fetchedReviews)
            
    
    })
    },[]);

    // Function to MAP Reviews 

    const mapRevs = () => {
        let mappedRevs = reviews.map(eachRev => {
            return (
            
            <ReviewCard
                key={eachRev.id}
                RevsToRender={eachRev}
             />
                
                
            )
        })
        return mappedRevs
    }

    function handleCustomer (e) { 
        console.log("I'm typing this", e.target.value)
        setCustomer(e.target.value)
        console.log("This is the new name: ", newCustomer)

    }

    function handleComment (e) { 
        console.log("I'm typing this", e.target.value)
        setComment(e.target.value)
        console.log("This is the new Comment: ", newComment)

    }

    function handleRtg (e) { 
        console.log("I'm typing this", e.target.value)
        setRtg(e.target.value)
        console.log("This is the new Rating: ", newRtg)

    }

    function handleRevSubmit(e){
        e.preventDefault()
        console.log("in handlesubmit")

        let newReview ={
            "rev_name": newCustomer, 
            "rating": newRtg,
            "comment": newComment
        }
    
        fetch("/reviews",{
            method: 'POST',
            headers: { "Content-type" : "application/json",
            },
          body: JSON.stringify(newReview)
          
          })
          .then(response => response.json())
          .then(fetchedReviews => {
            console.log(fetchedReviews)
            setReviews([...reviews, fetchedReviews])
            e.target.reset();
            
          })


    }

    
    

    // REVIEW FORM 
    function renderRevform () {
   

        return (
            
            <div className="review-container">
            <form className="center" onSubmit={handleRevSubmit}>
                    <h1 className="center">Leave a Review for us! </h1>
                    <br></br>
                    <label>Name</label>
                    <input type="text" onChange={handleCustomer} placeholder="Enter your Name here!"/>
    
    
    
                <label for="rating">Rating</label>
                        <select id="rating" onChange={handleRtg} name="rating" o>
                            <option value="1">1</option>
                            <option value="2">2</option>
                            <option value="3">3</option>
                            <option value="4">4</option>
                            <option value="5">5</option>
                        </select>
    
    
    
                    <label>Comment</label>
                    <input 
                    // className="review-field"
                    type="text"
                    // id="review" 
                    onChange={handleComment}
                
                    
                    placeholder="Enter your Review here!"/>
    
                    <input type="submit"  value="Submit"/>
                </form>
    
            
            </div>
        )

    }
    // END REVIEW FORM 

    

    // FUNCTION TO HANDLE SUBMIT AND POST :')


    
    





    // end of FUNCTION TO HANDLE SUBMIT AND POST :')


    return (
        <div className="center">
            
            {renderRevform()}

            {<BookNow/>}
            {mapRevs()}
            
        </div>

    )
}

export default Reviews;