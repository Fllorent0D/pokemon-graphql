import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { growth_rate_proseCreateWithoutGrowth_ratesInput } from './growth-rate-prose-create-without-growth-rates.input';
import { Type } from 'class-transformer';
import { growth_rate_proseCreateOrConnectWithoutGrowth_ratesInput } from './growth-rate-prose-create-or-connect-without-growth-rates.input';
import { growth_rate_proseWhereUniqueInput } from './growth-rate-prose-where-unique.input';

@InputType()
export class growth_rate_proseUncheckedCreateNestedManyWithoutGrowth_ratesInput {

    @Field(() => [growth_rate_proseCreateWithoutGrowth_ratesInput], {nullable:true})
    @Type(() => growth_rate_proseCreateWithoutGrowth_ratesInput)
    create?: Array<growth_rate_proseCreateWithoutGrowth_ratesInput>;

    @Field(() => [growth_rate_proseCreateOrConnectWithoutGrowth_ratesInput], {nullable:true})
    @Type(() => growth_rate_proseCreateOrConnectWithoutGrowth_ratesInput)
    connectOrCreate?: Array<growth_rate_proseCreateOrConnectWithoutGrowth_ratesInput>;

    @Field(() => [growth_rate_proseWhereUniqueInput], {nullable:true})
    @Type(() => growth_rate_proseWhereUniqueInput)
    connect?: Array<growth_rate_proseWhereUniqueInput>;
}
