json.total_count @search_results.total_count
json.results do
  json.array! @search_results do |search_result|
    if search_result.searchable_type == "Project"
      json.partial! "api/projects/project", project: search_result.searchable
      json._type "Project"
    end
  end
end
