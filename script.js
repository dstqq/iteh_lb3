var ajax = new XMLHttpRequest();
function Fun1(){
    ajax.open("POST", "author.php",true);
    ajax.setRequestHeader("Content-type", "application/x-www-form-urlencoded"); 
    ajax.onreadystatechange = function() {
        if (ajax.readyState === 4) {
            if (ajax.status === 200) {
                var return_data="<th>Назва</th>";
                return_data += ajax.responseText;
                document.getElementById("result").innerHTML = return_data;
            }
        }
    }
    var author = document.getElementById("author").value;
    var vars="author="+author;
    ajax.send(vars);
    document.getElementById("result").innerHTML = "processing..."
}
function Fun2(){
    ajax.open("POST", "date.php",true);
    ajax.setRequestHeader("Content-type", "application/x-www-form-urlencoded"); 
    ajax.onreadystatechange = function() {
        if (ajax.readyState === 4) {
            if (ajax.status === 200) {
              
                var return_data = "";
                var rows = ajax.responseXML.firstChild.children;
                console.log(rows);
                return_data+="<th>Назва</th><th>Рік</th><th>Вид</th>";
                for (var i = 0; i < rows.length; i++) {
                    return_data += "<tr>";
                    return_data += "<td>" + rows[i].children[0].firstChild.nodeValue + "</td>";
                    return_data += "<td>" + rows[i].children[1].textContent + "</td>";
                    return_data += "<td>" + rows[i].children[2].textContent + "</td>";
                    return_data += "</tr>";
                }
                document.getElementById("result").innerHTML = return_data;
            }
        }
    }
    var FYear = document.getElementById("FYear").value;
    var SYear = document.getElementById("SYear").value;
    var vars="FYear="+FYear+"&SYear="+SYear;
    ajax.send(vars);
    document.getElementById("result").innerHTML = "processing..."

    
}
function Fun3(){
    
    ajax.open("POST", "publisher.php",true);
    ajax.setRequestHeader("Content-type", "application/x-www-form-urlencoded"); 
    ajax.onreadystatechange = function() {
        if (ajax.readyState === 4) {
            if (ajax.status === 200) {
                var res = JSON.parse(ajax.response);
                console.log(res);
                var return_data="";
                return_data +="<th>Назва</th><th>ISBN</th><th>Видавництво</th><th>Рік</th><th>Сторінки</th>";
                for(var i in res)
                {
                   
                    return_data += "<tr>";
                    return_data += "<td>" + res[i][0] + "</td>";
                    return_data += "<td>" + res[i][1] + "</td>";
                    return_data += "<td>" + res[i][2] + "</td>";
                    return_data += "<td>" + res[i][3] + "</td>";
                    return_data += "<td>" + res[i][4] + "</td>";
                    result += "</tr>";
                }
                document.getElementById("result").innerHTML = return_data;
            }
        }
    }
    var publisher = document.getElementById("publisher").value;
    var vars="publisher="+publisher;
    ajax.send(vars);
    document.getElementById("result").innerHTML = "processing..."

}