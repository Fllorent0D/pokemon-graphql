import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { growth_ratesUpdateManyMutationInput } from '../growth-rates/growth-rates-update-many-mutation.input';
import { Type } from 'class-transformer';
import { growth_ratesWhereInput } from '../growth-rates/growth-rates-where.input';

@ArgsType()
export class UpdateManygrowthRatesArgs {

    @Field(() => growth_ratesUpdateManyMutationInput, {nullable:false})
    @Type(() => growth_ratesUpdateManyMutationInput)
    data!: growth_ratesUpdateManyMutationInput;

    @Field(() => growth_ratesWhereInput, {nullable:true})
    @Type(() => growth_ratesWhereInput)
    where?: growth_ratesWhereInput;
}
