import UserContext from "contexts/userContext/userContext";
import DishesContext from "contexts/dishesContext/dishesContext";
import { useContext } from "react";
import { updateDoc, doc } from "firebase/firestore";
import { dataBase } from "utils/firebase/firebaseConfig";
import { Collections } from "types/collections";

interface UseRateRecipe {
  voteRecipe: () => void;
  isRecipeVoted: boolean;
}

export const useRateRecipe = (id: string, vote: number): UseRateRecipe => {
  const { loggedUserData, setLoggedUserData } = useContext(UserContext);
  const { dishesData, setDishes } = useContext(DishesContext);
  const userVotedRecipesIdsList: string[] = loggedUserData.votes;
  const isRecipeVoted: boolean = userVotedRecipesIdsList.includes(id);
  const votedRecipe = dishesData.find((recipe) => recipe.id === id);
  const recipeVotesList: number[] = votedRecipe!.votes;

  const updateUserVote = async (votesList: number[]): Promise<void> => {
    const collectionRef = doc(dataBase, Collections.RECIPES, id);

    try {
      await updateDoc(collectionRef, { votes: votesList });
    } catch (error) {
      console.log(error);
    }
  };

  const patchUserRecipesVotedList = async (
    votesList: string[]
  ): Promise<void> => {
    const collectionRef = doc(dataBase, Collections.USERS, loggedUserData.id);

    try {
      await updateDoc(collectionRef, { votes: votesList });
    } catch (error) {
      console.log(error);
    }
  };

  const voteRecipe = (): void => {
    if (!isRecipeVoted) {
      const newUserVotesList = [...userVotedRecipesIdsList, id];
      const newRecipeVotesList = [...recipeVotesList, vote];

      const newData = dishesData.map((recipe) =>
        recipe.id === id
          ? {
              id: recipe.id,
              authorData: recipe.authorData,
              comment: recipe.comment,
              portions: recipe.portions,
              date: recipe.date,
              ingridents: recipe.ingridents,
              photo: recipe.photo,
              procedure: recipe.procedure,
              time: recipe.time,
              title: recipe.title,
              votes: newRecipeVotesList,
              category: recipe.category,
            }
          : recipe
      );

      setLoggedUserData({ ...loggedUserData, votes: newUserVotesList });
      updateUserVote(newRecipeVotesList);
      patchUserRecipesVotedList(newUserVotesList);
      setDishes([...newData]);
    }
  };
  return {
    voteRecipe,
    isRecipeVoted,
  };
};
