import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { growth_ratesWhereUniqueInput } from './growth-rates-where-unique.input';
import { Type } from 'class-transformer';
import { growth_ratesCreateWithoutExperienceInput } from './growth-rates-create-without-experience.input';

@InputType()
export class growth_ratesCreateOrConnectWithoutExperienceInput {

    @Field(() => growth_ratesWhereUniqueInput, {nullable:false})
    @Type(() => growth_ratesWhereUniqueInput)
    where!: growth_ratesWhereUniqueInput;

    @Field(() => growth_ratesCreateWithoutExperienceInput, {nullable:false})
    @Type(() => growth_ratesCreateWithoutExperienceInput)
    create!: growth_ratesCreateWithoutExperienceInput;
}
