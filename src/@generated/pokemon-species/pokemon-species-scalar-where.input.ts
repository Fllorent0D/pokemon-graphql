import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { IntFilter } from '../prisma/int-filter.input';
import { StringFilter } from '../prisma/string-filter.input';
import { IntNullableFilter } from '../prisma/int-nullable-filter.input';
import { BoolFilter } from '../prisma/bool-filter.input';

@InputType()
export class pokemon_speciesScalarWhereInput {

    @Field(() => [pokemon_speciesScalarWhereInput], {nullable:true})
    AND?: Array<pokemon_speciesScalarWhereInput>;

    @Field(() => [pokemon_speciesScalarWhereInput], {nullable:true})
    OR?: Array<pokemon_speciesScalarWhereInput>;

    @Field(() => [pokemon_speciesScalarWhereInput], {nullable:true})
    NOT?: Array<pokemon_speciesScalarWhereInput>;

    @Field(() => IntFilter, {nullable:true})
    id?: IntFilter;

    @Field(() => StringFilter, {nullable:true})
    identifier?: StringFilter;

    @Field(() => IntNullableFilter, {nullable:true})
    generation_id?: IntNullableFilter;

    @Field(() => IntNullableFilter, {nullable:true})
    evolves_from_species_id?: IntNullableFilter;

    @Field(() => IntNullableFilter, {nullable:true})
    evolution_chain_id?: IntNullableFilter;

    @Field(() => IntFilter, {nullable:true})
    color_id?: IntFilter;

    @Field(() => IntFilter, {nullable:true})
    shape_id?: IntFilter;

    @Field(() => IntNullableFilter, {nullable:true})
    habitat_id?: IntNullableFilter;

    @Field(() => IntFilter, {nullable:true})
    gender_rate?: IntFilter;

    @Field(() => IntFilter, {nullable:true})
    capture_rate?: IntFilter;

    @Field(() => IntFilter, {nullable:true})
    base_happiness?: IntFilter;

    @Field(() => BoolFilter, {nullable:true})
    is_baby?: BoolFilter;

    @Field(() => IntFilter, {nullable:true})
    hatch_counter?: IntFilter;

    @Field(() => BoolFilter, {nullable:true})
    has_gender_differences?: BoolFilter;

    @Field(() => IntFilter, {nullable:true})
    growth_rate_id?: IntFilter;

    @Field(() => BoolFilter, {nullable:true})
    forms_switchable?: BoolFilter;
}
