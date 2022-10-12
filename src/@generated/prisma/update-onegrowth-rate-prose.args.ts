import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { growth_rate_proseUpdateInput } from '../growth-rate-prose/growth-rate-prose-update.input';
import { Type } from 'class-transformer';
import { growth_rate_proseWhereUniqueInput } from '../growth-rate-prose/growth-rate-prose-where-unique.input';

@ArgsType()
export class UpdateOnegrowthRateProseArgs {

    @Field(() => growth_rate_proseUpdateInput, {nullable:false})
    @Type(() => growth_rate_proseUpdateInput)
    data!: growth_rate_proseUpdateInput;

    @Field(() => growth_rate_proseWhereUniqueInput, {nullable:false})
    @Type(() => growth_rate_proseWhereUniqueInput)
    where!: growth_rate_proseWhereUniqueInput;
}
