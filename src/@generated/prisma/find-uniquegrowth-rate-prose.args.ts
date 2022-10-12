import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { growth_rate_proseWhereUniqueInput } from '../growth-rate-prose/growth-rate-prose-where-unique.input';
import { Type } from 'class-transformer';

@ArgsType()
export class FindUniquegrowthRateProseArgs {

    @Field(() => growth_rate_proseWhereUniqueInput, {nullable:false})
    @Type(() => growth_rate_proseWhereUniqueInput)
    where!: growth_rate_proseWhereUniqueInput;
}
