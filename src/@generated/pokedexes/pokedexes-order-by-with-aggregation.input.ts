import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { SortOrder } from '../prisma/sort-order.enum';
import { pokedexesCountOrderByAggregateInput } from './pokedexes-count-order-by-aggregate.input';
import { pokedexesAvgOrderByAggregateInput } from './pokedexes-avg-order-by-aggregate.input';
import { pokedexesMaxOrderByAggregateInput } from './pokedexes-max-order-by-aggregate.input';
import { pokedexesMinOrderByAggregateInput } from './pokedexes-min-order-by-aggregate.input';
import { pokedexesSumOrderByAggregateInput } from './pokedexes-sum-order-by-aggregate.input';

@InputType()
export class pokedexesOrderByWithAggregationInput {

    @Field(() => SortOrder, {nullable:true})
    id?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    region_id?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    identifier?: keyof typeof SortOrder;

    @Field(() => pokedexesCountOrderByAggregateInput, {nullable:true})
    _count?: pokedexesCountOrderByAggregateInput;

    @Field(() => pokedexesAvgOrderByAggregateInput, {nullable:true})
    _avg?: pokedexesAvgOrderByAggregateInput;

    @Field(() => pokedexesMaxOrderByAggregateInput, {nullable:true})
    _max?: pokedexesMaxOrderByAggregateInput;

    @Field(() => pokedexesMinOrderByAggregateInput, {nullable:true})
    _min?: pokedexesMinOrderByAggregateInput;

    @Field(() => pokedexesSumOrderByAggregateInput, {nullable:true})
    _sum?: pokedexesSumOrderByAggregateInput;
}
