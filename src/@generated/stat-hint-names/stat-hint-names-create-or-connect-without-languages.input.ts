import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { stat_hint_namesWhereUniqueInput } from './stat-hint-names-where-unique.input';
import { Type } from 'class-transformer';
import { stat_hint_namesCreateWithoutLanguagesInput } from './stat-hint-names-create-without-languages.input';

@InputType()
export class stat_hint_namesCreateOrConnectWithoutLanguagesInput {

    @Field(() => stat_hint_namesWhereUniqueInput, {nullable:false})
    @Type(() => stat_hint_namesWhereUniqueInput)
    where!: stat_hint_namesWhereUniqueInput;

    @Field(() => stat_hint_namesCreateWithoutLanguagesInput, {nullable:false})
    @Type(() => stat_hint_namesCreateWithoutLanguagesInput)
    create!: stat_hint_namesCreateWithoutLanguagesInput;
}
