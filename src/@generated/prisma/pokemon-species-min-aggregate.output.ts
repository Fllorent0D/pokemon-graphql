import { Field } from '@nestjs/graphql';
import { ObjectType } from '@nestjs/graphql';
import { Int } from '@nestjs/graphql';

@ObjectType()
export class Pokemon_speciesMinAggregate {

    @Field(() => Int, {nullable:true})
    id?: number;

    @Field(() => String, {nullable:true})
    identifier?: string;

    @Field(() => Int, {nullable:true})
    generation_id?: number;

    @Field(() => Int, {nullable:true})
    evolves_from_species_id?: number;

    @Field(() => Int, {nullable:true})
    evolution_chain_id?: number;

    @Field(() => Int, {nullable:true})
    color_id?: number;

    @Field(() => Int, {nullable:true})
    shape_id?: number;

    @Field(() => Int, {nullable:true})
    habitat_id?: number;

    @Field(() => Int, {nullable:true})
    gender_rate?: number;

    @Field(() => Int, {nullable:true})
    capture_rate?: number;

    @Field(() => Int, {nullable:true})
    base_happiness?: number;

    @Field(() => Boolean, {nullable:true})
    is_baby?: boolean;

    @Field(() => Int, {nullable:true})
    hatch_counter?: number;

    @Field(() => Boolean, {nullable:true})
    has_gender_differences?: boolean;

    @Field(() => Int, {nullable:true})
    growth_rate_id?: number;

    @Field(() => Boolean, {nullable:true})
    forms_switchable?: boolean;
}
