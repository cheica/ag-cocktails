class UsersController < ApplicationController

    def index 
        render json: User.all
    end

    # def create
    #     new_user = User.create(user_params)

    # end

    # def user_params
    #     params.permit(:name, :username, :email, :password_digest, :role, :image)
    # end


    
end
