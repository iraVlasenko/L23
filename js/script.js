/*
1. отобразить данные из объекта на страничке,посредством создания карточки
юзера, вывести основные параметры которые вы привыкли видеть в профиле.
*/
const results = [
       //--------------------------------------------------------USER 1
    {
    "gender": "female",
    "name": {
        "title": "Ms",
        "first": "Justine",
        "last": "Leclerc"
        },
    "location": {
        "street": {
            "number": 7398,
            "name": "Rue de L'Abbé-Rousselot"
            },
        "city": "Reims",
        "state": "Lot",
        "country": "France",
        "postcode": 24454,
        "coordinates": {
            "latitude": "-0.2766",
            "longitude": "149.5580"
            },
        "timezone": {
            "offset": "-4:00",
            "description": "Atlantic Time (Canada), Caracas, La Paz"
            }
        },
    "email": "justine.leclerc@example.com",
    "login": {
        "uuid": "78e4b9b9-25b8-4316-aa75-86ae97e8d5ea",
        "username": "goldenlion465",
        "password": "iwantu",
        "salt": "wRHogy4P",
        "md5": "53e6884eb2b7b3608820858e65289f99",
        "sha1": "40350fe8909865490e924984f3f502804c164ced",
        "sha256": "a9854de8eebd1173af97cfba015b0da040c31cb71eeb24a557747f341aff81bf"
        },
    "dob": {
        "date": "1981-07-18T20:02:33.204Z",
        "age": 40
        },
    "registered": {
        "date": "2018-03-26T08:59:46.637Z",
        "age": 3
        },
    "phone": "03-85-83-86-10",
    "cell": "06-47-58-26-72",
    "id": {
        "name": "INSEE",
        "value": "2NNaN83356921 80"
        },
    "picture": {
        "large": "https://randomuser.me/api/portraits/women/59.jpg",
        "medium": "https://randomuser.me/api/portraits/med/women/59.jpg",
        "thumbnail": "https://randomuser.me/api/portraits/thumb/women/59.jpg"
        },
    "nat": "FR"
    },
       //--------------------------------------------------------USER 2
    {
        "gender": "female",
        "name": {
            "title": "Ms",
            "first": "یلدا",
            "last": "یاسمی"
        },
        "location": {
            "street": {
                "number": 8768,
                "name": "موحد دانش"
            },
            "city": "خوی",
            "state": "گلستان",
            "country": "Iran",
            "postcode": 57452,
            "coordinates": {
                "latitude": "-63.8246",
                "longitude": "-178.3459"
            },
            "timezone": {
                "offset": "+10:00",
                "description": "Eastern Australia, Guam, Vladivostok"
            }
        },
        "email": "yld.ysmy@example.com",
        "login": {
            "uuid": "6c8d3ab3-c658-4ae4-9d1a-cffdfea6e8a9",
            "username": "purplegoose795",
            "password": "bacchus",
            "salt": "NJ1WcXMh",
            "md5": "fcc86f82666ff28f90edb57a1fd83329",
            "sha1": "19c35c68dc397593dae625baa292956a3b571d53",
            "sha256": "c704d0b0c45c72d5381c09eb050cf9b81be90898ce54953bc3cf52753b5a1b25"
        },
        "dob": {
            "date": "1951-09-23T10:46:15.737Z",
            "age": 70
        },
        "registered": {
            "date": "2017-04-13T22:16:22.185Z",
            "age": 4
        },
        "phone": "068-61136128",
        "cell": "0949-046-6792",
        "id": {
            "name": "",
            "value": null
        },
        "picture": {
            "large": "https://randomuser.me/api/portraits/women/17.jpg",
            "medium": "https://randomuser.me/api/portraits/med/women/17.jpg",
            "thumbnail": "https://randomuser.me/api/portraits/thumb/women/17.jpg"
        },
        "nat": "IR"
    },

    //--------------------------------------------------------USER 3
    {
        "gender": "female",
        "name": {
            "title": "Mrs",
            "first": "Rosalina",
            "last": "Almeida"
        },
        "location": {
            "street": {
                "number": 2487,
                "name": "Avenida Brasil "
            },
            "city": "Rio Verde",
            "state": "Goiás",
            "country": "Brazil",
            "postcode": 97764,
            "coordinates": {
                "latitude": "62.8579",
                "longitude": "100.2040"
            },
            "timezone": {
                "offset": "+3:30",
                "description": "Tehran"
            }
        },
        "email": "rosalina.almeida@example.com",
        "login": {
            "uuid": "0c911a6c-2d2a-4da1-b593-3e7e17aabf31",
            "username": "sadtiger389",
            "password": "bear1",
            "salt": "HpDvNtk7",
            "md5": "568baa0d92664cd66324bd3f685a3127",
            "sha1": "da4d8dbaba6499680d5ed19183cd1f11f049588c",
            "sha256": "149e59daf701874429715f39333df71b5be7bc652bbf4fa1120d91241abd768d"
        },
        "dob": {
            "date": "1984-11-18T14:04:48.073Z",
            "age": 37
        },
        "registered": {
            "date": "2015-04-22T01:58:30.278Z",
            "age": 6
        },
        "phone": "(82) 0685-1432",
        "cell": "(94) 8181-6892",
        "id": {
            "name": "",
            "value": null
        },
        "picture": {
            "large": "https://randomuser.me/api/portraits/women/12.jpg",
            "medium": "https://randomuser.me/api/portraits/med/women/12.jpg",
            "thumbnail": "https://randomuser.me/api/portraits/thumb/women/12.jpg"
        },
        "nat": "BR"
    },
       //--------------------------------------------------------USER 4
    {
        "gender": "male",
        "name": {
            "title": "Mr",
            "first": "Friedrich",
            "last": "Feldmann"
        },
        "location": {
            "street": {
                "number": 4494,
                "name": "Wiesenweg"
            },
            "city": "Erkrath",
            "state": "Baden-Württemberg",
            "country": "Germany",
            "postcode": 96855,
            "coordinates": {
                "latitude": "20.3350",
                "longitude": "111.5548"
            },
            "timezone": {
                "offset": "+10:00",
                "description": "Eastern Australia, Guam, Vladivostok"
            }
        },
        "email": "friedrich.feldmann@example.com",
        "login": {
            "uuid": "05930c4f-8475-4a52-b1be-5bb2d41ad926",
            "username": "greenbear313",
            "password": "mopar",
            "salt": "nLjncfFx",
            "md5": "55429d775bd4f8479389cee6df020ec7",
            "sha1": "89e8d982d90da128aade3f1e270c2e53d62c3ca5",
            "sha256": "78f8854c7580a6825eb92e2427b72169668c5dbcee7c0addcd8ee0363fd66e43"
        },
        "dob": {
            "date": "1979-04-03T02:04:29.618Z",
            "age": 42
        },
        "registered": {
            "date": "2017-04-26T04:37:09.079Z",
            "age": 4
        },
        "phone": "0752-3941001",
        "cell": "0175-1687786",
        "id": {
            "name": "",
            "value": null
        },
        "picture": {
            "large": "https://randomuser.me/api/portraits/men/49.jpg",
            "medium": "https://randomuser.me/api/portraits/med/men/49.jpg",
            "thumbnail": "https://randomuser.me/api/portraits/thumb/men/49.jpg"
        },
        "nat": "DE"
    },
       //--------------------------------------------------------USER 5
    {
        "gender": "female",
        "name": {
            "title": "Ms",
            "first": "Diane",
            "last": "Baker"
        },
        "location": {
            "street": {
                "number": 681,
                "name": "Pearse Street"
            },
            "city": "Clonakilty",
            "state": "Monaghan",
            "country": "Ireland",
            "postcode": 56026,
            "coordinates": {
                "latitude": "-25.5610",
                "longitude": "-100.1882"
            },
            "timezone": {
                "offset": "0:00",
                "description": "Western Europe Time, London, Lisbon, Casablanca"
            }
        },
        "email": "diane.baker@example.com",
        "login": {
            "uuid": "f6d2d1ae-f444-443f-bf30-f39230186950",
            "username": "beautifulpanda974",
            "password": "dingdong",
            "salt": "ndVTeqlo",
            "md5": "71d5fa3cfeec65ebd136df7a532d16d5",
            "sha1": "0294f344cc2c2d7dc48e42c90dcc1550b8521058",
            "sha256": "c5ec7f58848349d294ffe73cc4193691a6fcd17157de47140447addb43acd657"
        },
        "dob": {
            "date": "1945-05-30T17:32:32.057Z",
            "age": 76
        },
        "registered": {
            "date": "2005-05-17T08:51:31.428Z",
            "age": 16
        },
        "phone": "071-864-5262",
        "cell": "081-641-3875",
        "id": {
            "name": "PPS",
            "value": "9724576T"
        },
        "picture": {
            "large": "https://randomuser.me/api/portraits/women/8.jpg",
            "medium": "https://randomuser.me/api/portraits/med/women/8.jpg",
            "thumbnail": "https://randomuser.me/api/portraits/thumb/women/8.jpg"
        },
        "nat": "IE"
    }
];

