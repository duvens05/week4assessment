const complimentBtn = document.getElementById("complimentButton")
const fortuneBtn = document.getElementById("fortuneButton")

const baseURL = "http://localhost:4000"

const getComplimentYowza = () => {
    axios.get(baseURL + "/api/compliment/")
        .then(res => {
            const data = res.data;
            alert(data);
    });
};

const getFortune = () => {
    axios.get(baseURL + "/api/fortune/")
        .then((res) => {
            alert(res.data)
        }).catch((error) => {
            alert('backend broken!')
        })
}

complimentBtn.addEventListener('click', getComplimentYowza)
fortuneBtn.addEventListener('click', getFortune)