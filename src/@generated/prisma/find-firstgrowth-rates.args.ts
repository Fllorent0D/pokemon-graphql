import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { growth_ratesWhereInput } from '../growth-rates/growth-rates-where.input';
import { Type } from 'class-transformer';
import { growth_ratesOrderByWithRelationInput } from '../growth-rates/growth-rates-order-by-with-relation.input';
import { growth_ratesWhereUniqueInput } from '../growth-rates/growth-rates-where-unique.input';
import { Int } from '@nestjs/graphql';
import { Growth_ratesScalarFieldEnum } from './growth-rates-scalar-field.enum';

@ArgsType()
export class FindFirstgrowthRatesArgs {

    @Field(() => growth_ratesWhereInput, {nullable:true})
    @Type(() => growth_ratesWhereInput)
    where?: growth_ratesWhereInput;

    @Field(() => [growth_ratesOrderByWithRelationInput], {nullable:true})
    orderBy?: Array<growth_ratesOrderByWithRelationInput>;

    @Field(() => growth_ratesWhereUniqueInput, {nullable:true})
    cursor?: growth_ratesWhereUniqueInput;

    @Field(() => Int, {nullable:true})
    take?: number;

    @Field(() => Int, {nullable:true})
    skip?: number;

    @Field(() => [Growth_ratesScalarFieldEnum], {nullable:true})
    distinct?: Array<keyof typeof Growth_ratesScalarFieldEnum>;
}
