import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { SortOrder } from '../prisma/sort-order.enum';

@InputType()
export class super_contest_combosSumOrderByAggregateInput {

    @Field(() => SortOrder, {nullable:true})
    first_move_id?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    second_move_id?: keyof typeof SortOrder;
}
