# Endpoints Documentation

Documentation for the Blog would be added here.

## User Roles

- Supreme Admin
- Admin
- Writer

## Possible Tables

- Users
- Categories (Python, Web, DevOps, etc...)
- Articles
- Comments
- Comment Replies
- Tags
- Flagged Posts

## All Endpoints Needed are as follows

**USERS**

- `POST /auth/login` - Authentication Endpoint for both Writers and Admins (It should make checks with the email to determine the role of the user that's logging in).
- `POST /auth/createAdmin` - Authentication Endpoint for Super-Admin and Admin. Permission Based Route
- `GET /users` - Authentication Endpoint for Super-Admin and Admin. Permission Based Route
- `PATCH /user/:id` - Authentication Endpoint for specific user. Permission Based Route open to user in question only.

**POSTS**

- `GET /posts` - Get All Published Posts
- `GET /posts/:id` - Get Single Post-
- `POST /posts` - Save a Post in Drafts
- `PATCH /posts/:id/publish` - Publish a Post
- `PATCH /posts/:id` - Edit a Post
- `PUT /posts/:id/archive` - Archive a Post
- `PATCH /post/:id/like` - Like a Post
- `PATCH /post/:id/dislike` - Dislike a Post
- `PATCH /post/:id/love` - Like a Post
- `PATCH /post/:id/flag` - Flag a Post as Inappropriate
- `PATCH /post/:id/unflag` - Unflag a Post (Permission Based Route. Admin/Super-Admin Access)
- `DELETE /post/:id` - Delete a Post

**COMMENTS**

- `POST /posts/:id/comment` - Make a Comment for a Post
- `GET /posts/:id/comments` - Get All Comments for Posts
- `PATCH /posts/:id/comment/:id` - Edit a Comment
- `DELETE /posts/:id/comment/:id` - Delete a Comment

**COMMENT REPLIES**

- `POST /posts/:id/comment/:id/reply` - Reply to a Comment
- `PATCH /posts/:id/comment/:id/reply/:id` Edit a reply to a Comment
- `GET /posts/:id/comment/:id/reply` - Get All Replies to a Comment in a Posts
- `DELETE /posts/:id/comment/:id/reply/:id` - Delete a Reply

**CATEGORIES**

- `GET /category` - Get All Categories for Posts
- `GET /category/:id` - Get Single Category for a Post
- `POST /category` - Create a new cCtegory
- `PATCH /category/:id`  - Edit a Category
- `DELETE /category/:id` - Delete a Category

**TAGS**

- `GET /tags` - Get All Tags for a Posts
- `GET /tag/:id` - Get Single Tag
- `POST /tags` - Create a new Tags
- `PATCH /tags/:id`  - Edit a Tag
- `DELETE /tags/:id` - Delete a Tag
