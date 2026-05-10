 document.getElementById("display").value = "";
function appendvalue(value) {
    let screen=document.getElementById('display');
    (screen.value) += value; 
}
function clearScreen(value) {
    document.getElementById("display").value = "";
}
function calculateScreen(value) {
    try {
        const result = eval(document.getElementById("display").value);
        document.getElementById("display").value = result;
    } catch (error) {
        document.getElementById("display").value = "error";
        
    }
}
async function trackOrder() {
  const id = document.getElementById("orderId").value;
  const result = document.getElementById("result");

  if (!id) {
    result.innerText = "⚠️ Please enter an Order ID";
    return;
  }

  try {
    const response = await fetch(`http://localhost:5000/track/${id}`);
    const data = await response.json();

    if (data.status) {
      result.innerText = `📦 Status: ${data.status}`;
    } else {
      result.innerText = data.message;
    }

  } catch (error) {
    result.innerText = "❌ Server error";
  }
}