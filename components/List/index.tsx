
import { ProductWithSlug } from 'types/Product';

import Item from 'components/List/Item';
import { ListContainer } from 'components/List/List.atoms';

export const FallbackAd = () => <></>;


type Props = {
    items: ProductWithSlug[]
}

const List: React.FC<Props> = ({ items }) => (
    <ListContainer>
       
        {items.map(item => (
            <Item key={item.slug} {...item} />
        ))}
    </ListContainer>
);


export default List;
