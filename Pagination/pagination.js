/* ============ Heading ============== */
let headingdiv = document.createElement('div')
headingdiv.setAttribute('id','title')
headingdiv.classList.add('text-center','table-responsive')
document.body.appendChild(headingdiv)

let heading = document.createElement('h1')
heading.setAttribute('id','titles')
heading.innerHTML ='Pagination Task'
heading.classList.add('h1')
document.getElementById('title').appendChild(heading)

let sub_heading = document.createElement('p')
sub_heading.setAttribute('id','titles')
sub_heading.innerHTML ='Click to see a list of detail..'
sub_heading.classList.add('p')
document.getElementById('title').appendChild(sub_heading)

/* ============ List ============== */

let listdiv = document.createElement('div')
listdiv.setAttribute('id','list')
listdiv.setAttribute('class','center')
document.getElementById('title').appendChild(listdiv)

/* ============ Creating Table ============== */

let table = document.createElement('table');
table.setAttribute('id','table')
table.classList.add('table','table-dark','table-hover','table-bordered')
document.getElementById('list').appendChild(table)

/* ============ Creating button ============== */

let button_div = document.createElement('div')
button_div.setAttribute('id','forbutton')
button_div.classList.add('nav')
button_div.classList.add('d-flex','justify-content-center')
document.getElementById('title').appendChild(button_div)


let form=document.createElement('form')
form.setAttribute('class','pagination')
form.setAttribute('id','form')
document.getElementById('forbutton').appendChild(form)

/* ============ Creating pagination design starts ============== */

let first_btn=document.createElement('input')
first_btn.classList.add('btn','btn-outline-primary')
first_btn.setAttribute('type','button')
first_btn.setAttribute('id','firstbutton')
first_btn.setAttribute('value','First')
first_btn.setAttribute('onclick','Page(1)')
document.getElementById('form').appendChild(first_btn)

let pre_button=document.createElement('input')
pre_button.classList.add('btn','btn-outline-primary')
pre_button.setAttribute('type','button')
pre_button.setAttribute('id','pre_btn')
pre_button.setAttribute('value','Previous')
pre_button.setAttribute('onclick','previous_details()')
document.getElementById('form').appendChild(pre_button)

let btn2 =document.createElement('input')
btn2.classList.add('btn','btn-outline-primary')
btn2.setAttribute('type','button')
btn2.setAttribute('id','btn2')
btn2.setAttribute('value','2')
btn2.setAttribute('onclick','Page(2)')
document.getElementById('form').appendChild(btn2)

let btn3 =document.createElement('input')
btn3.classList.add('btn','btn-outline-primary')
btn3.setAttribute('type','button')
btn3.setAttribute('id','btn3')
btn3.setAttribute('value','3')
btn3.setAttribute('onclick','Page(3)')
document.getElementById('form').appendChild(btn3)

let btn4 =document.createElement('input')
btn4.classList.add('btn','btn-outline-primary')
btn4.setAttribute('type','button')
btn4.setAttribute('id','btn4')
btn4.setAttribute('value','4')
btn4.setAttribute('onclick','Page(4)')
document.getElementById('form').appendChild(btn4)

let btn5 =document.createElement('input')
btn5.classList.add('btn','btn-outline-primary')
btn5.setAttribute('type','button')
btn5.setAttribute('id','btn5')
btn5.setAttribute('value','5')
btn5.setAttribute('onclick','Page(5)')
document.getElementById('form').appendChild(btn5)

let btn6 =document.createElement('input')
btn6.classList.add('btn','btn-outline-primary')
btn6.setAttribute('type','button')
btn6.setAttribute('id','btn6')
btn6.setAttribute('value','6')
btn6.setAttribute('onclick','Page(6)')
document.getElementById('form').appendChild(btn6)

