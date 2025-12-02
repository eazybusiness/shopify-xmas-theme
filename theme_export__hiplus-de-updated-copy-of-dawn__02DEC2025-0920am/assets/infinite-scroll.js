document.addEventListener("DOMContentLoaded", function () {
    let currentPage = 2;
    let loading = false;

    window.addEventListener("scroll", function () {
        if (loading) return;

        let loadMoreContainer = document.getElementById("load-more-container");
        let rect = loadMoreContainer.getBoundingClientRect();

        if (rect.top < window.innerHeight) {
            loading = true;
            let nextPageUrl = window.location.pathname + "?page=" + currentPage;

            fetch(nextPageUrl)
                .then(response => response.text())
                .then(html => {
                    let parser = new DOMParser();
                    let doc = parser.parseFromString(html, "text/html");
                    let newProducts = doc.querySelectorAll("#product-grid .grid__item");

                    if (newProducts.length > 0) {
                        newProducts.forEach(product => {
                            document.getElementById("product-grid").appendChild(product);
                        });
                        currentPage++;
                        loading = false;
                    } else {
                        loadMoreContainer.style.display = "none"; // Hide loader if no more products
                    }
                })
                .catch(error => {
                    console.error("Error loading more products:", error);
                    loading = false;
                });
        }
    });
});
