import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { SortOrder } from '../prisma/sort-order.enum';

@InputType()
export class item_proseMinOrderByAggregateInput {

    @Field(() => SortOrder, {nullable:true})
    item_id?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    local_language_id?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    short_effect?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    effect?: keyof typeof SortOrder;
}
