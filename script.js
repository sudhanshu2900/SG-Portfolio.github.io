function copyEmail() {
    var copyText = document.getElementById("");
    copyText.select();
    copyText.setSelectionRange(0, 99999); 
    navigator.clipboard.writeText(copyText.value);
}

function changeClg(){
    document.getElementById("content").innerHTML = ('<img src="./photos/PCEpic.png" width=100%, height=400px style="margin-top: 10px; border-radius: 10px;" > \
    <br/><br/> \
    <h4 style="text-align:center; font-weight: 600; color: black; font-size: 20px; letter-spacing: 5px;">POORNIMA COLLEGE OF ENGINEERING</h4> \
    <br/> \
    <div style="padding-left: 40px;">   \
        <div class="row"> \
            <div class="col-lg-6 col-md-6 col-sm-12">   \
            <p><strong>DEGREE :</strong> Bechelor of Technology</p>   \
            </div>  \
            <div class="col-lg-6 col-md-6 col-sm-12">   \
            <p><strong>CGPA :</strong> 8.82</p> \
            </div>  \
        </div> \
        <div class="row"> \
            <div class="col-lg-6 col-md-6 col-sm-12">   \
            <p><strong>COURSE :</strong> Computer Science & Engineering</p> \
            </div>  \
            <div class="col-lg-6 col-md-6 col-sm-12">   \
            <p><strong>UNIVERSITY :</strong> Rajasthan Technical University</p> \
            </div>  \
        </div>  \
    </div>');
}

function changeTnscol(){
    document.getElementById("content").innerHTML=('<img src="./photos/KVpic.jpg" width=100%, height=400px style="margin-top: 10px; border-radius: 10px;" > \
    <br/><br/> \
    <h4 style="text-align: center; font-weight: 600; color: black; font-size: 20px; letter-spacing: 5px;">KENDRIYA VIDYALAYA SANGATHAN</h4> \
    <br/> \
    <div style="padding-left: 40px;">   \
        <div class="row"> \
            <div class="col-lg-6 col-md-6 col-sm-12">   \
            <p><strong>STANDARD :</strong> 10th</p>   \
            </div>  \
            <div class="col-lg-6 col-md-6 col-sm-12">   \
            <P><strong>CGPA :</strong> 9.4</p> \
            </div>  \
        </div> \
        <div class="row"> \
            <div class="col-lg-6 col-md-6 col-sm-12">   \
            <p><strong>COURSE :</strong> Marticulation</p> \
            </div>  \
            <div class="col-lg-6 col-md-6 col-sm-12">   \
            <p><strong>BOARD :</strong> CBSE</p> \
            </div>  \
        </div>  \
    </div>');
}

function changeTwscol(){
    document.getElementById("content").innerHTML=('<img src="./photos/CPpic.png" width=100%, height=400px style="margin-top: 10px; border-radius: 10px;" > \
    <br/><br/> \
    <h4 style="text-align: center; font-weight: 600; color: black; font-size: 20px; letter-spacing: 5px;">CAREER POINT CH. AC. SNR. SEC. SCHOOL</h4> \
    <br/> \
    <div style="padding-left: 40px;">   \
        <div class="row"> \
            <div class="col-lg-6 col-md-6 col-sm-12">   \
            <p><strong>STANDARD :</strong> 12th (High School)</p>   \
            </div>  \
            <div class="col-lg-6 col-md-6 col-sm-12">   \
            <p><strong>PERCENTAGE :</strong> 79.20</p> \
            </div>  \
        </div> \
        <div class="row"> \
            <div class="col-lg-6 col-md-6 col-sm-12">   \
            <p><strong>COURSE :</strong> Mathematics</p> \
            </div>  \
            <div class="col-lg-6 col-md-6 col-sm-12">   \
            <p><strong>BOARD :</strong> RBSE (State Board)</p> \
            </div>  \
        </div>  \
    </div>');
}

const filterButtons = document.querySelector("#filter-btns").children;
const items = document.querySelector(".portfolio-gallery").children;

for(let i=0; i<filterButtons.length; i++){
    filterButtons[i].addEventListener("click", function (){
        for(let j=0; j<filterButtons.length; j++){
            filterButtons[j].classList.remove("active");
        }
        this.classList.add("active");
        const target = this.getAttribute("data-target");

        for(let k=0; k<items.length; k++){
            items[k].style.display="none";
            if(target == items[k].getAttribute("data-id")){
                items[k].style.display = "block";
            }
            if(target == "all"){
                items[k].style.display = "block";
            }
        }
    })
}