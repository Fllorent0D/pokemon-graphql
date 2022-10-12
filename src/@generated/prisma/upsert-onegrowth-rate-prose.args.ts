import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { growth_rate_proseWhereUniqueInput } from '../growth-rate-prose/growth-rate-prose-where-unique.input';
import { Type } from 'class-transformer';
import { growth_rate_proseCreateInput } from '../growth-rate-prose/growth-rate-prose-create.input';
import { growth_rate_proseUpdateInput } from '../growth-rate-prose/growth-rate-prose-update.input';

@ArgsType()
export class UpsertOnegrowthRateProseArgs {

    @Field(() => growth_rate_proseWhereUniqueInput, {nullable:false})
    @Type(() => growth_rate_proseWhereUniqueInput)
    where!: growth_rate_proseWhereUniqueInput;

    @Field(() => growth_rate_proseCreateInput, {nullable:false})
    @Type(() => growth_rate_proseCreateInput)
    create!: growth_rate_proseCreateInput;

    @Field(() => growth_rate_proseUpdateInput, {nullable:false})
    @Type(() => growth_rate_proseUpdateInput)
    update!: growth_rate_proseUpdateInput;
}
