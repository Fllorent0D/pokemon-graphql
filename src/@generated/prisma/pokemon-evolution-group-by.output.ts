import { Field } from '@nestjs/graphql';
import { ObjectType } from '@nestjs/graphql';
import { Int } from '@nestjs/graphql';
import { Pokemon_evolutionCountAggregate } from './pokemon-evolution-count-aggregate.output';
import { Pokemon_evolutionAvgAggregate } from './pokemon-evolution-avg-aggregate.output';
import { Pokemon_evolutionSumAggregate } from './pokemon-evolution-sum-aggregate.output';
import { Pokemon_evolutionMinAggregate } from './pokemon-evolution-min-aggregate.output';
import { Pokemon_evolutionMaxAggregate } from './pokemon-evolution-max-aggregate.output';

@ObjectType()
export class Pokemon_evolutionGroupBy {

    @Field(() => Int, {nullable:false})
    id!: number;

    @Field(() => Int, {nullable:false})
    evolved_species_id!: number;

    @Field(() => Int, {nullable:false})
    evolution_trigger_id!: number;

    @Field(() => Int, {nullable:true})
    trigger_item_id?: number;

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

    @Field(() => Pokemon_evolutionCountAggregate, {nullable:true})
    _count?: Pokemon_evolutionCountAggregate;

    @Field(() => Pokemon_evolutionAvgAggregate, {nullable:true})
    _avg?: Pokemon_evolutionAvgAggregate;

    @Field(() => Pokemon_evolutionSumAggregate, {nullable:true})
    _sum?: Pokemon_evolutionSumAggregate;

    @Field(() => Pokemon_evolutionMinAggregate, {nullable:true})
    _min?: Pokemon_evolutionMinAggregate;

    @Field(() => Pokemon_evolutionMaxAggregate, {nullable:true})
    _max?: Pokemon_evolutionMaxAggregate;
}
