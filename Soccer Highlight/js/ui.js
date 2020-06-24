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
        this.populationTotal = document.querySelector('#tp');

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
            this.populationTotal.innerHTML = "109.2 million(2018)";
    
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
              labels: ["Infected Total(In)[of Tp]", "Recoverd[of In]", "Death[of In]"],
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
                            let tp = 109224559;
                            let diplay='';
                            var allData = data.datasets[tooltipItem.datasetIndex].data;
                            var tooltipLabel = data.labels[tooltipItem.index];
                            var tooltipData = allData[tooltipItem.index];
                            var total = allData[0];
                            // for (var i in allData) {
                            //     total += allData[i];
                            // }
                            if(tooltipLabel =='Infected Total(In)[of Tp]')
                            {
                                var tooltipPercentage = ((tooltipData / tp) * 100).toFixed(3);
                                diplay = tooltipLabel + ': ' +  + tooltipPercentage + '%';
                                console.log(typeof tooltipLabel,tooltipData,tp)
                                
                            }
                            else{
                                var tooltipPercentage = Math.round((tooltipData / total) * 100);
                                diplay = tooltipLabel + ': ' +  + tooltipPercentage + '%';
                            }
                            return diplay;
                        }
                    }},
              title: {
                display: true,
                text: 'Covid-19 Rate of Death and Recovery(Total Population[Tp] = 109.2 million of 2018)'
              }
            }
        });
    }
    });
    
}
 drawLineGraph(data)
{
    let total =[];
    let year = []
    for (const key in data) {
        if (data.hasOwnProperty(key)) {
            year.unshift(key)
            total.unshift( data[key].total_cases);
            
            
        }
    } 
    new Chart(document.getElementById("line-chart"), {
        type: 'line',
        data: {
          labels: year,
          datasets: [{ 
              data: total,
              label: "Ethiopia",
              borderColor: "#ff0000",
              fill: false
            }, 
          ]
        },
        options: {
          title: {
            display: true,
            text: 'Infection Graph on Ethiopia'
          }
        }
      });
}

}



