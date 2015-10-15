json.results @search_results, partial: "api/projects/project", as: :project
json.errors "found nothing" if @search_results.length == 0
