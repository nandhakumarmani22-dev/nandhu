function searchFood(){
  let input = document.getElementById("searchInput").value.toLowerCase();
  let cards = document.getElementsByClassName("food-card");
  let found = false;

  for(let i=0;i<cards.length;i++){
    let h3 = cards[i].getElementsByTagName("h3")[0].innerText.toLowerCase();
    let h5 = cards[i].getElementsByTagName("h5")[0].innerText.toLowerCase();

    if(h3.includes(input) || h5.includes(input)){
      cards[i].style.display = "block";
      found = true;
    }else{
      cards[i].style.display = "none";
    }
  }

  document.getElementById("noResult").style.display = found ? "none" : "block";
}

function goFood(id,name,state,price){
  window.location.href =
    "food.html?id="+id+
    "&name="+encodeURIComponent(name)+
    "&state="+encodeURIComponent(state)+
    "&price="+encodeURIComponent(price);
}