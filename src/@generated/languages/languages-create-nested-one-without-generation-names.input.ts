import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { languagesCreateWithoutGeneration_namesInput } from './languages-create-without-generation-names.input';
import { Type } from 'class-transformer';
import { languagesCreateOrConnectWithoutGeneration_namesInput } from './languages-create-or-connect-without-generation-names.input';
import { languagesWhereUniqueInput } from './languages-where-unique.input';

@InputType()
export class languagesCreateNestedOneWithoutGeneration_namesInput {

    @Field(() => languagesCreateWithoutGeneration_namesInput, {nullable:true})
    @Type(() => languagesCreateWithoutGeneration_namesInput)
    create?: languagesCreateWithoutGeneration_namesInput;

    @Field(() => languagesCreateOrConnectWithoutGeneration_namesInput, {nullable:true})
    @Type(() => languagesCreateOrConnectWithoutGeneration_namesInput)
    connectOrCreate?: languagesCreateOrConnectWithoutGeneration_namesInput;

    @Field(() => languagesWhereUniqueInput, {nullable:true})
    @Type(() => languagesWhereUniqueInput)
    connect?: languagesWhereUniqueInput;
}
