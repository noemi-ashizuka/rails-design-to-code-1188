class MoviesController < ApplicationController
  def index 
    if params[:query].present?
      @movies = Movie.search_by_title_and_synopsis(params[:query])
    else
      @movies = Movie.all
    end

    respond_to do |format|
      format.html
      format.text { render partial: "movies/list", locals: { movies: @movies }, formats: [:html]}
    end
  end

  def update
    @movie = Movie.find(params[:id])
    @movie.update(movie_params)

    respond_to do |format|
      format.html { redirect_to movies_path }
      format.text { render partial: "movies/movie_infos", locals: { movie: @movie }, formats: [:html] }
    end
    
  end

  private

  def movie_params
    params.require(:movie).permit(:title, :year)
  end
end
