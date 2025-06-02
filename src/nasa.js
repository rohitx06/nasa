
async function getImage() {
    try {
        const cntr = new AbortController();
        const signal = cntr.signal;
        const api_call = await fetch('https://api.nasa.gov/planetary/apod?api_key=Fd7QOiZPiLtRkEvpYqPAymDVuch6evkWNbT0gMKF', { signal });//returns a promise

        const res = await api_call.json();
        console.log(res);
        const title = document.querySelector('.title');
        title.innerHTML = res.title;
        const expl = document.querySelector('.expl');
        expl.innerHTML = res.explanation;
        const imgHold = document.querySelector('img');
        imgHold.setAttribute("src", res.hdurl);
        cntr.abort;//aborting the api call
    } catch (err) {
        console.log(err);
    }
}

getImage();