export const previousDate = () => {
  var today = new Date();


  var yesterday = new Date(today);
  yesterday.setDate(today.getDate() - 1);

  // if its monday get saturday's date
  if(today.getDay() === 1){
    yesterday.setDate(today.getDate() - 2);
      if(today.getDate() === 1){
         yesterday.setMonth(today.getMonth() - 1);
      }
    
 } else if (today.getDate() === 1) {   
    // Set yesterday's date to the last day of the previous month
    yesterday.setDate(0);
    yesterday.setMonth(today.getMonth() - 1);

    // Check if the month changed to December
    if (today.getMonth() === 0) {
      // If so, set the year to the previous year
      yesterday.setFullYear(today.getFullYear() - 1);
    }
  }

  // Get the individual components of yesterday's date
  var year = yesterday.getFullYear();
  var month = yesterday.getMonth() + 1;
  var day = yesterday.getDate();

  // Format the date as a string dd/mm/yy
  var formattedDate =
    day.toString().padStart(2, "0") +
    "/" +
    month.toString().padStart(2, "0") +
    "/" +
    year;

  return formattedDate;
};
