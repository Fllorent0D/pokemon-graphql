import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { growth_ratesWhereInput } from '../growth-rates/growth-rates-where.input';
import { Type } from 'class-transformer';

@ArgsType()
export class DeleteManygrowthRatesArgs {

    @Field(() => growth_ratesWhereInput, {nullable:true})
    @Type(() => growth_ratesWhereInput)
    where?: growth_ratesWhereInput;
}
