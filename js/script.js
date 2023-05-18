

window.onload = function () {
    const ulElement = document.getElementsByClassName("contact-list")[0];
    const spanTotal = document.getElementById("total-users");
    const paginationElement = document.getElementsByClassName("pagination");
    const contactsPerPage = 10;
    let currentPage = 1;
    const totalPages = Math.ceil(users.length / contactsPerPage);
    let currentActiveTab = null

    let usersChunked = []

    for (let i = 0; i < users.length; i += 10) {
        usersChunked.push(users.slice(i,i + contactsPerPage))
    }

    const paginationLinks = createPaginationLinks()



    function displayContacts(usersOnPage) {
        ulElement.innerHTML = "";
        for (const user of usersOnPage) {
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

    function createPaginationLinks() {
        return Array.from(Array(totalPages).keys()).map(i => {
            const link = document.createElement("a")
            link.href = "#";
            link.innerText = `${i+ 1}`;
            link.id = `${i+1}`
            const listItem = document.createElement("li");
            listItem.appendChild(link)
            return listItem
        })
    }

    // li -> a
    // li.firstchild.addev
    function addPagination() {
        paginationElement.innerHtml = " ";
        paginationLinks.forEach((link,index) => {
        link.firstChild.addEventListener("click", e => {
                if(currentActiveTab) {
                    currentActiveTab.classList.toggle("active")
                }
                currentActiveTab = e.target
                currentActiveTab.classList.toggle("active")
                currentPage = index;
                displayContacts(usersChunked[index]);
            });
        })
        paginationElement[0].append(...paginationLinks)
    }
    spanTotal.innerHTML = `${users.length}`;
    addPagination();
}




