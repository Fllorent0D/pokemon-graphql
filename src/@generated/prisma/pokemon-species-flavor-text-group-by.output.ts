import { Field } from '@nestjs/graphql';
import { ObjectType } from '@nestjs/graphql';
import { Int } from '@nestjs/graphql';
import { Pokemon_species_flavor_textCountAggregate } from './pokemon-species-flavor-text-count-aggregate.output';
import { Pokemon_species_flavor_textAvgAggregate } from './pokemon-species-flavor-text-avg-aggregate.output';
import { Pokemon_species_flavor_textSumAggregate } from './pokemon-species-flavor-text-sum-aggregate.output';
import { Pokemon_species_flavor_textMinAggregate } from './pokemon-species-flavor-text-min-aggregate.output';
import { Pokemon_species_flavor_textMaxAggregate } from './pokemon-species-flavor-text-max-aggregate.output';

@ObjectType()
export class Pokemon_species_flavor_textGroupBy {

    @Field(() => Int, {nullable:false})
    species_id!: number;

    @Field(() => Int, {nullable:false})
    version_id!: number;

    @Field(() => Int, {nullable:false})
    language_id!: number;

    @Field(() => String, {nullable:false})
    flavor_text!: string;

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
