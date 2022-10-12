import { Field } from '@nestjs/graphql';
import { ObjectType } from '@nestjs/graphql';
import { Float } from '@nestjs/graphql';

@ObjectType()
export class Pokemon_evolutionAvgAggregate {

    @Field(() => Float, {nullable:true})
    id?: number;

    @Field(() => Float, {nullable:true})
    evolved_species_id?: number;

    @Field(() => Float, {nullable:true})
    evolution_trigger_id?: number;

    @Field(() => Float, {nullable:true})
    trigger_item_id?: number;

    @Field(() => Float, {nullable:true})
    minimum_level?: number;

    @Field(() => Float, {nullable:true})
    location_id?: number;

    @Field(() => Float, {nullable:true})
    held_item_id?: number;

    @Field(() => Float, {nullable:true})
    known_move_id?: number;

    @Field(() => Float, {nullable:true})
    minimum_happiness?: number;

    @Field(() => Float, {nullable:true})
    minimum_beauty?: number;

    @Field(() => Float, {nullable:true})
    relative_physical_stats?: number;

    @Field(() => Float, {nullable:true})
    party_species_id?: number;

    @Field(() => Float, {nullable:true})
    trade_species_id?: number;
}
