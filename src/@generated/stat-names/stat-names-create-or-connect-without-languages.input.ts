import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { stat_namesWhereUniqueInput } from './stat-names-where-unique.input';
import { Type } from 'class-transformer';
import { stat_namesCreateWithoutLanguagesInput } from './stat-names-create-without-languages.input';

@InputType()
export class stat_namesCreateOrConnectWithoutLanguagesInput {

    @Field(() => stat_namesWhereUniqueInput, {nullable:false})
    @Type(() => stat_namesWhereUniqueInput)
    where!: stat_namesWhereUniqueInput;

    @Field(() => stat_namesCreateWithoutLanguagesInput, {nullable:false})
    @Type(() => stat_namesCreateWithoutLanguagesInput)
    create!: stat_namesCreateWithoutLanguagesInput;
}
