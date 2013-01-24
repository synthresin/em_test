class PostsController < ApplicationController

	def index
  	
  	if params[:title] 
  		render :json => Post.where(:title => params[:title])
  	else
  		render :json => Post.all
  	end

  end

	def show
  	render :json => Post.find(params[:id])
  end
end
