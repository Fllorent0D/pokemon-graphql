import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { growth_rate_proseWhereInput } from '../growth-rate-prose/growth-rate-prose-where.input';
import { Type } from 'class-transformer';
import { growth_rate_proseOrderByWithRelationInput } from '../growth-rate-prose/growth-rate-prose-order-by-with-relation.input';
import { growth_rate_proseWhereUniqueInput } from '../growth-rate-prose/growth-rate-prose-where-unique.input';
import { Int } from '@nestjs/graphql';
import { Growth_rate_proseScalarFieldEnum } from './growth-rate-prose-scalar-field.enum';

@ArgsType()
export class FindFirstgrowthRateProseArgs {

    @Field(() => growth_rate_proseWhereInput, {nullable:true})
    @Type(() => growth_rate_proseWhereInput)
    where?: growth_rate_proseWhereInput;

    @Field(() => [growth_rate_proseOrderByWithRelationInput], {nullable:true})
    orderBy?: Array<growth_rate_proseOrderByWithRelationInput>;

    @Field(() => growth_rate_proseWhereUniqueInput, {nullable:true})
    cursor?: growth_rate_proseWhereUniqueInput;

    @Field(() => Int, {nullable:true})
    take?: number;

    @Field(() => Int, {nullable:true})
    skip?: number;

    @Field(() => [Growth_rate_proseScalarFieldEnum], {nullable:true})
    distinct?: Array<keyof typeof Growth_rate_proseScalarFieldEnum>;
}
