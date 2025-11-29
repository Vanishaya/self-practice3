async function getProducts() {
  try {
    const res = await fetch("http://localhost:5000/products");
    const data = await res.json();
    console.log("GET All Products:", data);
  } catch (err) {
    console.error("Error:", err);
  }
}


async function addProduct() {
  try {
    const res = await fetch("http://localhost:5000/products", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        name: "Webcam",
        price: 900
      })
    });

    const data = await res.json();
    console.log("POST Added:", data);
  } catch (err) {
    console.error("Error:", err);
  }
}


async function getProductById(id) {
  try {
    const res = await fetch(`http://localhost:5000/products/${id}`);

    if (!res.ok) {
      throw new Error("Product not found");
    }

    const data = await res.json();
    console.log("GET by ID:", data);
  } catch (err) {
    console.error("Error:", err);
  }
}


async function updateProduct(id) {
  try {
    const res = await fetch(`http://localhost:5000/products/${id}`, {
      method: "PUT",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        name: "Gaming Keyboard",
        price: 1500
      })
    });

    const data = await res.json();
    console.log("PUT Updated:", data);
  } catch (err) {
    console.error("Error:", err);
  }
}


async function patchProduct(id) {
  try {
    const res = await fetch(`http://localhost:5000/products/${id}`, {
      method: "PATCH",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        price: 499
      })
    });

    const data = await res.json();
    console.log("PATCH Updated:", data);
  } catch (err) {
    console.error("Error:", err);
  }
}


async function deleteProduct(id) {
  try {
    const res = await fetch(`http://localhost:5000/products/${id}`, {
      method: "DELETE"
    });

    if (res.status === 200) {
      console.log("Deleted product with ID:", id);
    }
  } catch (err) {
    console.error("Error:", err);
  }
}
