const API_URL = 
  window.location.hostname === "localhost" 
  ? "http://127.0.0.1:8000/api/user"  
  : "https://ticketing-system-express-vhi3.onrender.com/api/user";  





export async function getAllUser() {
  try {
    const response = await fetch(API_URL);
    if (!response.ok) throw new Error("Failed to fetch tickets");

    const data = await response.json();
    return data.data; 
  } catch (error) {
    console.error("Error fetching user:", error);
    return [];
  }
}

export async function getUser(ticketId) {
  try {
    const response = await fetch(`${API_URL}/${ticketId}`);
    if (!response.ok) throw new Error("Failed to fetch ticket");

    const data = await response.json();
    return data;
  } catch (error) {
    console.error("Error fetching user:", error);
    return null;
  }
}


export async function createUser(userData, token) {
    console.log(ticketData ,token)
    try {
      const response = await fetch(`${API_URL}`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          "Authorization": `Bearer ${token}`,  
        },
        body: JSON.stringify(userData),
      });
  
      if (!response.ok){ 
        const errorData = await response.json();
        console.error("Error creating user:", errorData);
        throw new Error(errorData.message );}
  
      const data = await response.json();
      return data;
    } catch (error) {
      console.error("Error creating user:", error);
    throw error;
    }
  }
  


export async function updateUser(userId, updates, token) {
    try {
      const response = await fetch(`${API_URL}/${userId}`, {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
          "Authorization": `Bearer ${token}`, 
        },
        body: JSON.stringify(updates),
      });
  
      if (!response.ok) throw new Error("Failed to update user");
  
      const data = await response.json();
      return data;
    } catch (error) {
      console.error("Error updating user:", error);
      return null;
    }
  }
 
  

  export async function deleteUser(userId, token) {
    try {
      const response = await fetch(`${API_URL}/${userId}`, {
        method: "DELETE",
        headers: {
          "Authorization": `Bearer ${token}`,  
        },
      });
  
      if (!response.ok) throw new Error("Failed to delete user");
  
      return { success: true };
    } catch (error) {
      console.error("Error deleting user:", error);
      return { success: false };
    }
  }
  
