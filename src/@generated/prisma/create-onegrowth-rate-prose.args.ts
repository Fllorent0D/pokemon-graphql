import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { growth_rate_proseCreateInput } from '../growth-rate-prose/growth-rate-prose-create.input';
import { Type } from 'class-transformer';

@ArgsType()
export class CreateOnegrowthRateProseArgs {

    @Field(() => growth_rate_proseCreateInput, {nullable:false})
    @Type(() => growth_rate_proseCreateInput)
    data!: growth_rate_proseCreateInput;
}
