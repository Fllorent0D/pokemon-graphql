import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { growth_ratesWhereUniqueInput } from '../growth-rates/growth-rates-where-unique.input';
import { Type } from 'class-transformer';
import { growth_ratesCreateInput } from '../growth-rates/growth-rates-create.input';
import { growth_ratesUpdateInput } from '../growth-rates/growth-rates-update.input';

@ArgsType()
export class UpsertOnegrowthRatesArgs {

    @Field(() => growth_ratesWhereUniqueInput, {nullable:false})
    @Type(() => growth_ratesWhereUniqueInput)
    where!: growth_ratesWhereUniqueInput;

    @Field(() => growth_ratesCreateInput, {nullable:false})
    @Type(() => growth_ratesCreateInput)
    create!: growth_ratesCreateInput;

    @Field(() => growth_ratesUpdateInput, {nullable:false})
    @Type(() => growth_ratesUpdateInput)
    update!: growth_ratesUpdateInput;
}
