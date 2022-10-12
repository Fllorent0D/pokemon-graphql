import { Field } from '@nestjs/graphql';
import { ObjectType } from '@nestjs/graphql';
import { Int } from '@nestjs/graphql';
import { Pokemon_abilitiesCountAggregate } from './pokemon-abilities-count-aggregate.output';
import { Pokemon_abilitiesAvgAggregate } from './pokemon-abilities-avg-aggregate.output';
import { Pokemon_abilitiesSumAggregate } from './pokemon-abilities-sum-aggregate.output';
import { Pokemon_abilitiesMinAggregate } from './pokemon-abilities-min-aggregate.output';
import { Pokemon_abilitiesMaxAggregate } from './pokemon-abilities-max-aggregate.output';

@ObjectType()
export class Pokemon_abilitiesGroupBy {

    @Field(() => Int, {nullable:false})
    pokemon_id!: number;

    @Field(() => Int, {nullable:false})
    ability_id!: number;

    @Field(() => Boolean, {nullable:false})
    is_dream!: boolean;

    @Field(() => Int, {nullable:false})
    slot!: number;

    @Field(() => Pokemon_abilitiesCountAggregate, {nullable:true})
    _count?: Pokemon_abilitiesCountAggregate;

    @Field(() => Pokemon_abilitiesAvgAggregate, {nullable:true})
    _avg?: Pokemon_abilitiesAvgAggregate;

    @Field(() => Pokemon_abilitiesSumAggregate, {nullable:true})
    _sum?: Pokemon_abilitiesSumAggregate;

    @Field(() => Pokemon_abilitiesMinAggregate, {nullable:true})
    _min?: Pokemon_abilitiesMinAggregate;

    @Field(() => Pokemon_abilitiesMaxAggregate, {nullable:true})
    _max?: Pokemon_abilitiesMaxAggregate;
}
