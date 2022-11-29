// Code your solution in this file!
//Formula: distance of starting point less distance of Destination point
function distanceFromHqInBlocks(pickup_location_for_a_passenger)
{
    var start= 42;
    var result = pickup_location_for_a_passenger-start;

  console.log("Total One",result);

    return result;
}

// var number_of_blocks= distanceFromHqInBlocks(45)


//function distanceFromHqInFeet (blocks)
{
//Formula: distanceFromHqInBlocks (step 1 above) 

function distanceFromHqInFeet(number_of_blocks)
{

    var number_of_blocks_from_distanceFromHqInBlocks=  distanceFromHqInBlocks(number_of_blocks)
 
    var x= number_of_blocks_from_distanceFromHqInBlocks * 264;
 
     return x;
}
}

var total = distanceFromHqInFeet(45);

console.log("Total Two",total);

console.log(`Total Two is ${total}`);

//   console.log(`${lawyer} razzle-dazzles ${target}!`);
//   console.log( "$lawyer "razzle-dazzles $target ");


function distanceTravelledInFeet (start, destination)
{
//Formula: distanceFromHqInBlocks (step 1 above) * 264(feet)
function distanceTravelledInFeet(start, destination) 
{
    var sub=destination - start;
    var ans= sub* 264;
    
    return ans;
}    
}

var total = distanceTravelledInFeet(34,38);


function calculatesFarePrice(start, destination)
//Formula: >1 && <400    = "Free"
//else if
//         >400 && <2000 = "2 cents"
//         >2000 && 2500 = "Flat Fare"
//         >2500         = "Cannot travel that far"

function calculatesFarePrice(start, destination) 
{

    var sub=destination - start;

    var ans= sub* 264;

    var start_of_charge = ans-400;

    if(ans>=400 && ans<=2000)
    {
        var ans2=start_of_charge*2

        return ans2;

    }
    else if(ans>2000 && ans<=2500)
    {

        var ans2=start_of_charge*5;

        return ans2;

    }
    else if(ans>2500)
    {

        return 'cannot travel that far';
    }
}


var total1=calculatesFarePrice(34,40);

//   console.log(total1);


