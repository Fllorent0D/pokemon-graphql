import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { SortOrder } from '../prisma/sort-order.enum';

@InputType()
export class contest_combosCountOrderByAggregateInput {

    @Field(() => SortOrder, {nullable:true})
    first_move_id?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    second_move_id?: keyof typeof SortOrder;
}
