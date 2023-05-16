

window.onload = function () {
    const ulElement = document.getElementsByClassName("contact-list")[0]
    const spanTotal = document.getElementById("total-users")
    spanTotal.innerHTML=`${users.length}`
    ulElement.innerHTML = ""

    for (let user of users) {
        const innerHtml = `<li class="contact-item cf">
            <div class="contact-details">
                <img class="avatar" src="${user.image}">
                <h3>${user.name}</h3>
                <span class="email">${user.email}</span>
            </div>
            <div class="joined-details">
                   <span class="date">Joined ${user.joined}</span>
           </div>
        </li>`
        ulElement.innerHTML += innerHtml
    }
}