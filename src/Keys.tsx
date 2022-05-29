import { IItem } from './index';
import { Item } from './item';

export function Keys(props: { initialData: IItem[]; sorting: 'ASC' | 'DESC' }) {
    if (props.sorting === 'ASC') props.initialData.sort((a, b) => a.id - b.id);
    else props.initialData.sort((a, b) => b.id - a.id);

    return (
        <div>
            {props.initialData.map((item) => (
                <div key={item.id}>
                    <Item item={item} />
                </div>
            ))}
        </div>
    );
}
