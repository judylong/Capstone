json.total_count @search_results.count
json.results @search_results, partial: "api/projects/project", as: :project
