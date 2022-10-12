import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { growth_ratesWhereUniqueInput } from '../growth-rates/growth-rates-where-unique.input';
import { Type } from 'class-transformer';

@ArgsType()
export class DeleteOnegrowthRatesArgs {

    @Field(() => growth_ratesWhereUniqueInput, {nullable:false})
    @Type(() => growth_ratesWhereUniqueInput)
    where!: growth_ratesWhereUniqueInput;
}
