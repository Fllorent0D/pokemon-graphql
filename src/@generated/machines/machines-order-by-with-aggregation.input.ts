import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { SortOrder } from '../prisma/sort-order.enum';
import { machinesCountOrderByAggregateInput } from './machines-count-order-by-aggregate.input';
import { machinesAvgOrderByAggregateInput } from './machines-avg-order-by-aggregate.input';
import { machinesMaxOrderByAggregateInput } from './machines-max-order-by-aggregate.input';
import { machinesMinOrderByAggregateInput } from './machines-min-order-by-aggregate.input';
import { machinesSumOrderByAggregateInput } from './machines-sum-order-by-aggregate.input';

@InputType()
export class machinesOrderByWithAggregationInput {

    @Field(() => SortOrder, {nullable:true})
    machine_number?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    version_group_id?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    item_id?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    move_id?: keyof typeof SortOrder;

    @Field(() => machinesCountOrderByAggregateInput, {nullable:true})
    _count?: machinesCountOrderByAggregateInput;

    @Field(() => machinesAvgOrderByAggregateInput, {nullable:true})
    _avg?: machinesAvgOrderByAggregateInput;

    @Field(() => machinesMaxOrderByAggregateInput, {nullable:true})
    _max?: machinesMaxOrderByAggregateInput;

    @Field(() => machinesMinOrderByAggregateInput, {nullable:true})
    _min?: machinesMinOrderByAggregateInput;

    @Field(() => machinesSumOrderByAggregateInput, {nullable:true})
    _sum?: machinesSumOrderByAggregateInput;
}
