function CheckPatterns() {
    var _valid = true;
    var form = document.getElementById('formularz');
    var maner = {
        'name': /^[A-ZŻŹĆĄŚĘŁÓŃ][a-zżźćńółęąś]+$/,
        'surname': /^[A-ZŻŹĆĄŚĘŁÓŃ][a-zżźćńółęąś]+([- ][A-ZŻŹĆĄŚĘŁÓŃ][a-zżźćńółęąś]+)*$/,
        'town': /^[A-ZŻŹĆĄŚĘŁÓŃ][a-zżźćńółęąś]+([- ][A-ZŻŹĆĄŚĘŁÓŃ][a-zżźćńółęąś]+)*$/,
        'street': /^[0-9A-Za-zżźćńółęąśŻŹĆĄŚĘŁÓŃ ]*[0-9A-Za-zżźćńółęąśŻŹĆĄŚĘŁÓŃ]{2,20}$/,
        'homeno': /^([0-9]+)([\/]*)([A-Za-z]*){1,4}$/i,
        'code': /^\d{2}-\d{3}$/i,
        'email': /^[a-z\d]+[\w\d.-]*@(?:[a-z\d]+[a-z\d-]+\.){1,5}[a-z]{2,6}$/i,
        'phone': /^\d{3}-\d{3}-\d{3}$/i,
        'date': /^\d{2}-\d{2}-\d{4}$/i
    };
    for (var elem in maner) {
        if (form[elem]) {
            if (!maner[elem].test(form[elem].value)) {
                form[elem].style.background = '#ff9999';
                form[elem].style.border = '2px solid red';
                form[elem].style.color = '#000';
                _valid = false;
            }
            else {
                form[elem].style.background = '';
                form[elem].style.border = '';
                form[elem].style.color = '';
            }
        }
        if (elem === 'date') {
            var dateofbirth = form[elem].value;
            try {
                var day = Number(dateofbirth.substring(0, 2));
                var month = Number(dateofbirth.substring(3, 5));
                var year = Number(dateofbirth.substring(6, 10));
                if (!(day >= 1 && day <= 31) || !(month >= 1 && month <= 12) || !(year >= 1900 && year <= 2018)) {
                    form[elem].style.background = '#ff9999';
                    form[elem].style.border = '2px solid red';
                    form[elem].style.color = '#000';
                    _valid = false;
                }
            } catch (e) {
                console.log("Błąd zamiany daty", e);
            }
        }
    }
    return _valid;
}

function Send() {
    var _valid = CheckPatterns();
    if (_valid) {
        alert("Pomyślnie wypełniono formularz!\nDane zostały przesłane.", "Tytuł");
    }
    return _valid;
}