let boxes = document.querySelectorAll(".box"); 
let resetbtn = document.querySelector(".btn");
let newbtn = document.querySelector(".newbtn");
let msgcontainer = document.querySelector(".container2");
let msg = document.querySelector("#win");

let turno = true;

const winpatterns = [
    [0, 1, 2],
    [0, 3, 6],
    [0, 4, 8],
    [1, 4, 7],
    [2, 5, 8],
    [2, 4, 6],
    [3, 4, 5],
    [6, 7, 8]
];

const resetgame = () => {
    turno = true;
    enabledBoxes();
    msgcontainer.classList.add("hide");
}

boxes.forEach((box) => {
    box.addEventListener("click", () => {
        if (turno) {
            box.innerText = "O";
            turno = false;
        } else {
            box.innerText = "X";
            turno = true;
        }
        box.disabled = true;

        checkWinner();
    });
});

const disabledBoxes = () => {
    for (let box of boxes) {
        box.disabled = true;
    }
}

const enabledBoxes = () => {
    for (let box of boxes) {
        box.disabled = false;
        box.innerText = "";
    }
}

const showwinner = (winner) => {
    msg.style.fontSize = "26px"; 
    msg.innerText = `Congratulations, the winner is ${winner}`;
    msgcontainer.classList.remove("hide");
    disabledBoxes();
};


const checkWinner = () => {
    let allFilled = true;

    for (let pattern of winpatterns) {
        let pos1Val = boxes[pattern[0]].innerText;
        let pos2Val = boxes[pattern[1]].innerText;
        let pos3Val = boxes[pattern[2]].innerText;

        if (pos1Val !== "" && pos2Val !== "" && pos3Val !== "") {
            if (pos1Val === pos2Val && pos2Val === pos3Val) {
                showwinner(pos1Val);
                return;
            }
        }
    }

    // Check for tie
    boxes.forEach(box => {
        if (box.innerText === "") {
            allFilled = false;
        }
    });

    if (allFilled) {
        msg.innerText = "It's a tie!";
        msgcontainer.classList.remove("hide");
        disabledBoxes();
    }
};

newbtn.addEventListener("click", resetgame);
resetbtn.addEventListener("click", resetgame);








1. Install Git:

sudo apt update
sudo apt install git -y

2. Install JDK 21:

sudo apt update
sudo apt install openjdk-21-jdk -y

3. If not available, download from Adoptium or Oracle:

wget https://download.oracle.com/java/21/latest/jdk-21_linux-x64_bin.deb
sudo dpkg -i jdk-21_linux-x64_bin.deb
sudo apt-get install -f  # To fix dependencies

3.1. Set JDK 21 as default:

sudo update-alternatives --config java
java -version

4. Install Jenkins:

Add Jenkins repository and install:

wget -q -O - https://pkg.jenkins.io/debian/jenkins.io.key | sudo apt-key add -
sudo sh -c 'echo deb http://pkg.jenkins.io/debian-stable binary/ > /etc/apt/sources.list.d/jenkins.list'
sudo apt update
sudo apt install jenkins -y

Start Jenkins service:

sudo systemctl start jenkins
sudo systemctl enable jenkins

Verify Jenkins is running:

sudo systemctl status Jenkins

Step 1:

git init

git add .

git commit -m "Initial Commit"

Step 2:

git remote add origin repo_url

git branch -M main or master

git push -u origin main or master



Now Start from Jenkins............

1] after setting up Jenkins open it , go to manage Jenkins on left side

2] then click on System (Configure global ...) and scroll down till GitHub

3] in name give anything such as JCICD , API URL is already there then,
   for credentials click on add and click Jenkins

4] Kind select Secret Text and in Secret Paste the token generated in GitHub,
   name id anything such as JCICD and click on add

5] now in credentials select the id you enter JCICD and click on Test connection,
   if you get Credentials verified then integrations is done successfully now save it 

6] then click on new item , select freestyle name it anything , 
   then for source code management click git 

7] in URL paste repo link in branch change the branch

8] in build trigger click Poll SCM and type * * * * * 

9] then in build steps choose Execute shell and add javac CICD.java , java CICD
   then click on save and click on build now 

10] then again click on new item click pipeline , 
    scroll down and in script paste the script and save and build
