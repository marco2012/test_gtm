output();

function output() {
    var hDL = syntaxHighlight(JSON.stringify(dataLayer, undefined, 4));
    document.getElementById("DL").innerHTML = hDL;
}

function syntaxHighlight(json) {
    json = json
        .replace(/&/g, "&amp;")
        .replace(/</g, "&lt;")
        .replace(/>/g, "&gt;");
    return json.replace(
        /("(\\u[a-zA-Z0-9]{4}|\\[^u]|[^\\"])*"(\s*:)?|\b(true|false|null)\b|-?\d+(?:\.\d*)?(?:[eE][+\-]?\d+)?)/g,
        function (match) {
            var cls = "number";
            if (/^"/.test(match)) {
                if (/:$/.test(match)) {
                    cls = "key";
                } else {
                    cls = "string";
                }
            } else if (/true|false/.test(match)) {
                cls = "boolean";
            } else if (/null/.test(match)) {
                cls = "null";
            }
            return '<span class="' + cls + '">' + match + "</span>";
        }
    );
}

function btnClick(label) {
    dataLayer.push({
        event: "click_btn",
        event_info: {
            event_category: "button",
            event_label: label,
        },
    });
    dataLayer.push({
        event: "click_btn22",
        event_info: {
            event_category: "button22",
            event_label: label + "22",
        },
    });
    output();
}

function purchase() {
    dataLayer.push({ ecommerce: null }); // Clear the previous ecommerce object.
    dataLayer.push({
        event: "purchase",
        ecommerce: {
            transaction_id: "T_" + Math.random().toString(16).slice(2),
            affiliation: "Google Merchandise Store",
            value: 25.42,
            tax: 4.9,
            shipping: 5.99,
            currency: "EUR",
            coupon: "SUMMER_SALE",
            items: [
                {
                    item_id: "SKU_12345",
                    item_name: "Stan and Friends Tee",
                    affiliation: "Google Merchandise Store",
                    coupon: "SUMMER_FUN",
                    currency: "EUR",
                    discount: 2.22,
                    index: 0,
                    item_brand: "Google",
                    item_category: "Apparel",
                    item_category2: "Adult",
                    item_category3: "Shirts",
                    item_category4: "Crew",
                    item_category5: "Short sleeve",
                    item_list_id: "related_products",
                    item_list_name: "Related Products",
                    item_variant: "green",
                    location_id: "ChIJIQBpAG2ahYAR_6128GcTUEo",
                    price: 9.99,
                    quantity: 1,
                    item_colore: "blue",
                    item_materiale: "metallo",
                    item_tipo_lente: "concava",
                },
                {
                    item_id: "SKU_12346",
                    item_name: "Google Grey Women's Tee",
                    affiliation: "Google Merchandise Store",
                    coupon: "SUMMER_FUN",
                    currency: "EUR",
                    discount: 3.33,
                    index: 1,
                    item_brand: "Google",
                    item_category: "Apparel",
                    item_category2: "Adult",
                    item_category3: "Shirts",
                    item_category4: "Crew",
                    item_category5: "Short sleeve",
                    item_list_id: "related_products",
                    item_list_name: "Related Products",
                    item_variant: "gray",
                    location_id: "ChIJIQBpAG2ahYAR_6128GcTUEo",
                    price: 20.99,
                    promotion_id: "P_12345",
                    promotion_name: "Summer Sale",
                    quantity: 1,
                    item_colore: "green",
                    item_materiale: "plastica",
                    item_tipo_lente: "convessa",
                },
            ],
        },
    });
}
