import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { growth_ratesWhereUniqueInput } from './growth-rates-where-unique.input';
import { Type } from 'class-transformer';
import { growth_ratesCreateWithoutGrowth_rate_proseInput } from './growth-rates-create-without-growth-rate-prose.input';

@InputType()
export class growth_ratesCreateOrConnectWithoutGrowth_rate_proseInput {

    @Field(() => growth_ratesWhereUniqueInput, {nullable:false})
    @Type(() => growth_ratesWhereUniqueInput)
    where!: growth_ratesWhereUniqueInput;

    @Field(() => growth_ratesCreateWithoutGrowth_rate_proseInput, {nullable:false})
    @Type(() => growth_ratesCreateWithoutGrowth_rate_proseInput)
    create!: growth_ratesCreateWithoutGrowth_rate_proseInput;
}
