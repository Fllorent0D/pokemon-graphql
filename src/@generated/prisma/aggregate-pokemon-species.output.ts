import { Field } from '@nestjs/graphql';
import { ObjectType } from '@nestjs/graphql';
import { Pokemon_speciesCountAggregate } from './pokemon-species-count-aggregate.output';
import { Pokemon_speciesAvgAggregate } from './pokemon-species-avg-aggregate.output';
import { Pokemon_speciesSumAggregate } from './pokemon-species-sum-aggregate.output';
import { Pokemon_speciesMinAggregate } from './pokemon-species-min-aggregate.output';
import { Pokemon_speciesMaxAggregate } from './pokemon-species-max-aggregate.output';

@ObjectType()
export class AggregatePokemon_species {

    @Field(() => Pokemon_speciesCountAggregate, {nullable:true})
    _count?: Pokemon_speciesCountAggregate;

    @Field(() => Pokemon_speciesAvgAggregate, {nullable:true})
    _avg?: Pokemon_speciesAvgAggregate;

    @Field(() => Pokemon_speciesSumAggregate, {nullable:true})
    _sum?: Pokemon_speciesSumAggregate;

    @Field(() => Pokemon_speciesMinAggregate, {nullable:true})
    _min?: Pokemon_speciesMinAggregate;

    @Field(() => Pokemon_speciesMaxAggregate, {nullable:true})
    _max?: Pokemon_speciesMaxAggregate;
}
