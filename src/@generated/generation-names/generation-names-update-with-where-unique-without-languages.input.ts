import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { generation_namesWhereUniqueInput } from './generation-names-where-unique.input';
import { Type } from 'class-transformer';
import { generation_namesUpdateWithoutLanguagesInput } from './generation-names-update-without-languages.input';

@InputType()
export class generation_namesUpdateWithWhereUniqueWithoutLanguagesInput {

    @Field(() => generation_namesWhereUniqueInput, {nullable:false})
    @Type(() => generation_namesWhereUniqueInput)
    where!: generation_namesWhereUniqueInput;

    @Field(() => generation_namesUpdateWithoutLanguagesInput, {nullable:false})
    @Type(() => generation_namesUpdateWithoutLanguagesInput)
    data!: generation_namesUpdateWithoutLanguagesInput;
}
