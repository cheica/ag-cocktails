
function ReviewCard (props) {



    return (

       
        <div class="test-container">
             {/* <img src="bandmember.jpg" alt="Avatar" style="width:90px"> */}
             <p><span>Name: {props.RevsToRender.rev_name}</span></p>
             <p><span>Rating: {props.RevsToRender.rating}</span></p>
             <p>Comments: {props.RevsToRender.comment}</p>

        </div>
        
    )

}

export default ReviewCard;