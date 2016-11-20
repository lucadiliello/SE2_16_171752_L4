var id = document.getElementById("id");
var nome = document.getElementById("nome");
var surname = document.getElementById("surname");
var level = document.getElementById("level");
var salary = document.getElementById("salary");

var idDescr = document.getElementById("idDescr");
var nomeDescr = document.getElementById("nomeDescr");
var surnameDescr = document.getElementById("surnameDescr");
var levelDescr = document.getElementById("levelDescr");
var salaryDescr = document.getElementById("salaryDescr");

var submitButton = document.getElementById("submitButton");

var form = document.getElementById("form");

var searchButton = document.getElementById("searchButton");
var deleteButton = document.getElementById("deleteButton");
var insertButton = document.getElementById("insertButton");

var message = document.getElementById("message");

var activeSearch = false;
var activeDelete = false;
var activeInsert = false;

var color_blue = '#00abff';

function hideAll(){
    idDescr.style.display = 'none';
    nomeDescr.style.display = 'none';
    surnameDescr.style.display = 'none';
    levelDescr.style.display = 'none';
    salaryDescr.style.display = 'none';
    submitButton.style.display = 'none';
}

function showAll(){
    idDescr.style.display = 'block';
    nomeDescr.style.display = 'block';
    surnameDescr.style.display = 'block';
    levelDescr.style.display = 'block';
    salaryDescr.style.display = 'block';
    submitButton.style.display = 'block';
}

function showOnltID(){
    idDescr.style.display = 'block';
    nomeDescr.style.display = 'none';
    surnameDescr.style.display = 'none';
    levelDescr.style.display = 'none';
    salaryDescr.style.display = 'none';
    submitButton.style.display = 'block';
}

function reset(){
    id.value = '';
    nome.value = '';
    surname.value = '';
    level.value = '';
    salary.value = '';
}


function search(){
    message.innerHTML = '';
    if(!activeSearch){
        activeSearch = true;
        activeDelete = false;
        activeInsert = false;
        searchButton.style.backgroundColor = color_blue;
        insertButton.style.backgroundColor = 'white';
        deleteButton.style.backgroundColor = 'white';
        showOnltID();
    }else{
        hideAll();
        activeSearch = false;
        searchButton.style.backgroundColor = 'white';
    }
    form.action = 'http://localhost:1337/search'; 
}

function cancel(){
    message.innerHTML = '';
    if(!activeDelete){
        activeSearch = false;
        activeDelete = true;
        activeInsert = false;
        searchButton.style.backgroundColor = 'white';
        insertButton.style.backgroundColor = 'white';
        deleteButton.style.backgroundColor = color_blue;
        showOnltID();
    }else{
        hideAll();
        activeDelete = false;
        deleteButton.style.backgroundColor = 'white';
    }
    form.action = 'http://localhost:1337/delete';
}

function insert(){
    message.innerHTML = '';
    if(!activeInsert){
        activeSearch = false;
        activeDelete = false;
        activeInsert = true;
        searchButton.style.backgroundColor = 'white';
        insertButton.style.backgroundColor = color_blue;
        deleteButton.style.backgroundColor = 'white';
        showAll();
        reset();
    }else{
        hideAll();
        activeInsert = false;
        insertButton.style.backgroundColor = 'white';
    }
    form.action = 'http://localhost:1337/insert';
}

function send(){
    if(activeInsert){
        console.log("Controllo dati");
        var check = true;
        var patt = /\d*/;
    
        if(!patt.test(id.value)) check = false;
        
        patt = /\d+/;
        
        if(!patt.test(level.value)) check = false;
        if(!patt.test(salary.value)) check = false;
        
        patt = /[a-zA-Z]+/;
        
        if(!patt.test(nome.value)) check = false;
        if(!patt.test(surname.value)) check = false;       
        
        if(check) form.submit();
        else message.innerHTML = "Incorrect input data";
        
    } else if(activeDelete || activeSearch){
        var patt = /\d+/;
        if(patt.test(id.value)) form.submit();
        else message.innerHTML = "Incorrect input data";
    }
}