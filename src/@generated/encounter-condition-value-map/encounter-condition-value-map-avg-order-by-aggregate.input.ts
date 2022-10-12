import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { SortOrder } from '../prisma/sort-order.enum';

@InputType()
export class encounter_condition_value_mapAvgOrderByAggregateInput {

    @Field(() => SortOrder, {nullable:true})
    encounter_id?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    encounter_condition_value_id?: keyof typeof SortOrder;
}
