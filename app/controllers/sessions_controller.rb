class SessionsController < ApplicationController

    ##Logging In 

    def create 
        user_to_login = User.find_by(params[:username])

        if user_to_login
            #additional auth here
            session[:user_id] = user_to_login.id
            render json: user_to_login
        else
            render json: {error: "User not found"}, status: :not_found
        end


    end 

    ##LogOut 
    # def destroy 
    # end 
end