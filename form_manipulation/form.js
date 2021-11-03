//creating heading
const heading=document.createElement("h1");
heading.innerText="Form Manipulation";
heading.setAttribute("style","text-align:center");
document.body.append(heading);

const container=document.createElement("div");
container.className="container";
document.body.append(container);
//creating form
const form=document.createElement("form");
form.className="myform";


//append form to container
container.append(form);

//creating firstname
const row1=document.createElement("div");
form.append(row1);
const label1=document.createElement("label");
label1.for="fname";
label1.innerText="FirstName:";
label1.className="form-label";

const firstname=document.createElement("input");
firstname.type="text";
firstname.placeholder="enter your name";
firstname.name="fname";
firstname.className="form-control";
firstname.id="fname";

 row1.append(label1,firstname);


//creating lastname
const row2=document.createElement("div");
form.append(row2);
const label2=document.createElement("label");
label2.for="lname";
label2.innerText="LastName:";
label2.className="form-label";

const lastname=document.createElement("input");
lastname.type="text";
lastname.placeholder="enter your lastname";
lastname.name="lname";
lastname.id="lname";
lastname.className="form-control";

 row2.append(label2,lastname);

//creating address
const row3=document.createElement("div");
form.append(row3);
const label3=document.createElement("label");
label3.for="addr";
label3.innerText="Address:  ";
label3.className="form-label";
const address=document.createElement("input");
address.type="text";
address.placeholder="enter your address";
address.name="addr";
address.id="address";
address.className="form-control";
//appending label3,address to row3
 row3.append(label3,address);

//creating row4
const row4=document.createElement("div");
form.append(row4);
//creating label for pincode
const label4=document.createElement("label");
label4.for="pcode";
label4.innerText="Pincode:";
label4.className="form-label";
//creating pincode
const pincode=document.createElement("input");
pincode.type="text";
pincode.placeholder="enter your pincode";
pincode.name="pcode";
pincode.id="pincode";
pincode.className="form-control";

//appendind label4,pincode to row4
 row4.append(label4,pincode);




//creating row5
const row5=document.createElement("div");
row5.id="gender";
form.append(row5);
//creating label for gender
const label5=document.createElement("label");
label5.innerText="Gender:";
//creating radio button for male
const male=document.createElement("input");
male.type="radio";
male.name="gender";
male.id="r1";
male.value="Male";
male.className="form-check-input";
//creating label male
const label6=document.createElement("label");
label6.innerText="Male";
label6.className="form-check-label";

//creating radio button for female
const female=document.createElement("input");
female.type="radio";
female.name="gender";
female.id="r2";
female.value="Female";
female.className="form-check-input";
//creating label for female
const label7=document.createElement("label");
label7.innerText="Female";
label7.className="form-check-label";
row5.append(label5,male,label6,female,label7);

//creating row6
const row6=document.createElement("div");
row6.id="foods";
form.append(row6);

//creating label
const label8=document.createElement("label");
label8.innerText="Choice of Foods:";
row6.append(label8);

//creating label
const label9=document.createElement("label");
label9.innerText="Idli";
label9.for="idli";
//creating checkbox for idli
const idli=document.createElement("input");
idli.type="checkbox";
idli.name="idli";
idli.id="food1";
idli.value="Idli";
idli.className="form-check-input";

//creating label
const label10=document.createElement("label");
label10.innerText="Pongal";
label10.for="pongal";
//creating checkbox for pongal
const pongal=document.createElement("input");
pongal.type="checkbox";
pongal.name="pongal";
pongal.id="food2";
pongal.value="Pongal";
pongal.className="form-check-input";

const label11=document.createElement("label");
label11.innerText="Poori";
label11.for="poori";
label11.classname="form-check-label";
//creating checkbox for poori
const poori=document.createElement("input");
poori.type="checkbox";
poori.name="poori";
poori.id="food3";
poori.value="Poori";
poori.className="form-check-input";



const label12=document.createElement("label");
label12.innerText="Biriyani";
label12.for="biriyani";
label12.className="form-check-label";

//creating checkbox for biriyani
const biriyani=document.createElement("input");
biriyani.type="checkbox";
biriyani.name="biriyani";
biriyani.id="food4";
biriyani.value="Biriyani";
biriyani.className="form-check-input";


const label13=document.createElement("label");
label13.innerText="Dosai";
label13.for="dosai";
label13.className="form-check-label";
//creating checkbox for dosai
const dosai=document.createElement("input");
dosai.type="checkbox";
dosai.name="dosai";
dosai.id="food5";
dosai.value="Dosai";
dosai.className="form-check-input";


