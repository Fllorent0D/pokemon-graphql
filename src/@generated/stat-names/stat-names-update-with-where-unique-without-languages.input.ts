import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { stat_namesWhereUniqueInput } from './stat-names-where-unique.input';
import { Type } from 'class-transformer';
import { stat_namesUpdateWithoutLanguagesInput } from './stat-names-update-without-languages.input';

@InputType()
export class stat_namesUpdateWithWhereUniqueWithoutLanguagesInput {

    @Field(() => stat_namesWhereUniqueInput, {nullable:false})
    @Type(() => stat_namesWhereUniqueInput)
    where!: stat_namesWhereUniqueInput;

    @Field(() => stat_namesUpdateWithoutLanguagesInput, {nullable:false})
    @Type(() => stat_namesUpdateWithoutLanguagesInput)
    data!: stat_namesUpdateWithoutLanguagesInput;
}
