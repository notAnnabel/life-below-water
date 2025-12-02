export async function getPollution(){


  const url = "https://life-below-water-six.vercel.app/pollution";
  try {
    const response = await fetch(url);
    if (!response.ok) {
      throw new Error(`Response status: ${response.status}`);
    }

    const result = await response.json(); // json response comes as a string
    return result.pollutionState // return
  } catch (error: any) {
    if (error && error.message)
      console.error(error.message);
  }
}






export async function postPollute(){


  const url = "https://life-below-water-six.vercel.app/pollute";
  try {
    const response = await fetch(url, {
      headers: {
        "Content-type": "application/json"
      },
      method: "POST",
    });



    if (!response.ok) {
      throw new Error(`Response status: ${response.status}`);
    }

    const result = await response.json();
    return result.pollutionState
  } catch (error: any) {
    if (error && error.message)
      console.error(error.message);
  }
}










export async function postClean(){


  const url = "https://life-below-water-six.vercel.app/clean";
  try {
    const response = await fetch(url, {
      headers: {
        "Content-type": "application/json"
      },
      method: "POST",
    });



    if (!response.ok) {
      throw new Error(`Response status: ${response.status}`);
    }

    const result = await response.json();
    return result.pollutionState
  } catch (error: any) {
    if (error && error.message)
      console.error(error.message);
  }
}