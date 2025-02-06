PRAGMA foreign_keys=OFF;
BEGIN TRANSACTION;
CREATE TABLE posts (
    post_id INTEGER PRIMARY KEY AUTOINCREMENT,
    post_slug TEXT NOT NULL,
    post_title TEXT NOT NULL,
    post_content TEXT NOT NULL,
    post_date TEXT NOT NULL,
    post_category TEXT NOT NULL,
    post_tags TEXT,
    post_status TEXT NOT NULL);
INSERT INTO posts VALUES(1,'10-essential-tips-for-remote-work','10 Essential Tips for Remote Work','Working remotely requires discipline and the right setup...','2024-01-15','Productivity','remote work, productivity, work from home', 'published');
INSERT INTO posts VALUES(2,'the-future-of-artificial-intelligence','The Future of Artificial Intelligence','As AI continues to evolve, we''re seeing unprecedented developments...','2024-01-18','Technology','AI, machine learning, future tech', 'published');
INSERT INTO posts VALUES(3,'mastering-modern-javascript','Mastering Modern JavaScript','Understanding the latest JavaScript features can transform your coding...','2024-01-20','Programming','JavaScript, coding, web development', 'published');
INSERT INTO posts VALUES(4,'sustainable-living-in-2024','Sustainable Living in 2024','Simple steps to reduce your carbon footprint...','2024-01-22','Lifestyle','sustainability, eco-friendly, green living', 'published');
INSERT INTO posts VALUES(5,'digital-marketing-trends-to-watch','Digital Marketing Trends to Watch','The marketing landscape is constantly evolving...','2024-01-25','Marketing','digital marketing, SEO, social media', 'published');
INSERT INTO posts VALUES(6,'healthy-meal-prep-ideas','Healthy Meal Prep Ideas','Save time and eat better with these meal prep strategies...','2024-01-27','Health','nutrition, meal prep, healthy eating', 'published');
INSERT INTO posts VALUES(7,'understanding-cryptocurrency-basics','Understanding Cryptocurrency Basics','A beginner''s guide to understanding blockchain and crypto...','2024-01-29','Finance','cryptocurrency, blockchain, investing', 'published');
INSERT INTO posts VALUES(8,'travel-photography-tips','Travel Photography Tips','Capture amazing memories with these photography techniques...','2024-02-01','Photography','travel, photography, tips', 'published');
INSERT INTO posts VALUES(9,'home-office-setup-guide','Home Office Setup Guide','Create the perfect workspace with these essential items...','2024-02-03','Productivity','home office, workspace, productivity', 'published');
INSERT INTO posts VALUES(10,'mental-health-in-the-digital-age','Mental Health in the Digital Age','Maintaining wellness while staying connected...','2024-02-05','Health','mental health, wellness, digital wellbeing', 'published');
INSERT INTO posts VALUES(11,'building-your-personal-brand','Building Your Personal Brand','Steps to establish a strong online presence...','2024-02-07','Career','personal brand, career development, networking', 'published');
INSERT INTO posts VALUES(12,'web-design-principles','Web Design Principles','Essential principles for creating effective websites...','2024-02-09','Design','web design, UI/UX, design principles', 'published');
INSERT INTO posts VALUES(13,'small-business-marketing-strategies','Small Business Marketing Strategies','Effective marketing tactics for small businesses...','2024-02-11','Marketing','small business, marketing, strategy', 'published');
INSERT INTO posts VALUES(14,'mindfulness-meditation-guide','Mindfulness Meditation Guide','Getting started with mindfulness and meditation...','2024-02-13','Wellness','mindfulness, meditation, mental health', 'published');
INSERT INTO posts VALUES(15,'cloud-computing-explained','Cloud Computing Explained','Understanding the basics of cloud infrastructure...','2024-02-15','Technology','cloud computing, tech infrastructure, AWS', 'published');
INSERT INTO posts VALUES(16,'urban-gardening-tips','Urban Gardening Tips','Growing your own food in limited space...','2024-02-17','Lifestyle','gardening, urban living, sustainability', 'published');
INSERT INTO posts VALUES(17,'financial-planning-basics','Financial Planning Basics','Essential steps for securing your financial future...','2024-02-19','Finance','financial planning, investing, savings', 'published');
INSERT INTO posts VALUES(18,'content-creation-strategy','Content Creation Strategy','Developing effective content for your audience...','2024-02-21','Marketing','content marketing, strategy, social media', 'published');
INSERT INTO posts VALUES(19,'beginners-guide-to-python','Beginner''s Guide to Python','Starting your journey with Python programming...','2024-02-23','Programming','Python, coding, programming basics', 'published');
INSERT INTO posts VALUES(20,'remote-team-management','Remote Team Management','Best practices for managing distributed teams...','2024-02-25','Management','remote work, team management, leadership', 'published');
CREATE TABLE users (
    user_id INTEGER PRIMARY KEY AUTOINCREMENT,
    user_name TEXT NOT NULL,
    user_email TEXT NOT NULL,
    user_password TEXT NOT NULL);
INSERT INTO sqlite_sequence VALUES('posts',20);
COMMIT;
