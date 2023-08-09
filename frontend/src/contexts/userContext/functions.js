export const signUp = async (name, email, password, navigate) => {
  try {
    const response = await fetch("http://localhost:5000/api/auth/signup", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        name: name,
        email: email,
        password: password,
      }),
    });

    // console.log(response)

    const json = await response.json();
    console.log(json);

    let obj = { msg: json.resMSG, success: json.success };
    return obj;
  } catch (error) {
    let obj = { msg: "Some Error Occured", success: false };
    return obj;
  }
};

export const login = async (email, password) => {
  const response = await fetch("http://localhost:5000/api/auth/signin", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      email: email,
      password: password,
    }),
  });

  const json = await response.json();

  if (json.success) {
    if (json.verified) {
      localStorage.setItem("token", json.authToken);
      localStorage.setItem("userId", json.userId);
      let obj = {
        success: true,
        verified: true,
        msg: "Logged In Successfully",
      };
      return obj;
    } else {
      let obj = {
        msg: "Plase Verify Your Account First",
        verified: false,
        success: true,
      };
      return obj;
    }
  } else {
    let obj = { msg: json.message, success: false };
    return obj;
  }
};
