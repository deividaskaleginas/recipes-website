import { useContext } from "react";
import UserContext from "../contexts/userContext/userContext";

interface UseSaveToFavoritesRecipe {
  saveRecipe: () => void;
  isRecipeInFavorites: boolean;
}

export const useSaveToFavoritesRecipe = (
  id: string
): UseSaveToFavoritesRecipe => {
  const { loggedUserData, setLoggedUserData } = useContext(UserContext);
  const favoriteRecipesIdsList: string[] = loggedUserData.favorites;
  const isRecipeInFavorites: boolean = favoriteRecipesIdsList.includes(id);

  const patchFavoritesRecipes = (favoritesIdsList: string[]): void => {
    fetch(`http://localhost:3001/users/${loggedUserData.uid}`, {
      method: "PATCH",
      headers: {
        "Content-type": "application/json",
      },
      body: JSON.stringify({
        favorites: favoritesIdsList,
      }),
    });
  };

  const saveRecipe = (): void => {
    if (!isRecipeInFavorites) {
      const newFavoritesIdsList = [...favoriteRecipesIdsList, id];

      setLoggedUserData({
        ...loggedUserData,
        favorites: newFavoritesIdsList,
      });

      patchFavoritesRecipes(newFavoritesIdsList);
    } else {
      const filteredOutRecipe = favoriteRecipesIdsList.filter(
        (recipeId) => recipeId !== id
      );

      setLoggedUserData({
        ...loggedUserData,
        favorites: filteredOutRecipe,
      });

      patchFavoritesRecipes(filteredOutRecipe);
    }
  };

  return {
    saveRecipe,
    isRecipeInFavorites,
  };
};
