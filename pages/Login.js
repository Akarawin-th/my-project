import { useState } from "react";
import { useNavigate } from "react-router-dom";
import Swal from "sweetalert2";
import withReactContent from "sweetalert2-react-content";

function Login() {
  const navigate = useNavigate();
  const MySwal = withReactContent(Swal);

  const [inputs, setInputs] = useState({
    username: "",
    password: "",
  });

  const handleChange = (event) => {
    const { name, value } = event.target;
    setInputs((values) => ({ ...values, [name]: value }));
  };

  const handleSubmit = async (event) => {
    event.preventDefault();

    try {
      const response = await fetch("https://www.melivecode.com/api/login", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          username: inputs.username,
          password: inputs.password,
        }),
      });

      const data = await response.json();
      console.log(data);

      if (data.status === "ok") {
        MySwal.fire({
          title: "สำเร็จ!",
          text: "Login สำเร็จ",
          icon: "success",
          confirmButtonText: "ตกลง",
        }).then(() => {
        console.log("data =", data);
        console.log("token =", data.accessToken);

        localStorage.setItem("token", data.accessToken);
        console.log("saved token =", localStorage.getItem("token"));
          navigate("/home");
        });
      } else {
        MySwal.fire({
          title: "เข้าสู่ระบบไม่สำเร็จ",
          text: data.message,
          icon: "error",
          confirmButtonText: "ลองใหม่",
        });
      }
    } catch (error) {
      console.error("Error:", error);

      MySwal.fire({
        title: "เกิดข้อผิดพลาด",
        text: "เชื่อมต่อระบบไม่ได้",
        icon: "warning",
        confirmButtonText: "โอเค",
      });
    }
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <label>
          Username:
          <input
            type="text"
            name="username"
            value={inputs.username}
            onChange={handleChange}
          />
        </label>

        <br />

        <label>
          Password:
          <input
            type="password"
            name="password"
            value={inputs.password}
            onChange={handleChange}
          />
        </label>

        <br />

        <button type="submit">Login</button>
      </form>
    </div>
  );
}

export default Login;