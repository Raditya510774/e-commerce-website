 let mainhead = document.querySelector(".main-head")
        let itemcontent = document.querySelector(".item-content")

        let itemss = document.querySelector(".item");
        let itemlistss = document.querySelectorAll(".item-listss");
        let allproduct = document.querySelectorAll(".all-products");
        document.title = "hello";
        let items = document.querySelectorAll(".photo");
        let img1 = document.querySelector(".img1");
        let img2 = document.querySelector(".img2");
        let imgs = items.length > 0 ? items[0].querySelector("img") : null;

      
        

        if (imgs) {
            console.log(imgs.src);
        }


        itemlistss.forEach((itemi) => {
            itemi.addEventListener("click", (e) => {
                // Hide the main product list and navbar
                document.querySelector(".all-products").style.display = "none";
                document.querySelector(".navbar-head").style.display = "none";

                // Show the static item-content (exactly as written in HTML)
                document.querySelector(".item-content").style.display = "block";




                // Create a new page element
                let newpage = document.createElement("div");
                newpage.classList.add("item-page");

                // Get the images
                let img = itemi.querySelector(".img");
                let img1 = itemi.querySelector(".img1");
                let img2 = itemi.querySelector(".img2");

                // Set the inner HTML of the new page
                newpage.innerHTML = `
            <div class="item-page">
                <div class="item-page-head">
                <img src="${img.src}" width="550px"height="600px">
                <img src="${img1.src}" width="550px" height="600px" style="display: block;">
                <img src="${img2 ? img2.src : ''}" height="350px" style="display: block;">
                </div>
                <div class="Data">
                 <h1>${itemi.querySelector("h1").textContent}</h1>
                <p>${itemi.querySelector("p").textContent}</p>
                </div>

              
            </div>
        `;

                // Append the new page to the body
                document.body.appendChild(newpage);



            });






        });




        let women = document.querySelector(".women")

        women.addEventListener("click", (e) => {
            let wi = document.querySelectorAll(".womens");
            wi.forEach((wis) => {
                wis.style.display = "block";
            })



            let mi = document.querySelectorAll(".mens");
            mi.forEach((miss) => {
                miss.style.display = "none";

            })
        })
        let mennav = document.querySelector(".men-nav")
        mennav.addEventListener("click", (e) => {
            let mi = document.querySelectorAll(".mens");
            mi.forEach((miss) => {
                miss.style.display = "block";

            })

            let wi = document.querySelectorAll(".womens");
            wi.forEach((wis) => {
                wis.style.display = "none";
            })

        })
        let womennav = document.querySelector(".women-nav")
        womennav.addEventListener("click", (e) => {
            let wi = document.querySelectorAll(".womens");
            wi.forEach((wis) => {
                wis.style.display = "block";
            })



            let mi = document.querySelectorAll(".mens");
            mi.forEach((miss) => {
                miss.style.display = "none";

            })

        })



        let men = document.querySelector(".men")

        men.addEventListener("click", (e) => {
            let mi = document.querySelectorAll(".mens");
            mi.forEach((miss) => {
                miss.style.display = "block";

            })

            let wi = document.querySelectorAll(".womens");
            wi.forEach((wis) => {
                wis.style.display = "none";
            })





        })
        let mensjeans = document.querySelector(".mens-bottom");
        mensjeans.addEventListener("click", (e) => {
            let wi = document.querySelectorAll(".womens");
            wi.forEach((wis) => {
                wis.style.display = "none";
            })
            let means = document.querySelectorAll(".mens-jeans");
            means.forEach((meanss) => {
                meanss.style.display = "block";

            })
        })
        let sale = document.querySelector(".sale")
        sale.addEventListener("click", (e) => {
            let same = document.querySelectorAll(".sales")
            same.forEach((sames) => {
                sames.style.display = "block";
            })

            let wi = document.querySelectorAll(".womens");
            wi.forEach((wis) => {
                wis.style.display = "none";
            })
            let nonsale = document.querySelectorAll(".non-sale");
            nonsale.forEach((nons) => {
                nons.style.display = "none";

            })


        })

        let salenav = document.querySelector(".sale-nav");
        salenav.addEventListener("click", (e) => {
            let same = document.querySelectorAll(".sales")
            same.forEach((sames) => {
                sames.style.display = "block";
            })

            let wi = document.querySelectorAll(".womens");
            wi.forEach((wis) => {
                wis.style.display = "none";
            })
            let nonsale = document.querySelectorAll(".non-sale");
            nonsale.forEach((nons) => {
                nons.style.display = "none";

            })


        })

        let womentops = document.querySelector(".womens-tops")
        womentops.addEventListener("click", (e) => {
            let nonwomen = document.querySelectorAll(".non-womens-topper");
            nonwomen.forEach((nonwomens) => {
                nonwomens.style.display = "none";

                let mi = document.querySelectorAll(".mens");
                mi.forEach((miss) => {
                    miss.style.display = "none";
                    let nonjeans = document.querySelectorAll(".non-womens-jeans");
                    nonjeans.forEach((womenjeanss) => {
                        womenjeanss.style.display = "block";

                    })
                })

            })
        })

          let allproducts = document.querySelector(".all-items")
        allproducts.addEventListener("click", (e) => {
              let itemlistss = document.querySelectorAll(".item-listss");

            itemlistss.forEach((itemf) => {
                itemf.style.display = "block";
            })
        })

        // let same = document.querySelectorAll(".sales")
        // same.forEach((sames) => {
        //     sames.style.display = "block";
        // })

        // let wi = document.querySelectorAll(".womens");
        // wi.forEach((wis) => {
        //     wis.style.display = "none";
        // })
        // let nonsale = document.querySelectorAll(".non-sale");
        // nonsale.forEach((nons) => {
        //     nons.style.display = "none";

        // })
        // let means = document.querySelectorAll(".mens-jeans");
        // means.forEach((meanss) => {
        //     meanss.style.display = "none";
        // })


        let womenjeans = document.querySelector(".womens-bottom")
        womenjeans.addEventListener("click", (e) => {
            let nonjeans = document.querySelectorAll(".non-womens-jeans");
            nonjeans.forEach((womenjeanss) => {
                womenjeanss.style.display = "none";


                let mi = document.querySelectorAll(".mens");
                mi.forEach((miss) => {
                    miss.style.display = "none";

                    let nonwomen = document.querySelectorAll(".non-womens-topper");
                    nonwomen.forEach((nonwomens) => {
                        nonwomens.style.display = "block";

                    })
                })

            })
        })
        let home = document.querySelector(".home")
        home.addEventListener("click", (e) => {
            alert("Sorry Home page is not created-yet")
        })

        let tab = document.querySelector(".tab");
        let cols = document.querySelectorAll(".cols");
        let itemi = document.querySelector(".item-listss");


        cols.forEach((colss) => {
            colss.addEventListener("click", (e) => {
                // Get the clicked item (assuming you want to get the parent item)
                // let itemi = colss.closest(".item-listss"); // Adjust this if needed

                // Hide the main head (if needed)
                // Uncomment if you want to hide the main head

                // Add event listener to tab only once
                tab.addEventListener("click", (e) => {
                    // mainhead.style.display = "none";
                    document.querySelector(".item-page").style.display = "none";
                    document.querySelector(".item-content").style.display = "none";
                    let img = itemi.querySelector(".img");
                    let img1 = itemi.querySelector(".img1");
                    img1.style.display = "none"; // Hide the second image

                    // Create a new div to show the selected size and quantity
                    let divk = document.createElement("div");
                    divk.classList.add("add-to");
                    divk.innerHTML = `<div>
                <div class="last-page">
                    <nav class="cart-nav">
                        <ul>
                            <li>Product</li>
                            <li>Size</li>
                            <li>Quantity</li>
                            </ul>
                        </nav>
                </div>
                <div class="last-page1">
                    <img src="${img.src}" height="100px" alt="Product Image">
                      ${colss.textContent}
                    <div>
                    <select>
                        <option>1</option>
                        <option>2</option>
                        <option>3</option>
                        <option>4</option>
                    </select>
                    </div>
                </div>
                </div>
            `;

                    // Append the new div to the body
                    document.body.appendChild(divk);
                }, { once: true }); // Use { once: true } to ensure the listener is only added once
            });
        })

        console.log("code is working");
        let selectedSize = null;

        let sizelist = document.querySelector(".size-list");
        let size = document.querySelector(".size1");
        size.addEventListener("click", (e) => {
            size.style.border = "3px solid orange";
            size1.style.border = null;
            size2.style.border = null;
            size3.style.border = null;
            size4.style.border = null;
            size5.style.border = null;


            console.log("49")


        });
        let size1 = document.querySelector(".size2");
        size1.addEventListener("click", (e) => {
            size1.style.border = "3px solid orange";
            size.style.border = null;
            size2.style.border = null;
            size3.style.border = null;
            size4.style.border = null;
            size5.style.border = null;



        });
        let size2 = document.querySelector(".size3");
        size2.addEventListener("click", (e) => {
            size2.style.border = "3px solid orange";
            size1.style.border = null;
            size.style.border = null;
            size3.style.border = null;
            size4.style.border = null;
            size5.style.border = null;


        });
        let size3 = document.querySelector(".size4");
        size3.addEventListener("click", (e) => {
            size3.style.border = "3px solid orange";
            size4.style.border = null;
            size1.style.border = null;
            size.style.border = null;
            size2.style.border = null;
            size5.style.border = null;

        });
        let size4 = document.querySelector(".size5");
        size4.addEventListener("click", (e) => {
            size4.style.border = "3px solid orange";
            size1.style.border = null;
            size.style.border = null;
            size2.style.border = null;
            size3.style.border = null;
            size5.style.border = null;

        });


        let size5 = document.querySelector(".size6");
        size5.addEventListener("click", (e) => {
            size5.style.border = "3px solid orange";
            size1.style.border = null;
            size.style.border = null;
            size2.style.border = null;
            size3.style.border = null;
            size4.style.border = null;

        });





        // let pre = document.querySelector(".pre");
        // pre.addEventListener("mouseenter", (e) => {
        //     //  document.querySelector(".main").style.display="none";
        //     let divsss = document.createElement("div")
        //     divsss.classList.add("pre-price")

        //     divsss.innerHTML = `<div>Price Details<br>
        //             <br>
        //             Maximum Retail Price ${document.querySelector(".retail").textContent}<br>
        //             (incl of all taxes)<br>
        //             <br>
        //             Discount 60% OFF<br>
        //             Selling Price ${document.querySelector(".pre").textContent}</div>`
        //     document.querySelector("body").appendChild(divsss)
        //     // document.querySelector(".pre-price").style.display="flex";
        // })
        // pre.addEventListener("mouseleave", (e) => {

        //     document.querySelectorAll(".pre-price").forEach((press) => {
        //         press.style.display = "none";

        //     })
        // });