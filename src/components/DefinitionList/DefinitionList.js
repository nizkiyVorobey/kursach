import React from 'react';
import { DefinitionItem } from '../DefinitionItem/DefinitionItem';

export const DefinitionList = ({dataTermsList}) => {
    return (
        <>
        {
          dataTermsList.map(defititionItem => (
            <li>
              <DefinitionItem defititionItem={defititionItem} key={defititionItem.id} />
            </li>
          ))
        }
        </>
    );
};

