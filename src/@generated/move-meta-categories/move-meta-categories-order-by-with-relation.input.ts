import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { SortOrder } from '../prisma/sort-order.enum';
import { move_metaOrderByRelationAggregateInput } from '../move-meta/move-meta-order-by-relation-aggregate.input';
import { move_meta_category_proseOrderByRelationAggregateInput } from '../move-meta-category-prose/move-meta-category-prose-order-by-relation-aggregate.input';

@InputType()
export class move_meta_categoriesOrderByWithRelationInput {

    @Field(() => SortOrder, {nullable:true})
    id?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    identifier?: keyof typeof SortOrder;

    @Field(() => move_metaOrderByRelationAggregateInput, {nullable:true})
    move_meta?: move_metaOrderByRelationAggregateInput;

    @Field(() => move_meta_category_proseOrderByRelationAggregateInput, {nullable:true})
    move_meta_category_prose?: move_meta_category_proseOrderByRelationAggregateInput;
}
