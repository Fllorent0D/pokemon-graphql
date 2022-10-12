import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { generation_namesWhereUniqueInput } from './generation-names-where-unique.input';
import { Type } from 'class-transformer';
import { generation_namesUpdateWithoutLanguagesInput } from './generation-names-update-without-languages.input';
import { generation_namesCreateWithoutLanguagesInput } from './generation-names-create-without-languages.input';

@InputType()
export class generation_namesUpsertWithWhereUniqueWithoutLanguagesInput {

    @Field(() => generation_namesWhereUniqueInput, {nullable:false})
    @Type(() => generation_namesWhereUniqueInput)
    where!: generation_namesWhereUniqueInput;

    @Field(() => generation_namesUpdateWithoutLanguagesInput, {nullable:false})
    @Type(() => generation_namesUpdateWithoutLanguagesInput)
    update!: generation_namesUpdateWithoutLanguagesInput;

    @Field(() => generation_namesCreateWithoutLanguagesInput, {nullable:false})
    @Type(() => generation_namesCreateWithoutLanguagesInput)
    create!: generation_namesCreateWithoutLanguagesInput;
}
