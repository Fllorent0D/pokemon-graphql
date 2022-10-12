import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { experienceWhereUniqueInput } from './experience-where-unique.input';
import { Type } from 'class-transformer';
import { experienceCreateWithoutGrowth_ratesInput } from './experience-create-without-growth-rates.input';

@InputType()
export class experienceCreateOrConnectWithoutGrowth_ratesInput {

    @Field(() => experienceWhereUniqueInput, {nullable:false})
    @Type(() => experienceWhereUniqueInput)
    where!: experienceWhereUniqueInput;

    @Field(() => experienceCreateWithoutGrowth_ratesInput, {nullable:false})
    @Type(() => experienceCreateWithoutGrowth_ratesInput)
    create!: experienceCreateWithoutGrowth_ratesInput;
}
