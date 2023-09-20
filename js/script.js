$.ajax({
    url: 'js/data.json',
    dataType: "json",
    type: 'GET',
    success: function (_data) {
        _data.forEach((v, i) => {
            var lado;
            if (i % 2 == 0) {
                lado = 'left';
            }
            else {
                lado = 'right'
            }
            var t2 = '';
            if (v.titulo2 != undefined) {
                t2 += `<h6 class="card-subtitle my-3">${v.titulo2}</h6>`
            }
            if (v.texto2 != undefined) {
                t2 += `<div class="card-text">${v.texto2}</div>`
            }

            $('.tl-btn').before(
                `
                <div class="tl-container ${lado}">
                    <div class="card">
                        <div class="card-body">
                            <h3 class="card-title mb-3">
                                ${v.ano}
                            </h3>
                            <h6 class="card-subtitle mb-3">${v.titulo}</h6>
                            <div class="card-text">
                                ${v.texto}
                                
                            </div><a href="${v.link}">${v.link}</a>
                            ${t2}
                        </div>
                    </div>
                </div>
            `
            )
        });
    }
})

$('.tl-btn').click(function () {
    window.scrollTo(0, 0);
})

