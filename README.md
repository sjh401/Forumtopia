# Forumtopia
```

```

## Project Description
This will be a social media forum where users can post and share information with other users, while interacting with eachothers posts and topics.

## Wireframes

![image](https://i.imgur.com/06OqHXt.png)

## Component Hierarchy

![image](https://i.imgur.com/MfbA3BK.png)

## API and Data Sample
```
const UserSchema = new Schema (
{ 
  username: { type: String, required: true, unique: true },
  email: { type: String, required: true , trim: true, unique: true },
  passwordDigest: { type: String, required: true, select: false },
  posts: { type: Schema.Types.ObjectID, ref: "Post", required: true },
  threads: { type: Schema.Types.ObjectID, ref: "Thread", required: true }
    
},
{timestamps: true},
)

const ThreadSchema = new Schema (
{ 
  title: { type: String, required: true },
  body: { type: String, required: true },
  imgUrl: { type: String, required: false },
  userID: { type: Schema.Types.ObjectID, ref: "User", required: true },
  posts: { type: Schema.Types.ObjectID, ref: "Post", required: true }
    
},
{timestamps: true},
)

const PostSchema = new Schema (
{ 
  body: { type: String, required: true },
  imgUrl: { type: String, required: false },
  userID: { type: Schema.Types.ObjectID, ref: "User", required: true },
  threadID: { type: Schema.Types.ObjectID, ref: "Thread", required: true }
    
},
{timestamps: true},
)
 ```
    
### MVP/PostMVP

#### MVP

- Homepage Display
- Login and Log Out
- CRUD Posts
- CRUD Threads
- User Authentication
- Media Query
- Heroku & Netlify Deploy


#### PostMVP

- User Profile
- Direct Message Feature
- User Authorization


## Team Expectations

https://docs.google.com/document/d/1c72iVv7Hm1qJ0E8E0LnE5yhzbRI21jbyYjcZPmOaquA/edit?usp=sharing

## Project Schedule

|  Day | Deliverable | Status
|---|---| ---|
|July 30| Prompt / Wireframes / Priority Matrix / Timeframes | Complete
|August 1| Meet-up Before Approval | Complete
|August 2| Project Approval | Incomcplete
|August 2| Core Application Structure (HTML, Tim, etc.) | Incomplete
|August 3| Pseudocode / actual code | Incomplete
|August 4| Initial Clickable Model | Incomplete
|August 5| MVP | Incomplete
|August 6-9| Post MVP | Incomplete
|August 10| Presentations | Incomplete

## Timeframes

| Component | Priority | Estimated Time | Time Invested | Actual Time |
| --- | :---: |  :---: | :---: | :---: |
| Boilerplate Setup & Installs | H | 2hrs | | |
| Client & Services Setup | H | 2hrs| | |
| Views Arrangement | H | 3hrs | | |
| Components Build | H | 2hrs | | |
| Front End Routing | H | 3hrs | | |
| Models Construction | H | 1hr | | |
| DB Initialization | H | 2hrs | | |
| Routes & Controllers | H | 3hrs | | |
| User Tests | H | 3hrs | | |
| CRUD Posts | H | 3hrs | | |
| CSS Homepage | H | 2hrs | | |
| CSS Buttons & Links | H | 1hr | | |
| CSS Threads | H | 2hrs | | |
| CSS Posts | H | 2hrs | | |
| CSS User Profile | H | 2hrs | | |
| Media-Query Homepage | H | 2hrs | | |
| Media-Query Threads | H | 2hrs | | |
| Media-Query Posts | H | 2hrs | | |
| Media-Query User Profile | H | 2hrs | | |
| React App Clean | M | 2hrs | | |
| User Profile Display | M | 2hrs | | |
| DM Feature | M | 3hrs | | |
| User Authentication | H | 3hrs | | |
| Deploying to Heroku | H | 2hrs | | |
| Netlify Deploy | H | 2hrs | | |
| Clickalbe Walk-Through | H | 2hrs | | |
| Presentation Prep | H | 2hrs | | |
| Total | | 61hrs | | |

## SWOT Analysis

### Strengths:
We have a good balance of skills in the team.
### Weaknesses:
Working in a group for the first time will be a challenge but communication will be key.
### Opportunities:
It will be a good experience with co-coding and working with multiple branchs, etc in Github.
### Threats:
If communication is poor, the team will suffer.
