"use client";

import React, { useState } from "react";
import { Input, Checkbox, Button, Typography } from "@material-tailwind/react";
import Link from "next/link";
import { base_url, setToken, idUser, setIdUser } from "@/utils/UserGestion";

export function SignUp() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [isChecked, setIsChecked] = useState(false);

  const handleSignUp = async (e: any) => {
    e.preventDefault();

    // Vérification que l'utilisateur a accepté les conditions
    if (!isChecked) {
      alert("Please agree to the Terms and Conditions.");
      return;
    }

    try {
      const response = await fetch(base_url + "/auth/signup", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          userName: username,
          password: password,
        }),
      });

      if (response.ok) {
        // Le registre a réussi
        alert("Registration successful!");
        // Réinitialiser les champs de formulaire
        const data = await response.json();

        setIdUser(data.userId);
        localStorage.setItem("token", data.token);
        window.location.href = `https://tradinggame-api.oups.net/player/${data.userId}`;
      } else {
        // Traitement des erreurs si la requête échoue
        const data = await response.json();
        alert(data.message); // Afficher un message d'erreur de l'API
      }
    } catch (error) {
      console.error("Error:", error);
    }
  };

  return (
    <section className="m-8 flex">
      <div className="w-2/5 h-full hidden lg:block">
        <img
          src="https://image.spreadshirtmedia.net/image-server/v1/compositions/T725A2PA6125PT17X31Y42D163676368W20830H24997/views/1,width=550,height=550,appearanceId=2,backgroundColor=000000,noPt=true/stonks-meme-shares-stock-market-gift-teenage-t-shirt.jpg"
          className="h-full w-full object-cover rounded-3xl"
        />
      </div>
      <div className="w-full lg:w-3/5 flex flex-col items-center justify-center">
        <div className="text-center">
          <Typography
            variant="h2"
            className="font-bold mb-4"
            placeholder={null}
            onPointerEnterCapture={null}
            onPointerLeaveCapture={null}
          >
            Join Us Today
          </Typography>
          <Typography
            variant="paragraph"
            color="blue-gray"
            className="text-lg font-normal"
            placeholder={null}
            onPointerEnterCapture={null}
            onPointerLeaveCapture={null}
          >
            Enter your username and password to register.
          </Typography>
        </div>
        <form
          className="mt-8 mb-2 mx-auto w-80 max-w-screen-lg lg:w-1/2"
          onSubmit={handleSignUp}
        >
          <div className="mb-1 flex flex-col gap-6">
            <Typography
              variant="small"
              color="blue-gray"
              className="-mb-3 font-medium"
              placeholder={null}
              onPointerEnterCapture={null}
              onPointerLeaveCapture={null}
            >
              Your Username
            </Typography>
            <Input
              size="lg"
              placeholder="username"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              className=" !border-t-blue-gray-200 focus:!border-t-gray-900"
              onPointerEnterCapture={null}
              onPointerLeaveCapture={null}
              crossOrigin={null}
            />
            <Typography
              variant="small"
              color="blue-gray"
              className="-mb-3 font-medium"
              placeholder={null}
              onPointerEnterCapture={null}
              onPointerLeaveCapture={null}
            >
              Password
            </Typography>
            <Input
              type="password"
              size="lg"
              placeholder="********"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className=" !border-t-blue-gray-200 focus:!border-t-gray-900"
              onPointerEnterCapture={null}
              onPointerLeaveCapture={null}
              crossOrigin={null}
            />
          </div>
          <Checkbox
            checked={isChecked}
            onChange={(e) => setIsChecked(e.target.checked)}
            label={
              <Typography
                variant="small"
                color="gray"
                className="flex items-center justify-start font-medium"
                placeholder={null}
                onPointerEnterCapture={null}
                onPointerLeaveCapture={null}
              >
                I agree the&nbsp;
                <a
                  href="#"
                  className="font-normal text-black transition-colors hover:text-gray-900 underline"
                >
                  Terms and Conditions
                </a>
              </Typography>
            }
            containerProps={{ className: "-ml-2.5" }}
            onPointerEnterCapture={null}
            onPointerLeaveCapture={null}
            crossOrigin={null}
          />
          <Button
            className="mt-6 text-black"
            type="submit"
            fullWidth
            placeholder={null}
            onPointerEnterCapture={null}
            onPointerLeaveCapture={null}
          >
            Register Now
          </Button>
          <div className="flex items-center justify-between gap-2 mt-6">
            <Checkbox
              label={
                <Typography
                  variant="small"
                  color="gray"
                  className="flex items-center justify-start font-medium"
                  placeholder={null}
                  onPointerEnterCapture={null}
                  onPointerLeaveCapture={null}
                >
                  Subscribe me to newsletter
                </Typography>
              }
              containerProps={{ className: "-ml-2.5" }}
              onPointerEnterCapture={null}
              onPointerLeaveCapture={null}
              crossOrigin={null}
            />
          </div>
        </form>
      </div>
    </section>
  );
}

export default SignUp;
