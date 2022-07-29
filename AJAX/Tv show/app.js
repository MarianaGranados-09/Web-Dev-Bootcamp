const form = document.querySelector('#searchForm')
const inp = document.querySelector('#inputBar')
form.addEventListener('submit', async (e) => {
    e.preventDefault();
    const input = form.elements.query.value;
    const res = await axios.get('https://api.tvmaze.com/singlesearch/shows?q='+input);
    const link = res.data.image.medium;
    const img = document.createElement('img');
    img.src = link;
    document.body.append(img)
    inp.value = "";
})