// Array of available time slots
const timeSlots = [
    { date: "January 25, 2025", slots: ["9:00 AM", "11:00 AM", "2:00 PM"] },
    { date: "January 26, 2025", slots: ["10:00 AM", "12:00 PM", "4:00 PM"] },
    { date: "January 27, 2025", slots: ["9:00 AM", "11:00 AM", "2:00 PM"] },
    { date: "January 28, 2025", slots: ["11:00 AM", "2:00 PM", "6:00 PM"] },
    { date: "January 29, 2025", slots: ["12:00 AM", "4:00 AM", "6:00 PM"] },
    { date: "January 30, 2025", slots: ["10:00 AM", "12:00 PM", "4:00 PM"] },
  
];
  
  // Function to populate time slots
  const populateSlots = () => {
    const timeslot = document.getElementById("time");
    

    timeSlots.forEach((day) => {
      const dateItem = document.createElement("li");
    dateItem.innerHTML = `<b>${day.date}</b>`;
      timeslot.appendChild(dateItem);
  

      day.slots.forEach((slot) => {
        const Item = document.createElement("li");
        Item.textContent = slot;
        Item.style.backgroundColor = "#cce5ff";
        timeslot.appendChild(Item);
      });
    });
  };
  

 

  document.addEventListener("DOMContentLoaded", populateSlots);