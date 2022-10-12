import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { Int } from '@nestjs/graphql';
import { growth_ratesCreateNestedOneWithoutExperienceInput } from '../growth-rates/growth-rates-create-nested-one-without-experience.input';

@InputType()
export class experienceCreateInput {

    @Field(() => Int, {nullable:false})
    level!: number;

    @Field(() => Int, {nullable:false})
    experience!: number;

    @Field(() => growth_ratesCreateNestedOneWithoutExperienceInput, {nullable:false})
    growth_rates!: growth_ratesCreateNestedOneWithoutExperienceInput;
}
