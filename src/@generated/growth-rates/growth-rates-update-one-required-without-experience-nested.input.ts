import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { growth_ratesCreateWithoutExperienceInput } from './growth-rates-create-without-experience.input';
import { Type } from 'class-transformer';
import { growth_ratesCreateOrConnectWithoutExperienceInput } from './growth-rates-create-or-connect-without-experience.input';
import { growth_ratesUpsertWithoutExperienceInput } from './growth-rates-upsert-without-experience.input';
import { growth_ratesWhereUniqueInput } from './growth-rates-where-unique.input';
import { growth_ratesUpdateWithoutExperienceInput } from './growth-rates-update-without-experience.input';

@InputType()
export class growth_ratesUpdateOneRequiredWithoutExperienceNestedInput {

    @Field(() => growth_ratesCreateWithoutExperienceInput, {nullable:true})
    @Type(() => growth_ratesCreateWithoutExperienceInput)
    create?: growth_ratesCreateWithoutExperienceInput;

    @Field(() => growth_ratesCreateOrConnectWithoutExperienceInput, {nullable:true})
    @Type(() => growth_ratesCreateOrConnectWithoutExperienceInput)
    connectOrCreate?: growth_ratesCreateOrConnectWithoutExperienceInput;

    @Field(() => growth_ratesUpsertWithoutExperienceInput, {nullable:true})
    @Type(() => growth_ratesUpsertWithoutExperienceInput)
    upsert?: growth_ratesUpsertWithoutExperienceInput;

    @Field(() => growth_ratesWhereUniqueInput, {nullable:true})
    @Type(() => growth_ratesWhereUniqueInput)
    connect?: growth_ratesWhereUniqueInput;

    @Field(() => growth_ratesUpdateWithoutExperienceInput, {nullable:true})
    @Type(() => growth_ratesUpdateWithoutExperienceInput)
    update?: growth_ratesUpdateWithoutExperienceInput;
}
