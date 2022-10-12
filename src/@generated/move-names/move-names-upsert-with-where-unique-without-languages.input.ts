import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { move_namesWhereUniqueInput } from './move-names-where-unique.input';
import { Type } from 'class-transformer';
import { move_namesUpdateWithoutLanguagesInput } from './move-names-update-without-languages.input';
import { move_namesCreateWithoutLanguagesInput } from './move-names-create-without-languages.input';

@InputType()
export class move_namesUpsertWithWhereUniqueWithoutLanguagesInput {

    @Field(() => move_namesWhereUniqueInput, {nullable:false})
    @Type(() => move_namesWhereUniqueInput)
    where!: move_namesWhereUniqueInput;

    @Field(() => move_namesUpdateWithoutLanguagesInput, {nullable:false})
    @Type(() => move_namesUpdateWithoutLanguagesInput)
    update!: move_namesUpdateWithoutLanguagesInput;

    @Field(() => move_namesCreateWithoutLanguagesInput, {nullable:false})
    @Type(() => move_namesCreateWithoutLanguagesInput)
    create!: move_namesCreateWithoutLanguagesInput;
}
