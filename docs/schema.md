# Schema Information

## projects
column name | data type | details
------------|-----------|-----------------------
id          | integer   | not null, primary key
title       | string    | not null
description | text      | not null
goal        | integer   | not null
end_date    | date      | not null
owner_id    | integer   | not null, foreign key (references users)
category_id | integer   | not null, foreign key (references users)
video_url   | string    | not null
img_url     | string    | not null

## backings
column name | data type | details
------------|-----------|-----------------------
id          | integer   | not null, primary key
project_id  | integer   | not null, foreign key (references projects)
backer_id   | integer   | not null, foreign key (references users)

## categories
column name | data type | details
------------|-----------|-----------------------
id          | integer   | not null, primary key
title       | string    | not null

## rewards
    column name    | data type | details
-------------------|-----------|-----------------------
id                 | integer   | not null, primary key
project_id         | integer   | not null, foreign key (references projects)
title              | string    | not null
pledge_amount      | integer   | not null
shipping_location  | string    |
delivery_time      | date      | 

## users
column name     | data type | details
----------------|-----------|-----------------------
id              | integer   | not null, primary key
email           | string    | not null, unique
password_digest | string    | not null
session_token   | string    | not null, unique
