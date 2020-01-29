var a = [20,53,78,4,91,12];
var b = [];
for (var i = 0, ii =a.length; i < ii ; i++){
    var inserted = false;
    for (var j =0, jj = b.length ; j < jj ; j++){
        if (a[i] < b[j]) {
            inserted = true;
            b.splice(j , 0 , a[i]);
            break;
        }
    }
    if (!inserted)
    b.push(a[i]);
    }
    document.write(b);