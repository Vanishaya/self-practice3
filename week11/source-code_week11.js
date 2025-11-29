async function loadUsers() {
  const url = "https://jsonplaceholder.typicode.com/users";

  try {
    const res = await fetch(url);
    if (!res.ok) throw new Error("Failed to fetch users");

    const users = await res.json();
    const list = document.getElementById("userList");
    list.innerHTML = users
      .map(user => `<li>${user.name}</li>`)
      .join("");

  } catch (err) {
    console.error(err);
  }
}


async function createPost(title, body) {
  const url = "https://jsonplaceholder.typicode.com/posts";

  try {
    const res = await fetch(url, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ title, body, userId: 1 })
    });

    const data = await res.json();
    console.log("สร้างโพสต์สำเร็จ:", data);

  } catch (err) {
    console.error(err);
  }
}


async function updateTitle() {
  const url = "https://jsonplaceholder.typicode.com/posts/1";

  try {
    const res = await fetch(url, {
      method: "PATCH",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ title: "Updated Title" })
    });

    const data = await res.json();
    console.log("อัปเดตโพสต์:", data);

  } catch (err) {
    console.error(err);
  }
}


async function deletePost(id) {
  const url = `https://jsonplaceholder.typicode.com/posts/${id}`;

  try {
    const res = await fetch(url, { method: "DELETE" });

    if (res.status === 200) {
      console.log(`ลบโพสต์ id=${id} สำเร็จ`);
    } else {
      console.log("ลบไม่สำเร็จ");
    }

  } catch (err) {
    console.error(err);
  }
}


async function loadCompletedTodos() {
  const url = "https://jsonplaceholder.typicode.com/todos?completed=true";

  try {
    const res = await fetch(url);
    const todos = await res.json();

    console.log("Completed tasks:", todos.length);

  } catch (err) {
    console.error(err);
  }
}


async function uploadImage(file) {
  const url = "https://api.example.com/upload";  

  const formData = new FormData();
  formData.append("image", file);

  try {
    const res = await fetch(url, {
      method: "POST",
      body: formData
    });

    const result = await res.json();
    console.log("Upload success:", result);

  } catch (err) {
    console.error("Upload error:", err);
  }
}

function handleUpload() {
  const file = document.getElementById("fileInput").files[0];
  if (!file) return alert("เลือกไฟล์ก่อน!");

  uploadImage(file);
}
