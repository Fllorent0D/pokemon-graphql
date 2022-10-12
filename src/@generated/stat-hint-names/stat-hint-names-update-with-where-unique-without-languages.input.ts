import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { stat_hint_namesWhereUniqueInput } from './stat-hint-names-where-unique.input';
import { Type } from 'class-transformer';
import { stat_hint_namesUpdateWithoutLanguagesInput } from './stat-hint-names-update-without-languages.input';

@InputType()
export class stat_hint_namesUpdateWithWhereUniqueWithoutLanguagesInput {

    @Field(() => stat_hint_namesWhereUniqueInput, {nullable:false})
    @Type(() => stat_hint_namesWhereUniqueInput)
    where!: stat_hint_namesWhereUniqueInput;

    @Field(() => stat_hint_namesUpdateWithoutLanguagesInput, {nullable:false})
    @Type(() => stat_hint_namesUpdateWithoutLanguagesInput)
    data!: stat_hint_namesUpdateWithoutLanguagesInput;
}
