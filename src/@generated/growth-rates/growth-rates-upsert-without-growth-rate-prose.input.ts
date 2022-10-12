import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { growth_ratesUpdateWithoutGrowth_rate_proseInput } from './growth-rates-update-without-growth-rate-prose.input';
import { Type } from 'class-transformer';
import { growth_ratesCreateWithoutGrowth_rate_proseInput } from './growth-rates-create-without-growth-rate-prose.input';

@InputType()
export class growth_ratesUpsertWithoutGrowth_rate_proseInput {

    @Field(() => growth_ratesUpdateWithoutGrowth_rate_proseInput, {nullable:false})
    @Type(() => growth_ratesUpdateWithoutGrowth_rate_proseInput)
    update!: growth_ratesUpdateWithoutGrowth_rate_proseInput;

    @Field(() => growth_ratesCreateWithoutGrowth_rate_proseInput, {nullable:false})
    @Type(() => growth_ratesCreateWithoutGrowth_rate_proseInput)
    create!: growth_ratesCreateWithoutGrowth_rate_proseInput;
}
