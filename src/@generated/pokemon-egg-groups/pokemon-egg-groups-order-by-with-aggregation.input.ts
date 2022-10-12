import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { SortOrder } from '../prisma/sort-order.enum';
import { pokemon_egg_groupsCountOrderByAggregateInput } from './pokemon-egg-groups-count-order-by-aggregate.input';
import { pokemon_egg_groupsAvgOrderByAggregateInput } from './pokemon-egg-groups-avg-order-by-aggregate.input';
import { pokemon_egg_groupsMaxOrderByAggregateInput } from './pokemon-egg-groups-max-order-by-aggregate.input';
import { pokemon_egg_groupsMinOrderByAggregateInput } from './pokemon-egg-groups-min-order-by-aggregate.input';
import { pokemon_egg_groupsSumOrderByAggregateInput } from './pokemon-egg-groups-sum-order-by-aggregate.input';

@InputType()
export class pokemon_egg_groupsOrderByWithAggregationInput {

    @Field(() => SortOrder, {nullable:true})
    species_id?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    egg_group_id?: keyof typeof SortOrder;

    @Field(() => pokemon_egg_groupsCountOrderByAggregateInput, {nullable:true})
    _count?: pokemon_egg_groupsCountOrderByAggregateInput;

    @Field(() => pokemon_egg_groupsAvgOrderByAggregateInput, {nullable:true})
    _avg?: pokemon_egg_groupsAvgOrderByAggregateInput;

    @Field(() => pokemon_egg_groupsMaxOrderByAggregateInput, {nullable:true})
    _max?: pokemon_egg_groupsMaxOrderByAggregateInput;

    @Field(() => pokemon_egg_groupsMinOrderByAggregateInput, {nullable:true})
    _min?: pokemon_egg_groupsMinOrderByAggregateInput;

    @Field(() => pokemon_egg_groupsSumOrderByAggregateInput, {nullable:true})
    _sum?: pokemon_egg_groupsSumOrderByAggregateInput;
}
