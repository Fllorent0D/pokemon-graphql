import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { move_namesWhereUniqueInput } from './move-names-where-unique.input';
import { Type } from 'class-transformer';
import { move_namesCreateWithoutLanguagesInput } from './move-names-create-without-languages.input';

@InputType()
export class move_namesCreateOrConnectWithoutLanguagesInput {

    @Field(() => move_namesWhereUniqueInput, {nullable:false})
    @Type(() => move_namesWhereUniqueInput)
    where!: move_namesWhereUniqueInput;

    @Field(() => move_namesCreateWithoutLanguagesInput, {nullable:false})
    @Type(() => move_namesCreateWithoutLanguagesInput)
    create!: move_namesCreateWithoutLanguagesInput;
}
