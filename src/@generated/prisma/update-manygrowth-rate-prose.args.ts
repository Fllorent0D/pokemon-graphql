import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { growth_rate_proseUpdateManyMutationInput } from '../growth-rate-prose/growth-rate-prose-update-many-mutation.input';
import { Type } from 'class-transformer';
import { growth_rate_proseWhereInput } from '../growth-rate-prose/growth-rate-prose-where.input';

@ArgsType()
export class UpdateManygrowthRateProseArgs {

    @Field(() => growth_rate_proseUpdateManyMutationInput, {nullable:false})
    @Type(() => growth_rate_proseUpdateManyMutationInput)
    data!: growth_rate_proseUpdateManyMutationInput;

    @Field(() => growth_rate_proseWhereInput, {nullable:true})
    @Type(() => growth_rate_proseWhereInput)
    where?: growth_rate_proseWhereInput;
}
