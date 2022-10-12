import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { SortOrder } from '../prisma/sort-order.enum';
import { version_groupsCountOrderByAggregateInput } from './version-groups-count-order-by-aggregate.input';
import { version_groupsAvgOrderByAggregateInput } from './version-groups-avg-order-by-aggregate.input';
import { version_groupsMaxOrderByAggregateInput } from './version-groups-max-order-by-aggregate.input';
import { version_groupsMinOrderByAggregateInput } from './version-groups-min-order-by-aggregate.input';
import { version_groupsSumOrderByAggregateInput } from './version-groups-sum-order-by-aggregate.input';

@InputType()
export class version_groupsOrderByWithAggregationInput {

    @Field(() => SortOrder, {nullable:true})
    id?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    generation_id?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    pokedex_id?: keyof typeof SortOrder;

    @Field(() => version_groupsCountOrderByAggregateInput, {nullable:true})
    _count?: version_groupsCountOrderByAggregateInput;

    @Field(() => version_groupsAvgOrderByAggregateInput, {nullable:true})
    _avg?: version_groupsAvgOrderByAggregateInput;

    @Field(() => version_groupsMaxOrderByAggregateInput, {nullable:true})
    _max?: version_groupsMaxOrderByAggregateInput;

    @Field(() => version_groupsMinOrderByAggregateInput, {nullable:true})
    _min?: version_groupsMinOrderByAggregateInput;

    @Field(() => version_groupsSumOrderByAggregateInput, {nullable:true})
    _sum?: version_groupsSumOrderByAggregateInput;
}
