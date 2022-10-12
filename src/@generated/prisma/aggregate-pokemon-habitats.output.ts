import { Field } from '@nestjs/graphql';
import { ObjectType } from '@nestjs/graphql';
import { Pokemon_habitatsCountAggregate } from './pokemon-habitats-count-aggregate.output';
import { Pokemon_habitatsAvgAggregate } from './pokemon-habitats-avg-aggregate.output';
import { Pokemon_habitatsSumAggregate } from './pokemon-habitats-sum-aggregate.output';
import { Pokemon_habitatsMinAggregate } from './pokemon-habitats-min-aggregate.output';
import { Pokemon_habitatsMaxAggregate } from './pokemon-habitats-max-aggregate.output';

@ObjectType()
export class AggregatePokemon_habitats {

    @Field(() => Pokemon_habitatsCountAggregate, {nullable:true})
    _count?: Pokemon_habitatsCountAggregate;

    @Field(() => Pokemon_habitatsAvgAggregate, {nullable:true})
    _avg?: Pokemon_habitatsAvgAggregate;

    @Field(() => Pokemon_habitatsSumAggregate, {nullable:true})
    _sum?: Pokemon_habitatsSumAggregate;

    @Field(() => Pokemon_habitatsMinAggregate, {nullable:true})
    _min?: Pokemon_habitatsMinAggregate;

    @Field(() => Pokemon_habitatsMaxAggregate, {nullable:true})
    _max?: Pokemon_habitatsMaxAggregate;
}
