import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { SortOrder } from '../prisma/sort-order.enum';
import { version_group_regionsCountOrderByAggregateInput } from './version-group-regions-count-order-by-aggregate.input';
import { version_group_regionsAvgOrderByAggregateInput } from './version-group-regions-avg-order-by-aggregate.input';
import { version_group_regionsMaxOrderByAggregateInput } from './version-group-regions-max-order-by-aggregate.input';
import { version_group_regionsMinOrderByAggregateInput } from './version-group-regions-min-order-by-aggregate.input';
import { version_group_regionsSumOrderByAggregateInput } from './version-group-regions-sum-order-by-aggregate.input';

@InputType()
export class version_group_regionsOrderByWithAggregationInput {

    @Field(() => SortOrder, {nullable:true})
    version_group_id?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    region_id?: keyof typeof SortOrder;

    @Field(() => version_group_regionsCountOrderByAggregateInput, {nullable:true})
    _count?: version_group_regionsCountOrderByAggregateInput;

    @Field(() => version_group_regionsAvgOrderByAggregateInput, {nullable:true})
    _avg?: version_group_regionsAvgOrderByAggregateInput;

    @Field(() => version_group_regionsMaxOrderByAggregateInput, {nullable:true})
    _max?: version_group_regionsMaxOrderByAggregateInput;

    @Field(() => version_group_regionsMinOrderByAggregateInput, {nullable:true})
    _min?: version_group_regionsMinOrderByAggregateInput;

    @Field(() => version_group_regionsSumOrderByAggregateInput, {nullable:true})
    _sum?: version_group_regionsSumOrderByAggregateInput;
}
