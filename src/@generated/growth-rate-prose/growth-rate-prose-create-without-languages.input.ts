import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { growth_ratesCreateNestedOneWithoutGrowth_rate_proseInput } from '../growth-rates/growth-rates-create-nested-one-without-growth-rate-prose.input';

@InputType()
export class growth_rate_proseCreateWithoutLanguagesInput {

    @Field(() => String, {nullable:false})
    name!: string;

    @Field(() => growth_ratesCreateNestedOneWithoutGrowth_rate_proseInput, {nullable:false})
    growth_rates!: growth_ratesCreateNestedOneWithoutGrowth_rate_proseInput;
}
