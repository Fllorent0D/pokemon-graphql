import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { SortOrder } from '../prisma/sort-order.enum';
import { item_categoriesOrderByRelationAggregateInput } from '../item-categories/item-categories-order-by-relation-aggregate.input';
import { item_pocket_namesOrderByRelationAggregateInput } from '../item-pocket-names/item-pocket-names-order-by-relation-aggregate.input';

@InputType()
export class item_pocketsOrderByWithRelationInput {

    @Field(() => SortOrder, {nullable:true})
    id?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    identifier?: keyof typeof SortOrder;

    @Field(() => item_categoriesOrderByRelationAggregateInput, {nullable:true})
    item_categories?: item_categoriesOrderByRelationAggregateInput;

    @Field(() => item_pocket_namesOrderByRelationAggregateInput, {nullable:true})
    item_pocket_names?: item_pocket_namesOrderByRelationAggregateInput;
}
