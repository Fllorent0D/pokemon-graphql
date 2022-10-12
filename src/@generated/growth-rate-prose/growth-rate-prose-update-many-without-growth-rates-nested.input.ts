import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { growth_rate_proseCreateWithoutGrowth_ratesInput } from './growth-rate-prose-create-without-growth-rates.input';
import { Type } from 'class-transformer';
import { growth_rate_proseCreateOrConnectWithoutGrowth_ratesInput } from './growth-rate-prose-create-or-connect-without-growth-rates.input';
import { growth_rate_proseUpsertWithWhereUniqueWithoutGrowth_ratesInput } from './growth-rate-prose-upsert-with-where-unique-without-growth-rates.input';
import { growth_rate_proseWhereUniqueInput } from './growth-rate-prose-where-unique.input';
import { growth_rate_proseUpdateWithWhereUniqueWithoutGrowth_ratesInput } from './growth-rate-prose-update-with-where-unique-without-growth-rates.input';
import { growth_rate_proseUpdateManyWithWhereWithoutGrowth_ratesInput } from './growth-rate-prose-update-many-with-where-without-growth-rates.input';
import { growth_rate_proseScalarWhereInput } from './growth-rate-prose-scalar-where.input';

@InputType()
export class growth_rate_proseUpdateManyWithoutGrowth_ratesNestedInput {

    @Field(() => [growth_rate_proseCreateWithoutGrowth_ratesInput], {nullable:true})
    @Type(() => growth_rate_proseCreateWithoutGrowth_ratesInput)
    create?: Array<growth_rate_proseCreateWithoutGrowth_ratesInput>;

    @Field(() => [growth_rate_proseCreateOrConnectWithoutGrowth_ratesInput], {nullable:true})
    @Type(() => growth_rate_proseCreateOrConnectWithoutGrowth_ratesInput)
    connectOrCreate?: Array<growth_rate_proseCreateOrConnectWithoutGrowth_ratesInput>;

    @Field(() => [growth_rate_proseUpsertWithWhereUniqueWithoutGrowth_ratesInput], {nullable:true})
    @Type(() => growth_rate_proseUpsertWithWhereUniqueWithoutGrowth_ratesInput)
    upsert?: Array<growth_rate_proseUpsertWithWhereUniqueWithoutGrowth_ratesInput>;

    @Field(() => [growth_rate_proseWhereUniqueInput], {nullable:true})
    @Type(() => growth_rate_proseWhereUniqueInput)
    set?: Array<growth_rate_proseWhereUniqueInput>;

    @Field(() => [growth_rate_proseWhereUniqueInput], {nullable:true})
    @Type(() => growth_rate_proseWhereUniqueInput)
    disconnect?: Array<growth_rate_proseWhereUniqueInput>;

    @Field(() => [growth_rate_proseWhereUniqueInput], {nullable:true})
    @Type(() => growth_rate_proseWhereUniqueInput)
    delete?: Array<growth_rate_proseWhereUniqueInput>;

    @Field(() => [growth_rate_proseWhereUniqueInput], {nullable:true})
    @Type(() => growth_rate_proseWhereUniqueInput)
    connect?: Array<growth_rate_proseWhereUniqueInput>;

    @Field(() => [growth_rate_proseUpdateWithWhereUniqueWithoutGrowth_ratesInput], {nullable:true})
    @Type(() => growth_rate_proseUpdateWithWhereUniqueWithoutGrowth_ratesInput)
    update?: Array<growth_rate_proseUpdateWithWhereUniqueWithoutGrowth_ratesInput>;

    @Field(() => [growth_rate_proseUpdateManyWithWhereWithoutGrowth_ratesInput], {nullable:true})
    @Type(() => growth_rate_proseUpdateManyWithWhereWithoutGrowth_ratesInput)
    updateMany?: Array<growth_rate_proseUpdateManyWithWhereWithoutGrowth_ratesInput>;

    @Field(() => [growth_rate_proseScalarWhereInput], {nullable:true})
    @Type(() => growth_rate_proseScalarWhereInput)
    deleteMany?: Array<growth_rate_proseScalarWhereInput>;
}
