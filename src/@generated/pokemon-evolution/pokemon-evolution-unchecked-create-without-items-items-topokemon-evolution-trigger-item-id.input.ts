import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { Int } from '@nestjs/graphql';

@InputType()
export class pokemon_evolutionUncheckedCreateWithoutItems_itemsTopokemon_evolution_trigger_item_idInput {

    @Field(() => Int, {nullable:true})
    id?: number;

    @Field(() => Int, {nullable:false})
    evolved_species_id!: number;

    @Field(() => Int, {nullable:false})
    evolution_trigger_id!: number;

    @Field(() => Int, {nullable:true})
    minimum_level?: number;

    @Field(() => String, {nullable:true})
    gender?: string;

    @Field(() => Int, {nullable:true})
    location_id?: number;

    @Field(() => Int, {nullable:true})
    held_item_id?: number;

    @Field(() => String, {nullable:true})
    time_of_day?: string;

    @Field(() => Int, {nullable:true})
    known_move_id?: number;

    @Field(() => Int, {nullable:true})
    minimum_happiness?: number;

    @Field(() => Int, {nullable:true})
    minimum_beauty?: number;

    @Field(() => Int, {nullable:true})
    relative_physical_stats?: number;

    @Field(() => Int, {nullable:true})
    party_species_id?: number;

    @Field(() => Int, {nullable:true})
    trade_species_id?: number;
}
