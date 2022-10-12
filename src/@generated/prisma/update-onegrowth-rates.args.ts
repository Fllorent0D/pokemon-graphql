import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { growth_ratesUpdateInput } from '../growth-rates/growth-rates-update.input';
import { Type } from 'class-transformer';
import { growth_ratesWhereUniqueInput } from '../growth-rates/growth-rates-where-unique.input';

@ArgsType()
export class UpdateOnegrowthRatesArgs {

    @Field(() => growth_ratesUpdateInput, {nullable:false})
    @Type(() => growth_ratesUpdateInput)
    data!: growth_ratesUpdateInput;

    @Field(() => growth_ratesWhereUniqueInput, {nullable:false})
    @Type(() => growth_ratesWhereUniqueInput)
    where!: growth_ratesWhereUniqueInput;
}
