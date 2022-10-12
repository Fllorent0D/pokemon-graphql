import { Field } from '@nestjs/graphql';
import { ObjectType } from '@nestjs/graphql';
import { Pokemon_species_flavor_summariesCountAggregate } from './pokemon-species-flavor-summaries-count-aggregate.output';
import { Pokemon_species_flavor_summariesAvgAggregate } from './pokemon-species-flavor-summaries-avg-aggregate.output';
import { Pokemon_species_flavor_summariesSumAggregate } from './pokemon-species-flavor-summaries-sum-aggregate.output';
import { Pokemon_species_flavor_summariesMinAggregate } from './pokemon-species-flavor-summaries-min-aggregate.output';
import { Pokemon_species_flavor_summariesMaxAggregate } from './pokemon-species-flavor-summaries-max-aggregate.output';

@ObjectType()
export class AggregatePokemon_species_flavor_summaries {

    @Field(() => Pokemon_species_flavor_summariesCountAggregate, {nullable:true})
    _count?: Pokemon_species_flavor_summariesCountAggregate;

    @Field(() => Pokemon_species_flavor_summariesAvgAggregate, {nullable:true})
    _avg?: Pokemon_species_flavor_summariesAvgAggregate;

    @Field(() => Pokemon_species_flavor_summariesSumAggregate, {nullable:true})
    _sum?: Pokemon_species_flavor_summariesSumAggregate;

    @Field(() => Pokemon_species_flavor_summariesMinAggregate, {nullable:true})
    _min?: Pokemon_species_flavor_summariesMinAggregate;

    @Field(() => Pokemon_species_flavor_summariesMaxAggregate, {nullable:true})
    _max?: Pokemon_species_flavor_summariesMaxAggregate;
}
