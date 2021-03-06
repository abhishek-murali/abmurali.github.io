//<!-- Date: 08 Oct 2016 THINK SIMPLE | Authors: Shanglei Zhang, Abhishek, Alita, Pruthviraj Narayanaswamy -->	
//use the below data structures while implementing function-fetch labels of respective variables & IDs
var variable1Type = ["Total population within the locality",	
					"Age distribution broken down by sex",	
					"Median age by sex",	
					"Race",	
					"Living arrangement for adults (18 and over)",
					"Place of birth by nativity",
					"Median household income",	
					"Per capita income",	
					"Income-poverty-level ratio",	
					"Poverty level by place of birth",	
					"Educational attainment by place of birth",	
					"Travel time to work",	
					"Means of transportation to work"];
					
var sexByAge = {B01001001 : 	 "Total",
				B01001002 : 	 "Male",
				B01001003 : 	 "0-5",
				B01001004 : 	 "5-9",
				B01001005 : 	 "10-14",
				B01001006 : 	 "15-17",
				B01001007 : 	 "18&19",
				B01001008 : 	 "20",
				B01001009 : 	 "21",
				B01001010 : 	 "22-24",
				B01001011 : 	 "25-29",
				B01001012 : 	 "30-34",
				B01001013 : 	 "35-39",
				B01001014 : 	 "40-44",
				B01001015 : 	 "45-49",
				B01001016 : 	 "50-54",
				B01001017 : 	 "55-59",
				B01001018 : 	 "60&61",
				B01001019 : 	 "62-64",
				B01001020 : 	 "65&66",
				B01001021 : 	 "67-69",
				B01001022 : 	 "70-74",
				B01001023 : 	 "75-79",
				B01001024 : 	 "80-84",
				B01001025 : 	 "85+",
				B01001026 : 	 "Female",
				B01001027 : 	 "0-5",
				B01001028 : 	 "5-9",
				B01001029 : 	 "10-14",
				B01001030 : 	 "15-17",
				B01001031 : 	 "18&19",
				B01001032 : 	 "20",
				B01001033 : 	 "21",
				B01001034 : 	 "22-24",
				B01001035 : 	 "25-29",
				B01001036 : 	 "30-34",
				B01001037 : 	 "35-39",
				B01001038 : 	 "40-44",
				B01001039 : 	 "45-49",
				B01001040 : 	 "50-54",
				B01001041 : 	 "55-59",
				B01001042 : 	 "60&61",
				B01001043 : 	 "62-64",
				B01001044 : 	 "65&66",
				B01001045 : 	 "67-69",
				B01001046 : 	 "70-74",
				B01001047 : 	 "75-79",
				B01001048 : 	 "80-84",
				B01001049 : 	 "85+"};

var medianAgebySex = {	B01002001 : 	 "Median Age -- Total",
						B01002002 : 	 "Median Age -- Male",
						B01002003 : 	 "Median Age -- Female"};
						
var race = {B02001001 : 	 "Total",
			B02001002 : 	 "White Alone",
			B02001003 : 	 "Black or African American Alone",
			B02001004 : 	 "American Indian and Alaska Native Alone",
			B02001005 : 	 "Asian Alone",
			B02001006 : 	 "Native Hawaiian and Other Pacific Islander Alone",
			B02001007 : 	 "Some Other Race Alone",
			B02001008 : 	 "Two or More Races",
			B02001009 : 	 "Two Races Including Some Other Race",
			B02001010 : 	 "Two Races Excluding Some Other Race, and Three or More Races"};

var livingArrangements	= {	B09021001 :	 "Total",
							B09021002 :	 "Lives Alone",
							B09021003 :	 "Householder Living With Spouse",
							B09021004 :	 "Householder Living With Unmarried Partner",
							B09021005 :	 "Child of Householder",
							B09021006 :	 "Other Relatives",
							B09021007 :	 "Other Nonrelatives",
							B09021008 :	 "18-34",
							B09021009 :	 "Lives Alone",
							B09021010 :	 "Householder Living With Spouse",
							B09021011 :	 "Householder Living With Unmarried Partner",
							B09021012 :	 "Child of Householder",
							B09021013 :	 "Other Relatives",
							B09021014 :	 "Other Nonrelatives",
							B09021015 :	 "35-64",
							B09021016 :	 "Lives Alone",
							B09021017 :	 "Householder Living With Spouse",
							B09021018 :	 "Householder Living With Unmarried Partner",
							B09021019 :	 "Child of Householder",
							B09021020 :	 "Other Relatives",
							B09021021 :	 "Other Nonrelatives",
							B09021022 :	 "65 and over",
							B09021023 :	 "Lives Alone",
							B09021024 :	 "Householder Living With Spouse",
							B09021025 :	 "Householder Living With Unmarried Partner",
							B09021026 :	 "Child of Householder",
							B09021027 :	 "Other Relatives",
							B09021028 :	 "Other Nonrelatives"};
								
