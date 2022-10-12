import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { SortOrder } from '../prisma/sort-order.enum';

@InputType()
export class item_fling_effect_proseMaxOrderByAggregateInput {

    @Field(() => SortOrder, {nullable:true})
    item_fling_effect_id?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    local_language_id?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    effect?: keyof typeof SortOrder;
}
