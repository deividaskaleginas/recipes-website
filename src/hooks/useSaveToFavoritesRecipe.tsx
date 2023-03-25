import { doc, updateDoc } from "firebase/firestore";
import { useContext } from "react";
import { Collections } from "types/collections";
import { dataBase } from "utils/firebase/firebaseConfig";
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

  const updateUserCollectionFavoritesList = async (
    favoritesIdsList: string[]
  ): Promise<void> => {
    const collectionRef = doc(dataBase, Collections.USERS, loggedUserData.id);

    try {
      await updateDoc(collectionRef, { favorites: favoritesIdsList });
    } catch (error) {
      console.log(error);
    }
  };

  const saveRecipe = (): void => {
    if (!isRecipeInFavorites) {
      const newFavoritesIdsList = [...favoriteRecipesIdsList, id];

      setLoggedUserData({
        ...loggedUserData,
        favorites: newFavoritesIdsList,
      });

      updateUserCollectionFavoritesList(newFavoritesIdsList);
    } else {
      const filteredOutRecipe = favoriteRecipesIdsList.filter(
        (recipeId) => recipeId !== id
      );

      setLoggedUserData({
        ...loggedUserData,
        favorites: filteredOutRecipe,
      });

      updateUserCollectionFavoritesList(filteredOutRecipe);
    }
  };

  return {
    saveRecipe,
    isRecipeInFavorites,
  };
};
