# Trendify Project Proposal

YouTube Trending Video Dataset: https://www.kaggle.com/datasets/rsrishav/youtube-trending-video-dataset?resource=download&select=US_youtube_trending_data.csv

## Title and Project Summary

Our project is called Trendify and will be drawing from the YouTube Trending Video Dataset on Kaggle. Users select the country they want data from to determine the language. From there they type in their title or keywords related to their title and our project suggests the most trending keywords for them to use. The user can then add these results to their titles/captions/hashtags. If they do not input anything, we return the tags/keywords that appear most frequently among the highest-ranking videos or posts. Alongside the connected tags, our application will display the most trending videos. Users can also search for specific YouTube channels, from which we will pull the most common tags. Other functionalities are listed in the functionality section.

## Detailed Description of Our Application

Trendify is a web application built for upcoming social media stars looking to create trending videos. On Trendify, a user can input the idea for their video, or enter the main keywords related to their content, and using the trending database, Trendify produces the most common keywords related to the user's content that would help their video go viral. This database contains important information related to the videos such as the title, views, and tags of the trending videos. Through this, the user can then create a title with the right keywords, and tags, and give themselves the best chance to go viral. The application generates all the keywords related to the title, and the tags, and also provides a link to the trending YouTube videos associated with those particular keywords. Through this, the user can not only find the right title but also gain feedback from credible past sources to further their content.

Trendify also enables the user to select the country they want their data from, to make sure that they have the best chance to succeed in their region. Through this application, we aim to solve the problem people face in finding the right title for their YouTube videos, and tags. Very often people are unaware of the differences between clickbait and a good title, and end up attracting negative remarks about their videos. Through Trendify, the user can prevent unwanted clickbait, and choose the right title which is supported by historical feedback. The social media space is often unsupported and experimental, and through our project, we aim to create credibility and support inexperienced creators across all social media platforms.

## Usefulness

Our project will allow the user to input a list of keywords that they want to use in their captions/titles and give them the top trending words related to their inquiry. While YouTube will show you the top videos under your search, our app will use the user’s input to find a series of keywords that are common under the related videos. Relevant tags are just one of the ways the YouTube algorithm suggests content to viewers. This tool will be useful for anyone looking to post content and raise their visibility on social media. Well-chosen tags will help push the user’s content ahead. 

Within each media app, the user can click or tap on content related to specific tags. However, clicking on one trending post or video would likely not be enough to find the best tags for their content. Our application conveniently puts it all in one place by creating a list of the most prevalent tags from databases of trending videos. With the generated list, the user then can supplement their caption/title/tags with those suggested by our application. This brings ease of use and directly tells you the common denominator between trending videos of a specific type. Additionally, each tag listed will link to the best-performing video/piece of content that uses this hashtag, allowing the user to get a better idea of what performs well.

## Realness

To get the data necessary for our application, we will be using the Youtube Trending Video Dataset that is found on Kaggle. The dataset organizes the daily trending videos by a number of file-separated regions (India, USA, Great Britain, Germany, Canada, France, Russia, Brazil, Mexico, South Korea, and, Japan). For each region, the associated attributes will be the video title, channel title, publish time, tags, views, likes and dislikes, description, and comment count. Also, there are individual JSON’s for each region that will provide the category. The author of the dataset states that there are already several months of data already present in the dataset, and to keep the user queries relevant, we will use up to 200 trending videos that are updated daily. 


## Functionality

In our single-page web application, on the middle of the screen, we will have a search bar that takes a keyword as input, through which we will conduct queries. We will dynamically populate the space below the search bar to display the resulting tags. Clicking on the tag will link to the top video related to that tag.  This keyword is then used to filter relevant tags in the picked country, by searching through the database for tags. The user can also filter by channel name, as the database gives us the channel name for a particular video. This allows users to utilize tags from a specific YouTuber and maximize relevance in the niche or style of the YouTuber. The user will also be able to filter by video category, as well as by the amount of time elapsed (1 year ago/ 6 months ago/ etc.) that should be searched through. The returned tags should be ranked in terms of combined view counts.

We will be using YouTube Trending Video Dataset for information on the trending videos, and upon request, we will use the video_id to conduct a request to the YouTube Data API to find the tags related to a video. 

The top left of the screen (on the navbar) will contain a toggle for a given country, while the top right will contain the name of our app. The frontend will have dropdown menus for all toggles, such as filters and picking the country of interest.


## Detailed low-fidelity UI mockup

![alt text](https://github.com/cs411-alawini/fa23-cs411-team070-A3D/blob/main/doc/Screen%20Shot%202023-09-11%20at%2021.34.52.png)

## Project Work Distribution Across the Team

We divided work on the basis of experience working on the different components of our web application i.e. Frontend, Backend, API calls, etc. Diego and Anna have experience with React and graphic designing, so they will work on designing the frontend of the website, while Alan and Aditya will set a foundation for the backend in Node.js. To make sure all of us gain experience working on each component, we would spend time working on tutorials to learn the parts we are unfamiliar with. Since we are using various different APIs in our application, each one of us would read through API documentation, and help set up the API calls. We also decided to work together on the Database queries, and the tasks we are supposed to perform on our DBMS because it would be a good learning experience working with SQL. 



