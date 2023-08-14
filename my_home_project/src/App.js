import React, { useState } from 'react';
import GoalList from './components/GoalList/GoalList';
import './App.css';
import NewGoal from './NewGoals/NewGoal';

const App = () => {
  const [courseGoals, setCourseGoals] = useState(
    [{ id: 'cg1', text: 'Finish the Course' },
    { id: 'cg2', text: 'Learn all about the Course Main Topic' },
    { id: 'cg3', text: 'Help other students in the Course Q&A' }
    ]);


  const addNewGoalHandler = (newGoal) => {

    //setCourseGoals(courseGoals.concat(newGoal));  // it dos't garauntee that it will always recieve the latest state
    setCourseGoals((preCourseGoals) => preCourseGoals.concat(newGoal));
  };
  return (
    < div className="course-goals" >
      <h2>Course Goals</h2>
      <NewGoal onAddGoal={addNewGoalHandler} />
      <GoalList goals={courseGoals} />
    </ div>
  );
};

export default App;
