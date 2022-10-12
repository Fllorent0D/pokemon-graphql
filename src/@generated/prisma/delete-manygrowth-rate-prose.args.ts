import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { growth_rate_proseWhereInput } from '../growth-rate-prose/growth-rate-prose-where.input';
import { Type } from 'class-transformer';

@ArgsType()
export class DeleteManygrowthRateProseArgs {

    @Field(() => growth_rate_proseWhereInput, {nullable:true})
    @Type(() => growth_rate_proseWhereInput)
    where?: growth_rate_proseWhereInput;
}
