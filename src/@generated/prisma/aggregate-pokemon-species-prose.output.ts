import { Field } from '@nestjs/graphql';
import { ObjectType } from '@nestjs/graphql';
import { Pokemon_species_proseCountAggregate } from './pokemon-species-prose-count-aggregate.output';
import { Pokemon_species_proseAvgAggregate } from './pokemon-species-prose-avg-aggregate.output';
import { Pokemon_species_proseSumAggregate } from './pokemon-species-prose-sum-aggregate.output';
import { Pokemon_species_proseMinAggregate } from './pokemon-species-prose-min-aggregate.output';
import { Pokemon_species_proseMaxAggregate } from './pokemon-species-prose-max-aggregate.output';

@ObjectType()
export class AggregatePokemon_species_prose {

    @Field(() => Pokemon_species_proseCountAggregate, {nullable:true})
    _count?: Pokemon_species_proseCountAggregate;

    @Field(() => Pokemon_species_proseAvgAggregate, {nullable:true})
    _avg?: Pokemon_species_proseAvgAggregate;

    @Field(() => Pokemon_species_proseSumAggregate, {nullable:true})
    _sum?: Pokemon_species_proseSumAggregate;

    @Field(() => Pokemon_species_proseMinAggregate, {nullable:true})
    _min?: Pokemon_species_proseMinAggregate;

    @Field(() => Pokemon_species_proseMaxAggregate, {nullable:true})
    _max?: Pokemon_species_proseMaxAggregate;
}
