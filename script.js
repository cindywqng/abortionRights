/* .js files add interaction to your website */
var displayScript = document.getElementById("scriptReturned");
var scriptBtn = document.getElementById("scriptBtn");
var factList = [
  "It is estimated that each year more than 4000 US women are denied an abortion because of facility gestational limits and must carry unwanted pregnancies to term.",
  "One in 20 women in the United States have experienced a pregnancy from rape, sexual coercion, or both during their lifetimes.",
  "An estimated 70 000 adolescent mothers die each year because they have children before they are physically ready for parenthood, the report says.",
  "More than 166,000 US abortion patients traveled to other states to obtain care in 2023. Half as many (81,000) did so in 2020",
  "Some 41% of people obtaining abortions had an income below the federal poverty level (FPL) and 30% had incomes between 100% and 199% of the FPL",
  "Among people obtaining an abortion, more than half were in their 20s: 33% were aged 20–24 and 28% were 25–29",
  "Adolescents made up 10% of people obtaining an abortion; 2% of people obtaining an abortion were 17 or younger.",
  "Among individual abortion policies, states with a licensed physician requirement had a 51% higher total maternal mortality and a 35% higher maternal mortality (i.e. a death during pregnancy or within 42 days of being pregnant)",
  "Restrictions on state Medicaid funding for abortion was associated with a 29% higher total maternal mortality",
  "Households experienced US$ 922 million in loss of income due to long-term disability related to unsafe abortion",
  "Estimates from 2006 show that complications of unsafe abortions cost health systems in developing countries US$ 553 million per year for post-abortion treatments",
  "The proportion of unsafe abortions are significantly higher in countries with highly restrictive abortion laws than in countries with less restrictive laws",

  "68,000 women die of unsafe abortion annually, making it one of the leading causes of maternal mortality (13%)",
  
]

var fact = document.getElementById("fact");
var factBtn = document.getElementById("factBtn");
var count = 0;

// event listeners
if (factBtn){
  factBtn.addEventListener("click", displayFacts);
}
if (scriptBtn) {
  scriptBtn.addEventListener("click", generateScript);
  
}

function displayFacts() {
  fact.innerHTML = factList[count];
  count++;
  if (count == factList.length){
  count = 0;
  }
}

function generateScript(){
  var name = document.getElementById("name").value;
  var location = document.getElementById("location").value;
  
  displayScript.innerHTML = "Hello, my name is " + name + ", and I live in " + location +". I am writing to express my strong support for reproductive rights and access to safe and legal abortion. Abortion is a necessary medical procedure that allows individuals to make personal choices about their bodies and their futures. Denying access to abortion care has severe consequences for individuals' health, well-being, and economic opportunities. I urge you to consider the importance of reproductive rights and vote in favor of legislation that protects access to safe and legal abortion.";
}

