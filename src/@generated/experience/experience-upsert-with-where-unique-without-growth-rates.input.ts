import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { experienceWhereUniqueInput } from './experience-where-unique.input';
import { Type } from 'class-transformer';
import { experienceUpdateWithoutGrowth_ratesInput } from './experience-update-without-growth-rates.input';
import { experienceCreateWithoutGrowth_ratesInput } from './experience-create-without-growth-rates.input';

@InputType()
export class experienceUpsertWithWhereUniqueWithoutGrowth_ratesInput {

    @Field(() => experienceWhereUniqueInput, {nullable:false})
    @Type(() => experienceWhereUniqueInput)
    where!: experienceWhereUniqueInput;

    @Field(() => experienceUpdateWithoutGrowth_ratesInput, {nullable:false})
    @Type(() => experienceUpdateWithoutGrowth_ratesInput)
    update!: experienceUpdateWithoutGrowth_ratesInput;

    @Field(() => experienceCreateWithoutGrowth_ratesInput, {nullable:false})
    @Type(() => experienceCreateWithoutGrowth_ratesInput)
    create!: experienceCreateWithoutGrowth_ratesInput;
}
