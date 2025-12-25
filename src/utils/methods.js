export function checkDataEqual(arr1, arr2) {
  if (!arr1 || !arr2) {
    return;
  }

  if (arr1.length !== arr2.length) {
    return false;
  }

  for (let i = 0; i < arr1.length; i++) {
    const obj1 = arr1[i];
    const obj2 = arr2[i];

    for (const key in obj1) {
      if (obj1[key] !== obj2[key]) {
        return false;
      }
    }
  }

  return true;
}

export const checkPage = (arr, id) => {
  const isPage = arr.some((el) => {
    return el.id === id;
  });

  return isPage;
};

export function hasEmpty(obj) {
  for (let key in obj) {
    if (obj.hasOwn(key) && obj[key] === "") {
      return true;
    }
  }
  return false;
}

export function formatSize(str) {
  let size = "";

  if (str.toLowerCase() === "s") {
    size = "Small";
  }
  if (str.toLowerCase() === "m") {
    size = "Medium";
  }
  if (str.toLowerCase() === "l") {
    size = "Large";
  }
  if (str.toLowerCase() === "xl") {
    size = "Extra-Large";
  }

  return size;
}

export const returnPack2Images = (num, color, otherImages) => {
  if (num === "3") {
    return otherImages[0]["pack-3"];
  } else {
    if (num === "2" && color.toLowerCase() === "black/grey") {
      return otherImages[0]["pack-2"]["black/grey"];
      // console.log(otherImages[0]["pack-2"]["black/grey"]);
    } else if (num === "2" && color.toLowerCase() === "black/white") {
      return otherImages[0]["pack-2"]["black/white"];
      // console.log(otherImages[0]["pack-2"]["black/white"]);
    } else if (num === "2" && color.toLowerCase() === "white/grey") {
      return otherImages[0]["pack-2"]["white/grey"];
      // console.log(otherImages[0]["pack-2"]["white/grey"]);
    } else {
      // console.log(otherImages[0]["pack-2"]["white/white"]);
      return otherImages[0]["pack-2"]["white/white"];
      // console.log("none", itemColor);
    }
  }
};

export function hasEmptyKey(obj, key) {
  if (obj.hasOwnProperty(key)) {
    return true;
  }
  return false;
}

