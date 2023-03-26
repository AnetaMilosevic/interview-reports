export const formatDate = (dateString) => {
    const date = new Date(dateString);
    function padTo2Digits(num) {
      return num.toString().padStart(2, "0");
    }
    const year = date.getFullYear();
    const month = padTo2Digits(date.getMonth() + 1);
    const day = padTo2Digits(date.getDate());
    return `${day}-${month}-${year}`;
  };