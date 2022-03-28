var documenterSearchIndex = {"docs":
[{"location":"model-outputs/","page":"Output files","title":"Output files","text":"CurrentModule = LEAPMacro","category":"page"},{"location":"model-outputs/#model-outputs","page":"Output files","title":"Output files","text":"","category":"section"},{"location":"installation/","page":"Installation","title":"Installation","text":"CurrentModule = LEAPMacro","category":"page"},{"location":"installation/#installation","page":"Installation","title":"Installing LEAP-Macro","text":"","category":"section"},{"location":"installation/","page":"Installation","title":"Installation","text":"LEAP-Macro is installed via GitHub. You must first have a working Julia installation on your computer. The LEAP-Macro team has verified LEAP-Macro's compatibility with Julia 1.6; other versions of Julia may not work correctly.","category":"page"},{"location":"installation/","page":"Installation","title":"Installation","text":"Once Julia is set up, start a Julia session and add the LEAP-Macro package (named LEAPMacro):","category":"page"},{"location":"installation/","page":"Installation","title":"Installation","text":"julia> ]\n\npkg> add https://github.com/sei-international/LEAPMacro","category":"page"},{"location":"installation/","page":"Installation","title":"Installation","text":"This will install the latest LEAP-Macro code from GitHub. To update to the newest code after LEAP-Macro is installed:","category":"page"},{"location":"installation/","page":"Installation","title":"Installation","text":"julia> ]\n\npkg> update LEAPMacro","category":"page"},{"location":"limitations/","page":"Limitations of the model","title":"Limitations of the model","text":"CurrentModule = LEAPMacro","category":"page"},{"location":"limitations/#limitations","page":"Limitations of the model","title":"Limitations of the model","text":"","category":"section"},{"location":"limitations/","page":"Limitations of the model","title":"Limitations of the model","text":"The LEAP-Macro plugin is designed so that a detailed energy systems model, built in LEAP, can be paired with a moderately complex economic model. It is offered as an improvement over simply entering economic drivers by hand. It is most useful in LEAP models that track energy investment costs. In that case, the investment expenditure (in LEAP) helps drive economic activity (in Macro), which then drives energy consumption (in LEAP). The LEAP-Macro plugin will iteratively solve LEAP and Macro until the results converge to within a user-specified tolerance.","category":"page"},{"location":"limitations/","page":"Limitations of the model","title":"Limitations of the model","text":"The goal of making a reasonably flexible model entails some trade-offs. Some of the most important missing elements are listed below.","category":"page"},{"location":"limitations/#Changes-in-the-terms-of-trade","page":"Limitations of the model","title":"Changes in the terms of trade","text":"","category":"section"},{"location":"limitations/","page":"Limitations of the model","title":"Limitations of the model","text":"The Macro model applies a uniform inflation rate to global prices. For traded goods, whether imports or exports, the model economy is assumed to be a price taker. For domestic goods, prices are determined as a markup on the costs of labor and of intermediate goods.","category":"page"},{"location":"limitations/","page":"Limitations of the model","title":"Limitations of the model","text":"This means that international prices can interact with purely domestic prices through the cost of intermediates. Moreover, the terms of trade can change to the extent that the basket of imported or exported goods changes. However, the model does not allow for changing relative prices for traded goods.","category":"page"},{"location":"limitations/#Current-account-deficits","page":"Limitations of the model","title":"Current account deficits","text":"","category":"section"},{"location":"limitations/","page":"Limitations of the model","title":"Limitations of the model","text":"Most developing countries face chronic challenges with their current account balances and accumulated international debt. A manageable debt obligation can become unmanageable if it is denominated in an international currency and the exchange rate changes, or if the terms of trade turn against the country's exports. If international investors perceive the country as particularly risky, they may withdraw capital or choose to invest elsewhere.","category":"page"},{"location":"limitations/","page":"Limitations of the model","title":"Limitations of the model","text":"While this is an important issue, policies to respond to rising debt or adverse current accounts movements differ between countries, and diverse actors influence the path the economy can take: the executive branch; the central  bank; domestic firms, financial institutions, and individual households; international portfolio investors; and foreign firms.","category":"page"},{"location":"limitations/","page":"Limitations of the model","title":"Limitations of the model","text":"Because of the complexities, the Macro model does not try to estimate international debt and international investor response to debt and current account deficits. However, it does estimate and report the current account balance (for the non-energy economy) in a file called collected_variables_#.csv, where # is the model run number. The reported figures can be used to check the consistency of the scenario. If the balance is persistently negative and, in particular, if the deficit grows faster than GDP, that may contradict the implicit model assumption that international debt and current account deficits are not a problem.","category":"page"},{"location":"limitations/#Sector-specific-employment","page":"Limitations of the model","title":"Sector-specific employment","text":"","category":"section"},{"location":"limitations/","page":"Limitations of the model","title":"Limitations of the model","text":"The Macro model calculates labor productivity and employment indices. They apply at the level of the whole economy, not for individual sectors. That choice was dictated by the highly uneven availability of employment data. However, labor productivity varies substantially between sectors, and as a result the capacity of sectors to absorb labor also varies considerably. If the Macro model indicates specific sectors are declining or expanding, then a more detailed employment analysis might be called for.","category":"page"},{"location":"limitations/#Non-energy-strategic-investment","page":"Limitations of the model","title":"Non-energy strategic investment","text":"","category":"section"},{"location":"limitations/","page":"Limitations of the model","title":"Limitations of the model","text":"The LEAP-Macro model is designed to explore the macroeconomic implications of energy investment. A LEAP model will typically simulate different energy sector strategies, so LEAP-Macro captures the impact of strategic investment in the energy sector. In other sectors, investment is endogenous, based on profitability and capacity utilization. For that reason, the Macro model cannot represent strategic investment in non-energy sectors.","category":"page"},{"location":"config/","page":"Configuration file","title":"Configuration file","text":"CurrentModule = LEAPMacro","category":"page"},{"location":"config/#config","page":"Configuration file","title":"Configuration file","text":"","category":"section"},{"location":"prep-params/","page":"Preparing exogenous parameters","title":"Preparing exogenous parameters","text":"CurrentModule = LEAPMacro","category":"page"},{"location":"prep-params/#prep-params","page":"Preparing exogenous parameters","title":"Preparing exogenous parameters","text":"","category":"section"},{"location":"prep-sut/","page":"Preparing supply-use tables","title":"Preparing supply-use tables","text":"CurrentModule = LEAPMacro","category":"page"},{"location":"prep-sut/#prep-sut","page":"Preparing supply-use tables","title":"Preparing supply-use tables","text":"","category":"section"},{"location":"BLANK/","page":"BLANK","title":"BLANK","text":"CurrentModule = LEAPMacro","category":"page"},{"location":"BLANK/#blank","page":"BLANK","title":"BLANK","text":"","category":"section"},{"location":"lgp/","page":"Linear goal program","title":"Linear goal program","text":"CurrentModule = LEAPMacro","category":"page"},{"location":"lgp/#lgp","page":"Linear goal program","title":"Linear goal program","text":"","category":"section"},{"location":"troubleshoot/","page":"Troubleshooting","title":"Troubleshooting","text":"CurrentModule = LEAPMacro","category":"page"},{"location":"troubleshoot/#troubleshoot","page":"Troubleshooting","title":"Troubleshooting","text":"","category":"section"},{"location":"calib/","page":"Calibrating the model","title":"Calibrating the model","text":"CurrentModule = LEAPMacro","category":"page"},{"location":"calib/#calib","page":"Calibrating the model","title":"Calibrating the model","text":"","category":"section"},{"location":"prep-config/","page":"Preparing the configuration file","title":"Preparing the configuration file","text":"CurrentModule = LEAPMacro","category":"page"},{"location":"prep-config/#prep-config","page":"Preparing the configuration file","title":"Preparing the configuration file","text":"","category":"section"},{"location":"demand-led-growth/","page":"About demand-led growth","title":"About demand-led growth","text":"CurrentModule = LEAPMacro","category":"page"},{"location":"demand-led-growth/#demand-led-growth","page":"About demand-led growth","title":"Demand-led growth","text":"","category":"section"},{"location":"demand-led-growth/","page":"About demand-led growth","title":"About demand-led growth","text":"Resources on demand-led growth[1]","category":"page"},{"location":"demand-led-growth/","page":"About demand-led growth","title":"About demand-led growth","text":"[1]: https://www.e-elgar.com/shop/usd/the-economics-of-demand-led-growth-9781840641776.html The Economics of Demand-Led Growth by Mark Setterfield","category":"page"},{"location":"leap-macro-link/","page":"LEAP-Macro link","title":"LEAP-Macro link","text":"CurrentModule = LEAPMacro","category":"page"},{"location":"leap-macro-link/#leap-macro-link","page":"LEAP-Macro link","title":"LEAP-Macro link","text":"","category":"section"},{"location":"leap-macro-link/","page":"LEAP-Macro link","title":"LEAP-Macro link","text":"The link between the LEAP energy model and the Macro economic model is shown in the diagram below. Nearly all of the development of each model can be done separately. That allows energy experts to work on LEAP and economists to work on Macro, collaborating only where the models interact. The combined model is solved iteratively.","category":"page"},{"location":"leap-macro-link/","page":"LEAP-Macro link","title":"LEAP-Macro link","text":"The Macro model is run first, generating economic activity levels as inputs to LEAP. LEAP is then run to determine needed investment in energy supply, demand for primary energy sources, and trade in energy carriers. LEAP’s investment demand is an input to the Macro model. The Macro model is run again, and the iteration proceeds until the maximum percent difference in economic activity levels in subsequent runs falls below a user-specified tolerance. In practice, only a few iterations (2 to 3) should be sufficient.","category":"page"},{"location":"leap-macro-link/","page":"LEAP-Macro link","title":"LEAP-Macro link","text":"(Image: The diagram)","category":"page"},{"location":"quickstart/","page":"Quickstart","title":"Quickstart","text":"CurrentModule = LEAPMacro","category":"page"},{"location":"quickstart/#quick-start","page":"Quickstart","title":"Quick start","text":"","category":"section"},{"location":"quickstart/","page":"Quickstart","title":"Quickstart","text":"This documentation explains how to quickly run Macro without linking it to LEAP. To learn how to run Macro with LEAP, see the LEAP exercise for the LEAP-Macro plugin available to registered users on the LEAP website.","category":"page"},{"location":"quickstart/","page":"Quickstart","title":"Quickstart","text":"The quickest way to get started with Macro is by running the demonstration model that is part of the GitHub distribution.","category":"page"},{"location":"quickstart/","page":"Quickstart","title":"Quickstart","text":"<p>First, <a href=\"https://downgit.github.io/#/home?url=https://github.com/sei-international/LEAPMacro/tree/main/test&rootDirectory=false\" target=\"_blank\">Download the demonstration files</a> as a zip file from GitHub and save it to the folder of your choice. (Clicking on the link will open a new window, where the zip file can be downloaded.)</p>","category":"page"},{"location":"quickstart/","page":"Quickstart","title":"Quickstart","text":"Next:","category":"page"},{"location":"quickstart/","page":"Quickstart","title":"Quickstart","text":"Unzip the test.zip file\nGo the folder where you unzipped it (it will have a file in it named LEAPMacro_params.yml)\nStart Julia and run the demo model:","category":"page"},{"location":"quickstart/","page":"Quickstart","title":"Quickstart","text":"julia> import LEAPMacro\n\njulia> LEAPMacro.run()\nMacro model run (0)...completed\n0","category":"page"},{"location":"quickstart/","page":"Quickstart","title":"Quickstart","text":"If you see Macro model run (0)...completed followed by 0 then the model ran without any errors.","category":"page"},{"location":"quickstart/","page":"Quickstart","title":"Quickstart","text":"All of the interesting output is in files. You should see a new file called LEAPMacro_log.txt and a new outputs folder.","category":"page"},{"location":"quickstart/#The-log-file","page":"Quickstart","title":"The log file","text":"","category":"section"},{"location":"quickstart/","page":"Quickstart","title":"Quickstart","text":"The log file should show something like:","category":"page"},{"location":"quickstart/","page":"Quickstart","title":"Quickstart","text":"[ Info: 2022-03-25T11:55:23.846\n[ Info: Configuration file: 'LEAPMacro_params.yml'\n[ Info: Macro model run (0)...\n[ Info: Loading data...\n[ Info: Preparing model...\n[ Info: Calibrating: FEASIBLE_POINT\n[ Info: Running from 2010 to 2040:\n[ Info: Simulating for 2010: FEASIBLE_POINT\n[ Info: Simulating for 2011: FEASIBLE_POINT\n[ Info: Simulating for 2012: FEASIBLE_POINT\n[ Info: Simulating for 2013: FEASIBLE_POINT\n[ Info: Simulating for 2014: FEASIBLE_POINT\n[ Info: Simulating for 2015: FEASIBLE_POINT\n...\n[ Info: Simulating for 2035: FEASIBLE_POINT\n[ Info: Simulating for 2036: FEASIBLE_POINT\n[ Info: Simulating for 2037: FEASIBLE_POINT\n[ Info: Simulating for 2038: FEASIBLE_POINT\n[ Info: Simulating for 2039: FEASIBLE_POINT\n[ Info: Simulating for 2040: FEASIBLE_POINT\n[ Info: 2022-03-25T11:55:57.797","category":"page"},{"location":"quickstart/","page":"Quickstart","title":"Quickstart","text":"The time stamps at the start and end show that the model ran in 34 seconds. The repeated FEASIBLE_POINT for each year means that the model in each year yielded a feasible solution to the linear program.","category":"page"},{"location":"quickstart/#The-outputs-folder","page":"Quickstart","title":"The outputs folder","text":"","category":"section"},{"location":"quickstart/","page":"Quickstart","title":"Quickstart","text":"The outputs folder should have a subfolder called DEFAULT. Inside that folder are three other folders, with CSV files containing diagnostic information and the results of the model run:","category":"page"},{"location":"quickstart/","page":"Quickstart","title":"Quickstart","text":"otuputs \n└───DEFAULT\n    └───calibration\n        │   basic_prices_0.csv\n        │   capacity_utilization_0.csv\n        │   ...\n        │   wage_share_0.csv\n    └───diagnostics\n        │   demand_coefficients.csv\n        │   domestic_production.csv\n        │   ...\n        │   wages.csv\n    └───results\n        │   basic_prices_0.csv\n        │   capacity_utilization_0.csv\n        │   ...\n        │   sector_output_0.csv","category":"page"},{"location":"quickstart/","page":"Quickstart","title":"Quickstart","text":"There is a great deal of information in the files. The configuration file and the output files are described in greater detail elsewhere in this documentation.","category":"page"},{"location":"link-to-leap/","page":"Linking to LEAP","title":"Linking to LEAP","text":"CurrentModule = LEAPMacro","category":"page"},{"location":"link-to-leap/#link-to-leap","page":"Linking to LEAP","title":"Linking to LEAP","text":"","category":"section"},{"location":"dynamics/","page":"Dynamics","title":"Dynamics","text":"CurrentModule = LEAPMacro","category":"page"},{"location":"dynamics/#dynamics","page":"Dynamics","title":"Dynamics","text":"","category":"section"},{"location":"","page":"Introduction","title":"Introduction","text":"CurrentModule = LEAPMacro","category":"page"},{"location":"#introduction","page":"Introduction","title":"LEAP-Macro","text":"","category":"section"},{"location":"","page":"Introduction","title":"Introduction","text":"This documentation explains how to use LEAP-Macro to build a linked energy-economic model.","category":"page"},{"location":"","page":"Introduction","title":"Introduction","text":"The energy system in a LEAP-Macro application is represented in LEAP, the Low Emissions Analysis Platform. The economy is represented in a macroeconomic model called Macro. This documentation will explain how to build a Macro model and link LEAP to Macro, but not how to build the LEAP model.","category":"page"},{"location":"","page":"Introduction","title":"Introduction","text":"To learn how to build LEAP models, go to the LEAP website to access documentation and other learning materials.","category":"page"},{"location":"","page":"Introduction","title":"Introduction","text":"LEAP-Macro is a demand-led growth model for an open, multi-sector economy. It takes supply-use tables[1] or social accounting matrices[2] as inputs. It is a flexible model that can be adapted to specific country circumstances.","category":"page"},{"location":"","page":"Introduction","title":"Introduction","text":"LEAP-Macro was developed with two purposes in mind:","category":"page"},{"location":"","page":"Introduction","title":"Introduction","text":"To provide economic drivers to LEAP that are grounded in the structure of the economy;\nTo estimate the impact of different energy investment scenarios on output and employment outside the energy sector.","category":"page"},{"location":"","page":"Introduction","title":"Introduction","text":"What is more, it is intended to be used in a wide range of contexts. To meet these goals, some compromises had to be made while developing the model. These are summarized in Limitations of the model.","category":"page"},{"location":"","page":"Introduction","title":"Introduction","text":"To simplify model development and maintenance, LEAP-Macro assumes that energy is a crucial input into the rest of the economy, but is not a major source of demand for the products and services supplied by the rest of the economy. That is true for most countries, but is not true for major energy exporters. If energy production dominates GDP or employment, then a fully integrated energy-economy model is more appropriate.","category":"page"},{"location":"","page":"Introduction","title":"Introduction","text":"[1]: https://unstats.un.org/unsd/nationalaccount/docs/SUT_IOT_HB_Final_Cover.pdf Handbook on Supply and Use Tables and Input-Output Tables with Extensions and Applications from UN Statistics","category":"page"},{"location":"","page":"Introduction","title":"Introduction","text":"[2]: https://www.ifpri.org/publication/social-accounting-matrices-and-multiplier-analysis Social accounting matrices and multiplier analysis: An introduction with exercises from the International Food Policy Research Institute","category":"page"}]
}
