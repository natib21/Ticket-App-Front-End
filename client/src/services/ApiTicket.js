const API_URL = "http://127.0.0.1:8000/api/ticket";





export async function getAllTickets() {
  try {
    const response = await fetch(API_URL);
    if (!response.ok) throw new Error("Failed to fetch tickets");

    const data = await response.json();
    return data.data; 
  } catch (error) {
    console.error("Error fetching tickets:", error);
    return [];
  }
}


export async function getTicket(ticketId) {
  try {
    const response = await fetch(`${API_URL}/${ticketId}`);
    if (!response.ok) throw new Error("Failed to fetch ticket");

    const data = await response.json();
    return data;
  } catch (error) {
    console.error("Error fetching ticket:", error);
    return null;
  }
}

export async function createTicket(ticketData, token) {
    console.log(ticketData ,token)
    try {
      const response = await fetch(`${API_URL}`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          "Authorization": `Bearer ${token}`,  
        },
        body: JSON.stringify(ticketData),
      });
  
      if (!response.ok){ 
        const errorData = await response.json();
        console.error("Error creating ticket:", errorData);
        throw new Error(errorData.message );}
  
      const data = await response.json();
      return data;
    } catch (error) {
      console.error("Error creating ticket:", error);
    throw error;
    }
  }
  

export async function updateTicket(ticketId, updates, token) {
    try {
      const response = await fetch(`${API_URL}/${ticketId}`, {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
          "Authorization": `Bearer ${token}`, 
        },
        body: JSON.stringify(updates),
      });
  
      if (!response.ok) throw new Error("Failed to update ticket");
  
      const data = await response.json();
      return data;
    } catch (error) {
      console.error("Error updating ticket:", error);
      return null;
    }
  }
  

  export async function deleteTicket(ticketId, token) {
    try {
      const response = await fetch(`${API_URL}/${ticketId}`, {
        method: "DELETE",
        headers: {
          "Authorization": `Bearer ${token}`,  // Include the token here
        },
      });
  
      if (!response.ok) throw new Error("Failed to delete ticket");
  
      return { success: true };
    } catch (error) {
      console.error("Error deleting ticket:", error);
      return { success: false };
    }
  }
  
