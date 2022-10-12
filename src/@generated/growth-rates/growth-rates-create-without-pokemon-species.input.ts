import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { experienceCreateNestedManyWithoutGrowth_ratesInput } from '../experience/experience-create-nested-many-without-growth-rates.input';
import { growth_rate_proseCreateNestedManyWithoutGrowth_ratesInput } from '../growth-rate-prose/growth-rate-prose-create-nested-many-without-growth-rates.input';

@InputType()
export class growth_ratesCreateWithoutPokemon_speciesInput {

    @Field(() => String, {nullable:false})
    identifier!: string;

    @Field(() => String, {nullable:false})
    formula!: string;

    @Field(() => experienceCreateNestedManyWithoutGrowth_ratesInput, {nullable:true})
    experience?: experienceCreateNestedManyWithoutGrowth_ratesInput;

    @Field(() => growth_rate_proseCreateNestedManyWithoutGrowth_ratesInput, {nullable:true})
    growth_rate_prose?: growth_rate_proseCreateNestedManyWithoutGrowth_ratesInput;
}
