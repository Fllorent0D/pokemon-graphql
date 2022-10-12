import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { version_namesWhereUniqueInput } from './version-names-where-unique.input';
import { Type } from 'class-transformer';
import { version_namesUpdateWithoutLanguagesInput } from './version-names-update-without-languages.input';
import { version_namesCreateWithoutLanguagesInput } from './version-names-create-without-languages.input';

@InputType()
export class version_namesUpsertWithWhereUniqueWithoutLanguagesInput {

    @Field(() => version_namesWhereUniqueInput, {nullable:false})
    @Type(() => version_namesWhereUniqueInput)
    where!: version_namesWhereUniqueInput;

    @Field(() => version_namesUpdateWithoutLanguagesInput, {nullable:false})
    @Type(() => version_namesUpdateWithoutLanguagesInput)
    update!: version_namesUpdateWithoutLanguagesInput;

    @Field(() => version_namesCreateWithoutLanguagesInput, {nullable:false})
    @Type(() => version_namesCreateWithoutLanguagesInput)
    create!: version_namesCreateWithoutLanguagesInput;
}
