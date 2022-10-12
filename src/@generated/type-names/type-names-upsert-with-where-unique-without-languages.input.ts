import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { type_namesWhereUniqueInput } from './type-names-where-unique.input';
import { Type } from 'class-transformer';
import { type_namesUpdateWithoutLanguagesInput } from './type-names-update-without-languages.input';
import { type_namesCreateWithoutLanguagesInput } from './type-names-create-without-languages.input';

@InputType()
export class type_namesUpsertWithWhereUniqueWithoutLanguagesInput {

    @Field(() => type_namesWhereUniqueInput, {nullable:false})
    @Type(() => type_namesWhereUniqueInput)
    where!: type_namesWhereUniqueInput;

    @Field(() => type_namesUpdateWithoutLanguagesInput, {nullable:false})
    @Type(() => type_namesUpdateWithoutLanguagesInput)
    update!: type_namesUpdateWithoutLanguagesInput;

    @Field(() => type_namesCreateWithoutLanguagesInput, {nullable:false})
    @Type(() => type_namesCreateWithoutLanguagesInput)
    create!: type_namesCreateWithoutLanguagesInput;
}