row6.append(label8,label9,idli,label10,pongal,label11,
            poori,label12,biriyani,label13,dosai);


const row7=document.createElement("div");
form.append(row7);
//creating label for state
const label14=document.createElement("label");
label14.innerText="State:";
label14.for="stat";
label14.className="form-label";

//creating input for state
const state=document.createElement("input");
state.type="text";
state.name="stat";
state.id="state";
state.placeholder="Enter your state";
state.className="form-control";

row7.append(label14,state);






const row8=document.createElement("div");
form.append(row8);
//creating label for country
const label15=document.createElement("label");
label15.innerText="Country:";
label15.for="con";
label15.className="form-label"
//creating input for country
const country=document.createElement("input");
country.type="text";
country.name="con";
country.id="country";
country.placeholder="Enter country Name";
country.className="form-control";
row8.append(label15,country);



const row9=document.createElement("div");
form.append(row9);
//creating submit button
const button=document.createElement("button");
button.type="button";
button.innerText="submit";
button.className="btn btn-success";
button.setAttribute("onclick","createTable()");
row9.append(button);



//creating table
const table=document.createElement("table");
table.setAttribute("style","border:2px");
table.cellspacing="20px";
document.body.append(table);
table.className=" table table-bordered";

//creating row
const trow=document.createElement("tr");
table.append(trow);
//creating heading for table 
const th1=document.createElement("th");
th1.innerText="FirstName";
const th2=document.createElement("th");
th2.innerText="LastName";
const th3=document.createElement("th");
th3.innerText="Address";
const th4=document.createElement("th");
th4.innerText="Pincode";
const th5=document.createElement("th");
th5.innerText="Gender";
const th6=document.createElement("th");
th6.innerText="foods";
const th7=document.createElement("th");
th7.innerText="State";
const th8=document.createElement("th");
th8.innerText="Country";


trow.append(th1,th2,th3,th4,th5,th6,th7,th8);



function createTable()
{
  //creating table row
  const trow1=document.createElement("tr");
  table.append(trow1);
  //creating  table data
  const td1=document.createElement("td");
  td1.innerText=document.querySelector("#fname").value;
  //creating  table data
  const td2=document.createElement("td");
  td2.innerText=document.querySelector("#lname").value;
  //creating  table data
  const td3=document.createElement("td");
  td3.innerText=document.querySelector("#address").value;
  //creating  table data
  const td4=document.createElement("td");
  td4.innerText=document.querySelector("#pincode").value;
  //creating  table data
  const td5=document.createElement("td");

    //reading values from radio button
    if(document.querySelector("#r1").checked==true)
    {
      td5.innerText=document.querySelector("#r1").value;
    }
  else if(document.querySelector("#r2").checked==true)
  {
    td5.innerText=document.querySelector("#r2").value;
  }
  //creating  table data
  var td6=document.createElement("td");
 
   var food = "";
    let count = 0;
   //reading values from checkbox
    if(document.getElementById("food1").checked == true){
        food = food + " " + document.getElementById("food1").value
        count++
    }
    if(document.getElementById("food2").checked == true){
        food = food + ", " + document.getElementById("food2").value
        count++
    }
    if(document.getElementById("food3").checked == true){
        food = food + ", " + document.getElementById("food3").value
        count++
    }
    if(document.getElementById("food4").checked == true){
        food = food + ", " + document.getElementById("food4").value
        count++
    }
    if(document.getElementById("food5").checked == true){
        food = food + ", " + document.getElementById("food5").value
        count++
    }
    td6.innerText=food;
//if choice of food <2
if(count<2)
{
  alert("please choose atleast 2 foods");
}


//creating table data
 const td7=document.createElement("td");
  td7.innerText=document.querySelector("#state").value;
  //creating table data
   const td8=document.createElement("td");
  td8.innerText=document.querySelector("#country").value;
  
  
  trow1.append(td1,td2,td3,td4,td5,td6,td7,td8);

  //clearing form

  document.querySelector("#fname").value="";
  document.querySelector("#lname").value="";
  document.querySelector("#address").value="";
  document.querySelector("#pincode").value="";
  document.querySelector("#r1").checked=false;
  document.querySelector("#r2").checked=false;
  document.querySelector("#food1").checked=false;
  document.querySelector("#food2").checked=false;
  document.querySelector("#food3").checked=false;
  document.querySelector("#food4").checked=false;
  document.querySelector("#food5").checked=false;
  document.querySelector("#state").value="";
  document.querySelector("#country").value="";


}
