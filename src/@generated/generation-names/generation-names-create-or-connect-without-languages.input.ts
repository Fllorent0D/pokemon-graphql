import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { generation_namesWhereUniqueInput } from './generation-names-where-unique.input';
import { Type } from 'class-transformer';
import { generation_namesCreateWithoutLanguagesInput } from './generation-names-create-without-languages.input';

@InputType()
export class generation_namesCreateOrConnectWithoutLanguagesInput {

    @Field(() => generation_namesWhereUniqueInput, {nullable:false})
    @Type(() => generation_namesWhereUniqueInput)
    where!: generation_namesWhereUniqueInput;

    @Field(() => generation_namesCreateWithoutLanguagesInput, {nullable:false})
    @Type(() => generation_namesCreateWithoutLanguagesInput)
    create!: generation_namesCreateWithoutLanguagesInput;
}
