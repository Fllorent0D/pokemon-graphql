import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { stat_namesWhereUniqueInput } from './stat-names-where-unique.input';
import { Type } from 'class-transformer';
import { stat_namesUpdateWithoutLanguagesInput } from './stat-names-update-without-languages.input';
import { stat_namesCreateWithoutLanguagesInput } from './stat-names-create-without-languages.input';

@InputType()
export class stat_namesUpsertWithWhereUniqueWithoutLanguagesInput {

    @Field(() => stat_namesWhereUniqueInput, {nullable:false})
    @Type(() => stat_namesWhereUniqueInput)
    where!: stat_namesWhereUniqueInput;

    @Field(() => stat_namesUpdateWithoutLanguagesInput, {nullable:false})
    @Type(() => stat_namesUpdateWithoutLanguagesInput)
    update!: stat_namesUpdateWithoutLanguagesInput;

    @Field(() => stat_namesCreateWithoutLanguagesInput, {nullable:false})
    @Type(() => stat_namesCreateWithoutLanguagesInput)
    create!: stat_namesCreateWithoutLanguagesInput;
}
