"use client";

import React from "react";

export default function SignUp() {
    return (
        <div className="bg-gray-100 min-h-screen flex items-center justify-center">
            <div className="bg-white p-8 rounded shadow-md max-w-md w-full mx-auto">
                <h2 className="text-2xl font-semibold mb-4">Inscription</h2>

                <form action="#" method="POST">
                    {/* Nom et Prénom */}
                    <div className="grid grid-cols-2 gap-4">
                        <div>
                            <label htmlFor="firstName" className="block text-sm font-medium text-gray-700">Prénom</label>
                            <input type="text" id="firstName" name="firstName" className="mt-1 p-2 w-full border rounded-md" />
                        </div>
                        <div>
                            <label htmlFor="lastName" className="block text-sm font-medium text-gray-700">Nom</label>
                            <input type="text" id="lastName" name="lastName" className="mt-1 p-2 w-full border rounded-md" />
                        </div>
                    </div>

                    {/* Adresse email */}
                    <div className="mt-4">
                        <label htmlFor="email" className="block text-sm font-medium text-gray-700">Adresse email</label>
                        <input type="email" id="email" name="email" className="mt-1 p-2 w-full border rounded-md" />
                    </div>

                    {/* Mot de passe */}
                    <div className="mt-4">
                        <label htmlFor="password" className="block text-sm font-medium text-gray-700">Mot de passe</label>
                        <input type="password" id="password" name="password" className="mt-1 p-2 w-full border rounded-md" />
                    </div>

                    {/* Bouton d'inscription */}
                    <div className="mt-6">
                        <button type="submit" className="w-full p-3 bg-blue-500 text-white rounded-md hover:bg-blue-600">S'inscrire</button>
                    </div>
                </form>
            </div>
        </div>
    );
}
