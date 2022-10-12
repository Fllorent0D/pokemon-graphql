import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { growth_ratesCreateWithoutGrowth_rate_proseInput } from './growth-rates-create-without-growth-rate-prose.input';
import { Type } from 'class-transformer';
import { growth_ratesCreateOrConnectWithoutGrowth_rate_proseInput } from './growth-rates-create-or-connect-without-growth-rate-prose.input';
import { growth_ratesUpsertWithoutGrowth_rate_proseInput } from './growth-rates-upsert-without-growth-rate-prose.input';
import { growth_ratesWhereUniqueInput } from './growth-rates-where-unique.input';
import { growth_ratesUpdateWithoutGrowth_rate_proseInput } from './growth-rates-update-without-growth-rate-prose.input';

@InputType()
export class growth_ratesUpdateOneRequiredWithoutGrowth_rate_proseNestedInput {

    @Field(() => growth_ratesCreateWithoutGrowth_rate_proseInput, {nullable:true})
    @Type(() => growth_ratesCreateWithoutGrowth_rate_proseInput)
    create?: growth_ratesCreateWithoutGrowth_rate_proseInput;

    @Field(() => growth_ratesCreateOrConnectWithoutGrowth_rate_proseInput, {nullable:true})
    @Type(() => growth_ratesCreateOrConnectWithoutGrowth_rate_proseInput)
    connectOrCreate?: growth_ratesCreateOrConnectWithoutGrowth_rate_proseInput;

    @Field(() => growth_ratesUpsertWithoutGrowth_rate_proseInput, {nullable:true})
    @Type(() => growth_ratesUpsertWithoutGrowth_rate_proseInput)
    upsert?: growth_ratesUpsertWithoutGrowth_rate_proseInput;

    @Field(() => growth_ratesWhereUniqueInput, {nullable:true})
    @Type(() => growth_ratesWhereUniqueInput)
    connect?: growth_ratesWhereUniqueInput;

    @Field(() => growth_ratesUpdateWithoutGrowth_rate_proseInput, {nullable:true})
    @Type(() => growth_ratesUpdateWithoutGrowth_rate_proseInput)
    update?: growth_ratesUpdateWithoutGrowth_rate_proseInput;
}
