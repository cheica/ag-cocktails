class RatesController < ApplicationController

    def index

        render json: Rate.all
    end
end
