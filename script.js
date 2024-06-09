document.querySelector("button").addEventListener("click", result);

async function result() {
    try {
        var test = document.getElementById("text").value;
        var data = await fetch(`https://api.tvmaze.com/search/shows?q=${test}`);
        var res = await data.json();
        foo(res);
        console.log(res);
    } catch (error) {
        console.log(error);
    }
}

var container = document.createElement("div");
container.className = "container";

var row = document.createElement("div");
row.className = "row";

function foo(res) {
    row.innerHTML = '';
    if (res.length > 0) {
        var col = document.createElement("div");
        col.className = "col-lg-12 col-sm-6";
        col.innerHTML = `<div class="card" style="width: 18rem;"">
        <img src="${ res[0].show.image.medium}" class="card-img-top" alt="${ res[0].show.name}">
        <div class="card-body">
            <p class="card-text">${ res[0].show.name}</p>
            <p class="card-text"><strong>Genre:</strong> ${ res[0].show.genres.join(', ')}</p>
            <p class="card-text"><strong>Premiered:</strong> ${ res[0].show.premiered}</p>
            <p class="card-text"><strong>Rating:</strong> ${ res[0].show.rating.average}</p>
            <p class="card-text"><strong>Runtime:</strong> ${ res[0].show.runtime} minutes</p>
            <p class="card-text"><strong>Show Schedule:</strong> ${ res[0].show.schedule.days.join(', ')} at ${ res[0].show.schedule.time}</p>
            <p class="card-text"><strong>Network:</strong> ${ res[0].show.network.name}</p>
            <p class="card-text"><strong>Summary:</strong> ${ res[0].show.summary}</p>
            <p class="card-text"><strong>Official Site:</strong> <a href="${ res[0].show.officialSite}" target="_blank">${ res[0].show.officialSite}</a></p>
        </div>
    </div>`;
        row.append(col);
        container.append(row);
        document.body.append(container);
    } 
}
