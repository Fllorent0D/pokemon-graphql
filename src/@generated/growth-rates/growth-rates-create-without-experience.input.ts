import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { growth_rate_proseCreateNestedManyWithoutGrowth_ratesInput } from '../growth-rate-prose/growth-rate-prose-create-nested-many-without-growth-rates.input';
import { pokemon_speciesCreateNestedManyWithoutGrowth_ratesInput } from '../pokemon-species/pokemon-species-create-nested-many-without-growth-rates.input';

@InputType()
export class growth_ratesCreateWithoutExperienceInput {

    @Field(() => String, {nullable:false})
    identifier!: string;

    @Field(() => String, {nullable:false})
    formula!: string;

    @Field(() => growth_rate_proseCreateNestedManyWithoutGrowth_ratesInput, {nullable:true})
    growth_rate_prose?: growth_rate_proseCreateNestedManyWithoutGrowth_ratesInput;

    @Field(() => pokemon_speciesCreateNestedManyWithoutGrowth_ratesInput, {nullable:true})
    pokemon_species?: pokemon_speciesCreateNestedManyWithoutGrowth_ratesInput;
}
