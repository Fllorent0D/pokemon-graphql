import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { berry_firmness_namesWhereUniqueInput } from './berry-firmness-names-where-unique.input';
import { Type } from 'class-transformer';
import { berry_firmness_namesUpdateWithoutLanguagesInput } from './berry-firmness-names-update-without-languages.input';

@InputType()
export class berry_firmness_namesUpdateWithWhereUniqueWithoutLanguagesInput {

    @Field(() => berry_firmness_namesWhereUniqueInput, {nullable:false})
    @Type(() => berry_firmness_namesWhereUniqueInput)
    where!: berry_firmness_namesWhereUniqueInput;

    @Field(() => berry_firmness_namesUpdateWithoutLanguagesInput, {nullable:false})
    @Type(() => berry_firmness_namesUpdateWithoutLanguagesInput)
    data!: berry_firmness_namesUpdateWithoutLanguagesInput;
}
