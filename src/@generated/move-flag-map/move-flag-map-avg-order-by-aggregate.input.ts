import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { SortOrder } from '../prisma/sort-order.enum';

@InputType()
export class move_flag_mapAvgOrderByAggregateInput {

    @Field(() => SortOrder, {nullable:true})
    move_id?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    move_flag_id?: keyof typeof SortOrder;
}
