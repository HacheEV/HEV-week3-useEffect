import React from "react";
import CleanCompleted from './cleanTasksDone';

const Footer = ({ tasks, pagination }) => {

  
  return (
    <div className="pagesFooter">
      <div>
      <div>
        <CleanCompleted tasks={tasks}/>
        <br></br>      
        </div>
      </div>
      <div className="pages">
      <div>
        <button className="button" onClick={pagination.prevPage}> Previous page </button>
      </div>
      <div className="seeingPage">
        Seeing page {pagination.page + 1} of {pagination.lastPage}
      </div>
      {!pagination.isLastPage && (
        <div>
          <button className="button" onClick={pagination.nextPage}>Next page </button>
        </div>
      )}
      </div>
    </div>
  );
};

export default Footer;
