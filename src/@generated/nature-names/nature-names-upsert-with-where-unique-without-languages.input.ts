import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { nature_namesWhereUniqueInput } from './nature-names-where-unique.input';
import { Type } from 'class-transformer';
import { nature_namesUpdateWithoutLanguagesInput } from './nature-names-update-without-languages.input';
import { nature_namesCreateWithoutLanguagesInput } from './nature-names-create-without-languages.input';

@InputType()
export class nature_namesUpsertWithWhereUniqueWithoutLanguagesInput {

    @Field(() => nature_namesWhereUniqueInput, {nullable:false})
    @Type(() => nature_namesWhereUniqueInput)
    where!: nature_namesWhereUniqueInput;

    @Field(() => nature_namesUpdateWithoutLanguagesInput, {nullable:false})
    @Type(() => nature_namesUpdateWithoutLanguagesInput)
    update!: nature_namesUpdateWithoutLanguagesInput;

    @Field(() => nature_namesCreateWithoutLanguagesInput, {nullable:false})
    @Type(() => nature_namesCreateWithoutLanguagesInput)
    create!: nature_namesCreateWithoutLanguagesInput;
}
