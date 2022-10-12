import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { contest_type_namesWhereUniqueInput } from './contest-type-names-where-unique.input';
import { Type } from 'class-transformer';
import { contest_type_namesCreateWithoutLanguagesInput } from './contest-type-names-create-without-languages.input';

@InputType()
export class contest_type_namesCreateOrConnectWithoutLanguagesInput {

    @Field(() => contest_type_namesWhereUniqueInput, {nullable:false})
    @Type(() => contest_type_namesWhereUniqueInput)
    where!: contest_type_namesWhereUniqueInput;

    @Field(() => contest_type_namesCreateWithoutLanguagesInput, {nullable:false})
    @Type(() => contest_type_namesCreateWithoutLanguagesInput)
    create!: contest_type_namesCreateWithoutLanguagesInput;
}
