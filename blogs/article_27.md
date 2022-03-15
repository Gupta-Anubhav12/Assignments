# Data Profiling: What Is It & How Does It Drive Decision Making?
Given the rising volume of data, ensuring data quality is a persistent issue for organizations looking to leverage their data to drive decision making, and its impact is only increasing. A Statista poll found that 41 percent of businesses surveyed in the U.S. and Europe listed a lack of analytical skills among employees as the top challenge to using data to drive business value in 2021.
To achieve greater confidence in their data sets and stay competitive in the marketplace, businesses turn to data profiling as a key piece of their data management strategy.
This post will review what data profiling is, examples of data profiling, its benefits, its types, its techniques, and tools available to implement data profiling.
## What is data profiling?
Data profiling is an assessment of data that uses a combination of tools, algorithms, and business rules to create a high-level report of the data's condition. The purpose of data profiling is to uncover inconsistencies, inaccuracies, and missing data so that a data engineer can investigate and correct the source.
Data profiling reports are usually visualizations and graphs along with tables to display relevant metrics, such as the degree of duplication in the data set.
Data profiling is not only intended for troubleshooting risks to data quality and data integrity. It can also be a key process of discovery for analysts to uncover the structure, content, and relationships between different data sources.
In short, data profiling builds a profile of the state and quality of the data. The information collected to build this profile includes metadata such as data type and length, dependencies between tables, and statistics generated about the data set. Data profiling also includes tagging the data set, such as assigning keywords and categories to speed future analysis and make the data searchable.
Data profiling has many use cases within organizations seeking to better understand and maintain their data. Let's review two examples below.
## Data profiling Use Case 1: Mergers and Acquisitions
In this example, your company merges with a competitor. You now have access to an entirely new wealth of data to find new insights and discover new customers. However, you first need to integrate this data with your existing data.
Data profiling provides a high-level overview of the new data assets available and their dependencies. Then, data profiling identifies duplicate data between your two systems and shows where the new data's format differs so the data team can work to standardize. Now, the data is ready to be cleansed and merged into a single source of truth.
## Data profiling Use Case 2: Data Warehousing
When businesses create a data warehouse, they are trying to collect data from multiple sources and store it in a standardized format where it's easily accessible for analysis. However, if the quality of data is poor, gathering it all into one location does not solve the larger issue. Bad data leads to bad decision making.
Incorporating data profiling into the data warehouse workflow provides a check against low-quality data. As information is collected — typically in an ETL process — data profiling can be used to validate the data's integrity and compliance with data rules before or during the intake process. Now your organization has centralized data you know can be relied on for informed decisions.
## Benefits of Data Profiling
Beyond improving data quality and visibility, data profiling offers concrete benefits for organizations, including the following:
### Improved Confidence in Data
Data profiling helps data engineers and analysts identify issues and correct them. This process enables greater confidence in conclusions drawn from these data sets. Data profiling also allows the team to identify any larger causes of these issues so they can correct them during the data collection process.
### Searchability
Engineers improve the searchability of their data sets by tagging them with keywords, descriptions, and categories for easier discovery. This streamlines future analyses that incorporate this data and also provides access to non-technical users that can now query data sets with search terms.
### Predictive Decision Making
Advanced data use cases such as artificial intelligence and machine learning rely on standardized and properly formatted data to power their algorithms. Data profiling allows engineers to better enforce standards. It also validates data sets for accuracy to ensure these technologies aren't drawing erroneous conclusions.
Next, let's examine the types of data profiling available.
## Types of Data Profiling
Data profiling has three types: structure discovery, content discovery, and relationship discovery. Let's review each of these in more detail.
Structure Discovery: is the process of validating that data is consistent and properly formatted. It is sometimes also referred to as structure analysis.
A typical method used for structure discovery is pattern matching, in which data engineers test records against known patterns for data types. For example, pattern matching may scan a column of email addresses to confirm they all contain "@" and end in a domain suffix (e.g. .com).
Structure discovery also calculates basic statistics around numerical data such as mean, median, mode, and standard deviation. These statistics are not only useful metadata to have for future analysis but can indicate data validity. For example, you may spot an unusually high average or outlier to investigate further.
Content Discovery: During content discovery, engineers turn their attention back to the data values to identify which records have errors. Content discovery looks for obvious issues such as missing values and more nuanced problems such as incorrect or ambiguous data.
For example, some records may be missing a street address. Others may have a street address, but some spell out numeric values (Tenth Street) and others keep them as numerals (10th Street). This may seem innocuous, but if you need to ship to a customer and then find out the carrier only accepts numeric formats, improper data is now impeding your business.
## Improve data-driven decisions with data profiling
According to a survey, only 26 percent of companies believe they have achieved a data-driven culture. The challenge for many organizations lies in effectively analyzing their data and having confidence in the results.
Data profiling addresses these issues by checking data for consistency and accuracy before it's analyzed. This information helps engineers proactively solve issues with intake and transformation of data and enables a higher degree of confidence in the conclusions since the data has been validated. Data profiling is a key strategy for building a data-driven business.


