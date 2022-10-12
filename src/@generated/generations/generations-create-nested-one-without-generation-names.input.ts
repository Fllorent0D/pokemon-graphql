import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { generationsCreateWithoutGeneration_namesInput } from './generations-create-without-generation-names.input';
import { Type } from 'class-transformer';
import { generationsCreateOrConnectWithoutGeneration_namesInput } from './generations-create-or-connect-without-generation-names.input';
import { generationsWhereUniqueInput } from './generations-where-unique.input';

@InputType()
export class generationsCreateNestedOneWithoutGeneration_namesInput {

    @Field(() => generationsCreateWithoutGeneration_namesInput, {nullable:true})
    @Type(() => generationsCreateWithoutGeneration_namesInput)
    create?: generationsCreateWithoutGeneration_namesInput;

    @Field(() => generationsCreateOrConnectWithoutGeneration_namesInput, {nullable:true})
    @Type(() => generationsCreateOrConnectWithoutGeneration_namesInput)
    connectOrCreate?: generationsCreateOrConnectWithoutGeneration_namesInput;

    @Field(() => generationsWhereUniqueInput, {nullable:true})
    @Type(() => generationsWhereUniqueInput)
    connect?: generationsWhereUniqueInput;
}