let btn7 =document.createElement('input')
btn7.classList.add('btn','btn-outline-primary')
btn7.setAttribute('type','button')
btn7.setAttribute('id','btn7')
btn7.setAttribute('value','7')
btn7.setAttribute('onclick','Page(7)')
document.getElementById('form').appendChild(btn7)

let btn8 =document.createElement('input')
btn8.classList.add('btn','btn-outline-primary')
btn8.setAttribute('type','button')
btn8.setAttribute('id','btn8')
btn8.setAttribute('value','6')
btn8.setAttribute('onclick','Page(8)')
document.getElementById('form').appendChild(btn8)

let btn9 =document.createElement('input')
btn9.classList.add('btn','btn-outline-primary')
btn9.setAttribute('type','button')
btn9.setAttribute('id','btn9')
btn9.setAttribute('value','9')
btn9.setAttribute('onclick','Page(9)')
document.getElementById('form').appendChild(btn9)

let btn10 =document.createElement('input')
btn10.classList.add('btn','btn-outline-primary')
btn10.setAttribute('type','button')
btn10.setAttribute('id','btn10')
btn10.setAttribute('value','10')
btn10.setAttribute('onclick','Page(10)')
document.getElementById('form').appendChild(btn10)

/* ============ pagination design end ============== */
/* ============ List of details starts============== */
var listOfdetails = [
  {
    id: "1",
    name: "Lura Senger",
    email: "Xander_Collier@yahoo.com",
  },
  {
    id: "2",
    name: "Wilburn Weber",
    email: "Bennett_Kreiger11@yahoo.com",
  },
  {
    id: "3",
    name: "Tyrique Hahn",
    email: "Juston.Altenwerth@yahoo.com",
  },
  {
    id: "4",
    name: "Lenny Bailey",
    email: "Guiseppe_Hegmann@yahoo.com",
  },
  {
    id: "5",
    name: "Vladimir Keeling",
    email: "Louisa_Walsh18@hotmail.com",
  },
  {
    id: "6",
    name: "Kellie Crona",
    email: "Chandler_Abernathy@yahoo.com",
  },
  {
    id: "7",
    name: "Carolina White",
    email: "Royal50@hotmail.com",
  },
  {
    id: "8",
    name: "Alfredo Conn",
    email: "Clarabelle34@hotmail.com",
  },
  {
    id: "9",
    name: "Stan Shanahan",
    email: "Lamar.McClure@hotmail.com",
  },
  {
    id: "10",
    name: "Marvin Fay",
    email: "Osbaldo58@hotmail.com",
  },
  {
    id: "11",
    name: "Torrance Rau",
    email: "Orin45@gmail.com",
  },
  {
    id: "12",
    name: "Harold Gutmann MD",
    email: "Alyce.Stracke37@yahoo.com",
  },
  {
    id: "13",
    name: "Taryn Torphy",
    email: "Dean_Breitenberg71@hotmail.com",
  },
  {
    id: "14",
    name: "Bryana Lang",
    email: "Tatum.Ullrich@yahoo.com",
  },
  {
    id: "15",
    name: "Nyasia Green DDS",
    email: "Dino83@gmail.com",
  },
  {
    id: "16",
    name: "Nasir Gerhold",
    email: "Lilian_Bashirian8@hotmail.com",
  },
  {
    id: "17",
    name: "Raymundo Ritchie PhD",
    email: "Antwan.Schoen15@yahoo.com",
  },
  {
    id: "18",
    name: "Delmer Marvin",
    email: "Kiera62@yahoo.com",
  },
  {
    id: "19",
    name: "Rachel Wilkinson",
    email: "Foster_Conroy@gmail.com",
  },
  {
    id: "20",
    name: "Gladys Howell",
    email: "Constance.Labadie10@yahoo.com",
  },
  {
    id: "21",
    name: "Ciara Klocko",
    email: "Harvey76@yahoo.com",
  },
  {
    id: "22",
    name: "Quentin O'Kon",
    email: "Amely_Cummings2@yahoo.com",
  },
  {
    id: "23",
    name: "Ms. Gabriella Kunde",
    email: "Lorenza_Cummerata@hotmail.com",
  },
  {
    id: "24",
    name: "Gerald Reilly",
    email: "Lia_Konopelski@gmail.com",
  },
  {
    id: "25",
    name: "Brody Carter I",
    email: "Colten.Wilderman90@hotmail.com",
  },
  {
    id: "26",
    name: "Alanis Klocko",
    email: "Johathan.Champlin69@gmail.com",
  },
  {
    id: "27",
    name: "Caroline Miller",
    email: "Delaney.Kozey74@gmail.com",
  },
  {
    id: "28",
    name: "Ms. Merritt McClure",
    email: "Wendy.Zieme@gmail.com",
  },
  {
    id: "29",
    name: "Jovani Schoen",
    email: "Norval_Zieme@hotmail.com",
  },
  {
    id: "30",
    name: "Berniece Bradtke",
    email: "Okey.Fisher39@hotmail.com",
  },
  {
    id: "31",
    name: "Hanna Gottlieb",
    email: "Edna62@hotmail.com",
  },
  {
    id: "32",
    name: "Christiana Bergnaum",
    email: "Donnie.Paucek22@gmail.com",
  },
  {
    id: "33",
    name: "Reid Stehr",
    email: "Hiram69@gmail.com",
  },
  {
    id: "34",
    name: "Evans Ward",
    email: "Liliane72@hotmail.com",
  },
  {
    id: "35",
    name: "Miss Enos Davis",
    email: "Kolby.Grady@hotmail.com",
  },
  {
    id: "36",
    name: "Mathew Lueilwitz",
    email: "Mariah.Hagenes@yahoo.com",
  },
  {
    id: "37",
    name: "Romaine Robel",
    email: "Sheila19@yahoo.com",
  },
  {
    id: "38",
    name: "Immanuel Aufderhar",
    email: "Aileen32@hotmail.com",
  },
  {
    id: "39",
    name: "Julius Reilly Jr.",
    email: "Santa89@yahoo.com",
  },
  {
    id: "40",
    name: "Linnea Borer",
    email: "Jarrett_Hegmann2@hotmail.com",
  },
  {
    id: "41",
    name: "Misael Abernathy IV",
    email: "Robbie42@yahoo.com",
  },
  {
    id: "42",
    name: "Mr. Gerda Jerde",
    email: "Gustave36@hotmail.com",
  },
  {
    id: "43",
    name: "Easton Daugherty",
    email: "Malcolm.Schuster11@hotmail.com",
  },
  {
    id: "44",
    name: "Leanna Gutkowski",
    email: "Chelsea9@gmail.com",
  },
  {
    id: "45",
    name: "Rollin Trantow",
    email: "Marques_Hickle26@gmail.com",
  },
  {
    id: "46",
    name: "Heaven Luettgen",
    email: "Lonnie.Greenfelder95@hotmail.com",
  },
  {
    id: "47",
    name: "Gilda Huel",
    email: "Stephania.Hintz@gmail.com",
  },
  {
    id: "48",
    name: "Javon Walker",
    email: "Lamar_Bailey39@yahoo.com",
  },
  {
    id: "49",
    name: "Stewart King",
    email: "Chasity_Jenkins82@gmail.com",
  },
  {
    id: "50",
    name: "Cortez Lueilwitz",
    email: "Lelia.Mitchell43@gmail.com",
  },
  {
    id: "51",
    name: "Ora Kilback",
    email: "Matt25@gmail.com",
  },
  {
    id: "52",
    name: "Lera Macejkovic",
    email: "Jamal.Donnelly45@hotmail.com",
  },
  {
    id: "53",
    name: "Asa Gottlieb",
    email: "Carolyne.Langosh@yahoo.com",
  },
  {
    id: "54",
    name: "Avery Nienow",
    email: "Hudson_Bernhard47@yahoo.com",
  },
  {
    id: "55",
    name: "Dr. Katrine Ryan",
    email: "Colten40@gmail.com",
  },
  {
    id: "56",
    name: "Florida Kulas",
    email: "Alejandra_Bernhard@yahoo.com",
  },
  {
    id: "57",
    name: "Mauricio Gerlach",
    email: "Vincenza_Gusikowski84@hotmail.com",
  },
  {
    id: "58",
    name: "Chadrick Simonis",
    email: "Reymundo.Doyle@gmail.com",
  },
  {
    id: "59",
    name: "Beau Jenkins",
    email: "Cletus65@hotmail.com",
  },
  {
    id: "60",
    name: "Camilla Cole",
    email: "Eda48@yahoo.com",
  },
  {
    id: "61",
    name: "Abagail MacGyver",
    email: "Jevon.Koch@hotmail.com",
  },
  {
    id: "62",
    name: "Ludwig Prohaska",
    email: "Eldon_DuBuque37@yahoo.com",
  },
  {
    id: "63",
    name: "Berenice Hane",
    email: "Lonnie3@gmail.com",
  },
  {
    id: "64",
    name: "Abel Durgan",
    email: "Marlee.Weimann42@gmail.com",
  },
  {
    id: "65",
    name: "Tate Kuhlman",
    email: "Hope31@yahoo.com",
  },
  {
    id: "66",
    name: "Mrs. Hermina Daniel",
    email: "Murphy59@yahoo.com",
  },
  {
    id: "67",
    name: "Marcelino Nienow",
    email: "Estefania_Dibbert97@hotmail.com",
  },
  {
    id: "68",
    name: "Raphaelle Connelly",
    email: "Josie.Legros70@yahoo.com",
  },
  {
    id: "69",
    name: "Mina Heaney",
    email: "Pete.Hermann79@hotmail.com",
  },
  {
    id: "70",
    name: "Jaida Torp",
    email: "Jonatan82@yahoo.com",
  },
  {
    id: "71",
    name: "Megane Fadel",
    email: "Dandre82@yahoo.com",
  },
  {
    id: "72",
    name: "Angelo Schimmel V",
    email: "Frederic54@hotmail.com",
  },
  {
    id: "73",
    name: "Jaren Ferry DDS",
    email: "Kristian.Kilback@yahoo.com",
  },
  {
    id: "74",
    name: "Annette O'Connell",
    email: "Domenica.Christiansen@gmail.com",
  },
  {
    id: "75",
    name: "Elenor Rohan PhD",
    email: "Alvera.Huel48@yahoo.com",
  },
  {
    id: "76",
    name: "Linnie Beier",
    email: "Reece_Berge@gmail.com",
  },
  {
    id: "77",
    name: "Maybelle Lehner",
    email: "Arlo.Hagenes@gmail.com",
  },
  {
    id: "78",
    name: "Hailie Haag",
    email: "Edythe.Lind59@hotmail.com",
  },
  {
    id: "79",
    name: "Marcelina Schuppe",
    email: "Kip.Cummerata77@gmail.com",
  },
  {
    id: "80",
    name: "Ezra Lang",
    email: "Garret.Swaniawski@hotmail.com",
  },
  {
    id: "81",
    name: "Carey Kiehn",
    email: "Sabrina70@gmail.com",
  },
  {
    id: "82",
    name: "Carole Aufderhar",
    email: "Efrain.Schamberger77@hotmail.com",
  },
  {
    id: "83",
    name: "Fanny Beatty",
    email: "Ewald28@yahoo.com",
  },
  {
    id: "84",
    name: "Mina Lubowitz",
    email: "Vincenzo.Herman@gmail.com",
  },
  {
    id: "85",
    name: "Anabelle Thiel",
    email: "Amely.Renner@hotmail.com",
  },
  {
    id: "86",
    name: "Gerry Homenick",
    email: "Ada_Von54@hotmail.com",
  },
  {
    id: "87",
    name: "Domenico Maggio",
    email: "Freeman.Stamm@yahoo.com",
  },
  {
    id: "88",
    name: "Mauricio Bradtke III",
    email: "Alford83@yahoo.com",
  },
  {
    id: "89",
    name: "Bulah Yost III",
    email: "Nicolas_Schimmel6@yahoo.com",
  },
  {
    id: "90",
    name: "Orville Dibbert DDS",
    email: "Bryana_Herzog@yahoo.com",
  },
  {
    id: "91",
    name: "Autumn Osinski",
    email: "Davin8@hotmail.com",
  },
  {
    id: "92",
    name: "Levi Gibson",
    email: "Deangelo69@gmail.com",
  },
  {
    id: "93",
    name: "Reva McKenzie",
    email: "Bret40@hotmail.com",
  },
  {
    id: "94",
    name: "Jensen Pfannerstill",
    email: "Dax_Marquardt@hotmail.com",
  },
  {
    id: "95",
    name: "Tyrese Larson MD",
    email: "Cecelia85@yahoo.com",
  },
  {
    id: "96",
    name: "Dayne Sanford",
    email: "Tyrique_Waters16@hotmail.com",
  },
  {
    id: "97",
    name: "Jeramy Steuber",
    email: "Catalina.Stehr24@yahoo.com",
  },
  {
    id: "98",
    name: "Madge Bogisich",
    email: "Joey.Marquardt50@gmail.com",
  },
  {
    id: "99",
    name: "Casimer MacGyver",
    email: "Julius.Bednar96@yahoo.com",
  },
  {
    id: "100",
    name: "Arlene Kassulke",
    email: "Josiane_Smith@yahoo.com",
  },
];
/* ============ List of details end============== */

