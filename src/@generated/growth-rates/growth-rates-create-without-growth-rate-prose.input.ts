import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { experienceCreateNestedManyWithoutGrowth_ratesInput } from '../experience/experience-create-nested-many-without-growth-rates.input';
import { pokemon_speciesCreateNestedManyWithoutGrowth_ratesInput } from '../pokemon-species/pokemon-species-create-nested-many-without-growth-rates.input';

@InputType()
export class growth_ratesCreateWithoutGrowth_rate_proseInput {

    @Field(() => String, {nullable:false})
    identifier!: string;

    @Field(() => String, {nullable:false})
    formula!: string;

    @Field(() => experienceCreateNestedManyWithoutGrowth_ratesInput, {nullable:true})
    experience?: experienceCreateNestedManyWithoutGrowth_ratesInput;

    @Field(() => pokemon_speciesCreateNestedManyWithoutGrowth_ratesInput, {nullable:true})
    pokemon_species?: pokemon_speciesCreateNestedManyWithoutGrowth_ratesInput;
}