var placeOfBirth = {	C05002001 :	 "Total",
						C05002002 :	 "Native",
						C05002003 :	 "Born in State of Residence",
						C05002004 :	 "Born in Other State in the United States",
						C05002005 :	 "Born Outside the United States",
						C05002006 :	 "Puerto Rico",
						C05002007 :	 "U.s. Island Areas or Born Abroad of American Parent(S)",
						C05002008 :	 "Foreign Born"};
					
var incomeToPovertyRatio = {B17002001 :	 "Total",
							B17002002 :	 "Under .50",
							B17002003 :	 ".50-.74",
							B17002004 :	 ".75-.99",
							B17002005 :	 "1.00-1.24",
							B17002006 :	 "1.25-1.49",
							B17002007 :	 "1.50-1.74",
							B17002008 :	 "1.75-1.84",
							B17002009 :	 "1.85-1.99",
							B17002010 :	 "2.00-2.99",
							B17002011 :	 "3.00-3.99",
							B17002012 :	 "4.00-4.99",
							B17002013 :	 "5.00 and over"};
							
var povertyByPlace = {	B06012001 :	 "Total",
						B06012002 :	 "Below 100 Percent of the Poverty Level",
						B06012003 :	 "100-149 Percent of the Poverty Level",
						B06012004 :	 "At or Above 150 Percent of the Poverty Level",
						B06012005 :	 "Born in State of Residence",
						B06012006 :	 "Below 100 Percent of the Poverty Level",
						B06012007 :	 "100-149 Percent of the Poverty Level",
						B06012008 :	 "At or Above 150 Percent of the Poverty Level",
						B06012009 :	 "Born in Other State in the United States",
						B06012010 :	 "Below 100 Percent of the Poverty Level",
						B06012011 :	 "100-149 Percent of the Poverty Level",
						B06012012 :	 "At or Above 150 Percent of the Poverty Level",
						B06012013 :	 "Native; Born Outside the United States",
						B06012014 :	 "Below 100 Percent of the Poverty Level",
						B06012015 :	 "100-149 Percent of the Poverty Level",
						B06012016 :	 "At or Above 150 Percent of the Poverty Level",
						B06012017 :	 "Foreign Born",
						B06012018 :	 "Below 100 Percent of the Poverty Level",
						B06012019 :	 "100-149 Percent of the Poverty Level",
						B06012020 :	 "At or Above 150 Percent of the Poverty Level"};
						
var educationalAttainment = {	B06009001 :	 "Total",
								B06009002 :	 "Less than High School Graduate",
								B06009003 :	 "High School Graduate",
								B06009004 :	 "Some College or Associate's Degree",
								B06009005 :	 "Bachelor's Degree",
								B06009006 :	 "Graduate or Professional Degree",
								B06009007 :	 "Born in State of Residence",
								B06009008 :	 "Less than High School Graduate",
								B06009009 :	 "High School Graduate",
								B06009010 :	 "Some College or Associate's Degree",
								B06009011 :	 "Bachelor's Degree",
								B06009012 :	 "Graduate or Professional Degree",
								B06009013 :	 "Born in Other State in the United States",
								B06009014 :	 "Less than High School Graduate",
								B06009015 :	 "High School Graduate",
								B06009016 :	 "Some College or Associate's Degree",
								B06009017 :	 "Bachelor's Degree",
								B06009018 :	 "Graduate or Professional Degree",
								B06009019 :	 "Native; Born Outside the United States",
								B06009020 :	 "Less than High School Graduate"};
								
var travelTimeToWork = {B08303001 :	 "Total",
						B08303002 :	 "0-5",
						B08303003 :	 "5-9",
						B08303004 :	 "10-14",
						B08303005 :	 "15-19",
						B08303006 :	 "20-24",
						B08303007 :	 "25-29",
						B08303008 :	 "30-34",
						B08303009 :	 "35-39",
						B08303010 :	 "40-44",
						B08303011 :	 "45-59",
						B08303012 :	 "60-89",
						B08303013 :	 "90+"};
						
var meansOfTransportation = {	B08301001 :	 "Total",
								B08301002 :	 "Car, Truck, or Van",
								B08301003 :	 "Drove Alone",
								B08301004 :	 "Carpooled",
								B08301005 :	 "In 2-Person Carpool",
								B08301006 :	 "In 3-Person Carpool",
								B08301007 :	 "In 4-Person Carpool",
								B08301008 :	 "In 5-6-Person Carpool",
								B08301009 :	 "In 7-or-More-Person Carpool",
								B08301010 :	 "Public Transportation (Excluding Taxicab)",
								B08301011 :	 "Bus or Trolley Bus",
								B08301012 :	 "Streetcar or Trolley Car",
								B08301013 :	 "Subway or Elevated",
								B08301014 :	 "Railroad",
								B08301015 :	 "Ferryboat",
								B08301016 :	 "Taxicab",
								B08301017 :	 "Motorcycle",
								B08301018 :	 "Bicycle",
								B08301019 :	 "Walked",
								B08301020 :	 "Other Means",
								B08301021 :	 "Worked at Home"};

			
