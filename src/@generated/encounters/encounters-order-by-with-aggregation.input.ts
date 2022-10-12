import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { SortOrder } from '../prisma/sort-order.enum';
import { encountersCountOrderByAggregateInput } from './encounters-count-order-by-aggregate.input';
import { encountersAvgOrderByAggregateInput } from './encounters-avg-order-by-aggregate.input';
import { encountersMaxOrderByAggregateInput } from './encounters-max-order-by-aggregate.input';
import { encountersMinOrderByAggregateInput } from './encounters-min-order-by-aggregate.input';
import { encountersSumOrderByAggregateInput } from './encounters-sum-order-by-aggregate.input';

@InputType()
export class encountersOrderByWithAggregationInput {

    @Field(() => SortOrder, {nullable:true})
    id?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    version_id?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    location_area_id?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    encounter_slot_id?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    pokemon_id?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    min_level?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    max_level?: keyof typeof SortOrder;

    @Field(() => encountersCountOrderByAggregateInput, {nullable:true})
    _count?: encountersCountOrderByAggregateInput;

    @Field(() => encountersAvgOrderByAggregateInput, {nullable:true})
    _avg?: encountersAvgOrderByAggregateInput;

    @Field(() => encountersMaxOrderByAggregateInput, {nullable:true})
    _max?: encountersMaxOrderByAggregateInput;

    @Field(() => encountersMinOrderByAggregateInput, {nullable:true})
    _min?: encountersMinOrderByAggregateInput;

    @Field(() => encountersSumOrderByAggregateInput, {nullable:true})
    _sum?: encountersSumOrderByAggregateInput;
}
