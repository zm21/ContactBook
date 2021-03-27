import React, {Fragment} from 'react';
import { v4 as uuidv4 } from 'uuid';
import GroupItem from '../group-item/group-item';

const GroupList = ({groups, removeGroup}) => {
    var GroupsTemplate = []
    if(groups !== null)
    {
        GroupsTemplate = groups.map(item=>
            {
                return (
                <GroupItem removeGroup={removeGroup}
                    key={uuidv4()}
                    id={item.id}
                    name={item.name}
                ></GroupItem>)
            })
    }
    return(
        <Fragment>
            <div className="row">
                {GroupsTemplate} {/*contactItem collection */}
            </div>
        </Fragment>
    )
}


export default GroupList