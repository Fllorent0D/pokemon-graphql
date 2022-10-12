import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { SortOrder } from '../prisma/sort-order.enum';

@InputType()
export class pokemon_evolutionMinOrderByAggregateInput {

    @Field(() => SortOrder, {nullable:true})
    id?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    evolved_species_id?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    evolution_trigger_id?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    trigger_item_id?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    minimum_level?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    gender?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    location_id?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    held_item_id?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    time_of_day?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    known_move_id?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    minimum_happiness?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    minimum_beauty?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    relative_physical_stats?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    party_species_id?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    trade_species_id?: keyof typeof SortOrder;
}
