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
        // Ethiopia
        this.enew_cases = document.querySelector('#enew-cases');
        this.enew_deaths = document.querySelector('#enew-deaths');
        this.eserious_critical = document.querySelector('#eserious-critical');
        this.etotal_cases = document.querySelector('#etotal-cases');
        this.etotal_per1m_population = document.querySelector('#etotal-per1m-population');
        this.etotal_deaths = document.querySelector('#etotal-deaths');
        this.etotal_recovered = document.querySelector('#etotal-recovered');

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
        data.data.countries_stat.forEach(element => {
            if(element.country_name === 'Ethiopia')
        {
            this.enew_cases.innerHTML = element.new_cases ;
            this.enew_deaths.innerHTML = element.new_deaths;
            this.eserious_critical.innerHTML = element.serious_critical;
            this.etotal_cases.innerHTML = element.cases;
            this.etotal_per1m_population.innerHTML = element.total_cases_per_1m_population;
            this.etotal_deaths.innerHTML = element.deaths;
            this.etotal_recovered.innerHTML = element.total_recovered;
    
        }
        });
        


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
// show chart 
 showChart(data1)
{
    let tc;
    let td;
    let tr;
    data1.data.countries_stat.forEach(element => {
        if(element.country_name === 'Ethiopia')
    {
        tc = element.cases ;
        td = element.deaths ;
        tr = element.total_recovered ;
        tc=tc.replace(/\,/g,''); // 1125, but a string, so convert it to number
        tc=parseInt(tc,10);
        td=td.replace(/\,/g,''); // 1125, but a string, so convert it to number
        td=parseInt(td,10);
        tr=tr.replace(/\,/g,''); // 1125, but a string, so convert it to number
        tr=parseInt(tr,10);

        new Chart(document.getElementById("pie-chart"), {
            type: 'pie',
            data: {
              labels: ["Total", "Recoverd", "Death"],
              datasets: [{
                label: "Population (millions)",
                backgroundColor: ["#0000ff", "#00ff00","#ff0000"],
                data: [tc,tr,td]
              }]
            },
            options: {
                tooltips: {
                    callbacks: {
                        label: function(tooltipItem, data) {
                            var allData = data.datasets[tooltipItem.datasetIndex].data;
                            var tooltipLabel = data.labels[tooltipItem.index];
                            var tooltipData = allData[tooltipItem.index];
                            var total = allData[0];
                            // for (var i in allData) {
                            //     total += allData[i];
                            // }
                            var tooltipPercentage = Math.round((tooltipData / total) * 100);
                            return tooltipLabel + ': ' +  + tooltipPercentage + '%';
                        }
                    }},
              title: {
                display: true,
                text: 'Predicted world population (millions) in 2050'
              }
            }
        });
    }
    });
    
}

}



