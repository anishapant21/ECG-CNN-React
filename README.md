
# Diagnosis of Cardiovascular Diseases with CNN using Data Obtained from Wireless Holter

The aim of this project is to design a systematic method of analayzing the Electrocardiogram (ECG) from patients and displaying the types of disorders. It is designed to wirelessly interface the holter for ECG signal extracion and to process and classify the obtained data for disease diagnosis. 

![Home page](src/Images/Homepage.png)


## Overview of the folders

### 1. Model <br />
Data preprocessing and training of the different models using SVM classifier, Logistic Regression, KNN classifier and CNN.

| Models | Train Accuracy | Test Accuracy | Precision | Recall | F1-Score
| :---         |     :---:      |          :---: | :---:        |     :---:      |          :---: |
|SVM | 98.22% | 96% | 98.53% | 92.37% | 93.84% 
| Logistic Regression | 90.73% | 79% | 73.85% | 65.33% | 68.5%
| KNN | 100% | 100% | 100% | 100% | 100%
|CNN | 99.77% | 99.67% | 100% | 100% | 100%

### 2. SavedModel <br />
Saved the CNN model in `.h5` format

### 3. TestData <br />
Csv files containing heart signals of a normal person without any underlying heart disease (obtained using holter).

### 4. backend
Use of database, process the raw ecg signals and use of the saved CNN model to predict the outcomes


### 5. src and public folder
Frontend in reactjs.


## Installation

1. Create a virtual enviroment inside the backend directory.

2. Install the requirements.txt inside the virtual environment using: <br />
 `$ pip install -r requirements.txt`

3. Run <br />
`$ python run.py` <br />
`$ python getData.py`

4. In the main directory run <br />
`$ npm start`
