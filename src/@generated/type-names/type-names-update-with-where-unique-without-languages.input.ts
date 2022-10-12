import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { type_namesWhereUniqueInput } from './type-names-where-unique.input';
import { Type } from 'class-transformer';
import { type_namesUpdateWithoutLanguagesInput } from './type-names-update-without-languages.input';

@InputType()
export class type_namesUpdateWithWhereUniqueWithoutLanguagesInput {

    @Field(() => type_namesWhereUniqueInput, {nullable:false})
    @Type(() => type_namesWhereUniqueInput)
    where!: type_namesWhereUniqueInput;

    @Field(() => type_namesUpdateWithoutLanguagesInput, {nullable:false})
    @Type(() => type_namesUpdateWithoutLanguagesInput)
    data!: type_namesUpdateWithoutLanguagesInput;
}
