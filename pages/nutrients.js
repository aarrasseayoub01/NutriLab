import Head from "next/head";
import { useState } from "react";

import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import HowItsBuilt from "../components/HowItsBuilt";
import DietInfo from "../components/DietInfo";
import DailyNutrients from "../components/DailyNutrients";

function calculateNutrients(age, sex, height, weight, activity) {
        // Calculate BMR : Harris-Benedict Calculator
        var BMR;
        if (sex === 'male') {
          BMR = 66.5 + (13.75 * weight) + (5.003 * height) - 6.75 * age;
        }
        if (sex === 'female') {
          BMR = 655.1 + (9.563 * weight) + (1.850 * height) - 4.676 * age;
        }

        // Calculate Calories 
        var kCalories;
        if (activity === 'sedentary') {
          kCalories = 1.2 * BMR;
        }
        if (activity === 'light') {
          kCalories = 1.375 * BMR;
        }
        if (activity === 'active') {
          kCalories = 1.55 * BMR;
        }
        if (activity === 'very') {
          kCalories = 1.725 * BMR;
        }
        if (activity === 'super') {
          kCalories = 1.9 * BMR;
        }

        // Calculate Proteins
        var proteins = [(kCalories * 0.1)/4, (kCalories * 0.3)/4];
        // Calculate Fats
        var fats = [(kCalories * 0.2)/9, (kCalories * 0.35)/9];
        // Calculate Carbs
        var carbs = [(kCalories * 0.45)/4, (kCalories * 0.65)/4];
        // Calculate Iron
        var iron;
        if (sex === 'female') {
          if (age <= 50) {
            iron = 0.018;
          } else {
            iron = 0.008;
          }
        } else {
          iron = 0.008;
        }
        // Calculate Fiber
        var fiber = ((kCalories / 1000) * 14);
        // Calculate Sugar
        var sugar;
        if (sex === 'female') {
          sugar = 24;
        } else {
          sugar = 36;
        }
        // Calculate Sugar
        var salt = 6;

        return {kCalories: kCalories, proteins: proteins, fats: fats, carbs: carbs, iron: iron, fiber: fiber, sugar: sugar, salt: salt};
}

function calculateVitamins(age, sex) {
        //Vitamin A
        var vitaminA;
        if (sex === 'female') {
          vitaminA = 0.0007
        } else {
          vitaminA = 0.0009
        }

        //Vitamin C
        var vitaminC;
        if (sex === 'female' && age === 18) {
          vitaminC = 0.065
        } else {
          vitaminC = 0.075
        }

        //Vitamin D
        var vitaminD;
        if (age >= 70) {
          vitaminD = 0.00002
        } else {
          vitaminD = 0.000015
        }

        //Vitamin E
        var vitaminE = 0.015
        
        //Vitamin K
        var vitaminK;
        if (age >= 19) {
          if (sex === 'male') {
            vitaminK = 0.00012
          } else {
            vitaminK = 0.00009
          }
        } else {
          vitaminK = 0.000075
        }

        return {vitaminA: vitaminA, vitaminC: vitaminC, vitaminD: vitaminD, vitaminK: vitaminK}
}

const Nutrients = ({ user }) => {
  const [isInfosApplied, setIsInfosApplied] = useState(false);
  const [nutrients, setNutrients] = useState();
  const [vitamins, setVitamins] = useState();

  const applyInfos = (dietInfos) => {
    const { age, sex, height, weight, activity } = dietInfos;

    //Calculate Nutrients
    setNutrients(calculateNutrients(age, sex, height, weight, activity));

    //Calculate Vitamins
    setVitamins(calculateVitamins(age, sex, height, weight, activity));
    
    
    setIsInfosApplied(true);
  };

  return (
    <div>
      <Head>
        <title>NutriLab - Nutrients</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="https://i.ibb.co/yhHmPr0/orange-slice.png" />
      </Head>

      {/* Nutrients Page  */}
      <Navbar User={user} />

      <div className="grid grid-cols-6 justify-items-center">
        <div className="flex flex-col justify-center items-center | sm:col-start-2 xl:col-start-3 col-span-6 sm:col-span-4 xl:col-span-2 | max-w-xl mx-4">
          <h1 className="font-title text-6xl text-center | w-full my-16">
            Let us know You
          </h1>
          <DietInfo
            handleApply={applyInfos}
            flushInfos={() => setIsInfosApplied(false)}
            isInfosApplied={isInfosApplied}
          />
        </div>
      </div>

      <div className="grid grid-cols-8">
        {isInfosApplied && <DailyNutrients nutrients={nutrients} vitamins={vitamins} />}
      </div>

      <HowItsBuilt />

      <Footer />
    </div>
  );
};

export default Nutrients;
