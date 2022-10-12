import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { SortOrder } from '../prisma/sort-order.enum';

@InputType()
export class machinesSumOrderByAggregateInput {

    @Field(() => SortOrder, {nullable:true})
    machine_number?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    version_group_id?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    item_id?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    move_id?: keyof typeof SortOrder;
}
