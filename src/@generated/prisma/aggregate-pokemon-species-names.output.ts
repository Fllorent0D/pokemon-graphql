import { Field } from '@nestjs/graphql';
import { ObjectType } from '@nestjs/graphql';
import { Pokemon_species_namesCountAggregate } from './pokemon-species-names-count-aggregate.output';
import { Pokemon_species_namesAvgAggregate } from './pokemon-species-names-avg-aggregate.output';
import { Pokemon_species_namesSumAggregate } from './pokemon-species-names-sum-aggregate.output';
import { Pokemon_species_namesMinAggregate } from './pokemon-species-names-min-aggregate.output';
import { Pokemon_species_namesMaxAggregate } from './pokemon-species-names-max-aggregate.output';

@ObjectType()
export class AggregatePokemon_species_names {

    @Field(() => Pokemon_species_namesCountAggregate, {nullable:true})
    _count?: Pokemon_species_namesCountAggregate;

    @Field(() => Pokemon_species_namesAvgAggregate, {nullable:true})
    _avg?: Pokemon_species_namesAvgAggregate;

    @Field(() => Pokemon_species_namesSumAggregate, {nullable:true})
    _sum?: Pokemon_species_namesSumAggregate;

    @Field(() => Pokemon_species_namesMinAggregate, {nullable:true})
    _min?: Pokemon_species_namesMinAggregate;

    @Field(() => Pokemon_species_namesMaxAggregate, {nullable:true})
    _max?: Pokemon_species_namesMaxAggregate;
}
