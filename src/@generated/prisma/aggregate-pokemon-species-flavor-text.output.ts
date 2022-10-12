import { Field } from '@nestjs/graphql';
import { ObjectType } from '@nestjs/graphql';
import { Pokemon_species_flavor_textCountAggregate } from './pokemon-species-flavor-text-count-aggregate.output';
import { Pokemon_species_flavor_textAvgAggregate } from './pokemon-species-flavor-text-avg-aggregate.output';
import { Pokemon_species_flavor_textSumAggregate } from './pokemon-species-flavor-text-sum-aggregate.output';
import { Pokemon_species_flavor_textMinAggregate } from './pokemon-species-flavor-text-min-aggregate.output';
import { Pokemon_species_flavor_textMaxAggregate } from './pokemon-species-flavor-text-max-aggregate.output';

@ObjectType()
export class AggregatePokemon_species_flavor_text {

    @Field(() => Pokemon_species_flavor_textCountAggregate, {nullable:true})
    _count?: Pokemon_species_flavor_textCountAggregate;

    @Field(() => Pokemon_species_flavor_textAvgAggregate, {nullable:true})
    _avg?: Pokemon_species_flavor_textAvgAggregate;

    @Field(() => Pokemon_species_flavor_textSumAggregate, {nullable:true})
    _sum?: Pokemon_species_flavor_textSumAggregate;

    @Field(() => Pokemon_species_flavor_textMinAggregate, {nullable:true})
    _min?: Pokemon_species_flavor_textMinAggregate;

    @Field(() => Pokemon_species_flavor_textMaxAggregate, {nullable:true})
    _max?: Pokemon_species_flavor_textMaxAggregate;
}
