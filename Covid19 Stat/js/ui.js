class UI {
    constructor() {
        this.last_updated = document.querySelector('#last-updated');
        this.active_cases = document.querySelector('#active-cases');
        this.death_per1m_population = document.querySelector('#death-per1m-population');
        this.new_cases = document.querySelector('#new-cases');
        this.new_deaths = document.querySelector('#new-deaths');
        this.serious_critical = document.querySelector('#serious-critical');
        this.total_cases = document.querySelector('#total-cases');
        this.total_per1m_population = document.querySelector('#total-per1m-population');
        this.total_deaths = document.querySelector('#total-deaths');
        this.total_recovered = document.querySelector('#total-recovered');
        this.countries_stat = document.querySelector('#data');

    }

    showData(data) {
        this.last_updated.innerHTML = data.data.statistic_taken_at;
        this.active_cases.innerHTML = data.data.world_total.active_cases;
        this.death_per1m_population.innerHTML =data.data.world_total.deaths_per_1m_population ;
        this.new_cases.innerHTML =data.data.world_total.new_cases ;
        this.new_deaths.innerHTML = data.data.world_total.new_deaths;
        this.serious_critical.innerHTML = data.data.world_total.serious_critical;
        this.total_cases.innerHTML = data.data.world_total.total_cases;
        this.total_per1m_population.innerHTML = data.data.world_total.total_cases_per_1m_population;
        this.total_deaths.innerHTML = data.data.world_total.total_deaths;
        this.total_recovered.innerHTML = data.data.world_total.total_recovered;
        $('#myTable').DataTable({  
            "data"     :     data.data.countries_stat,  
            "columns"     :     [  
                 {     "data"     :     "country_name"     },  
                 {     "data"     :     "cases"},  
                 {     "data"     :     "new_cases"},
                 {     "data"     :     "deaths"},
                 {     "data"     :     "new_deaths"},
                 {     "data"     :     "total_recovered"},
                 {     "data"     :     "serious_critical"},
                 {     "data"     :     "total_tests"}
            ]  
       });  
 
        }

}