let div = document.createElement('div');

let arr = [];
for (i =0; i<5; i++){
    arr.push(document.createElement('div'));
    conteiner.append(arr[i]);
    arr[i].className = "alert";
    
}
//-----------------------------------------------------------------Табы с переключаелем

let element1 = document.getElementById("inf1");
let element2 = document.getElementById("inf2");
let element3 = document.getElementById("inf3");
let element4 = document.getElementById("inf4");
let element5 = document.getElementById("inf5");


document.getElementById("tab1").addEventListener("click", function(){
    document.getElementById("tab1").style.backgroundColor='rgb(252, 223, 245)';
    document.getElementById("tab2").style.backgroundColor='rgb(165, 127, 255)';
    document.getElementById("tab3").style.backgroundColor='rgb(165, 127, 255)';
    document.getElementById("tab4").style.backgroundColor='rgb(165, 127, 255)';
    document.getElementById("tab5").style.backgroundColor='rgb(165, 127, 255)';
    if(element1.classList.contains("no")){
     element1.classList.remove("no");
    }
    if(!element2.classList.contains("no")){
        element2.classList.add("no");
    }
    if(!element3.classList.contains("no")){
        element3.classList.add("no");
    }
    if(!element4.classList.contains("no")){
        element4.classList.add("no");
    }
    if(!element5.classList.contains("no")){
        element4.classList.add("no");
    }
});
document.getElementById("tab2").addEventListener("click", function(){
    document.getElementById("tab1").style.backgroundColor='rgb(165, 127, 255)';
    document.getElementById("tab2").style.backgroundColor=' rgb(252, 223, 245)';
    document.getElementById("tab3").style.backgroundColor='rgb(165, 127, 255)';
    document.getElementById("tab4").style.backgroundColor='rgb(165, 127, 255)';
    document.getElementById("tab5").style.backgroundColor='rgb(165, 127, 255)';
        

    if(!element1.classList.contains("no")){
        console.log('ffffff')
        element1.classList.add("no");
    }
    if(element2.classList.contains("no")){
        element2.classList.remove("no");
    }
    if(!element3.classList.contains("no")){
    element3.classList.add("no");
    }
    if(!element4.classList.contains("no")){
    element4.classList.add("no");
    }
    if(!element5.classList.contains("no")){
        element4.classList.add("no");
       }
   });

   document.getElementById("tab3").addEventListener("click", function(){
 
    document.getElementById("tab1").style.backgroundColor=' rgb(165, 127, 255)';
    document.getElementById("tab2").style.backgroundColor='rgb(165, 127, 255)';
    document.getElementById("tab3").style.backgroundColor='rgb(252, 223, 245)';
    document.getElementById("tab4").style.backgroundColor='rgb(165, 127, 255)';
    document.getElementById("tab5").style.backgroundColor='rgb(165, 127, 255)';   
    if(!element1.classList.contains("no")){
     element1.classList.add("no");
    }
    if(!element2.classList.contains("no")){
        element2.classList.add("no");
    }
    if(element3.classList.contains("no")){
    element3.classList.remove("no");
    }
    if(!element4.classList.contains("no")){
    element4.classList.add("no");
    }
    if(!element5.classList.contains("no")){
        element4.classList.add("no");
       }
   });

   document.getElementById("tab4").addEventListener("click", function(){
       
    document.getElementById("tab1").style.backgroundColor=' rgb(165, 127, 255)';
    document.getElementById("tab2").style.backgroundColor='rgb(165, 127, 255)';
    document.getElementById("tab3").style.backgroundColor='rgb(165, 127, 255)';
    document.getElementById("tab4").style.backgroundColor='rgb(252, 223, 245)';
    document.getElementById("tab5").style.backgroundColor='rgb(165, 127, 255)';
    if(!element1.classList.contains("no")){
     element1.classList.add("no");
    }
    if(!element2.classList.contains("no")){
        element2.classList.add("no");
    }
    if(!element3.classList.contains("no")){
    element3.classList.add("no");
    }
    if(element4.classList.contains("no")){
    element4.classList.remove("no");
    }
    if(!element5.classList.contains("no")){
        element5.classList.add("no");
       }
   });

   document.getElementById("tab5").addEventListener("click", function(){
       
    document.getElementById("tab1").style.backgroundColor=' rgb(165, 127, 255)';
    document.getElementById("tab2").style.backgroundColor='rgb(165, 127, 255)';
    document.getElementById("tab3").style.backgroundColor='rgb(165, 127, 255)';
    document.getElementById("tab4").style.backgroundColor='rgb(165, 127, 255)';
    document.getElementById("tab5").style.backgroundColor='rgb(252, 223, 245)';
    if(!element1.classList.contains("no")){
     element1.classList.add("no");
    }
    if(!element2.classList.contains("no")){
        element2.classList.add("no");
    }
    if(!element3.classList.contains("no")){
    element3.classList.add("no");
    }
    if(!element4.classList.contains("no")){
    element4.classList.add("no");
    }
    if(element5.classList.contains("no")){
        element5.classList.remove("no");
    }
   });


