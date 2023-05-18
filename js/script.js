
    const ulElement = document.getElementsByClassName("contact-list")[0];
    const spanTotal = document.getElementById("total-users");
    spanTotal.innerHTML = `${users.length}`;
    const paginationElement = document.getElementsByClassName("pagination");
    const contactsPerPage = 10;
    let currentPage = 1;
    const totalPages = Math.ceil(users.length / contactsPerPage);
    let currentActiveTab = null

    const usersChunked = groupUsersByPage()
    const paginationLinks = createPaginationLinks()

    displayContacts(usersChunked[0])
    currentActiveTab = paginationLinks[0].firstChild
    currentActiveTab.classList.add('active')

    function groupUsersByPage() {
        const chunks = []
        for (let i = 0; i < users.length; i += 10) {
            chunks.push(users.slice(i, i + contactsPerPage))
        }
        return chunks
    }

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
        const listItems = []
        for (let page = 0; page < totalPages ; page++) {
            const link = document.createElement("a")
            link.href = "#";
            link.innerText = `${page + 1}`;
            const listItem = document.createElement("li");
            listItem.appendChild(link)
            listItems.push(listItem)
        }
        return listItems
    }

    function addClickListenersToPaginationLinks() {
        for (let idx = 0; idx < paginationLinks.length; idx ++) {
            const anchorLink = paginationLinks[idx].firstChild
            anchorLink.addEventListener("click", e => {
                if (currentActiveTab) {
                    currentActiveTab.classList.toggle("active")
                }
                currentActiveTab = e.target
                currentActiveTab.classList.toggle("active")
                currentPage = idx;
                displayContacts(usersChunked[idx]);
            });

        }
    }

    function addPagination() {
        paginationElement.innerHtml = " ";
        addClickListenersToPaginationLinks()
        paginationElement[0].append(...paginationLinks)
    }

    addPagination();




