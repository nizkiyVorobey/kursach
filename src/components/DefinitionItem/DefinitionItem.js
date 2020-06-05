import React from 'react';

export const DefinitionItem = ({ defititionItem }) => {
    
    return (
        <>
            {
                <>
                    <div className="collapsible-header">
                        <i className="material-icons">question_answer</i>
                        <p className="">{defititionItem.title}</p>
                        <span className="badge"> {defititionItem.description.length} </span>
                    </div>
                    <div className="collapsible-body">
                        {
                            defititionItem.description.map(descriptionItem => (
                                <div key={descriptionItem.id}>
                                    <p className="">
                                        <span className="description-title title">{defititionItem.title} </span>
                                         - це 
                                        <span className="description-description">{descriptionItem.title}</span>
                                    </p>
                                </div>
                            ))
                        }
                    </div>
                </>
            }
        </>
    );
};
