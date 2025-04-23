//-------------------------------FUNC------------------------------

export const initCalendar = async () => {
    const monthCalendarElement = document.querySelector("[data-month-calendar]");
    const weekCalendarElement = document.querySelector("[data-week-calendar]");


    document.addEventListener("view-change", (event)=> {
        const selectedView = event.detail.view;

        if(selectedView === "Month"){
            monthCalendarElement.style.display = "flex";
            weekCalendarElement.style.display = "none";
        } 
        else if(selectedView === "Week") {
            weekCalendarElement.style.display = "flex";
            monthCalendarElement.style.display = "none";
        }
        else{
            weekCalendarElement.style.display = "none";
            monthCalendarElement.style.display = "none";
        }
    })
}
