const API_URL =  import.meta.env.VITE_API_URL;

export async function getAllTickets() {
  try {
    const response = await fetch(`${API_URL}/ticket`);
    if (!response.ok) throw new Error("Failed to fetch tickets");

    const data = await response.json();
    return data.data; 
  } catch (error) {
    console.error("Error fetching tickets:", error);
    throw error
  }
}

export async function getAllTicketsWithCreators(id) {
  console.log(id)
  try {
    const response = await fetch(`${API_URL}/ticket/createdby/${id}`);
    if (!response.ok) throw new Error("Failed to fetch tickets");

    const data = await response.json();
    return data.data; 
  } catch (error) {
    console.error("Error fetching tickets:", error);
  throw error
  }
}


export async function getTicket(ticketId) {
  try {
    const response = await fetch(`${API_URL}/ticket/${ticketId}`);
    if (!response.ok) throw new Error("Failed to fetch ticket");

    const data = await response.json();
    return data;
  } catch (error) {
    console.error("Error fetching ticket:", error);
    return null;
  }
}

export async function createTicket(ticketData, token,id) {
    console.log(ticketData ,token,id)
    try {
      const response = await fetch(`${API_URL}/ticket`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          "Authorization": `Bearer ${token}`,  
        },
        body: JSON.stringify({ ...ticketData, userId: id })
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
  console.log(ticketId,updates,token)
    try {
      const response = await fetch(`${API_URL}/ticket/${ticketId}`, {
        method: "PATCH",
        headers: {
          "Content-Type": "application/json",
          "Authorization": `Bearer ${token}`, 
        },
        body: JSON.stringify(updates),
      });
  
      if (!response.ok){ 
        const errorData = await response.json();
        throw new Error(errorData.message);}
  
      const data = await response.json();
      return data;
    } catch (error) {
      console.error("Error updating ticket:", error);
      throw error;
    }
  }
  

  export async function deleteTicket(ticketId, token) {
    try {
      const response = await fetch(`${API_URL}/ticket/${ticketId}`, {
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
  
