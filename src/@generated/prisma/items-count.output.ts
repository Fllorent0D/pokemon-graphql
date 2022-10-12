import { Field } from '@nestjs/graphql';
import { ObjectType } from '@nestjs/graphql';
import { Int } from '@nestjs/graphql';

@ObjectType()
export class ItemsCount {

    @Field(() => Int, {nullable:false})
    berries!: number;

    @Field(() => Int, {nullable:false})
    evolution_chains!: number;

    @Field(() => Int, {nullable:false})
    item_flag_map!: number;

    @Field(() => Int, {nullable:false})
    item_flavor_summaries!: number;

    @Field(() => Int, {nullable:false})
    item_flavor_text!: number;

    @Field(() => Int, {nullable:false})
    item_game_indices!: number;

    @Field(() => Int, {nullable:false})
    item_names!: number;

    @Field(() => Int, {nullable:false})
    item_prose!: number;

    @Field(() => Int, {nullable:false})
    machines!: number;

    @Field(() => Int, {nullable:false})
    pokemon_evolution_itemsTopokemon_evolution_held_item_id!: number;

    @Field(() => Int, {nullable:false})
    pokemon_evolution_itemsTopokemon_evolution_trigger_item_id!: number;

    @Field(() => Int, {nullable:false})
    pokemon_items!: number;
}
