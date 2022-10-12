import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { growth_ratesUpdateWithoutExperienceInput } from './growth-rates-update-without-experience.input';
import { Type } from 'class-transformer';
import { growth_ratesCreateWithoutExperienceInput } from './growth-rates-create-without-experience.input';

@InputType()
export class growth_ratesUpsertWithoutExperienceInput {

    @Field(() => growth_ratesUpdateWithoutExperienceInput, {nullable:false})
    @Type(() => growth_ratesUpdateWithoutExperienceInput)
    update!: growth_ratesUpdateWithoutExperienceInput;

    @Field(() => growth_ratesCreateWithoutExperienceInput, {nullable:false})
    @Type(() => growth_ratesCreateWithoutExperienceInput)
    create!: growth_ratesCreateWithoutExperienceInput;
}
