import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { version_namesWhereUniqueInput } from './version-names-where-unique.input';
import { Type } from 'class-transformer';
import { version_namesUpdateWithoutLanguagesInput } from './version-names-update-without-languages.input';

@InputType()
export class version_namesUpdateWithWhereUniqueWithoutLanguagesInput {

    @Field(() => version_namesWhereUniqueInput, {nullable:false})
    @Type(() => version_namesWhereUniqueInput)
    where!: version_namesWhereUniqueInput;

    @Field(() => version_namesUpdateWithoutLanguagesInput, {nullable:false})
    @Type(() => version_namesUpdateWithoutLanguagesInput)
    data!: version_namesUpdateWithoutLanguagesInput;
}
