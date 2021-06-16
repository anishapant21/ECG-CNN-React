from flask import Flask, render_template, request
from datetime import datetime
from mongoengine import connect, Document, StringField, IntField, FloatField, DateTimeField
from pymongo import MongoClient

app= Flask(__name__)
app.config['SECRET_KEY']='wanderlust'

connect('ecgdata')

client=MongoClient()
db=client.ecgdata

class ecgMonitor(Document):
    value=FloatField()
    name=StringField()
    age=IntField()
    sample_number=IntField()
    result=IntField()
    resultFin=StringField()
    record_date= DateTimeField()
    

def resultDecide(heartCheck):
    print(heartCheck)
    if heartCheck==4:
        condition="Normal"
    elif heartCheck==6:
        condition="bad"
    else:
        condition="worse"
    return condition

@app.route('/', methods=['GET', 'POST'])
def hello_world():
    if request.method == 'POST':
        name=request.form['name']
        age=request.form['age']
        db_datas=ecgMonitor.objects
    return render_template('index.html', datas=db_datas, dateHere=datetime.now(), name=name, age=age)

@app.route('/history')
def history():
    db_datas=ecgMonitor.objects[360:400]
    return render_template('history.html', datas=db_datas)

@app.route('/logout')
def front_page():
    return render_template('front.html')


@app.route('/api/postdata', methods=['POST'])
def data_post_handler():
    post_data=request.json
    if post_data.get('result')==0:
        resultIs="Paced Beat"
    elif post_data.get('result')==1:
        resultIs="Atrial Premature Contraction"
    elif post_data.get('result')==2:
        resultIs="Ventricular Escape Beat"
    elif post_data.get('result')==3:
        resultIs="Left Bundle Branch Block Beat"
    elif post_data.get('result')==4:
        resultIs="Normal"
    elif post_data.get('result')==5:
        resultIs="Right Bundle Branch Block Beat"
    elif post_data.get('result')==6:
        resultIs="Premature Ventricular Contraction"
    else:
        resultIs=""
    
    
    current_date=datetime.now()
    print(current_date)
    db_cursor = ecgMonitor(value=float(post_data.get('value')),
     name=str(post_data.get('name')), 
     age=int(post_data.get('age')), 
     sample_number=int(post_data.get('sample_number')), 
     result=int(post_data.get('result')),
     resultFin=resultIs, record_date=current_date )
    db_cursor.save()
    return "Data saved"
    



if __name__=='__main__':
    app.run(debug=True)