/*

ul.onclick = function(event) {
    
    if (event.target.tagName != "LI") return;

    if (event.ctrlKey || event.metaKey) {
      toggleSelect(event.target);
    } else {
      singleSelect(event.target);
    }

  }

  // предотвращает ненужное выделение элементов списка при клике
  ul.onmousedown = function() {
    return false;
  };

  function toggleSelect(li) {
    li.classList.toggle('selected');
  }

  function singleSelect(li) {
    let selected = ul.querySelectorAll('.selected');
    for(let elem of selected) {
      elem.classList.remove('selected');
    }
    li.classList.add('selected');
  }

*/
//Найти сумму квадратов масива
console.log('№2. Cуммa квадратов масива: ')

function sumQ(array) {
    if (array.length == 0) {
        return 0;
    }
    if (array.length == 1) {
        return array[array.length-1]* array[array.length-1];
    }
    else {       
        let r = array[array.length-1];
        array.pop();
        return r*r + sumQ(array);      
    }
}
let arr1 = [];
console.log(sumQ(arr1));

//Найти сумму числа 

console.log('№3. Cуммa цифр в числе ');

function sumNumerals(ourNmber) {
    if (isNaN(ourNmber) ==true){
        return NaN;
    }
    ourNmber = Math.abs(ourNmber);
    if (ourNmber < 10) {
        return ourNmber;
    }       
    else {    
        let r = ourNmber%10;
        ourNmber = Math.floor(ourNmber/10);
        return r + sumNumerals(ourNmber);  
    }
}
let a = -222;
console.log(sumNumerals(a));

//195->591
console.log('№4. Цифры в обратном порядке ');

function newNunber(ourNumber) {
    if (isNaN(ourNumber) ==true){
        return NaN;
    }
    ourNumber = Math.abs(ourNumber);
    if (ourNumber < 10) {
        return ourNumber;
    }       
    else {    
        let r = String(ourNumber%10);
        ourNumber = Math.floor(ourNumber/10);
        return r + newNunber(ourNumber);  
    }
}
let b = 84445555211;
console.log(newNunber(b));

//Поличтото
console.log('№5. ');

function poli(str) {
    if (str[str.length-1] !== str[0] ){
        return console.log('no');
    }       
    else if (str.length < 3){
        return console.log('yes');
    }
    else {
        str = str.substring(1, str.length-1);
        return poli(str);
    }
}
let c = '123454521';
poli(c);





