json.total_count @search_results.total_count
json.results @search_results, partial: "api/projects/project", as: :project
