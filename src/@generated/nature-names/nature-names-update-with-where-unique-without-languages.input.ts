import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { nature_namesWhereUniqueInput } from './nature-names-where-unique.input';
import { Type } from 'class-transformer';
import { nature_namesUpdateWithoutLanguagesInput } from './nature-names-update-without-languages.input';

@InputType()
export class nature_namesUpdateWithWhereUniqueWithoutLanguagesInput {

    @Field(() => nature_namesWhereUniqueInput, {nullable:false})
    @Type(() => nature_namesWhereUniqueInput)
    where!: nature_namesWhereUniqueInput;

    @Field(() => nature_namesUpdateWithoutLanguagesInput, {nullable:false})
    @Type(() => nature_namesUpdateWithoutLanguagesInput)
    data!: nature_namesUpdateWithoutLanguagesInput;
}