export const formatPrice = (item, size, bulk) => {

  //for tomatoes
  if (item.toLowerCase().includes("tomatoes")) {
 
    let price;

    if (size.toLowerCase() === "large") {
      if (bulk.toLowerCase().includes("basket")) {
        price = 50000;
      } else  {
        price = 45000;
      } 
    }

    if (size.toLowerCase() === "medium") {
      if (bulk.toLowerCase().includes("basket")) {
        price = 40000;
      } else  {
        price = 32000;
      } 
    }

    if (size.toLowerCase() === "small") {
      if (bulk.toLowerCase().includes("basket")) {
        price = 25000;
      } else  {
        price = 18000;
      } 
    }




    return price.toLocaleString('en-US');
  }


  //for pepper
  if (item.toLowerCase().includes("peppers")) {
 
    let price;

    if (size.toLowerCase() === "large") {
      if (bulk.toLowerCase().includes("bag")) {
        price = 120000;
      } else if (bulk.toLowerCase().includes("crate"))  {
        price = 45000;
      } 
       else  {
        price = 55000;
      } 
    }


    return price.toLocaleString('en-US');
  }

  //for yams
  if (item.toLowerCase().includes("yam")) {
    let xl = 6500;
    let l = 3500;
    let m = 2000;
    let s = 1200;
    let ss = 800;

    let price;

    if (size.toLowerCase() === "extra large - ₦6500") {
      if (bulk.includes("100")) {
        price = xl * 100;
      } else if (bulk.includes("60")) {
        price = xl * 60;
      } else if (bulk.includes("50")) {
        price = xl * 50;
      } else if (bulk.includes("20")) {
        price = xl * 20;
      } else {
        price = xl * 10;
      }
    }

    if (size.toLowerCase() === "large - ₦3500") {
      if (bulk.includes("100")) {
        price = l * 100;
      } else if (bulk.includes("60")) {
        price = l * 60;
      } else if (bulk.includes("50")) {
        price = l * 50;
      } else if (bulk.includes("20")) {
        price = l * 20;
      } else {
        price = l * 10;
      }
    }

    if (size.toLowerCase().includes("medium")) {
      if (bulk.includes("100")) {
        price = m * 100;
      } else if (bulk.includes("60")) {
        price = m * 60;
      } else if (bulk.includes("50")) {
        price = m * 50;
      } else if (bulk.includes("20")) {
        price = m * 20;
      } else {
        price = m * 10;
      }
    }

    if (size.toLowerCase().includes("small")) {
      if (bulk.includes("100")) {
        price = s * 100;
      } else if (bulk.includes("60")) {
        price = s * 60;
      } else if (bulk.includes("50")) {
        price = s * 50;
      } else if (bulk.includes("20")) {
        price = s * 20;
      } else {
        price = s * 10;
      }
    }

    if (size.toLowerCase().includes("seed")) {
      if (bulk.includes("100")) {
        price = ss * 100;
      } else if (bulk.includes("60")) {
        price = ss * 60;
      } else if (bulk.includes("50")) {
        price = ss * 50;
      } else if (bulk.includes("20")) {
        price = ss * 20;
      } else {
        price = ss * 10;
      }
    }


    return price.toLocaleString('en-US');
  }

  //for plantains
  if (item.toLowerCase().includes("plantains")) {
  
    let price;

    if (size.toLowerCase() === "large") {
      if (bulk.includes("12")) {
        price = 60000
      } else {
        price = 30000
      } 
    }

    if (size.toLowerCase() === "medium") {
      if (bulk.includes("12")) {
        price = 40000;
      } else {
        price = 20000;
      }
    }

    if (size.toLowerCase().includes("small")) {
      if (bulk.includes("12")) {
        price = 20000
      } else  {
        price = 10000
      } 
    }

 

    return price.toLocaleString('en-US');
  }


  //for watermelon
  if (item.toLowerCase().includes("watermelon")) {
  
    let price;

    if (size.toLowerCase() === "large") {
      if (bulk.includes("1 ton")) {
        price = 600000
      }
    }

    if (size.toLowerCase().includes("small")) {
      if (bulk.includes("1 ton")) {
        price = 400000
      } 
    }

 

    return price.toLocaleString('en-US');
  }

  //for soyabeans
  if (item.toLowerCase().includes("soyabeans")) {
  
    let price;

    if (size.toLowerCase() === "large") {
      if (bulk.toLowerCase().includes("bag")) {
        price = 80000;
      }
    }
 

    return price.toLocaleString('en-US');


  }

  //maize
  if (item.toLowerCase().includes("maize")) {
  
    let price;

    if (size.toLowerCase() === "large") {
      if (bulk.toLowerCase().includes("bag")) {
        price = 15000;
      }else{
        price = 3000
      }
    }
 

    return price.toLocaleString('en-US');


  }


};


export const calculateCommission = (amount) => {
  let rate = 0;

  if(amount <= 500000){
    rate = 0.05;
  }
  else if(amount <= 1000000) {
    rate = 0.08;
    
  }
  else if(amount <= 20000000) {
    rate = 0.09;

  }
  else if(amount <= 50000000) {
    rate = 0.10;

  }
  else{
    rate = 0.12;
  }

  const commission = amount * rate;


  return commission;




}


 export const setClass = (status) => {
    if (status.toLowerCase() === "pending") {
      return "pending";
    }
    if (status.toLowerCase() === "completed") {
      return "completed";
    }
    if (status.toLowerCase() === "negotiating") {
      return "negotiating";
    }
    if (status.toLowerCase() === "cancelled") {
      return "cancelled";
    }
    // if(sale.status.toLowerCase() === "negotiating"){
    //     return "negotiating";
    // }
  };