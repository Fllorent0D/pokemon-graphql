import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { growth_ratesCreateInput } from '../growth-rates/growth-rates-create.input';
import { Type } from 'class-transformer';

@ArgsType()
export class CreateOnegrowthRatesArgs {

    @Field(() => growth_ratesCreateInput, {nullable:false})
    @Type(() => growth_ratesCreateInput)
    data!: growth_ratesCreateInput;
}
