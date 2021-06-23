
# Diagnosis of Cardiovascular Diseases with CNN using Data Obtained from Wireless Holter

The aim of this project is to obtain the systematic method of analayzing the Electrocardiogram (ECG) from the patients and display the type of disorders. It is designed to wirelessly interface the holter for ECG signal extracion and to process and classify the obtained data for disease diagnosis. 

![Home page](src/Images/Homepage.png)


## Overview of the folders

1. Model contains the code from data preprocessing to training of the different models using SVM classifier, Logistic Regression, KNN classifier and CNN.

2. SavedModel contains the CNN model.

3. backend contains the code for getting raw data, use of database, processing and using the saved CNN model to predict the outcomes.

4. src and public folder conatins the code used for the frontend in reactjs.


## Installation

1. Create a virtual enviroment inside the backend directory.

2. Install the requirements.txt inside the virtual environment using:
 pip install -r requirements.txt

3. Run
python run.py
python getData.py

4. In the main directory run
npm start
