// 1. Valandos ir minutes
//laikas(5);
//function laikas(paros) {
//    if (paros === 0) {
//        console.log("0 valandu, arba 0 minuciu");
//        return;
//    }
//    
//    var valandos = paros * 24;
//    var minutes = valandos * 60;
//    console.log(valandos + " valandu, arba " + minutes + " minuciu" )
//

// 2. Apskaiciuoti reiksme
//skaiciuoti(2);
//function skaiciuoti(x) {
//    var answer = 16 * Math.pow(x,4) + 2 * x;
//    console.log(answer);
//}

// 3. Ar lyginis ar nelyginis?
//var number = prompt("Ivesk skaiciu.")
//isLyginis(number);
//function isLyginis (number) {
//    if (number % 2 === 0) {
//        console.log("lyginis");
//    } else {
//        console.log("nelyginis")
//    }
//}

// 4. Rasti didesni skaiciu.
// a) salyginis sakinys
//var pirmas = 20;
//var antras = 20;
//if (pirmas > antras) {
//    console.log("pirmas didesnis uz antra");
//} else if (pirmas < antras) {
//    console.log("antras didesnis uz pirma");
//} else {
//    console.log("pirmas ir antras - lygus");
//}
// b) ternary
////(pirmas > antras) ? console.log("pirmas > antras") : (pirmas < antras) ? console.log("pirmas > antras") : console.log("pirmas = antras");
//// c) Math object
//console.log("Didesnis skaicius yra " +  Math.max(pirmas, antras));

// 5. Ivertinimas
//var grade = 58;
//if (grade < 30) {
//    console.log ("failed");
//} else if (grade <= 34) {
//    console.log ("1");
//} else if (grade <= 39) {
//    console.log ("2");
//} else if (grade <= 44) {
//    console.log ("3");
//} else if (grade <= 49) {
//    console.log ("4");
//} else if (grade <= 60) {
//    console.log ("5");
//}


// 6. kmi
//var svoris = 78;
//var ugis = 181;
//
//var kmi = svoris / ugis / ugis * 10000;
//console.log(kmi);
//if (kmi < 18.5) {
//    console.log("Nepakankams svoris");
//} else if (kmi <= 25) {
//    console.log("Normalus svoris");
//} else if (kmi <= 30) {
//    console.log("Antsvoris");
//}  else if (kmi > 30) {
//    console.log("Nutukimas");
//}

// 7. Oru prognoze
//var orai = 1;
//switch (orai) {
//    case 1:
//        console.log("Sauleta");
//        break;
//    case 2:
//        console.log("Lietinga");
//        break;
//    case 3:
//        console.log("Vejuota");
//        break;
//    case 4:
//        console.log("Sniegas");
//        break;
//}

// 8. Nustato metu laika
//var month = 2;
//switch (month) {
//        case 1:
//        console.log("Ziema");
//        break;
//        case 2:
//        console.log("Ziema");
//        break;
//        case 3:
//        console.log("Pavasaris");
//        break;
//        case 4:
//        console.log("Pavasaris");
//        break;
//        case 5:
//        console.log("Pavasaris");
//        break;
//        case 6:
//        console.log("Vasara");
//        break;
//        case 7:
//        console.log("Vasara");
//        break;
//        case 8:
//        console.log("Vasara");
//        break;
//        case 9:
//        console.log("Ruduo");
//        break;
//        case 10:
//        console.log("Ruduo");
//        break;
//        case 11:
//        console.log("Ruduo");
//        break;
//        case 12:
//        console.log("Ziema");
//        break;
//}

// 9. Ttrizenkliai skaiciai dalus is 5.
//for(i=100; i<1000; i++) {
//    if (i % 5 === 0) {
//        console.log(i);
//    }
//}

// 10. FizzBuzz
//
//for (i = 1; i < 100; i++) {
//    if (i % 15 === 0) {
//        console.log("FizzBuzz");
//    } else if (i % 3 === 0) {
//        console.log("Fizz");
//    } else if (i % 5 === 0) {
//        console.log("Buzz");
//    } else {
//        console.log(i);
//    }
//}

// 11. Dalinti vieneta is [-5 .. 5].
//for(i = -5; i < 6; i++) {
//    if (i === 0) {
//        continue;
//    } else {
//        console.log("1 / " + i + " = " + 1 / i)
//    }
//}

// 12. Skaiciu suma intervale.
//var intervaloPradzia = 1;
//var intervaloPabaiga = 5;
//var suma = 0;
//for (i = intervaloPradzia; i < intervaloPabaiga + 1; i++) {
//    suma += i;
//}
//
//console.log("Suma: " + suma)















