class Api::CocktailsController < ApplicationController

    def index 
        render json: Cocktail.all
    end 

    def create 
        new_drink = Cocktail.create(ctail_params)

        if new_drink.valid? 
            render json: new_drink 

        else
            render json: {errors: new_drink.errors.full_messages}, status: :unprocessable_entity
        end
    end 

    def destroy 
        drink = Cocktail.find_by(id: params[:id])

        if drink 
            drink.destroy
            render json: drink ,status: :ok
        else
            render json: {error: "Cake NOT found"}, status: :not_found
        end


    end 

    private 
    def ctail_params
        params.permit(:name, :image, :user_id)
    end
end
