import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { SortOrder } from '../prisma/sort-order.enum';
import { item_pocketsOrderByWithRelationInput } from '../item-pockets/item-pockets-order-by-with-relation.input';
import { item_category_proseOrderByRelationAggregateInput } from '../item-category-prose/item-category-prose-order-by-relation-aggregate.input';
import { itemsOrderByRelationAggregateInput } from '../items/items-order-by-relation-aggregate.input';

@InputType()
export class item_categoriesOrderByWithRelationInput {

    @Field(() => SortOrder, {nullable:true})
    id?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    pocket_id?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    identifier?: keyof typeof SortOrder;

    @Field(() => item_pocketsOrderByWithRelationInput, {nullable:true})
    item_pockets?: item_pocketsOrderByWithRelationInput;

    @Field(() => item_category_proseOrderByRelationAggregateInput, {nullable:true})
    item_category_prose?: item_category_proseOrderByRelationAggregateInput;

    @Field(() => itemsOrderByRelationAggregateInput, {nullable:true})
    items?: itemsOrderByRelationAggregateInput;
}
