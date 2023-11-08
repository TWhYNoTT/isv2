var tkn = localStorage.getItem("token");
const host = "isserver.onrender.com"
if (tkn) {
    let xhr0 = new XMLHttpRequest();
    xhr0.open("POST", "https://" + host + "/api/getuserdata");
    xhr0.setRequestHeader('Content-type', 'application/json')

    xhr0.onreadystatechange = () => {
        if (xhr0.readyState == 4) {
            if (xhr0.status == 200) {
                window.location.replace("/IS");
            }
        }
    }
    xhr0.send(JSON.stringify({
        token: tkn
    }));

} else {
    let htmlContent = `  <div class="nav">

    </div>
    <div class="parent_form">
        <form id="myForm" action="" onsubmit="handlesubmit(event)">
            <h2>Create A New Account</h2>
            <div class="div-text">
                <input type="text" id="fn" name="Frist-name" placeholder="Frist-name" required minlength="3">
                <input type="text" id="ln" name="Second-name:" placeholder="Second-name" required minlength="3">
            </div>

            <div class="input-form">
                <input type="email" id="ema" name="emailOrPhone" placeholder="e-mail" required>
                <input type="password" id="pass" name="password" placeholder="Password" minlength="5" required>

            </div>

            <div class="parent_selects">
                <div class="titleOfDate">
                    Date of Birth:
                </div>
                <div class="div_child">
                    <span class="span_child" data-type="selectors">
                        <span>
                            <select name="birthday_day" id="day" title="Day" class="select_birthday_day_monthe_Year"
                                required>
                                <option value="1">1</option>
                                <option value="2">2</option>
                                <option value="3">3</option>
                                <option value="4">4</option>
                                <option value="5">5</option>
                                <option value="6">6</option>
                                <option value="7">7</option>
                                <option value="8">8</option>
                                <option value="9">9</option>
                                <option value="10">10</option>
                                <option value="11">11</option>
                                <option value="12">12</option>
                                <option value="13">13</option>
                                <option value="14">14</option>
                                <option value="15">15</option>
                                <option value="16">16</option>
                                <option value="17" selected="1">17</option>
                                <option value="18">18</option>
                                <option value="19">19</option>
                                <option value="20">20</option>
                                <option value="21">21</option>
                                <option value="22">22</option>
                                <option value="23">23</option>
                                <option value="24">24</option>
                                <option value="25">25</option>
                                <option value="26">26</option>
                                <option value="27">27</option>
                                <option value="28">28</option>
                                <option value="29">29</option>
                                <option value="30">30</option>
                                <option value="31">31</option>
                            </select>
                            <select name="birthday_month" id="month" title="Month"
                                class="select_birthday_day_monthe_Year" required>
                                <option value="1">يناير</option>
                                <option value="2">فبراير</option>
                                <option value="3">مارس</option>
                                <option value="4">أبريل</option>
                                <option value="5">مايو</option>
                                <option value="6">يونيو</option>
                                <option value="7">يوليو</option>
                                <option value="8">أغسطس</option>
                                <option value="9">سبتمبر</option>
                                <option value="10">أكتوبر</option>
                                <option value="11" selected="1">نوفمبر</option>
                                <option value="12">ديسمبر</option>
                            </select>
                            <select name="birthday_year" id="year" title="Year" class="select_birthday_day_monthe_Year"
                                required>
                                <option value="2022" selected="1">2022</option>
                                <option value="2021">2021</option>
                                <option value="2020">2020</option>
                                <option value="2019">2019</option>
                                <option value="2018">2018</option>
                                <option value="2017">2017</option>
                                <option value="2016">2016</option>
                                <option value="2015">2015</option>
                                <option value="2014">2014</option>
                                <option value="2013">2013</option>
                                <option value="2012">2012</option>
                                <option value="2011">2011</option>
                                <option value="2010">2010</option>
                                <option value="2009">2009</option>
                                <option value="2008">2008</option>
                                <option value="2007">2007</option>
                                <option value="2006">2006</option>
                                <option value="2005">2005</option>
                                <option value="2004">2004</option>
                                <option value="2003">2003</option>
                                <option value="2002">2002</option>
                                <option value="2001">2001</option>
                                <option value="2000">2000</option>
                                <option value="1999">1999</option>
                                <option value="1998">1998</option>
                                <option value="1997">1997</option>
                                <option value="1996">1996</option>
                                <option value="1995">1995</option>
                                <option value="1994">1994</option>
                                <option value="1993">1993</option>
                                <option value="1992">1992</option>
                                <option value="1991">1991</option>
                                <option value="1990">1990</option>
                                <option value="1989">1989</option>
                                <option value="1988">1988</option>
                                <option value="1987">1987</option>
                                <option value="1986">1986</option>
                                <option value="1985">1985</option>
                                <option value="1984">1984</option>
                                <option value="1983">1983</option>
                                <option value="1982">1982</option>
                                <option value="1981">1981</option>
                                <option value="1980">1980</option>
                                <option value="1979">1979</option>
                                <option value="1978">1978</option>
                                <option value="1977">1977</option>
                                <option value="1976">1976</option>
                                <option value="1975">1975</option>
                                <option value="1974">1974</option>
                                <option value="1973">1973</option>
                                <option value="1972">1972</option>
                                <option value="1971">1971</option>
                                <option value="1970">1970</option>
                                <option value="1969">1969</option>
                                <option value="1968">1968</option>
                                <option value="1967">1967</option>
                                <option value="1966">1966</option>
                                <option value="1965">1965</option>
                                <option value="1964">1964</option>
                                <option value="1963">1963</option>
                                <option value="1962">1962</option>
                                <option value="1961">1961</option>
                                <option value="1960">1960</option>
                            </select>
                        </span>
                    </span>
                </div>
            </div>




            <div class="parent_radio" id="u_0_n_E9">
                <div class="title_radio">Gender:
                </div>
                <span class="parent_span_radio" data-type="radio" data-name="gender_wrapper">
                    <div class="chidren_divOfRadio">
                        <label class="ClassForLabal" for="r2">male</label>
                        <input type="radio" class="classForInput" name="sex" value="2" id="r2" required>
                    </div>
                    <div class="chidren_divOfRadio">
                        <label class="ClassForLabal" for="r1">female</label>
                        <input type="radio" class="classForInput" name="sex" value="1" id="r1" required>
                    </div>
                    <div class="chidren_divOfRadio">
                        <label class="ClassForLabal" for="r3">don't care</label>
                        <input type="radio" class="classForInput" name="sex" value="2" id="r3" required>
                    </div>
                </span>
            </div>

            <div class="submit_div">
                <input type="reset" value="Clear..!">
                <input type="submit" value="Register">
            </div>
        </form>
    </div>`
    document.body.innerHTML = htmlContent;
}


var xhr = new XMLHttpRequest();

xhr.onreadystatechange = () => {
    if (xhr.readyState == 4) {
        if (xhr.status == 200) {
            localStorage.setItem("token", event.target.response);
            window.location.replace("/IS");
        }
    }
}

function handlesubmit(e) {
    e.preventDefault();
    xhr.open("POST", "https://" + host + "/api/register");
    xhr.setRequestHeader('Content-type', 'application/json');
    var fName = document.getElementById("fn").value;
    var lName = document.getElementById("ln").value;
    var ema = document.getElementById("ema").value;
    var pass = document.getElementById("pass").value;


    xhr.send(JSON.stringify({
        fn: fName,
        ln: lName,
        email: ema,
        password: pass
    }));
}