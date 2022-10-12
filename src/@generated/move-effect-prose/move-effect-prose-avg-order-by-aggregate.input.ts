import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { SortOrder } from '../prisma/sort-order.enum';

@InputType()
export class move_effect_proseAvgOrderByAggregateInput {

    @Field(() => SortOrder, {nullable:true})
    move_effect_id?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    local_language_id?: keyof typeof SortOrder;
}
