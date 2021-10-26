class SessionsController < ApplicationController

    ##Logging In 

    def create 
        # byebug
        user_to_login = User.find_by(username: params[:username])

        # if user_to_login&.authenticate(params[:password])

        if user_to_login
            #additional auth here
            session[:user_id] = user_to_login.id
            render json: user_to_login, status: :created
        else
            render json: {error: {login: "Invalid username or password"}}
            
            # ,status: :unauthorized
        end

    
        def destroy
            # byebug
            session.delete (:user_id)
            # byebug
            render json: { session_user: session[:user_id]} 
        end
    end 

    ##LogOut 
    # def destroy 
    # end 
end