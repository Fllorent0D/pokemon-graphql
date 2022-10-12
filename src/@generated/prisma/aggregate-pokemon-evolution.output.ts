import { Field } from '@nestjs/graphql';
import { ObjectType } from '@nestjs/graphql';
import { Pokemon_evolutionCountAggregate } from './pokemon-evolution-count-aggregate.output';
import { Pokemon_evolutionAvgAggregate } from './pokemon-evolution-avg-aggregate.output';
import { Pokemon_evolutionSumAggregate } from './pokemon-evolution-sum-aggregate.output';
import { Pokemon_evolutionMinAggregate } from './pokemon-evolution-min-aggregate.output';
import { Pokemon_evolutionMaxAggregate } from './pokemon-evolution-max-aggregate.output';

@ObjectType()
export class AggregatePokemon_evolution {

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
