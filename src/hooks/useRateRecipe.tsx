import UserContext from "contexts/userContext/userContext";
import DishesContext from "contexts/dishesContext/dishesContext";
import { useContext } from "react";

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

  const patchRecipeVote = (votesList: number[]): void => {
    fetch(`http://localhost:3001/recipes/${id}`, {
      method: "PATCH",
      headers: {
        "Content-type": "application/json",
      },
      body: JSON.stringify({
        votes: votesList,
      }),
    });
  };

  const patchUserRecipesVotedList = (votesList: string[]): void => {
    fetch(`http://localhost:3001/users/${loggedUserData.id}`, {
      method: "PATCH",
      headers: {
        "Content-type": "application/json",
      },
      body: JSON.stringify({
        votes: votesList,
      }),
    });
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
              date: recipe.date,
              ingridents: recipe.ingridents,
              photo: recipe.photo,
              procedure: recipe.procedure,
              time: recipe.time,
              title: recipe.title,
              votes: newRecipeVotesList,
            }
          : recipe
      );

      setLoggedUserData({ ...loggedUserData, votes: newUserVotesList });
      patchRecipeVote(newRecipeVotesList);
      patchUserRecipesVotedList(newUserVotesList);
      setDishes([...newData]);
    }
  };
  return {
    voteRecipe,
    isRecipeVoted,
  };
};
