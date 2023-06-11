async function getData() {
    try {
        const response = await fetch("https://data.texas.gov/resource/beka-uwfq.json?$limit=10000&$select=cal_year,cal_month,location_name,location_address,location_city,location_zip,game_category,gross_sales_amount,instant_price_point&$$app_token=bt0RXLQIRhTC40NcflQ0iTXIM")
        const data = await response.json();
        console.log(data);
        alert("Retrieved " + data.length + " records from the database!");
    } catch(error) {
        console.log(error)
    }
}

getData().then(r => {});