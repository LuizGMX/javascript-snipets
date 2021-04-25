  function get_today_date() {
    let today_full_date = new Date().toLocaleDateString("en-US");
    let month = parseInt(today_full_date.substring(0, 1));
    let year = parseInt(today_full_date.substring(5, 10));
    let day = parseInt(today_full_date.substring(2, 4));

    let new_month = "";
    let new_day = "";

    if (month < 9) {
      new_month = "0" + month;
    }

    if (day < 9) {
      new_day = "0" + day;
    } else {
      new_day = day.toString();
    }

    let formated_full_date =
      year.toString() + "-" + new_month.toString() + "-" + new_day.toString();

    return formated_full_date;
  }

  function get_one_year_ago_date() {
    const today_full_date = get_today_date();

    let year = parseInt(today_full_date.substring(0, 4)); //example: 2021

    const one_year_ago = year - 1; //example: 2020

    const formated_full_date_one_year_ago =
      one_year_ago + "-" + today_full_date.substring(5, 10);

    return formated_full_date_one_year_ago;
  }