/* ============ pagination functions ============== */

var crtPage = 1;
var perPagecount = 10;
var numberOfPages = listOfdetails.length/perPagecount;

function previous_details() {
  crtPage -= 1;
  load();
}

function Page(num){
  crtPage=num;
  load();
}

function load() {
  var start = ((crtPage - 1) * perPagecount);
  var end = start + perPagecount;
  pageList = listOfdetails.slice(start, end);
  check();
  Detail_list();  
}

 let thead = document.createElement('thead');
  thead.setAttribute('id','thead')

  let row_1 = document.createElement('tr');
  let heading_1 = document.createElement('th');

  heading_1.innerHTML = "ID";
  let heading_2 = document.createElement('th');
  heading_2.innerHTML = "Name";
  let heading_3 = document.createElement('th');
  heading_3.innerHTML = "Email-ID";

  row_1.appendChild(heading_1);
  row_1.appendChild(heading_2);
  row_1.appendChild(heading_3);
  thead.appendChild(row_1);

function Detail_list() {
  document.getElementById("table").innerHTML = "";

  for (r = 0; r < pageList.length; r++) {
      
    let tbody = document.createElement('tbody');
    tbody.setAttribute('id','tbody')
    
    let row_2 = document.createElement('tr');
    let row_2_data_1 = document.createElement('td');
    row_2_data_1.innerHTML =   +pageList[r].id;;
    let row_2_data_2 = document.createElement('td');
    row_2_data_2.innerHTML = pageList[r].name;
    let row_2_data_3 = document.createElement('td');
    row_2_data_3.innerHTML = pageList[r].email;
    
    table.appendChild(thead); 
    table.appendChild(tbody);

    row_2.appendChild(row_2_data_1);
    row_2.appendChild(row_2_data_2);
    row_2.appendChild(row_2_data_3);
    tbody.appendChild(row_2);
   
  }
}

function check() {
  document.getElementById("pre_btn").disabled = crtPage == numberOfPages ? true : false;
  document.getElementById("firstbutton").disabled = crtPage == 1 ? true : false;
}
Page();