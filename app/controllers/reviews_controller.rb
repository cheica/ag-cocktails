class ReviewsController < ApplicationController
    def index

        render json: Review.all
    end



    #Need CREATE    

    def create 
        new_rev = Review.create(rev_params)

        if new_rev.valid? 
            render json: new_rev

        else
            render json: {errors: new_rev.errors.full_messages}, status: :unprocessable_entity
        end
    end 

    private 
    def rev_params 
        params.permit(:rev_name, :comment, :rating)
    end 
end
