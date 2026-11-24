// 1. EXPLORE NOW BUTTON
const exploreBtn = document.querySelector(".hero-btn");
if (exploreBtn) {
    exploreBtn.addEventListener("click", function () {
        console.log("Opening Shop Page...");
    });
}
// 2. SHOP BY CATEGORY
const categoryCards = document.querySelectorAll( ".category-image");
categoryCards.forEach(function (image) {
    image.addEventListener("click", function () {
        const category = image.getAttribute("alt");
        if (category) {
            console.log( "Selected Category:",category );
        }
    });
});
// 3. CATEGORY VIEW ALL
const categoryViewAll = document.querySelector( 'a[href="shop.html"]');
if (categoryViewAll) {
    categoryViewAll.addEventListener( "click",
        function () { console.log(  "Opening Shop Page..." );
        }
    );
}
// 4. BACK TO TOP
const backToTop = document.getElementById( "backToTop");
if (backToTop) {
    // Initially hide
    backToTop.style.display = "none";
    // Show / Hide while scrolling
    window.addEventListener(        "scroll",
        function () {
            if (window.scrollY > 300) {
                backToTop.style.display = "block";
            } else {
                backToTop.style.display = "none";
            }
        }
    );
    // Scroll to top
    backToTop.addEventListener( "click",
        function () {
            window.scrollTo({  top: 0,  behavior: "smooth"
            });
        }
    );
}
// 5. READ MORE BUTTON
const readMoreBtn = document.getElementById( "readMoreBtn");
if (readMoreBtn) {
    readMoreBtn.addEventListener( "click",
        function () {
            alert( "Welcome to our Jewellery Store!"  );
        }
    );
}
// 6. COLLECTION BUTTON
const collectionBtn = document.querySelector( ".collection-section button");
if (collectionBtn) {
    collectionBtn.addEventListener( "click",
        function () {
            const collectionSection =   document.querySelector(  ".collection-image" );
            if (collectionSection) {
                collectionSection.scrollIntoView({   behavior: "smooth" });
            }
        }
    );
}
// 7. COLLECTION CARDS
const collectionCards = document.querySelectorAll( ".collection-card-image");
collectionCards.forEach(function (card) {
    card.addEventListener( "click",
        function () {
            console.log(       "Collection selected"   );
        }
    );
});
// 8. FEATURED PRODUCTS
const viewAllBtn = document.getElementById("viewAllBtn");
if (viewAllBtn) {
    viewAllBtn.addEventListener(  "click",
        function () {
              console.log(  "Opening Featured Products in Shop" );
        }
    );
}
// 9. PRECIOUS METALS
const metalImages = document.querySelectorAll(  ".metal-image" );
metalImages.forEach(function (image) {
    image.addEventListener( "click",  function () {
            const metalName = image.getAttribute("alt");
            if (metalName) {
                 console.log(  "Selected Metal:", metalName   );
            }
        }
    );
});
// 10. BRACELET EXPLORE
const braceletExploreBtn = document.querySelector( ".bracelet-image" );
if (braceletExploreBtn) {
    braceletExploreBtn.addEventListener( "click",
         function () {console.log( "Bracelet Collection Selected" );
        }
    );
}
// 11. DISCOUNT / STORE BUTTON
const allButtons = document.querySelectorAll("button");
allButtons.forEach(function (button) {
    const buttonText =   button.textContent .trim().toUpperCase();
    if (  buttonText.includes( "VISIT OUR STORES" ) ) {
        button.addEventListener( "click",
            function () {
                alert(  "Our store locations will be available soon!"   );
            }
        );
    }
});
// 12. NAVBAR SCROLL EFFECT
const navbar = document.querySelector(  ".jewellery-navbar" );
if (navbar) {
    window.addEventListener("scroll",
        function () {
            if (window.scrollY > 100) {
                navbar.classList.add(     "scrolled"  );
            } else {
             navbar.classList.remove( "scrolled" );
            }
        }
    );
}
// 13. LOGIN ICON
const loginIcons = document.querySelectorAll( ".login-icon"  );
if (loginIcons.length > 0) {
    console.log(  "Login icon found:", loginIcons.length );
}
// 14. CART ICON
const cartButton = document.getElementById(  "navbarCartBtn" );
if (cartButton) {
    console.log( "Cart button found successfully." );
}
// 15. PAGE LOADED MESSAGE
console.log( "Jewellery Store Home Page Loaded Successfully!");