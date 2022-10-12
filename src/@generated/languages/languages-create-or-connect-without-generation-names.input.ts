import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { languagesWhereUniqueInput } from './languages-where-unique.input';
import { Type } from 'class-transformer';
import { languagesCreateWithoutGeneration_namesInput } from './languages-create-without-generation-names.input';

@InputType()
export class languagesCreateOrConnectWithoutGeneration_namesInput {

    @Field(() => languagesWhereUniqueInput, {nullable:false})
    @Type(() => languagesWhereUniqueInput)
    where!: languagesWhereUniqueInput;

    @Field(() => languagesCreateWithoutGeneration_namesInput, {nullable:false})
    @Type(() => languagesCreateWithoutGeneration_namesInput)
    create!: languagesCreateWithoutGeneration_namesInput;
}
