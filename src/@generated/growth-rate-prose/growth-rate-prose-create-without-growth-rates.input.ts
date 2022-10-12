import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { languagesCreateNestedOneWithoutGrowth_rate_proseInput } from '../languages/languages-create-nested-one-without-growth-rate-prose.input';

@InputType()
export class growth_rate_proseCreateWithoutGrowth_ratesInput {

    @Field(() => String, {nullable:false})
    name!: string;

    @Field(() => languagesCreateNestedOneWithoutGrowth_rate_proseInput, {nullable:false})
    languages!: languagesCreateNestedOneWithoutGrowth_rate_proseInput;
}
