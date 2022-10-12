import { Field } from '@nestjs/graphql';
import { ObjectType } from '@nestjs/graphql';
import { Int } from '@nestjs/graphql';
import { Pokemon_speciesCountAggregate } from './pokemon-species-count-aggregate.output';
import { Pokemon_speciesAvgAggregate } from './pokemon-species-avg-aggregate.output';
import { Pokemon_speciesSumAggregate } from './pokemon-species-sum-aggregate.output';
import { Pokemon_speciesMinAggregate } from './pokemon-species-min-aggregate.output';
import { Pokemon_speciesMaxAggregate } from './pokemon-species-max-aggregate.output';

@ObjectType()
export class Pokemon_speciesGroupBy {

    @Field(() => Int, {nullable:false})
    id!: number;

    @Field(() => String, {nullable:false})
    identifier!: string;

    @Field(() => Int, {nullable:true})
    generation_id?: number;

    @Field(() => Int, {nullable:true})
    evolves_from_species_id?: number;

    @Field(() => Int, {nullable:true})
    evolution_chain_id?: number;

    @Field(() => Int, {nullable:false})
    color_id!: number;

    @Field(() => Int, {nullable:false})
    shape_id!: number;

    @Field(() => Int, {nullable:true})
    habitat_id?: number;

    @Field(() => Int, {nullable:false})
    gender_rate!: number;

    @Field(() => Int, {nullable:false})
    capture_rate!: number;

    @Field(() => Int, {nullable:false})
    base_happiness!: number;

    @Field(() => Boolean, {nullable:false})
    is_baby!: boolean;

    @Field(() => Int, {nullable:false})
    hatch_counter!: number;

    @Field(() => Boolean, {nullable:false})
    has_gender_differences!: boolean;

    @Field(() => Int, {nullable:false})
    growth_rate_id!: number;

    @Field(() => Boolean, {nullable:false})
    forms_switchable!: boolean;

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
