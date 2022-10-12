import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { Int } from '@nestjs/graphql';
import { experienceUncheckedCreateNestedManyWithoutGrowth_ratesInput } from '../experience/experience-unchecked-create-nested-many-without-growth-rates.input';
import { pokemon_speciesUncheckedCreateNestedManyWithoutGrowth_ratesInput } from '../pokemon-species/pokemon-species-unchecked-create-nested-many-without-growth-rates.input';

@InputType()
export class growth_ratesUncheckedCreateWithoutGrowth_rate_proseInput {

    @Field(() => Int, {nullable:true})
    id?: number;

    @Field(() => String, {nullable:false})
    identifier!: string;

    @Field(() => String, {nullable:false})
    formula!: string;

    @Field(() => experienceUncheckedCreateNestedManyWithoutGrowth_ratesInput, {nullable:true})
    experience?: experienceUncheckedCreateNestedManyWithoutGrowth_ratesInput;

    @Field(() => pokemon_speciesUncheckedCreateNestedManyWithoutGrowth_ratesInput, {nullable:true})
    pokemon_species?: pokemon_speciesUncheckedCreateNestedManyWithoutGrowth_ratesInput;
}
